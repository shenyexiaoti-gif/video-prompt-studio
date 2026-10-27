window.CATALOG = {
 "date": "2026-10-26",
 "profile": {
  "mode": "public"
 },
 "bgm": {
  "checked_on": "2026-10-28",
  "basis": "ChatGPT Workで集めたBGM関連のX投稿30件（2026-10-28にユーザーが貼り付け）と、X記事「BGM特化｜Claude Code/Codex/ Antigravity & GitHubで音を作る・選ぶ・仕上げる方法」の事実確認（2026-10-27）。投稿のいいね数・表示数は台帳に入れない。ライセンスはGitHub APIとHugging Faceの公開情報で2026-10-28に確認",
  "stages": {
   "make": "作る",
   "pick": "選ぶ",
   "finish": "仕上げる",
   "mix": "声と重ねる",
   "video": "動画にまとめる",
   "around": "音声まわり"
  },
  "where": {
   "phone": "スマホでも可",
   "app": "普段のAI（コード実行が使える環境）",
   "pc": "PC",
   "pc_gpu": "GPUを積んだPC",
   "pc_multi_gpu": "GPUを2枚使う構成"
  },
  "business": {
   "ok_check": "商用可と案内（生成物は別に確認）",
   "conditions": "条件付きで商用可",
   "no": "非商用のみ",
   "check": "規約・配布元で確認"
  },
  "tools": [
   {
    "id": "gemini-lyria",
    "name": "Geminiアプリの音楽作成（Lyria）",
    "stage": [
     "make"
    ],
    "where": "phone",
    "vocal": "both",
    "source_url": "https://support.google.com/gemini/answer/16901237?hl=ja",
    "model_url": "",
    "capability": "ツールの「音楽を作成」から、雰囲気や楽器を日本語で伝えて曲を作る。歌あり・歌なしを選べて、MP3で保存できる",
    "requirements": "18歳以上、アクティビティの保存がオン、対象アカウントなどの条件がある。生成回数にも上限がある",
    "limitations": "公式ヘルプでは、短い曲は約1分、フルトラックは約2〜3分でProへの切り替えが案内されている（2026-10-27時点）",
    "code_license": "サービス（コードの配布なし）",
    "model_license": "Googleの利用規約による",
    "business": "check",
    "business_note": "会社の宣伝に使う条件は、Googleの利用規約と使っているプランで確認する",
    "evidence": "記事の事実確認で公式ヘルプを確認（2026-10-27）",
    "post_match": "article"
   },
   {
    "id": "code-synthesis",
    "name": "ChatGPT・Claudeのコード実行で作曲する",
    "stage": [
     "make",
     "finish"
    ],
    "where": "app",
    "vocal": "none",
    "source_url": "https://learn.chatgpt.com/docs/use-chatgpt",
    "model_url": "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude",
    "capability": "音符・リズム・楽器の鳴らし方をコードで組み、WAVに書き出す。フェードや音量合わせなどの簡単な後処理もコードで頼める。記事の作例は、ChatGPT Workで作った60秒・160BPMのインスト曲",
    "requirements": "コード実行とファイル作成が使える環境",
    "limitations": "専用の音楽生成モデルではないため、歌入りの曲は対象外として考える。使えるライブラリと環境で仕上がりが変わる。Claudeでの作曲は記事では未実演",
    "code_license": "AIが書いたコード（各サービスの規約による）",
    "model_license": "各サービスの規約による",
    "business": "check",
    "business_note": "既存曲のメロディーを使わない。サウンドフォントなどの音源を使った場合は、その音源の利用条件も記録する",
    "evidence": "記事の事実確認で各社の公式説明を確認（2026-10-27）。作曲の実例はChatGPT Workのみ",
    "post_match": "article"
   },
   {
    "id": "audio-studio-mcp",
    "name": "Audio Studio MCP",
    "stage": [
     "make",
     "finish"
    ],
    "where": "pc_gpu",
    "vocal": "none",
    "source_url": "https://github.com/kanaworksai-hue/audio-studio-mcp",
    "model_url": "https://huggingface.co/stabilityai/stable-audio-3-medium/blob/main/LICENSE.md",
    "capability": "Claude CodeなどのMCP対応エージェントから、歌なしのBGMや効果音を作る。中で音を作るのはStable Audio 3。1回に1〜4候補を出せて、ループ化や音量調整などの後処理もできる",
    "requirements": "Apple SiliconのMac（M1以降・メモリ16GB推奨）か、NVIDIAのGPUを積んだWindows（GPUメモリ8GB以上）。最初に音楽モデルのダウンロードが必要",
    "limitations": "歌入りの曲は対象外。秒数を指定した曲の展開は安定しないと公式が説明している。終わり方は生成後の処理で整える",
    "code_license": "MIT",
    "model_license": "Stable Audio Community License",
    "business": "conditions",
    "business_note": "コードはMIT。Stable Audio 3のモデルの公開ライセンスは、年間売上100万米ドル未満の組織などが対象。商用利用時の登録や、関連会社を含めた売上の条件もある。規模の大きい会社は別途ライセンスの確認が必要",
    "evidence": "コードのライセンスはGitHub API、モデルのライセンス区分はHugging Faceで確認（2026-10-28）。機材と商用条件は記事の事実確認（2026-10-27）",
    "post_match": "posts"
   },
   {
    "id": "ace-step",
    "name": "ACE-Step 1.5",
    "stage": [
     "make"
    ],
    "where": "pc_gpu",
    "vocal": "both",
    "source_url": "https://github.com/ace-step/ACE-Step-1.5",
    "model_url": "https://huggingface.co/ACE-Step/Ace-Step1.5",
    "capability": "歌詞と説明から、歌入りの曲もインスト曲も作る。数曲から自分の作風を学習させる機能（LoRA）もある",
    "requirements": "NVIDIAのGPUを推奨。Mac（MPS）・AMD・Intel・CPUにも対応と案内されていて、Mac向けの導入パッケージもある。軽量構成はGPUメモリ4GB未満で動くと説明されている。大型のXL版はオフロード利用で12GB以上、推奨20GB以上",
    "limitations": "「4GBで動く」という紹介をXL版に当てはめない。使うモデルとPCの条件をセットで確かめる",
    "code_license": "MIT",
    "model_license": "MIT",
    "business": "ok_check",
    "business_note": "コードとモデルはMIT。ただし開発元は、生成物の独自性を確かめるよう求めている。有名な曲や歌手に似せる依頼は避ける",
    "evidence": "ライセンスはGitHub APIとHugging Faceで確認、対応機材は公式READMEで確認（2026-10-28）",
    "post_match": "posts"
   },
   {
    "id": "ace-step-ui",
    "name": "ACE-Step UI（有志の操作画面）",
    "stage": [
     "make"
    ],
    "where": "pc_gpu",
    "vocal": "both",
    "source_url": "https://github.com/fspecii/ace-step-ui",
    "model_url": "https://huggingface.co/ACE-Step/Ace-Step1.5",
    "capability": "ACE-Step 1.5を、音楽アプリのような画面で操作するための有志のUI",
    "requirements": "ACE-Step 1.5が動くPC",
    "limitations": "有志の開発。投稿の名前からGitHubで探して特定したもので、投稿のリンク先と同じかは未確認",
    "code_license": "表示なし（GitHubでライセンスを検出できない）",
    "model_license": "ACE-Step 1.5に従う（MIT）",
    "business": "check",
    "business_note": "コードにライセンスの表示がないため、改変・再配布はしない前提で扱う。作った曲の条件はACE-Step 1.5のモデルに従う",
    "evidence": "GitHub APIで確認（2026-10-28）",
    "post_match": "name_search"
   },
   {
    "id": "yue2",
    "name": "YuE2",
    "stage": [
     "make"
    ],
    "where": "pc_gpu",
    "vocal": "both",
    "source_url": "https://github.com/multimodal-art-projection/YuE",
    "model_url": "https://huggingface.co/m-a-p/YuE2-3B/blob/main/LICENSE",
    "capability": "旋律とコードの計画を先に作り、それをもとに曲を生成する。計画を編集して、同じ構成から作り直せる。音符や旋律にも手を入れたい人向け",
    "requirements": "GPUを積んだPC",
    "limitations": "周辺アプリのコードがオープンでも、モデルの条件は別に読む",
    "code_license": "Apache-2.0",
    "model_license": "CC BY-NC 4.0",
    "business": "no",
    "business_note": "公開モデルの重みはCC BY-NC 4.0（非商用）。会社の宣伝には使わない。収益化している個人の発信も、商用にあたるかを確かめる",
    "evidence": "コードのライセンスはGitHub API、モデルのライセンスはHugging Faceで確認（2026-10-28）",
    "post_match": "posts"
   },
   {
    "id": "yue2-studio",
    "name": "YuE2-Studio（有志のWindowsアプリ）",
    "stage": [
     "make"
    ],
    "where": "pc_gpu",
    "vocal": "both",
    "source_url": "https://github.com/timoncool/YuE2-Studio",
    "model_url": "https://huggingface.co/m-a-p/YuE2-3B/blob/main/LICENSE",
    "capability": "YuE2をWindowsで動かす有志のアプリ。歌入りの曲、楽譜の編集、カバーなどを1つの画面で扱う",
    "requirements": "Windows 10/11（64ビット）と、GPUメモリ6GB以上のNVIDIAのGPU（READMEの記載）",
    "limitations": "有志の開発。投稿の名前からGitHubで探して特定したもので、投稿のリンク先と同じかは未確認",
    "code_license": "MIT",
    "model_license": "CC BY-NC 4.0（YuE2のモデル）",
    "business": "no",
    "business_note": "アプリのコードはMITでも、使うYuE2のモデルは非商用。会社の宣伝には使わない",
    "evidence": "GitHub APIと公式READMEで確認（2026-10-28）",
    "post_match": "name_search"
   },
   {
    "id": "heartmula",
    "name": "HeartMuLa",
    "stage": [
     "make"
    ],
    "where": "pc_gpu",
    "vocal": "both",
    "source_url": "https://github.com/HeartMuLa/heartlib",
    "model_url": "https://huggingface.co/HeartMuLa/HeartMuLa-oss-3B",
    "capability": "歌詞とタグから曲を作る音楽生成モデル。ほぼすべての言語に対応すると公式が説明している",
    "requirements": "NVIDIAのGPU（CUDA）を前提にした説明。GPUメモリが足りない場合の省メモリ設定がある。必要なGPUメモリの数値は公式READMEで確認できなかった",
    "limitations": "動作に必要な機材は導入前に配布元で確かめる",
    "code_license": "Apache-2.0",
    "model_license": "Apache-2.0",
    "business": "ok_check",
    "business_note": "コードとモデルの重みはApache 2.0と公式が案内している。生成物が既存曲に似ていないかは別に確かめる",
    "evidence": "GitHub APIとHugging Face、公式READMEで確認（2026-10-28）",
    "post_match": "name_search"
   },
   {
    "id": "minimax-music3",
    "name": "MiniMax Music 3",
    "stage": [
     "make"
    ],
    "where": "pc_multi_gpu",
    "vocal": "both",
    "source_url": "https://github.com/MiniMax-AI/MiniMax-Music3",
    "model_url": "https://huggingface.co/MiniMaxAI/MiniMax-Music3/blob/main/LICENSE",
    "capability": "歌詞と曲の説明から、最大5分の歌入りの曲を作る。出力は32kHz・ステレオのWAV",
    "requirements": "公式の手順は、SGLang-OmniでCUDAのGPUを2枚使う構成",
    "limitations": "投稿にあった「MIT」「8GBで動く」は、公式の条件と一致しない。有志の軽量版やアプリの話と分けて確かめる",
    "code_license": "GitHubで検出できず（モデル配布ページのLICENSEを参照）",
    "model_license": "MiniMax-Music3 Community License",
    "business": "conditions",
    "business_note": "商用の製品・サービスで使う場合は、画面に「MiniMax-Music3」と表示する。自社と関連会社の年間売上が2,000万米ドルを超える場合は、事前に書面の許可が必要",
    "evidence": "公式READMEとHugging FaceのLICENSE本文で確認（2026-10-28）",
    "post_match": "posts"
   },
   {
    "id": "sonicproof",
    "name": "Sonicproof",
    "stage": [
     "pick"
    ],
    "where": "pc",
    "vocal": "both",
    "source_url": "https://github.com/kanaworksai-hue/sonicproof",
    "model_url": "https://pypi.org/project/sonicproof/",
    "capability": "作った音を手元で確かめる。要望に合うか、どの候補が近いかを調べ、音量・音割れ・ループの継ぎ目も検査できる",
    "requirements": "Pythonが動くPC",
    "limitations": "AIの順位だけで採用を決めない。商品の雰囲気に合うかは実際の動画に重ねて聴く。権利の確認は別に必要",
    "code_license": "MIT",
    "model_license": "—",
    "business": "ok_check",
    "business_note": "検査ツール。採用した音の条件は、元の音源やモデルに従う",
    "evidence": "GitHub APIで確認（2026-10-28）。QC関数は記事のダミー音源検証で実行（2026-10-27）",
    "post_match": "posts"
   },
   {
    "id": "ffmpeg-audio",
    "name": "FFmpeg（音声フィルター）",
    "stage": [
     "finish",
     "mix"
    ],
    "where": "pc",
    "vocal": "both",
    "source_url": "https://ffmpeg.org/ffmpeg-filters.html",
    "model_url": "",
    "capability": "音量の測定とそろえ（loudnorm・ebur128）、フェード（afade）、曲のつなぎ（acrossfade）、声に合わせてBGMを下げる（sidechaincompress）など",
    "requirements": "FFmpegをインストールしたPC",
    "limitations": "数値の目標は用途と配信先に合わせて決める",
    "code_license": "LGPL 2.1以降（一部の機能はGPL）",
    "model_license": "—",
    "business": "ok_check",
    "business_note": "仕上げた音の権利は、元の音源の条件に従う",
    "evidence": "公式のフィルター文書（2026-10-26の調査台帳）",
    "post_match": "catalog"
   },
   {
    "id": "bckgrnd-msc-mcp",
    "name": "bckgrnd-msc-mcp",
    "stage": [
     "mix",
     "make"
    ],
    "where": "pc",
    "vocal": "none",
    "source_url": "https://github.com/chrislanejones/bckgrnd-msc-mcp",
    "model_url": "https://github.com/chrislanejones/bckgrnd-msc",
    "capability": "ナレーションの音声にBGMを重ねるMCPサーバー。音量を測ってBGMの大きさを決め、声の間だけ下げて1つのファイルにする。内蔵の18曲（各8パート）はコードで合成した音で、手持ちの曲も使える",
    "requirements": "FFmpegが必要",
    "limitations": "公開されたばかりで利用実績が少ない（2026-10-28時点でGitHubのスターは0）",
    "code_license": "MIT",
    "model_license": "—",
    "business": "check",
    "business_note": "内蔵曲はサンプル音源を使わずに合成すると説明されている。採用前に配布元の条件を確かめる",
    "evidence": "GitHub APIと公式READMEで確認（2026-10-28）",
    "post_match": "name_search"
   },
   {
    "id": "editly",
    "name": "Editly",
    "stage": [
     "mix",
     "video"
    ],
    "where": "pc",
    "vocal": "both",
    "source_url": "https://github.com/mifi/editly",
    "model_url": "",
    "capability": "クリップ・画像・文字・音声を設定ファイルで並べて動画にする。BGMの自動ダッキング（声の間だけ下げる）と音量の正規化に対応",
    "requirements": "Node.jsとFFmpeg",
    "limitations": "最後の更新は2025-05（2026-10-28時点）",
    "code_license": "MIT",
    "model_license": "—",
    "business": "ok_check",
    "business_note": "使った音源と素材の条件は別に確かめる",
    "evidence": "GitHub APIと公式READMEで確認（2026-10-28）",
    "post_match": "posts"
   },
   {
    "id": "openmontage",
    "name": "OpenMontage",
    "stage": [
     "video"
    ],
    "where": "pc",
    "vocal": "both",
    "source_url": "https://github.com/calesthio/OpenMontage",
    "model_url": "",
    "capability": "映像・音声・字幕・合成を扱う、エージェント型の動画制作の仕組み",
    "requirements": "PC。外部APIを使う構成もある",
    "limitations": "外部APIを使う構成では、その費用と規約も確かめる",
    "code_license": "AGPL-3.0",
    "model_license": "使う外部サービス・モデルによる",
    "business": "check",
    "business_note": "コードはAGPL-3.0。改変したものを配ったり、サービスとして公開したりする場合の条件を確かめる",
    "evidence": "GitHub APIで確認（2026-10-28）",
    "post_match": "posts"
   },
   {
    "id": "brag",
    "name": "/brag",
    "stage": [
     "video"
    ],
    "where": "pc",
    "vocal": "none",
    "source_url": "https://github.com/latent-spaces/brag",
    "model_url": "",
    "capability": "作ったプロジェクトを読み、BGM付きの短い告知動画にするClaude Code向けのスキル",
    "requirements": "Claude Codeが動くPC",
    "limitations": "従来版と/brag-slimで、音源の扱いが違う",
    "code_license": "MIT",
    "model_license": "同梱曲はCC BY 4.0（従来版）",
    "business": "conditions",
    "business_note": "従来版の同梱曲はCC BY 4.0で、作者名やライセンスへのリンクなどの表記が必要。/brag-slimは同梱素材を使わない構成。使った版と採用した音源で条件を確かめる",
    "evidence": "GitHub APIで確認（2026-10-28）。同梱曲の条件は記事の事実確認（2026-10-27）",
    "post_match": "posts"
   },
   {
    "id": "chatterbox",
    "name": "Chatterbox",
    "stage": [
     "around"
    ],
    "where": "pc_gpu",
    "vocal": "none",
    "source_url": "https://github.com/resemble-ai/chatterbox",
    "model_url": "",
    "capability": "文章からナレーションの音声を作る。日本語を使う場合は多言語対応モデルを選ぶ",
    "requirements": "配布元の導入手順で確認",
    "limitations": "記事では未実演",
    "code_license": "MIT",
    "model_license": "配布元で確認",
    "business": "check",
    "business_note": "使うモデルと声の利用条件を確かめる",
    "evidence": "GitHub APIで確認（2026-10-28）",
    "post_match": "article"
   },
   {
    "id": "whisperx",
    "name": "WhisperX",
    "stage": [
     "around"
    ],
    "where": "pc_gpu",
    "vocal": "none",
    "source_url": "https://github.com/m-bain/whisperX",
    "model_url": "",
    "capability": "音声から字幕の下書きを作る。単語ごとの時刻や話者の区別を付けられる",
    "requirements": "配布元の導入手順で確認",
    "limitations": "記事では未実演",
    "code_license": "BSD-2-Clause",
    "model_license": "配布元で確認",
    "business": "check",
    "business_note": "使うモデルの条件を確かめる",
    "evidence": "GitHub APIで確認（2026-10-28）",
    "post_match": "article"
   },
   {
    "id": "audio-separator",
    "name": "Audio Separator",
    "stage": [
     "around"
    ],
    "where": "pc",
    "vocal": "both",
    "source_url": "https://github.com/nomadkaraoke/python-audio-separator",
    "model_url": "",
    "capability": "音源を、歌声と伴奏などのパートに分ける。利用できる音源から、BGMの調整用の素材を取り出すときに使う",
    "requirements": "配布元の導入手順で確認",
    "limitations": "記事では未実演。分けた音の権利は元の音源に従う",
    "code_license": "MIT",
    "model_license": "使う分離モデルごとに確認",
    "business": "check",
    "business_note": "利用権のない曲を分離して使わない",
    "evidence": "GitHub APIで確認（2026-10-28）",
    "post_match": "article"
   },
   {
    "id": "deepfilternet",
    "name": "DeepFilterNet",
    "stage": [
     "around"
    ],
    "where": "pc",
    "vocal": "none",
    "source_url": "https://github.com/Rikorose/DeepFilterNet",
    "model_url": "",
    "capability": "録音した声の雑音を減らす。ナレーションやインタビュー録音を整える",
    "requirements": "配布元の導入手順で確認",
    "limitations": "記事では未実演。最後の更新は2024-10（2026-10-28時点）",
    "code_license": "配布元で確認（GitHubでは判定できない）",
    "model_license": "配布元で確認",
    "business": "check",
    "business_note": "配布元のライセンス表記を確かめる",
    "evidence": "GitHub APIで確認（2026-10-28）",
    "post_match": "article"
   },
   {
    "id": "audacity",
    "name": "Audacity",
    "stage": [
     "around",
     "finish"
    ],
    "where": "pc",
    "vocal": "both",
    "source_url": "https://github.com/audacity/audacity",
    "model_url": "",
    "capability": "録音や音声の編集ができる、無料のデスクトップアプリ。最後に自分の耳と手で調整したい人や、形式を変えたい人向け",
    "requirements": "Windows・Mac・Linux",
    "limitations": "記事では未実演",
    "code_license": "配布元で確認（GitHubでは判定できない）",
    "model_license": "—",
    "business": "check",
    "business_note": "編集した音の権利は、元の音源の条件に従う",
    "evidence": "GitHub APIで確認（2026-10-28）",
    "post_match": "article"
   }
  ],
  "excluded": [
   {
    "name": "vibe-music-web",
    "reason": "手持ちの曲を持ち込んで再生・管理するプレーヤーで、BGMを作る・仕上げる道具ではないため外した"
   },
   {
    "name": "OpenMusic.ai",
    "reason": "投稿自体がOSSではないと書いていて、配布元のコードを確認できないため外した"
   },
   {
    "name": "Shao",
    "reason": "GitHubとHugging Faceで配布元を特定できなかったため外した"
   },
   {
    "name": "Suno・Udio",
    "reason": "有料サービス。Sunoは動画台帳（T34）に既にあるため、BGM台帳には入れていない"
   },
   {
    "name": "ツール名のない投稿（一覧の21・26・30番など）",
    "reason": "音楽の道具を特定できる情報がないため外した"
   }
  ]
 },
 "tools": [
  {
   "id": "T01",
   "name": "Lemo-Opuscar",
   "kind": "code_video",
   "source_url": "https://github.com/lemomo-ai/lemo-opuscar",
   "capability": "画風を指定した短編・解説・資料映像",
   "required_inputs": "台本、選んだSTYLE.md、型に応じた実素材",
   "outputs": "HTML/Canvas/WebGLソース、MP4",
   "limitations": "生成AIの写実動画とは別。Codexで全画風の品質は未実測",
   "cost_basis": "ローカル計算・エージェント利用。素材条件別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T02",
   "name": "mg-styles-15",
   "kind": "code_video",
   "source_url": "https://github.com/Vincentwei1021/mg-styles-15",
   "capability": "フラット・等角などのモーショングラフィックス",
   "required_inputs": "原稿、配色、対象スタイル",
   "outputs": "コード、MP4",
   "limitations": "過去の動作確認は特定デモのみ。Windows調整が必要",
   "cost_basis": "ローカル計算。依存・素材条件別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T03",
   "name": "Remotion",
   "kind": "code_video",
   "source_url": "https://github.com/remotion-dev/remotion",
   "capability": "Reactで字幕・図形・画像・音声を時間制御する動画",
   "required_inputs": "Reactコード、素材、タイムライン",
   "outputs": "Reactソース、MP4",
   "limitations": "動画生成モデルではない。会社利用は独自ライセンスを確認",
   "cost_basis": "ライセンス適用条件・レンダリング費用別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T04",
   "name": "Remotion公式skills",
   "kind": "agent_skill",
   "source_url": "https://github.com/remotion-dev/skills",
   "capability": "作成・字幕・レンダリング・編集可能化の実装支援",
   "required_inputs": "Remotionプロジェクト、依頼文",
   "outputs": "実装指示とコード",
   "limitations": "スキル導入だけではランタイムは揃わない",
   "cost_basis": "エージェントとRemotion側の費用別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T05",
   "name": "video-shotcraft",
   "kind": "agent_skill",
   "source_url": "https://github.com/Vincentwei1021/video-shotcraft",
   "capability": "実画面のキャプチャからサービス紹介・音同期のプロモ制作",
   "required_inputs": "実サイト/画面、コピー、ブランド、音源",
   "outputs": "Remotionソース、MP4、任意の編集用出力",
   "limitations": "サイトアクセスが必要。JianYing出力はWindowsで未確認。ショット数の表記に揺れ",
   "cost_basis": "Apache-2.0表示。Remotionと音源の条件は別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T06",
   "name": "HyperFrames",
   "kind": "code_video",
   "source_url": "https://github.com/heygen-com/hyperframes",
   "capability": "HTML/CSSと時刻制御アニメーションを動画化",
   "required_inputs": "HTML、メディア、時刻制御",
   "outputs": "HTMLソース、MP4",
   "limitations": "Node.jsとFFmpegが必要。任意のWebアニメが無修正で動画化する保証なし",
   "cost_basis": "Apache-2.0表示。クラウドサービスは別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T07",
   "name": "img2threejs",
   "kind": "3d_code",
   "source_url": "https://github.com/img2threejs/img2threejs",
   "capability": "参照画像の対象を手続き型Three.js形状へ再構成",
   "required_inputs": "参照画像、寸法があれば寸法",
   "outputs": "TypeScript/Three.jsの形状",
   "limitations": "測量やフォトグラメトリではない。見えない裏面や厳密寸法を確定できない",
   "cost_basis": "Apache-2.0表示。計算・エージェント別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T08",
   "name": "MCP for Blender",
   "kind": "3d_connector",
   "source_url": "https://github.com/ahujasid/blender-mcp",
   "capability": "Blender内のモデル・シーン・材質操作をエージェントへ接続",
   "required_inputs": "Blender、アドオン、MCP設定、素材",
   "outputs": "Blenderシーン、レンダー",
   "limitations": "Blender公式ではない。任意コード操作・接続設定・telemetry確認が必要",
   "cost_basis": "MIT表示。外部生成サービスは別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T09",
   "name": "Penpot",
   "kind": "design_editor",
   "source_url": "https://github.com/penpot/penpot",
   "capability": "UI・トークン・コンポーネント・プロトタイプ、MCP連携",
   "required_inputs": "ブランド、画面要件、接続",
   "outputs": "編集可能なデザイン、SVG/CSS等",
   "limitations": "完成MP4の制作エンジンではない",
   "cost_basis": "MPL-2.0表示。ホスト/プラン条件別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T10",
   "name": "diagram-design",
   "kind": "agent_skill",
   "source_url": "https://github.com/cathrynlavery/diagram-design",
   "capability": "ブランドに合わせたHTML/SVGの図解",
   "required_inputs": "本文、関係、数値出典、ブランド",
   "outputs": "HTML/SVG、PNG出力経路",
   "limitations": "基本は図解。動画化には別の時間制御とレンダーが必要",
   "cost_basis": "個別LICENSEとフォント条件を実装時確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T11",
   "name": "Impeccable",
   "kind": "agent_skill",
   "source_url": "https://github.com/pbakaus/impeccable",
   "capability": "Web画面のデザイン方針・監査・推敲・仕上げ",
   "required_inputs": "既存画面/実装、目的、ブランド",
   "outputs": "UI改善、検査所見",
   "limitations": "全画面品質を自動保証しない。インストーラはhooks等も変更する",
   "cost_basis": "導入する版のLICENSE確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T12",
   "name": "UI UX Pro Max",
   "kind": "agent_skill",
   "source_url": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
   "capability": "用途別の配色・書体・UI/UX設計候補を検索",
   "required_inputs": "プロダクト要件、利用者、実装基盤",
   "outputs": "デザインシステム案、実装指示",
   "limitations": "検索候補はユーザーテストの代わりにはならない",
   "cost_basis": "Python検索はローカル。LICENSEは採用版で確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T13",
   "name": "frontend-design",
   "kind": "agent_skill",
   "source_url": "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md",
   "capability": "目的に合う視覚方針・書体・配色・レイアウト",
   "required_inputs": "具体的な製品、対象者、画面目的",
   "outputs": "UI実装方針",
   "limitations": "動画の撮影・編集技法を提供するものではない",
   "cost_basis": "LICENSE.txtの確認が必要",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T14",
   "name": "create-design-md",
   "kind": "agent_skill",
   "source_url": "https://github.com/ibelick/ui-skills/blob/main/skills/create-design-md/SKILL.md",
   "capability": "既存サイト/リポジトリからデザイン規則を記録",
   "required_inputs": "対象サイトまたはソース",
   "outputs": "DESIGN.md",
   "limitations": "見かけの反復を正式なデザイン意図と断定しない",
   "cost_basis": "参照先・依存仕様を採用時確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T15",
   "name": "emil-design-eng",
   "kind": "agent_skill",
   "source_url": "https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md",
   "capability": "操作感・コンポーネント・細部の仕上げ",
   "required_inputs": "UIコード、具体的な改善対象",
   "outputs": "改善案/実装",
   "limitations": "映像のカット編集とは用途が違う",
   "cost_basis": "採用版の利用条件確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T16",
   "name": "review-animations",
   "kind": "agent_skill",
   "source_url": "https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md",
   "capability": "UIの動き・緩急・過剰演出をレビュー",
   "required_inputs": "アニメーションコード、表示結果",
   "outputs": "指摘",
   "limitations": "レビュー用。動画編集エンジンではない",
   "cost_basis": "採用版の利用条件確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T17",
   "name": "mobile-native",
   "kind": "agent_skill",
   "source_url": "https://github.com/emilkowalski/skills/blob/main/skills/mobile-native/SKILL.md",
   "capability": "タッチ・スクロール・safe areaなどモバイルWebの改善",
   "required_inputs": "モバイルWeb実装、実機",
   "outputs": "修正/確認項目",
   "limitations": "実機確認が残る。ネイティブアプリ生成とは別",
   "cost_basis": "採用版の利用条件確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T18",
   "name": "break-ui",
   "kind": "agent_skill",
   "source_url": "https://github.com/emilkowalski/skills/blob/main/skills/break-ui/SKILL.md",
   "capability": "空・長文・多言語等の最悪データでUIを検査",
   "required_inputs": "画面、データ境界条件",
   "outputs": "再現例、指摘",
   "limitations": "自動的な全障害検出は保証しない",
   "cost_basis": "採用版の利用条件確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T19",
   "name": "web-design-guidelines",
   "kind": "agent_skill",
   "source_url": "https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md",
   "capability": "アクセシビリティ・フォーム・操作状態のUI点検",
   "required_inputs": "UIコード、最新ガイドライン",
   "outputs": "file:line形式の所見",
   "limitations": "外部の最新ルールを取得する仕様",
   "cost_basis": "採用版の利用条件確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T20",
   "name": "webapp-testing",
   "kind": "agent_skill",
   "source_url": "https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md",
   "capability": "Playwrightで画面操作・スクリーンショット・ログ確認",
   "required_inputs": "起動するWebアプリ、試験シナリオ",
   "outputs": "テスト・画面・ログ",
   "limitations": "Python/ブラウザ実行環境が別途必要",
   "cost_basis": "LICENSE.txtと実行環境を確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T21",
   "name": "Runway Edit Studio",
   "kind": "generative_video_edit",
   "source_url": "https://help.runwayml.com/hc/en-us/articles/51683104370451-Creating-with-Edit-Studio",
   "capability": "既存映像の背景変更、物体追加/削除、スタイル変更",
   "required_inputs": "元動画、変更指示、任意の参照画像",
   "outputs": "生成編集された動画",
   "limitations": "人物・商品形状・時間的一貫性を要検品。API対応は機能単位で再確認",
   "cost_basis": "有料プラン/クレジットを実行前確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T22",
   "name": "Veo",
   "kind": "generative_video",
   "source_url": "https://ai.google.dev/gemini-api/docs/veo",
   "capability": "文章/画像から映像、音付き映像、先頭末尾参照等",
   "required_inputs": "プロンプト、必要に応じて画像",
   "outputs": "生成動画",
   "limitations": "モデルごとに尺・比率・出力仕様が異なる。日本語文字の正確性を保証しない",
   "cost_basis": "API料金・解像度・再生成回数で変動",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T23",
   "name": "ComfyUI_Wan",
   "kind": "generative_video",
   "source_url": "https://docs.comfy.org/tutorials/video/wan/wan2_2",
   "capability": "ノードで文章→動画、画像→動画、始終フレーム制御",
   "required_inputs": "モデル、ワークフロー、GPU/実行環境",
   "outputs": "動画とworkflow JSON",
   "limitations": "GPUメモリ・モデル取得が必要。導入したモデル/ノードごとに条件確認",
   "cost_basis": "クラウド課金またはローカル計算",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T24",
   "name": "OpusClip",
   "kind": "editing",
   "source_url": "http://opus.pro",
   "capability": "長尺から短尺候補抽出、字幕、縦型追従、B-roll等",
   "required_inputs": "長尺動画/URL、切り出す目的",
   "outputs": "短尺動画、対応する編集用出力",
   "limitations": "重要箇所の判断・日本語固有名詞・自動追従は人の確認が必要",
   "cost_basis": "プラン別。API適用範囲は別確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T25",
   "name": "Descript",
   "kind": "editing",
   "source_url": "https://www.descript.com/features",
   "capability": "文字起こしを編集してカット、フィラー除去、音声改善",
   "required_inputs": "話し声付き動画/音声",
   "outputs": "編集動画、文字起こし",
   "limitations": "日本語の機能別対応と読み精度は実素材で確認",
   "cost_basis": "プラン別。自動処理上限確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T26",
   "name": "Premiere_Generative_Extend",
   "kind": "editing",
   "source_url": "https://helpx.adobe.com/premiere/desktop/edit-projects/edit-with-generative-ai/generative-extend-overview.html",
   "capability": "カット頭尾や環境音を延長しタイミングを調整",
   "required_inputs": "対応動画/音声、Premiere、ネット接続",
   "outputs": "延長済みクリップ",
   "limitations": "話し言葉・音楽の延長は対象外。色/ビット深度等の制約あり",
   "cost_basis": "契約・生成枠を実行時確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T27",
   "name": "DaVinci_Resolve_Studio",
   "kind": "editing",
   "source_url": "https://www.blackmagicdesign.com/products/davinciresolve/studio",
   "capability": "マスク・追跡・声の分離・リフレーム等と本格編集",
   "required_inputs": "動画素材、デスクトップ環境",
   "outputs": "編集プロジェクト、動画",
   "limitations": "AI機能の多くはStudio側。GPU・版ごとの条件あり",
   "cost_basis": "Studioライセンス等を確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T28",
   "name": "FFmpeg",
   "kind": "media_processing",
   "source_url": "https://ffmpeg.org/ffmpeg-filters.html",
   "capability": "カット・連結・クロップ・字幕合成・音量調整・変換",
   "required_inputs": "ローカル素材、編集設計",
   "outputs": "MP4/音声/静止画",
   "limitations": "意味を理解して見どころを選ぶAIではない",
   "cost_basis": "ビルド/コーデック条件と計算資源",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T29",
   "name": "Recraft",
   "kind": "image_vector",
   "source_url": "https://www.recraft.ai/docs/api-reference/getting-started",
   "capability": "画像・SVG生成、ベクトル化、領域編集、背景処理",
   "required_inputs": "文章、参照画像、スタイル",
   "outputs": "画像/SVG",
   "limitations": "実商品の細部・文字を保証しない。API用残高は別",
   "cost_basis": "モデル別従量課金等",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T30",
   "name": "Clipdrop",
   "kind": "image_edit",
   "source_url": "http://clipdrop.co",
   "capability": "背景除去/差替、物体消去、拡張、再照明",
   "required_inputs": "静止画像、対象指定",
   "outputs": "編集画像",
   "limitations": "静止画向け。髪・透明物・影を要検品",
   "cost_basis": "機能/プラン/API条件別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T31",
   "name": "remove.bg",
   "kind": "image_edit",
   "source_url": "http://remove.bg",
   "capability": "人物/商品の背景を除去",
   "required_inputs": "静止画像",
   "outputs": "透過画像",
   "limitations": "この行は背景除去機能を対象とする。動画編集能力は未確認",
   "cost_basis": "解像度/プラン条件別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T32",
   "name": "cleanup.pictures",
   "kind": "image_edit",
   "source_url": "http://cleanup.pictures",
   "capability": "選択した不要物の消去・穴埋め",
   "required_inputs": "静止画像、塗る領域",
   "outputs": "編集画像",
   "limitations": "生成補完された部分は実在の記録ではない",
   "cost_basis": "プラン条件別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T33",
   "name": "ElevenLabs",
   "kind": "audio",
   "source_url": "https://elevenlabs.io/docs/overview/capabilities/text-to-speech",
   "capability": "ナレーションの音声合成",
   "required_inputs": "原稿、声、読み指定",
   "outputs": "音声",
   "limitations": "固有名詞/数字/感情を試聴。声の使用許諾を管理",
   "cost_basis": "文字/モデル/プラン条件別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T34",
   "name": "Suno",
   "kind": "audio",
   "source_url": "http://suno.com",
   "capability": "説明や歌詞から楽曲を生成",
   "required_inputs": "曲調、歌詞またはインスト指定",
   "outputs": "音楽",
   "limitations": "無料枠と商用条件は別。今回ライセンス詳細は未確認",
   "cost_basis": "プランと生成時条件を確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T35",
   "name": "D-ID",
   "kind": "avatar",
   "source_url": "http://d-id.com",
   "capability": "台本/音声と人物素材からアバター動画",
   "required_inputs": "本人許諾のある人物素材、台本/音声",
   "outputs": "話す人物動画",
   "limitations": "自然さや口同期は実測前。GUIとAPIの機能差確認",
   "cost_basis": "Studio/APIプラン別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T36",
   "name": "SadTalker",
   "kind": "avatar",
   "source_url": "https://github.com/OpenTalker/SadTalker",
   "capability": "人物静止画と音声からトーキングヘッド",
   "required_inputs": "顔画像、音声、モデル環境",
   "outputs": "顔の動く動画",
   "limitations": "全身動作の生成ではない。sadtalker.aiとの運営同一性未確認",
   "cost_basis": "モデル・コード・依存素材の条件確認",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T37",
   "name": "Screenity",
   "kind": "screen_recording",
   "source_url": "https://screenity.io",
   "capability": "画面録画とシーン編集、注目箇所のズーム等",
   "required_inputs": "画面操作/既存素材",
   "outputs": "録画・説明動画",
   "limitations": "撮影風生成AIではない。ブラウザ権限が必要",
   "cost_basis": "現行プラン条件別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T38",
   "name": "Napkin",
   "kind": "diagram",
   "source_url": "http://napkin.ai",
   "capability": "文章からフロー・図解・データ図を作る",
   "required_inputs": "整理済み文章、正しい数値",
   "outputs": "図解",
   "limitations": "内容の論理や数字の正しさは別検査",
   "cost_basis": "プラン/API条件別",
   "checked_on": "2026-10-26"
  },
  {
   "id": "T39",
   "name": "ClaudeAnimationBase",
   "kind": "code_video",
   "source_url": "https://github.com/JohnHeibel/ClaudeAnimationBase",
   "capability": "p5.jsのキャラクター/シーン動画",
   "required_inputs": "キャラ設定、台本、コード",
   "outputs": "コード、動画、コンタクトシート",
   "limitations": "画風やGPUで負荷が変わる。この調査では未実行",
   "cost_basis": "MIT表示。依存素材条件別",
   "checked_on": "2026-10-26"
  }
 ],
 "skills": [
  {
   "id": "impeccable",
   "repo": "pbakaus/impeccable",
   "repo_path": ".claude/skills/impeccable",
   "source_url": "https://github.com/pbakaus/impeccable/tree/main/.claude/skills/impeccable",
   "name": "impeccable",
   "role": "デザイン仕上げ",
   "capability": "画面の批評・見た目・使いやすさをまとめて改善",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "mobile-native",
   "repo": "emilkowalski/skills",
   "repo_path": "skills/mobile-native",
   "source_url": "https://github.com/emilkowalski/skills/tree/main/skills/mobile-native",
   "name": "mobile-native",
   "role": "画面制作",
   "capability": "スマホでの入力・タッチ・画面端の不具合を改善",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "improve-animations",
   "repo": "emilkowalski/skills",
   "repo_path": "skills/improve-animations",
   "source_url": "https://github.com/emilkowalski/skills/tree/main/skills/improve-animations",
   "name": "improve-animations",
   "role": "動きの設計",
   "capability": "動きの改善点と計画を作成",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "animation-vocabulary",
   "repo": "emilkowalski/skills",
   "repo_path": "skills/animation-vocabulary",
   "source_url": "https://github.com/emilkowalski/skills/tree/main/skills/animation-vocabulary",
   "name": "animation-vocabulary",
   "role": "演出設計",
   "capability": "曖昧な動きの注文を具体的な用語に変換",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "emil-design-eng",
   "repo": "emilkowalski/skills",
   "repo_path": "skills/emil-design-eng",
   "source_url": "https://github.com/emilkowalski/skills/tree/main/skills/emil-design-eng",
   "name": "emil-design-eng",
   "role": "画面制作",
   "capability": "ボタンや画面遷移の細部を実装",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "review-animations",
   "repo": "emilkowalski/skills",
   "repo_path": "skills/review-animations",
   "source_url": "https://github.com/emilkowalski/skills/tree/main/skills/review-animations",
   "name": "review-animations",
   "role": "検品",
   "capability": "動きのタイミングや不自然さを点検",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "break-ui",
   "repo": "emilkowalski/skills",
   "repo_path": "skills/break-ui",
   "source_url": "https://github.com/emilkowalski/skills/tree/main/skills/break-ui",
   "name": "break-ui",
   "role": "検品",
   "capability": "長い文字列や空データ等で画面を検査",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "apple-design",
   "repo": "emilkowalski/skills",
   "repo_path": "skills/apple-design",
   "source_url": "https://github.com/emilkowalski/skills/tree/main/skills/apple-design",
   "name": "apple-design",
   "role": "デザイン設計",
   "capability": "Appleの原則を参考にUIを設計",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "web-design-guidelines",
   "repo": "vercel-labs/agent-skills",
   "repo_path": "skills/web-design-guidelines",
   "source_url": "https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines",
   "name": "web-design-guidelines",
   "role": "検品",
   "capability": "Web画面の品質・アクセシビリティを点検",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "canvas-design",
   "repo": "anthropics/skills",
   "repo_path": "skills/canvas-design",
   "source_url": "https://github.com/anthropics/skills/tree/main/skills/canvas-design",
   "name": "canvas-design",
   "role": "静止画制作",
   "capability": "ポスターやビジュアルをPDF・PNGに制作",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "web-artifacts-builder",
   "repo": "anthropics/skills",
   "repo_path": "skills/web-artifacts-builder",
   "source_url": "https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder",
   "name": "web-artifacts-builder",
   "role": "画面制作",
   "capability": "複数部品を持つWeb画面を制作",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "algorithmic-art",
   "repo": "anthropics/skills",
   "repo_path": "skills/algorithmic-art",
   "source_url": "https://github.com/anthropics/skills/tree/main/skills/algorithmic-art",
   "name": "algorithmic-art",
   "role": "映像素材",
   "capability": "コードで幾何学・粒子などのアートを生成",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "frontend-design",
   "repo": "anthropics/skills",
   "repo_path": "skills/frontend-design",
   "source_url": "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
   "name": "frontend-design",
   "role": "画面制作",
   "capability": "配色・文字・レイアウトを設計",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "webapp-testing",
   "repo": "anthropics/skills",
   "repo_path": "skills/webapp-testing",
   "source_url": "https://github.com/anthropics/skills/tree/main/skills/webapp-testing",
   "name": "webapp-testing",
   "role": "検品",
   "capability": "Webアプリをブラウザで動作確認",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "theme-factory",
   "repo": "anthropics/skills",
   "repo_path": "skills/theme-factory",
   "source_url": "https://github.com/anthropics/skills/tree/main/skills/theme-factory",
   "name": "theme-factory",
   "role": "デザイン設計",
   "capability": "統一テーマを資料・画面へ適用",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "ui-ux-pro-max",
   "repo": "nextlevelbuilder/ui-ux-pro-max-skill",
   "repo_path": ".claude/skills/ui-ux-pro-max",
   "source_url": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/.claude/skills/ui-ux-pro-max",
   "name": "ui-ux-pro-max",
   "role": "デザイン設計",
   "capability": "業種・用途に応じたデザイン指針を検索",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "create-design-md",
   "repo": "ibelick/ui-skills",
   "repo_path": "skills/create-design-md",
   "source_url": "https://github.com/ibelick/ui-skills/tree/main/skills/create-design-md",
   "name": "create-design-md",
   "role": "デザイン仕様",
   "capability": "配色・文字・余白などの規則を文書化",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "baseline-ui",
   "repo": "ibelick/ui-skills",
   "repo_path": "skills/baseline-ui",
   "source_url": "https://github.com/ibelick/ui-skills/tree/main/skills/baseline-ui",
   "name": "baseline-ui",
   "role": "検品",
   "capability": "UIの基本ルールを適用",
   "migration": "",
   "checked_on": "2026-10-26"
  },
  {
   "id": "soft-skill",
   "repo": "Leonxlnx/taste-skill-classics",
   "repo_path": "skills/soft-skill",
   "source_url": "https://github.com/Leonxlnx/taste-skill-classics/tree/main/skills/soft-skill",
   "name": "high-end-visual-design",
   "role": "デザイン設計",
   "capability": "高級感のある余白・影・文字使い",
   "migration": "移転先：taste-skill-classics。記事名はhigh-end-visual-design",
   "checked_on": "2026-10-26"
  },
  {
   "id": "taste-skill",
   "repo": "Leonxlnx/taste-skill",
   "repo_path": "skills/taste-skill",
   "source_url": "https://github.com/Leonxlnx/taste-skill/tree/main/skills/taste-skill",
   "name": "design-taste-frontend",
   "role": "再デザイン",
   "capability": "既存画面を観察し再設計。旧redesign-existing-projectsの後継",
   "migration": "redesign-existing-projectsはdesign-taste-frontendに統合。旧名でも検索可能",
   "checked_on": "2026-10-26"
  }
 ],
 "styles": [
  {
   "id": "archive-lighttable",
   "label_ja": "古い資料を光る机で見せる",
   "title": "Archive Light Table — Style Prompt",
   "description": "Real archive objects (glass negatives, slides, letters, telegrams, clippings, drawings) lie on a cool, backlit light table. A loupe comes down on one of them, and inside the glass the object comes alive: a negative turns positive, a line of type lights up, a number lifts off the page, a photograph opens into depth. Precise catalogue numbers, dates and readings are pinned to the objects. Clean, modern and quiet, with no vintage filter.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/archive-lighttable"
  },
  {
   "id": "art-deco",
   "label_ja": "黒漆と金線のアールデコ",
   "title": "Art Deco — Style Prompt",
   "description": "Black lacquer, engraved gold line and airbrushed geometry: a 1930s poster that moves. Every composition has a centre axis, transitions open or close along it, and light arrives as bulbs switching on one by one.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/art-deco"
  },
  {
   "id": "ascii-crt",
   "label_ja": "文字だけのレトロ端末",
   "title": "ASCII / CRT Terminal: Style Prompt",
   "description": "Everything on screen is a real character on a monospace grid, lit by the phosphor of an old monochrome CRT.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/ascii-crt"
  },
  {
   "id": "backrooms",
   "label_ja": "無人空間の発見映像",
   "title": "Liminal Found Footage — Style Prompt",
   "description": "Camcorder tapes recovered from empty, endless, fluorescent-lit spaces. Rules instead of monsters.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/backrooms"
  },
  {
   "id": "blueprint",
   "label_ja": "動く青焼き設計図",
   "title": "Blueprint — Style Prompt",
   "description": "Engineering drawings that come alive on a sheet of cyanotype paper: white technical line work on Prussian blue, drawn in drafting order, with annotations that move.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/blueprint"
  },
  {
   "id": "brick-toy",
   "label_ja": "ブロック玩具のコマ撮り風",
   "title": "Brick Toy — Style Prompt",
   "description": "Stop-motion toy-brick films shot like macro photography on a real desk: a world built from interlocking plastic bricks with round studs, animated a pose at a time.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/brick-toy"
  },
  {
   "id": "briefing-board",
   "label_ja": "写真付きの技術説明ボード",
   "title": "Engineering Briefing Board — Style Prompt",
   "description": "One real whiteboard wall, filmed: window light on enamel, ghosts of erased marker, frame and tray. Cut-out photographs of real things land on it with weight; tags, magnets, a ruler and stamps are pinned to it; marker ink draws itself in three colours with fixed meanings. The camera rides the lines from fact to fact and only at the end pulls back to show the whole briefing.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/briefing-board"
  },
  {
   "id": "caption-news",
   "label_ja": "大字幕のニュース",
   "title": "Caption News — Style Prompt",
   "description": "Social-video news that reads with the sound off. Real footage, photos and the source document are the ground; huge captions are the lead actor, slammed in a chunk at a time with one keyword on a yellow block. Hard cuts on a music grid, numbers that roll, a source tag that slides in whenever a figure appears, and the original document highlighted on screen before its number is believed. 16:9, built for a feed.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/caption-news"
  },
  {
   "id": "cel-anime-80s",
   "label_ja": "80年代セルアニメ風",
   "title": "80s Cel Anime — Style Prompt",
   "description": "Hand-painted cel animation from the golden age of Japanese OVAs, re-created in code: flat two-tone cels over airbrushed backgrounds, backlit neon, limited-animation timing, played back as a late-80s videotape on a CRT television.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/cel-anime-80s"
  },
  {
   "id": "city-symphony",
   "label_ja": "都市タイムラプス",
   "title": "Time-lapse Symphony — Style Prompt",
   "description": "A city film cut like a piece of minimalist music: time-lapse turns traffic, crowds and clouds into rivers of light, the cuts get denser with the score's subdivisions, one thing is slowed almost to a stop, and the film ends on a hard cut to black on a downbeat. No narrator. The music carries it.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/city-symphony"
  },
  {
   "id": "countdown",
   "label_ja": "実時間カウントダウン分割画面",
   "title": "Live Countdown Split-screen — Style Prompt",
   "description": "An edit style, not a look. Real footage of one event with a known zero (a launch, a verdict, a final whistle, polls closing), shown in real time: screen time equals event time, a clock ticks every second, and the screen splits into more and more cells as the moment nears, every cell showing the same second. At zero the cells merge into one picture and the clock flips.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/countdown"
  },
  {
   "id": "crayon-book",
   "label_ja": "クレヨン絵本",
   "title": "Crayon Picture Book — Style Prompt",
   "description": "A picture-book page drawn live in wax crayon on toothy paper, with a watercolour wash that reveals what the crayon was hiding.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/crayon-book"
  },
  {
   "id": "dark-keynote",
   "label_ja": "暗い背景の製品発表",
   "title": "Dark Tech Keynote — Style Prompt",
   "description": "A software launch film where the interface itself is the star: near-black gradient, hairline grid, soft light, one brand accent, and UI that moves with snap-grid precision. Light reveals, one giant number, and a sound design that is as ordered as the pixels.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/dark-keynote"
  },
  {
   "id": "data-physical",
   "label_ja": "数値を積み木や実物で示す",
   "title": "Data Physicalization — Style Prompt",
   "description": "Real statistics built as real objects: every unit is a countable piece of material (a plate, a block, a coin, a bar) stacked to exact scale on a crafted base, shot like a product in a studio — soft key, long shadows, shallow depth of field, physically based materials. The camera reads a number at the edge of one plate, follows the data as it grows, and pulls back until the chart is an installation.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/data-physical"
  },
  {
   "id": "dataviz",
   "label_ja": "データの物語",
   "title": "Data Storytelling — Style Prompt",
   "description": "A chart that tells a story: real data, drawn mark by mark on cream paper by a red–blue pencil, with handwritten notes pinned to the numbers. The chart itself is the camera, the rhythm and the plot.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/dataviz"
  },
  {
   "id": "engraving",
   "label_ja": "銅版画が彫られる",
   "title": "Copperplate Engraving — Style Prompt",
   "description": "An intaglio plate that engraves itself: a burin cuts swelling lines into copper, a proof is pulled, and the figure builds up — outline, hatching, cross-hatching — until engraved lettering, magnified details and a hand-laid wash make a finished plate.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/engraving"
  },
  {
   "id": "game-show",
   "label_ja": "カラフルなゲーム番組",
   "title": "Game Show Flat — Style Prompt",
   "description": "A rhythm-game variety show in flat vector: toy-like mascots with thick ink outlines on candy-coloured stripes and sunbursts, every hit landing on a fixed tempo grid, call-and-response patterns, and a judgement word when each round is won.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/game-show"
  },
  {
   "id": "glass-product",
   "label_ja": "ガラス素材の製品CG",
   "title": "Glass Product Render — Style Prompt",
   "description": "Launch-film product rendering in transparent and frosted glass: a dark-field studio, strip-light sweeps, dispersion, caustics, light travelling inside the object, slow exploded views that snap shut on a downbeat.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/glass-product"
  },
  {
   "id": "halftone-dossier",
   "label_ja": "網点印刷の調査資料",
   "title": "Halftone Dossier — Style Prompt",
   "description": "A retro print case file: cream archive paper, overprinted halftone dots in a few flat inks, huge heavy headlines with misregistered shadows, rubber stamps that slam, and thick-outlined characters. The film is a file that is read out one exhibit at a time.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/halftone-dossier"
  },
  {
   "id": "hd-2d",
   "label_ja": "立体空間のドット絵",
   "title": "HD-2D — Style Prompt",
   "description": "Hand-made pixel sprites standing like paper cut-outs inside a lit, fogged, fully 3D diorama, shot from a high three-quarter angle through a tilt-shift lens: a toy world where every lamp throws a real shadow.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/hd-2d"
  },
  {
   "id": "hologram-hud",
   "label_ja": "ホログラムと計測表示",
   "title": "Sci-fi Hologram HUD — Style Prompt",
   "description": "An object is scanned into a glowing wireframe. Target boxes lock onto its parts; each opens in a local exploded view, a leader pulls out, and its number rolls from garbage glyphs into the real value. It may light up, once, into a solid hologram.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/hologram-hud"
  },
  {
   "id": "impasto",
   "label_ja": "厚塗り油絵",
   "title": "Impasto · Palette Knife — Style Prompt",
   "description": "Thick oil paint laid with a palette knife: big, flat, sharp-edged planes of colour, raked by light so every ridge of paint shows. Clarity first: value structure before texture, hard edges at the focus, calm planes everywhere else.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/impasto"
  },
  {
   "id": "ink-wash",
   "label_ja": "水墨画",
   "title": "Chinese Ink Wash — Style Prompt",
   "description": "Xieyi ink painting on rice paper, animated: blank paper is space, one brushstroke is a mountain, a wave, a gesture or a cut.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/ink-wash"
  },
  {
   "id": "iso-infographic",
   "label_ja": "等角投影の図解",
   "title": "Isometric Infographic — Style Prompt",
   "description": "A system diagram comes alive: an isometric diorama of flat three-tone blocks, thin ink labels and Isotype numbers, where things open up to show their insides and the numbers are drawn, not stated.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/iso-infographic"
  },
  {
   "id": "kino-montage",
   "label_ja": "赤黒の構成主義モンタージュ",
   "title": "Constructivist Montage — Style Prompt",
   "description": "Real archive footage, photographs and documents, printed as one ink-and-paper poster with a single red, and cut on a machine beat. Diagonal bands carry the type; windows cut along the axis hold the film; people are scissored out of photographs and stacked into structures; numbers count, documents are marked in red, and two images collide to make a third idea.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/kino-montage"
  },
  {
   "id": "lidar-survey",
   "label_ja": "実測点群の地形",
   "title": "LiDAR Survey — Style Prompt",
   "description": "Real airborne laser points of a real place, floating in the dark as a measured cloud; a scan line or a cutting plane passes through them and the points condense into a solid, raking-lit surface, which is then measured with hairline instruments. One designed camera move carries the whole film: the cloud is something you fly through, not a picture you look at.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/lidar-survey"
  },
  {
   "id": "living-screencast",
   "label_ja": "キャラが住む操作画面",
   "title": "Living Screencast — Style Prompt",
   "description": "A product walkthrough that looks like a real screen recording, where a low-resolution mascot lives inside a high-resolution interface and acts out what the software is doing.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/living-screencast"
  },
  {
   "id": "lowpoly-island",
   "label_ja": "低ポリゴンの模型の島",
   "title": "Low-poly Isometric Island — Style Prompt",
   "description": "A tiny faceted world seen through an orthographic isometric lens: everything is a geometric block, and everything that appears arrives with a bounce and a note.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/lowpoly-island"
  },
  {
   "id": "microgame",
   "label_ja": "短いミニゲームの連続",
   "title": "Microgame Frenzy — Style Prompt",
   "description": "A rapid-fire party-game film: one command word, a few seconds, one action. Every microgame is drawn in a completely different art style, and the film keeps getting faster.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/microgame"
  },
  {
   "id": "microscope",
   "label_ja": "実顕微鏡素材の物語",
   "title": "Microscope Story — Style Prompt",
   "description": "Real, licence-clean microscopy of a real specimen, seen as it is, and one continuous change of scale that carries the viewer from the glass slide in the hand to a single cell. Focus breathes when the magnification changes, a focal plane sweeps when the camera lands, and every scale bar, field of view and reading comes from the image's own metadata.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/microscope"
  },
  {
   "id": "midcentury-toon",
   "label_ja": "ミッドセンチュリーアニメ",
   "title": "Mid-century Cartoon — Style Prompt",
   "description": "1950s flat colour and limited animation for \"follow along\" films: colour printed a few pixels off its broken ink line, bodies that hold still while hands do the work, abstract colour-block rooms, a calm classroom narrator, and a cool-jazz combo.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/midcentury-toon"
  },
  {
   "id": "news-package",
   "label_ja": "テレビニュース一式",
   "title": "Broadcast News Package — Style Prompt",
   "description": "A television newsroom's on-air package, built entirely in code: a sting that becomes the channel bug, a rundown of today's stories that opens and closes the bulletin, a lower-third strap that never leaves the bottom of the frame, and full-frame graphics (split-flap price boards, a line breaking a threshold, explainer maps, documents flying out of a city, quote cards, spec cards with proportion bars, stamps) that carry the facts. The style is the **package system plus its cutting rules**, not a drawing style. 16:9, a clean frame: no burned-in subtitles, no news crawl.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/news-package"
  },
  {
   "id": "newsreel",
   "label_ja": "古いニュース映画",
   "title": "1920s Newsreel — Style Prompt",
   "description": "A sound newsreel of the late 1920s, cut from real archive material: a searchlight-and-globe ident with a brass fanfare, a newspaper that spins into the lens, a fast and cheerful announcer on an optical soundtrack, place-and-date cards, maps, magazine pages and documents, wipes, flips and irises, and a hot band that can stop dead for the punchline.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/newsreel"
  },
  {
   "id": "one-line",
   "label_ja": "一筆描きの変形",
   "title": "One-line Drawing — Style Prompt",
   "description": "A single ink line that never leaves the paper. Everything on screen is that one line being drawn; scenes don't cut, they morph.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/one-line"
  },
  {
   "id": "paper-lantern",
   "label_ja": "光る重ね切り絵",
   "title": "Paper-cut Lightbox — Style Prompt",
   "description": "A layered paper-cut shadow box (纸雕灯) lit from behind: 6–9 sheets of cut card stacked in a shallow box, a warm light glowing through the paper, windows and moons burning through holes, soft shadows falling from each layer onto the next. The frame is the box; the camera is a macro lens inside a lamp.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/paper-lantern"
  },
  {
   "id": "paper-popup",
   "label_ja": "飛び出す絵本",
   "title": "Paper Pop-up Book — Style Prompt",
   "description": "A pop-up book on a real desk becomes a stage: flat cut-paper actors with white borders perform in front of paper sets that spring up from the page, under real lamp light and a real macro lens.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/paper-popup"
  },
  {
   "id": "papercut-red",
   "label_ja": "赤い伝統切り絵",
   "title": "Red Paper-cut — Style Prompt",
   "description": "Chinese window-flower paper-cuts brought to life: jointed red cut-outs on paper grounds, where the cut *is* the drawing and the holes are where the light gets in.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/papercut-red"
  },
  {
   "id": "pictogram-motion",
   "label_ja": "図記号と幾何学のリズム",
   "title": "Pictogram Motion — Style Prompt",
   "description": "A beat-locked flash-card film built from three things only: a **square-grid \"core graphic\"** of circles, half-discs and tiny patterned cells whose rows slide past each other; **geometric pictograms** made of round-capped bars and a disc head; and **bold bilingual type** that slides up out of masks. Every cut lands on a drum hit.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/pictogram-motion"
  },
  {
   "id": "pixel-rpg",
   "label_ja": "レトロRPG画面",
   "title": "16-bit Pixel RPG — Style Prompt",
   "description": "A short film that looks, sounds and *behaves* like a mid-90s console role-playing game: 320×180 pixels, a limited indexed palette, text boxes that type, menus, save files, chip music with echo.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/pixel-rpg"
  },
  {
   "id": "risograph",
   "label_ja": "リソグラフ印刷",
   "title": "Risograph Print — Style Prompt",
   "description": "Animation that looks printed, frame by frame, on a stencil duplicator: two or three translucent spot inks overprinted on warm paper, halftone dots, ink grain, and plates that never quite line up.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/risograph"
  },
  {
   "id": "rubber-hose",
   "label_ja": "白黒の柔らかな手足のアニメ",
   "title": "1930s Rubber Hose Cartoon — Style Prompt",
   "description": "Black-and-white hand-inked cartoons where every object is alive and swings to a hot jazz band.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/rubber-hose"
  },
  {
   "id": "satellite-briefing",
   "label_ja": "衛星画像の分析説明",
   "title": "Satellite Briefing — Style Prompt",
   "description": "Real satellite imagery of a real place, graded down to an analyst's grey, with thin white measurement lines drawn on the ground: a lock-on reticle, outlines, a range line, one reading. One continuous zoom built from stacked imagery plates carries the viewer from orbit to the ground and back, and time can run inside one locked frame.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/satellite-briefing"
  },
  {
   "id": "scifi-toon",
   "label_ja": "SF会話アニメ",
   "title": "Sci-Fi Sitcom Toon — Style Prompt",
   "description": "Adult-animation sci-fi sitcom: thick boiling outlines, flat colour, a duo whose reactions don't match, a glowing portal, and one palette per world.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/scifi-toon"
  },
  {
   "id": "shadow-puppet",
   "label_ja": "影絵人形劇",
   "title": "Shadow Puppetry — Style Prompt",
   "description": "Chinese shadow theatre: translucent dyed-hide puppets, carved like lace, pressed against a cotton screen and lit from behind by oil lamps.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/shadow-puppet"
  },
  {
   "id": "silent-film",
   "label_ja": "サイレント映画",
   "title": "1920s Silent Film — Style Prompt",
   "description": "An engraved-illustration silent film projected in a picture house: ink line and silver wash, a 4:3 print that flickers and weaves between velvet curtains, intertitles instead of voices, and a cinema pianist who plays every beat.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/silent-film"
  },
  {
   "id": "silkscreen-poster",
   "label_ja": "シルクスクリーン旅行ポスター",
   "title": "Silkscreen Travel Poster — Style Prompt",
   "description": "Opaque, hard-edged flat inks pulled one colour at a time through a screen: 4–6 inks per poster, stepped colour bands instead of gradients, thin paper-white gaps where the registration slips. Information is revealed the way the print is made: one layer, one beat.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/silkscreen-poster"
  },
  {
   "id": "spy-titles",
   "label_ja": "スパイ映画のタイトル風",
   "title": "60s Spy Title Sequence — Style Prompt",
   "description": "A cut-paper, four-ink opening title sequence for a film that never existed: silhouettes move through sets built out of the credits themselves, every brass stab is a cut, and a title is assembled from the pieces.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/spy-titles"
  },
  {
   "id": "stained-glass",
   "label_ja": "ステンドグラス",
   "title": "Stained Glass — Style Prompt",
   "description": "A medieval stained-glass window seen from inside a dark stone hall, alive only where the sun touches it: light is the clock, the camera and the story.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/stained-glass"
  },
  {
   "id": "swiss-motion",
   "label_ja": "グリッドと文字のモーション",
   "title": "Swiss Motion Graphics — Style Prompt",
   "description": "International Typographic Style in motion: a modular grid, one typeface, one signal colour, and movement as exact as a printing press.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/swiss-motion"
  },
  {
   "id": "teardown",
   "label_ja": "実物の構造分解",
   "title": "Exploded Teardown — Style Prompt",
   "description": "A real product, built from its own engineering files (CAD, PCB layout, bill of materials), lit like a studio packshot and taken apart in front of the camera: the layers lift on one axis, the camera travels between them, every part is named with the numbers its files contain, and it closes again into one object.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/teardown"
  },
  {
   "id": "telestrator",
   "label_ja": "スポーツ映像への描込み",
   "title": "Sports Telestrator — Style Prompt",
   "description": "The TV football analysis segment: play the clip at full speed, rewind, freeze it, and draw on the broadcast picture — rings under players' feet, marker arrows for the ball, a red patch for the space nobody covered — then play on, switch angles, count the frames, and flatten the pitch into a board. Real match footage is the ground; every line is drawn on top of it and moves with it. A studio show's packaging (sting, corner bug, score bar, a yellow wipe) holds it together. 16:9.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/telestrator"
  },
  {
   "id": "tilt-shift",
   "label_ja": "ミニチュア風の街",
   "title": "Tilt-Shift Miniature — Style Prompt",
   "description": "A real-looking place photographed from high above with a tilted lens and a time-lapse camera, so the whole world reads as a tabletop model.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/tilt-shift"
  },
  {
   "id": "ukiyoe",
   "label_ja": "動く浮世絵",
   "title": "Ukiyo-e — Style Prompt",
   "description": "Edo-period woodblock prints brought to life: flat colour blocks, carved ink lines, bokashi skies, paper you can feel, and a camera that moves over the print like an unrolling handscroll.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/ukiyoe"
  },
  {
   "id": "urban-sketch",
   "label_ja": "街のペンと水彩スケッチ",
   "title": "Urban Sketch · Pen & Wash — Style Prompt",
   "description": "A sketchbook page drawn on location: fine sepia fineliner lines that wobble, overshoot and never quite close, with loose transparent watercolour dropped on top. The colour sits slightly off the lines, spills over them, and dissolves into cream cold-press paper at the page edge.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/urban-sketch"
  },
  {
   "id": "visual-investigation",
   "label_ja": "映像と資料の時系列検証",
   "title": "Visual Investigation — Style Prompt",
   "description": "A cold investigation desk: footage, photographs, documents, sound and maps from one real event, laid out on one shared clock so they check each other. The clock lives inside the picture — timestamps on the evidence, a playhead on a data chart, a stopwatch over the decisive seconds; frozen frames are circled and magnified; quotes are highlighted on the page they come from; a plan shows where cameras stood and where they looked; what is known and what is not are kept apart; at the end every piece of evidence is pulled into one map.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/visual-investigation"
  },
  {
   "id": "watercolor",
   "label_ja": "水彩筆の描画",
   "title": "Watercolor Brush — Style Prompt",
   "description": "A hand-painted journal page that paints itself: translucent brush strokes with dry-brush flying white on warm cotton paper, hand-written notes beside what is painted, nothing drawn with a vector line.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/watercolor"
  },
  {
   "id": "white-model",
   "label_ja": "白い模型への投影",
   "title": "Projection on White Model — Style Prompt",
   "description": "A pure white massing model of a real place stands on a plinth in a dark room, and a projector paints data onto it as light: one layer at a time, falling on the surfaces that face it, spilling a little past the plate. The model never changes; only the light on it does.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/white-model"
  },
  {
   "id": "whiteboard",
   "label_ja": "ホワイトボード解説",
   "title": "Whiteboard Explainer — Style Prompt",
   "description": "An explainer drawn live on one glossy dry-erase board: single-line handwriting that is actually *written* stroke by stroke, floating markers with no hand, magnets that can move, an eraser that can rewind, and a camera that travels across the board instead of cutting.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/whiteboard"
  },
  {
   "id": "woodcut",
   "label_ja": "木版画",
   "title": "Woodcut Print — Style Prompt",
   "description": "A relief print that carves itself: every frame is a black wood block, and light only exists where a knife has cut it away. One colour at most, and only for the thing that burns.",
   "url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/styles/woodcut"
  }
 ]
};
