'use strict';
const S=Studio,C=CATALOG,$=id=>document.getElementById(id),L=S.labels;
const PUBLIC=S.isPublic(C),AI=!PUBLIC&&typeof runAI==='function';
const esc=v=>String(v??'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
let state=S.initial();
try{const saved=JSON.parse(localStorage.getItem('video-studio-v1'));if(saved&&Array.isArray(saved.comments)&&saved.comments.length===5){state={...state,...saved};state.step=Math.max(0,Math.min(4,Number(state.step)||0));}}catch{}
const flows={
 video:{names:['材料','伝え方','見た目','尺・音声','制作手段'],titles:['何をもとに作りますか。','見る人に、何を持ち帰ってほしいですか。','どんな見せ方にしましょう。','再生する場面に合わせます。','この組み合わせで、制作を頼めます。'],leads:['記事のURL、アイデア、手持ちの素材、BGMだけの相談から始められます。','目的を選ぶと、次に出す見た目の候補も変わります。','動きや素材の違いから選びます。画風はあとで細かく指定できます。','尺・画面・音声を決めます。BGMを入れる場合は、作り方もここで決めます。','根拠となるURLとスキルの場所を確認し、実行依頼文にまとめます。']},
 bgm:{names:['材料','用途','雰囲気','長さ・作り方','確認'],titles:['何をもとに作りますか。','BGMを、どこで流しますか。','どんな雰囲気にしますか。','長さと作り方を決めます。','この組み合わせで、BGMを頼めます。'],leads:['記事のURL、アイデア、手持ちの素材、BGMだけの相談から始められます。','用途を選ぶと、長さと終わり方の初期値が変わります。','雰囲気と、歌の有無を選びます。テンポや楽器の希望は自由記入へどうぞ。','使うPCと使い道によって、選ぶ道具が変わります。','道具ごとの機材とライセンスを確かめてから、依頼文にまとめます。']}};
const flow=()=>flows[S.isBgm(state)?'bgm':'video'];
const descriptions={summary:'記事の主張を短く整理。結論→重要点→具体例。',tutorial:'操作や工程を順番に。完成例→手順→結果。',comparison:'Before / Afterや選択肢の違いを見せる。',promo:'商品や企画の魅力を、短い映像で印象づける。',diagram:'図・関係線・数字が動く。記事解説、仕組みの説明に。',screen:'実際の画面を使う。操作実演や改善前後の比較に。',kinetic:'言葉の出現・強調・切り替え。短い要点を強く伝える。',cinema:'実写素材やAI生成カット。世界観・商品イメージに。',poster:'整えた1枚のビジュアルに、少ない動きを付ける。',art:'粒子や幾何学模様。抽象概念や印象的な背景に。',bgm:'動画はできている人向け。用途と雰囲気から、BGMの作り方を決める。',announce:'新商品の告知など。30秒前後で、最後はフェードアウト。',signage:'店頭や展示会でくり返し流す。継ぎ目が自然につながるループ版。',talk:'解説やインタビューの下に敷く。声の間だけBGMを下げる。',stream:'配信・作業用。3分前後の長めの曲をループで。',...S.moodHints};
function save(){try{localStorage.setItem('video-studio-v1',JSON.stringify(state));$('saved').textContent='このブラウザに保存済み';}catch{$('saved').textContent='保存できません。閉じる前に書き出してください。';}}
function choiceCards(key,ids,labels){const aiChoices=state.ai?.[key==='purpose'?'purpose_options':'visual_options']||[];return '<div class="cards">'+ids.map((id,i)=>`<button class="card ${state[key]===id?'selected':''}" data-key="${key}" data-value="${id}" aria-pressed="${state[key]===id}"><span class="number">${String(i+1).padStart(2,'0')}</span><strong>${esc(aiChoices.find(x=>x.id===id)?.label||labels[id])}</strong><small>${esc(aiChoices.find(x=>x.id===id)?.reason||descriptions[id]||'')}</small></button>`).join('')+'</div>';}
function options(key,list){return `<select id="${key}">${list.map(([id,label])=>`<option value="${esc(id)}" ${String(state[key])===String(id)?'selected':''}>${esc(label)}</option>`).join('')}</select>`;}
const field=(key,label)=>`<div><label for="${key}">${label}</label>${options(key,Object.entries(L[key]))}</div>`;
function bgmFields(withVocal){return `<div class="bgm-box"><h2>BGMの作り方</h2><div class="row">${withVocal?field('bgmVocal','歌'):''}${field('bgmEnding','終わり方')}${field('bgmSource','入手方法')}${state.bgmSource==='local'?field('bgmMachine','使うPC'):''}${field('bgmUse','使い道')}</div><p class="hint">会社の宣伝を選ぶと、非商用のモデルは候補から外れます。どの道具も、作った曲の利用条件は別に確かめます。</p></div>`;}
function summarize(){
 const e=S.interpret(state),bgm=S.isBgm(state);
 const rows=bgm?[['入口','BGMだけ作る'],['用途',L.bgmScene[state.bgmScene]],['雰囲気',L.bgmMood[state.bgmMood]],['歌',L.bgmVocal[e.bgmVocal]],['長さ・終わり方',`${e.duration}秒 / ${L.bgmEnding[e.bgmEnding]}`],['作り方',L.bgmSource[state.bgmSource]],['使い道',L.bgmUse[state.bgmUse]]]
  :[['入口',{article:'記事',idea:'アイデア',assets:'手持ち素材'}[state.source]],['伝え方',L.purpose[state.purpose]],['見た目',L.visual[state.visual]],['納品仕様',`${e.duration}秒 / ${e.ratio} / ${L.audio[e.audio]}`],...(['music','voice_music'].includes(e.audio)?[['BGM',`${L.bgmSource[state.bgmSource]} / ${L.bgmVocal[e.bgmVocal]} / ${L.bgmEnding[e.bgmEnding]}`]]:[]),['制作費の方針',L.budget[e.budget]],['記事本文',state.source!=='article'?'記事以外の材料':state.body?'本文入力あり・完全性は制作時確認':'未取得・提案は仮']];
 const keys=bgm?['duration','bgmVocal','bgmEnding']:['duration','ratio','audio','budget','bgmVocal','bgmEnding'];
 $('summary').innerHTML=`<dl>${rows.map(([a,b])=>`<div><dt>${a}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>${keys.some(k=>String(e[k])!==String(state[k]))?'<p class="note">自由記入の指定を優先しています。上の制作メモが依頼文に使われます。</p>':''}${e.warnings.map(x=>`<p class="note warning">${esc(x)}</p>`).join('')}`;
}
function stackCard(t){return `<div class="stack-item"><strong>${esc(t.name||t.id)}</strong><span class="pill">${esc(t.role||({code_video:'コードで動画制作',agent_skill:'制作支援スキル',media_processing:'動画・音声の加工'}[t.kind])||'制作ツール')}</span><p>${esc(t.capability)}</p><a href="${esc(t.source_url)}" target="_blank" rel="noopener noreferrer">配布元・公式資料 ↗</a>${t.local_path?`<p class="path">${esc(t.local_path)}</p>`:''}${t.migration?`<p class="hint">${esc(t.migration)}</p>`:''}<p class="hint">${PUBLIC?'公式資料を調査 / 導入と実行の環境は制作時に確認':t.installed?'導入済み / 全機能の実行は未検証':t.runtime_status==='not_tested_this_session'?'公式資料を調査 / 実行環境は制作時に確認':'導入・実行状態は個別確認'}</p></div>`;}
function bgmCard(t){const B=C.bgm||{};return `<div class="stack-item"><strong>${esc(t.name)}</strong><span class="pill">${esc(t.stage.map(x=>B.stages?.[x]||x).join('・'))}</span> <span class="pill ${t.business==='no'?'pill-warn':''}">${esc(B.business?.[t.business]||'')}</span><p>${esc(t.capability)}</p><p class="hint">必要な環境：${esc(t.requirements)}</p><p class="hint">注意：${esc(t.limitations)}</p><p class="hint">ライセンス：コード ${esc(t.code_license)}／モデル ${esc(t.model_license)}。${esc(t.business_note)}</p><a href="${esc(t.source_url)}" target="_blank" rel="noopener noreferrer">配布元・公式資料 ↗</a>${t.model_url?` <a href="${esc(t.model_url)}" target="_blank" rel="noopener noreferrer">モデル・条件 ↗</a>`:''}<p class="hint">確認：${esc(t.evidence)}</p></div>`;}
function renderAIPanel(){if(AI&&!S.isBgm(state)){$('ai-panel').hidden=false;renderAI();}else{$('ai-panel').hidden=true;$('ai-panel').innerHTML='';}}
function render(){
 const n=state.step,f=flow();document.body.classList.toggle('done',!!state.generated);$('counter').textContent=`工程 ${n+1} / 5`;$('title').textContent=f.titles[n];$('lead').textContent=f.leads[n];$('error').textContent='';
 $('steps').innerHTML=f.names.map((name,i)=>`<button data-step="${i}" class="${n===i?'active':''}" ${i>n?'disabled':''} ${n===i?'aria-current="step"':''}><b>${i+1}</b>${name}</button>`).join('');
 $('comment-box').hidden=state.generated;$('comment').value=state.comments[n];$('comment').placeholder=S.isBgm(state)?'例：テンポは110くらい、ピアノ中心。最後は静かに終わる。':'例：60秒、縦長、ナレーションなし。堅苦しくなく、落ち着いた青で。';$('back').disabled=n===0;$('next').textContent=n===4?'依頼文を作成 →':'次へ →';$('next').hidden=state.generated;
 if(n===0){$('content').innerHTML=choiceCards('source',['article','idea','assets','bgm'],{article:'記事のURL・本文',idea:'作りたい動画のアイデア',assets:'写真・動画・画面素材',bgm:'BGMだけ作る'})+
 (state.source==='article'?`<label for="url">記事URL</label><input id="url" type="url" placeholder="https://x.com/…/status/…" value="${esc(state.url)}">${AI?'<div class="actions"><button id="fetch-article">記事を取得してAIで読む</button></div>':''}<label for="body">記事本文 <span>貼り付けると制作エージェントへ渡せます</span></label><textarea id="body" rows="6" placeholder="本文をここへ貼り付け">${esc(state.body)}</textarea><div class="checks"><input type="checkbox" id="defer" ${state.defer?'checked':''}><label for="defer">本文がない場合は、取得を制作エージェントに任せる</label></div><p class="note">${AI?'公開X記事を取得し、Codexで内容を分析できます。取得できない場合は本文を貼り付けてください。':'本文を貼ると、依頼文にそのまま入ります。貼らない場合は、依頼を受けたAIが記事を読みに行きます。'}</p>`:state.source==='idea'?`<label for="topic">作りたい動画</label><textarea id="topic" rows="5" placeholder="誰に、何を、どんな映像で伝えたいですか">${esc(state.topic)}</textarea>`:state.source==='bgm'?`<label for="topic">BGMを流す動画・場面</label><textarea id="topic" rows="5" placeholder="例：新商品の30秒告知動画。ナレーションあり。明るく、押しつけがましくない音にしたい">${esc(state.topic)}</textarea><p class="hint">動画がまだない場合も、流す場面と聞く人を書けば進められます。</p>`:`<label for="assets">素材のフォルダ・ファイル・内容</label><textarea id="assets" rows="5" placeholder="例：デスクトップの「素材」フォルダ。商品写真3枚、操作動画1本">${esc(state.assets)}</textarea><p class="hint">ここへの記入はファイルのアップロードではありません。制作エージェントが指定先を確認します。</p>`);}
 if(S.isBgm(state)){
  if(n===1)$('content').innerHTML=choiceCards('bgmScene',Object.keys(L.bgmScene),L.bgmScene);
  if(n===2)$('content').innerHTML=choiceCards('bgmMood',Object.keys(L.bgmMood),L.bgmMood)+`<label for="bgmVocal">歌</label>${options('bgmVocal',Object.entries(L.bgmVocal))}`;
  if(n===3)$('content').innerHTML=`<div class="row"><div><label for="duration">長さ（秒）</label><input id="duration" type="number" min="5" max="3600" value="${esc(state.duration)}"></div></div>${bgmFields(false)}`;
 }else{
  if(n===1)$('content').innerHTML=choiceCards('purpose',S.purposeOptions(state),L.purpose);
  if(n===2)$('content').innerHTML=choiceCards('visual',S.visualOptions(state),L.visual)+(['diagram','kinetic'].includes(state.visual)?`<label for="style">図解・文字の画風</label>${options('style',C.styles.map(x=>[x.id,x.label_ja]))}<p class="hint">${esc(PUBLIC?C.styles.find(x=>x.id===state.style)?.url:C.styles.find(x=>x.id===state.style)?.local_path||'')}</p>`:'');
  if(n===3)$('content').innerHTML=`<div class="row"><div><label for="duration">尺（秒）</label><input id="duration" type="number" min="5" max="3600" value="${esc(state.duration)}"></div><div><label for="ratio">画面の向き</label>${options('ratio',[['9:16','縦長 9:16'],['16:9','横長 16:9'],['1:1','正方形 1:1']])}</div></div><label for="audio">音声</label>${options('audio',Object.entries(L.audio))}<label for="budget">制作費の方針</label>${options('budget',Object.entries(L.budget))}${['music','voice_music'].includes(state.audio)?bgmFields(true):''}<p class="note">音声なしでも読める日本語字幕を基本にします。有料AIを選んでも、このアプリから課金や生成は実行しません。</p>`;
 }
 if(n===4)renderReview();
 bindFields();summarize();save();renderAIPanel();
}
function guide(){
 if(!PUBLIC)return '<p>下の全文をコピーして、CodexやClaude Codeなどへ渡してください。</p>';
 return '<ol class="how"><li>「全文をコピー」を押します。</li><li>PCの Claude Code や Codex に貼ると、制作まで進められます。</li><li>スマホの ChatGPT・Claude・Gemini に貼った場合は、手順の相談や台本づくりに使えます。</li></ol>';
}
function renderReview(){
 const r=S.recommend(state,C),bgm=r.bgm,onlyBgm=S.isBgm(state);let html=`<p class="note">${esc(r.reason)}</p>${r.warnings.map(x=>`<p class="note warning">${esc(x)}</p>`).join('')}`;
 if(!onlyBgm)html+=`<h2>制作の中心</h2>${r.tools.map(stackCard).join('')}<h2>必要なスキル</h2>${r.skills.map(stackCard).join('')}`;
 if(bgm)html+=`<h2>BGMの道具</h2>${bgm.warnings.map(x=>`<p class="note warning">${esc(x)}</p>`).join('')}${bgm.tools.map(bgmCard).join('')}`;
 if(!onlyBgm)html+=`<details><summary>追加するスキルを選ぶ（記事の20項目に対応）</summary><p class="hint">制作に必要なものだけ追加してください。画面用スキルを動画編集ソフトとしては扱いません。</p>${C.skills.map(t=>`<div class="checks"><input type="checkbox" id="extra-${esc(t.id)}" data-extra="${esc(t.id)}" ${state.extraSkills.includes(t.id)?'checked':''}><label for="extra-${esc(t.id)}">${esc(t.name||t.id)} — ${esc(t.capability)}</label></div>`).join('')}</details>`;
 if(state.generated)html=`<h2>AIエージェントへの依頼文</h2>${guide()}<div class="actions"><button id="copy" class="primary">全文をコピー</button><button id="download">Markdown保存</button><button id="json">条件をJSON保存</button><button id="edit">条件を編集する</button></div><p id="copy-status" role="status"></p><label for="prompt">実行依頼文</label><textarea id="prompt" class="prompt" readonly>${esc(S.prompt(state,C))}</textarea><details><summary>選んだツール・スキルと選定理由を確認</summary>${html}</details>`;
 $('content').innerHTML=html;
}
function bindFields(){
 if($('fetch-article'))$('fetch-article').onclick=()=>runAI(true);
 document.querySelectorAll('[data-key]').forEach(b=>b.onclick=()=>{const key=b.dataset.key,value=b.dataset.value;state[key]=value;if(key==='purpose')state.concept=state.ai?.purpose_options.find(x=>x.id===value)?.label||'';if(key==='visual')state.visualConcept=state.ai?.visual_options.find(x=>x.id===value)?.label||'';state.aiFinal=false;if(key==='source'){state.ai=null;if(value==='bgm')S.applyScene(state);}if(key==='bgmScene')S.applyScene(state);S.reconcile(state);render();});
 document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{state.step=Number(b.dataset.step);state.generated=false;render();});
 const rerender=['audio','bgmSource'];
 for(const id of ['url','body','topic','assets','duration','ratio','audio','budget','style','defer','bgmVocal','bgmEnding','bgmSource','bgmMachine','bgmUse'])if($(id))$(id).oninput=()=>{state[id]=id==='defer'?$(id).checked:$(id).value;state.generated=false;state.aiFinal=false;if(id==='url'||id==='body'||id==='topic'||id==='assets'){state.ai=null;state.article=null;}if(rerender.includes(id)){render();return;}summarize();save();renderAIPanel();};
 document.querySelectorAll('[data-extra]').forEach(b=>b.onchange=()=>{state.extraSkills=b.checked?[...new Set([...state.extraSkills,b.dataset.extra])]:state.extraSkills.filter(x=>x!==b.dataset.extra);state.generated=false;render();});
 if($('copy'))$('copy').onclick=async()=>{try{await navigator.clipboard.writeText(S.prompt(state,C));$('copy-status').textContent='コピーしました。使うAIに貼り付けてください。';}catch{$('prompt').focus();$('prompt').select();$('copy-status').textContent='自動コピーが許可されませんでした。選択された全文をコピーしてください（PCは Ctrl+C、スマホは長押し）。';}};
 const base=S.isBgm(state)?'BGM制作':'動画制作';
 if($('download'))$('download').onclick=()=>download(base+'_実行依頼.md',S.prompt(state,C),'text/markdown');
 if($('json'))$('json').onclick=()=>download(base+'_制作条件.json',JSON.stringify({version:2,state,recommendation:S.recommend(state,C)},null,2),'application/json');
 if($('edit'))$('edit').onclick=()=>{state.generated=false;render();};
}
function download(name,text,type){const url=URL.createObjectURL(new Blob([text],{type:type+';charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('comment').oninput=()=>{state.aiFinal=false;state.comments[state.step]=$('comment').value;state.generated=false;summarize();save();renderAIPanel();if(state.step===4){renderReview();bindFields();}};
$('next').onclick=async()=>{const problem=S.validate(state,state.step);if(problem){$('error').textContent=problem;return;}if(state.step===4){if(AI&&!S.isBgm(state)&&!state.aiFinal){if(!await runAI(false))return;}state.generated=true;}else state.step++;render();window.scrollTo({top:0,behavior:'smooth'});};
$('back').onclick=()=>{state.step=Math.max(0,state.step-1);state.generated=false;render();};
function library(){const q=$('search').value.toLowerCase();const hit=x=>JSON.stringify([x.name,x.id,x.role,x.capability,x.migration,x.stage,x.requirements]).toLowerCase().includes(q);const bgm=(C.bgm?.tools||[]).filter(hit),rows=[...C.skills,...C.tools].filter(hit);$('catalog-list').innerHTML=(bgm.length?'<h2>BGM・音声</h2>'+bgm.map(bgmCard).join(''):'')+(rows.length?'<h2>動画・デザイン</h2>'+rows.map(stackCard).join(''):'')||'<p>一致する候補がありません。</p>';}
$('library').onclick=()=>{library();$('catalog').showModal();};$('close-catalog').onclick=()=>$('catalog').close();$('search').oninput=library;
render();
