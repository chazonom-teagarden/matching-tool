# matching-tool
趣味が複数ある場合は 縦持ち形式（1人複数行）に対応 しています。
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>社内マッチングツール</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#F5F4F0;
  --surface:#FFFFFF;
  --surface2:#F0EFE9;
  --border:#E0DED6;
  --text:#1A1916;
  --text2:#6B6860;
  --text3:#A8A69F;
  --accent:#2D5A3D;
  --accent-light:#EBF2ED;
  --c1:#1B4F8A;
  --c1-light:#E8EFF8;
  --c2:#2D5A3D;
  --c2-light:#EBF2ED;
  --c3:#7A3B00;
  --c3-light:#F5EBE0;
  --err:#8B2020;
  --err-light:#FBF0F0;
  --radius:8px;
  --radius-lg:12px;
  --shadow:0 1px 3px rgba(0,0,0,0.06),0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:0 4px 12px rgba(0,0,0,0.08);
}
*{box-sizing:border-box;margin:0;padding:0}
body{
  font-family:'Noto Sans JP',sans-serif;
  background:var(--bg);
  color:var(--text);
  min-height:100vh;
  font-size:14px;
  line-height:1.6;
}
header{
  background:var(--surface);
  border-bottom:1px solid var(--border);
  padding:0 32px;
  display:flex;
  align-items:center;
  gap:16px;
  height:56px;
  position:sticky;
  top:0;
  z-index:100;
  box-shadow:var(--shadow);
}
.logo{font-size:15px;font-weight:700;letter-spacing:-0.02em;color:var(--text);}
.logo span{color:var(--accent);}
.header-sub{font-size:12px;color:var(--text3);font-family:'DM Mono',monospace;}
main{max-width:960px;margin:0 auto;padding:32px 24px 80px;}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;margin-bottom:16px;box-shadow:var(--shadow);}
.card-title{font-size:13px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;display:flex;align-items:center;gap:8px;}
.card-title::before{content:'';display:inline-block;width:3px;height:14px;background:var(--accent);border-radius:2px;}
.info-box{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;font-size:12.5px;color:var(--text2);line-height:1.8;margin-bottom:16px;}
.info-box code{font-family:'DM Mono',monospace;font-size:11.5px;background:var(--surface);border:1px solid var(--border);border-radius:4px;padding:1px 5px;}
textarea{width:100%;min-height:180px;font-family:'DM Mono',monospace;font-size:12.5px;line-height:1.7;border:1px solid var(--border);border-radius:var(--radius);padding:12px;background:var(--surface2);color:var(--text);resize:vertical;transition:border-color 0.15s;}
textarea:focus{outline:none;border-color:var(--accent);background:var(--surface);}
.btn-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;}
button{font-family:'Noto Sans JP',sans-serif;font-size:13px;font-weight:500;padding:8px 18px;border-radius:var(--radius);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all 0.15s;white-space:nowrap;}
button:hover{background:var(--surface2);}
button:active{transform:scale(0.97);}
button.primary{background:var(--accent);color:#fff;border-color:var(--accent);font-weight:700;padding:9px 22px;}
button.primary:hover{background:#244a32;border-color:#244a32;}
.err-msg{color:var(--err);font-size:13px;margin-top:10px;padding:10px 14px;background:var(--err-light);border:1px solid #f0c0c0;border-radius:var(--radius);display:none;}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px;margin-bottom:20px;}
.stat{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:14px 12px;text-align:center;}
.stat-num{font-family:'DM Mono',monospace;font-size:28px;font-weight:500;line-height:1;margin-bottom:4px;}
.stat-label{font-size:11.5px;color:var(--text3);}
.tab-row{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px;}
.tab{font-size:12.5px;padding:6px 14px;border-radius:999px;border:1px solid var(--border);background:transparent;color:var(--text2);cursor:pointer;font-weight:400;display:inline-flex;align-items:center;gap:6px;transition:all 0.15s;}
.tab:hover{background:var(--surface2);}
.tab.active{background:var(--text);color:#fff;border-color:var(--text);font-weight:500;}
.badge{font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px;font-family:'DM Mono',monospace;letter-spacing:0.02em;}
.badge-1{background:var(--c1-light);color:var(--c1);}
.badge-2{background:var(--c2-light);color:var(--c2);}
.badge-3{background:var(--c3-light);color:var(--c3);}
.filter-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:14px;}
.filter-row label{font-size:12.5px;color:var(--text2);}
select{font-family:'Noto Sans JP',sans-serif;font-size:13px;padding:6px 10px;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text);cursor:pointer;}
select:focus{outline:none;border-color:var(--accent);}
.copy-btn{font-size:12px;padding:6px 12px;margin-left:auto;}
.table-wrap{overflow-x:auto;}
table{width:100%;border-collapse:collapse;font-size:13px;min-width:600px;}
th{text-align:left;font-weight:600;font-size:11.5px;color:var(--text3);text-transform:uppercase;letter-spacing:0.06em;border-bottom:2px solid var(--border);padding:8px 10px;white-space:nowrap;}
td{padding:10px 10px;border-bottom:1px solid var(--border);vertical-align:top;}
tr:last-child td{border-bottom:none;}
tr:hover td{background:var(--surface2);}
.person-name{font-weight:700;font-size:13.5px;}
.person-meta{font-size:11px;color:var(--text3);margin-top:2px;font-family:'DM Mono',monospace;}
.reason-text{font-size:12.5px;color:var(--accent);font-weight:500;}
.no-num{font-family:'DM Mono',monospace;font-size:12px;color:var(--text3);}
.year-diff{font-family:'DM Mono',monospace;font-size:12px;text-align:center;}
.empty{text-align:center;padding:40px;color:var(--text3);font-size:14px;}
#result-section{display:none;}
@media(max-width:640px){
  header{padding:0 16px;}
  main{padding:20px 16px 60px;}
  .card{padding:18px 16px;}
  .stats{grid-template-columns:repeat(3,1fr);}
}
</style>
</head>
<body>
<header>
  <div class="logo">社内<span>マッチング</span>ツール</div>
  <div class="header-sub">Internal Matching Tool</div>
</header>
<main>
  <div class="card">
    <div class="card-title">データ入力</div>
    <div class="info-box">
      Googleスプレッドシートを <strong>全選択 → コピー</strong> してそのまま貼り付けてください。<br>
      ヘッダー行（1行目）は必須：<code>名前</code> <code>拠点</code> <code>趣味</code> <code>スキル</code> <code>職種</code> <code>所属チーム</code> <code>入社年</code>（列順は自動検出）<br>
      趣味が複数ある場合は <strong>縦持ち形式（1人複数行）に対応</strong> しています。
    </div>
    <textarea id="raw-data" placeholder="名前&#9;拠点&#9;趣味&#9;スキル&#9;職種&#9;所属チーム&#9;入社年
山田太郎&#9;東京&#9;読書&#9;Python&#9;エンジニア&#9;開発A&#9;2019
山田太郎&#9;東京&#9;登山&#9;Python&#9;エンジニア&#9;開発A&#9;2019
田中花子&#9;大阪&#9;映画&#9;営業&#9;営業&#9;営業B&#9;2022
..."></textarea>
    <div id="parse-err" class="err-msg"></div>
    <div class="btn-row">
      <button class="primary" onclick="parseAndRun()">▶ マッチング実行</button>
      <button onclick="loadSample()">サンプルデータを読み込む</button>
      <button onclick="clearAll()">クリア</button>
    </div>
  </div>
  <div id="result-section" class="card">
    <div class="card-title">マッチング結果</div>
    <div class="stats" id="stats-area"></div>
    <div class="tab-row">
      <button class="tab active" onclick="filterType('all')">すべて</button>
      <button class="tab" onclick="filterType('1')"><span class="badge badge-1">①</span> 東京同士</button>
      <button class="tab" onclick="filterType('2')"><span class="badge badge-2">②</span> 大阪同士</button>
      <button class="tab" onclick="filterType('3')"><span class="badge badge-3">③</span> 拠点またぎ</button>
    </div>
    <div class="filter-row">
      <label>マッチ理由で絞り込み：</label>
      <select id="reason-filter" onchange="renderTable()"><option value="all">すべて</option></select>
      <button class="copy-btn" onclick="copyTSV()">📋 TSVコピー（スプレッドシートに貼付け）</button>
    </div>
    <div class="table-wrap"><div id="table-area"></div></div>
  </div>
</main>
<script>
const SAMPLE=`名前\t拠点\t趣味\tスキル\t職種\t所属チーム\t入社年
山田太郎\t東京\t読書\tPython\tエンジニア\t開発A\t2019
山田太郎\t東京\t登山\tPython\tエンジニア\t開発A\t2019
田中花子\t東京\t映画\t営業\t営業\t営業B\t2022
田中花子\t東京\t読書\t営業\t営業\t営業B\t2022
鈴木一郎\t東京\t読書\tExcel\t人事\t人事A\t2021
鈴木一郎\t東京\t料理\tExcel\t人事\t人事A\t2021
佐藤美咲\t東京\t登山\tPython\tエンジニア\t開発B\t2017
佐藤美咲\t東京\t写真\tPython\tエンジニア\t開発B\t2017
高橋健\t東京\t映画\tデザイン\tデザイナー\t開発A\t2023
高橋健\t東京\t音楽\tデザイン\tデザイナー\t開発A\t2023
伊藤りか\t東京\t料理\t経理\t経理\t管理A\t2018
伊藤りか\t東京\tヨガ\t経理\t経理\t管理A\t2018
渡辺誠\t東京\t読書\tPython\tエンジニア\t開発B\t2015
渡辺誠\t東京\tスポーツ\tPython\tエンジニア\t開発B\t2015
中村あい\t東京\t写真\tプレゼン\t営業\t営業A\t2022
中村あい\t東京\t旅行\tプレゼン\t営業\t営業A\t2022
小林浩\t大阪\t読書\tPython\tエンジニア\t開発C\t2018
小林浩\t大阪\t音楽\tPython\tエンジニア\t開発C\t2018
加藤さくら\t大阪\t映画\tExcel\t経理\t管理B\t2021
加藤さくら\t大阪\t読書\tExcel\t経理\t管理B\t2021
吉田大輔\t大阪\t登山\t営業\t営業\t営業C\t2016
吉田大輔\t大阪\tスポーツ\t営業\t営業\t営業C\t2016
山口めい\t大阪\t読書\tPython\tエンジニア\t開発C\t2023
山口めい\t大阪\t料理\tPython\tエンジニア\t開発C\t2023
松本聡\t大阪\t音楽\tデザイン\tデザイナー\t開発D\t2019
松本聡\t大阪\t写真\tデザイン\tデザイナー\t開発D\t2019
木村俊\t名古屋\t読書\tPython\tエンジニア\t開発E\t2019
木村俊\t名古屋\t映画\tPython\tエンジニア\t開発E\t2019
林あかね\t東京\t音楽\tデザイン\tデザイナー\t開発A\t2016
林あかね\t東京\tヨガ\tデザイン\tデザイナー\t開発A\t2016
清水拓\t大阪\tスポーツ\t営業\t営業\t営業C\t2022
清水拓\t大阪\t旅行\t営業\t営業\t営業C\t2022
斎藤はな\t名古屋\t読書\tExcel\t人事\t人事B\t2020
斎藤はな\t名古屋\t料理\tExcel\t人事\t人事B\t2020`;
let allMatches=[],currentType='all';
function loadSample(){document.getElementById('raw-data').value=SAMPLE;}
function clearAll(){document.getElementById('raw-data').value='';document.getElementById('parse-err').style.display='none';document.getElementById('result-section').style.display='none';allMatches=[];}
function parseData(raw){
  const lines=raw.trim().split('\n').filter(l=>l.trim());
  if(lines.length<2)throw new Error('データが少なすぎます');
  const headers=lines[0].split('\t').map(h=>h.trim());
  const keys=['名前','拠点','趣味','スキル','職種','所属チーム','入社年'];
  const idx={};
  keys.forEach(k=>{const i=headers.findIndex(h=>h.replace(/\s/g,'')===k.replace(/\s/g,''));if(i===-1)throw new Error(`列「${k}」が見つかりません`);idx[k]=i;});
  const map=new Map();
  lines.slice(1).forEach((line,li)=>{
    const cols=line.split('\t');
    const name=cols[idx['名前']]?.trim();if(!name)return;
    const year=parseInt(cols[idx['入社年']]?.trim());if(isNaN(year))throw new Error(`${li+2}行目の入社年が数値ではありません`);
    const hobby=cols[idx['趣味']]?.trim();
    if(map.has(name)){const p=map.get(name);if(hobby&&!p.hobbies.includes(hobby))p.hobbies.push(hobby);}
    else{map.set(name,{name,location:cols[idx['拠点']]?.trim()||'',hobbies:hobby?[hobby]:[],skills:(cols[idx['スキル']]?.trim()||'').split(/[,、，]/).map(s=>s.trim()).filter(Boolean),role:cols[idx['職種']]?.trim()||'',team:cols[idx['所属チーム']]?.trim()||'',year});}
  });
  return[...map.values()];
}
function overlap(a,b){return a.filter(x=>b.includes(x));}
function match(people){
  const results=[];let id=1;
  for(let i=0;i<people.length;i++){for(let j=i+1;j<people.length;j++){
    const A=people[i],B=people[j];if(A.team===B.team)continue;
    const yearDiff=Math.abs(A.year-B.year),sameLoc=A.location===B.location,diffLoc=!sameLoc;
    const sh=overlap(A.hobbies,B.hobbies),sr=A.role===B.role&&A.role!=='';
    const reasons=[];if(sh.length)reasons.push('趣味：'+sh.join('・'));if(sr)reasons.push('職種：'+A.role);
    if(!reasons.length)continue;const reason=reasons.join(' / ');
    if(sameLoc&&A.location==='東京'&&yearDiff>=2)results.push({id:id++,type:1,typeLabel:'①東京同士',A,B,reason});
    else if(sameLoc&&A.location==='大阪'&&yearDiff>=2)results.push({id:id++,type:2,typeLabel:'②大阪同士',A,B,reason});
    else if(diffLoc)results.push({id:id++,type:3,typeLabel:'③拠点またぎ',A,B,reason});
  }}
  return results;
}
function parseAndRun(){
  const raw=document.getElementById('raw-data').value;
  const errEl=document.getElementById('parse-err');errEl.style.display='none';
  try{
    const people=parseData(raw);if(people.length<2)throw new Error('社員データが2名以上必要です');
    allMatches=match(people);currentType='all';
    renderStats(people.length);updateReasonFilter();renderTable();
    document.getElementById('result-section').style.display='block';
    document.getElementById('result-section').scrollIntoView({behavior:'smooth',block:'start'});
  }catch(e){errEl.textContent=e.message;errEl.style.display='block';}
}
function renderStats(total){
  const t1=allMatches.filter(m=>m.type===1).length,t2=allMatches.filter(m=>m.type===2).length,t3=allMatches.filter(m=>m.type===3).length;
  document.getElementById('stats-area').innerHTML=`<div class="stat"><div class="stat-num">${total}</div><div class="stat-label">社員数</div></div><div class="stat"><div class="stat-num">${allMatches.length}</div><div class="stat-label">総マッチ数</div></div><div class="stat"><div class="stat-num" style="color:var(--c1)">${t1}</div><div class="stat-label">①東京同士</div></div><div class="stat"><div class="stat-num" style="color:var(--c2)">${t2}</div><div class="stat-label">②大阪同士</div></div><div class="stat"><div class="stat-num" style="color:var(--c3)">${t3}</div><div class="stat-label">③拠点またぎ</div></div>`;
}
function filterType(t){currentType=t;document.querySelectorAll('.tab').forEach((el,i)=>el.classList.toggle('active',['all','1','2','3'][i]===t));renderTable();}
function getFiltered(){let list=allMatches;if(currentType!=='all')list=list.filter(m=>m.type===+currentType);const rf=document.getElementById('reason-filter').value;if(rf&&rf!=='all')list=list.filter(m=>m.reason.includes(rf));return list;}
function updateReasonFilter(){
  const reasons=new Set(allMatches.map(m=>m.reason.split(' / ')).flat());
  const sel=document.getElementById('reason-filter');sel.innerHTML='<option value="all">すべて</option>';
  [...reasons].sort().forEach(r=>{sel.innerHTML+=`<option value="${r}">${r}</option>`;});
}
const badgeHtml={1:'<span class="badge badge-1">①東京</span>',2:'<span class="badge badge-2">②大阪</span>',3:'<span class="badge badge-3">③またぎ</span>'};
function renderTable(){
  const list=getFiltered();const area=document.getElementById('table-area');
  if(!list.length){area.innerHTML='<div class="empty">条件に合うマッチングはありません</div>';return;}
  let html=`<table><thead><tr><th style="width:40px">No.</th><th style="width:86px">パターン</th><th style="width:22%">Aさん</th><th style="width:22%">Bさん</th><th>マッチ理由</th><th style="width:52px">年差</th></tr></thead><tbody>`;
  list.forEach(m=>{const diff=Math.abs(m.A.year-m.B.year);html+=`<tr><td class="no-num">${m.id}</td><td>${badgeHtml[m.type]}</td><td><div class="person-name">${m.A.name}</div><div class="person-meta">${m.A.location} · ${m.A.team} · ${m.A.year}</div></td><td><div class="person-name">${m.B.name}</div><div class="person-meta">${m.B.location} · ${m.B.team} · ${m.B.year}</div></td><td class="reason-text">${m.reason}</td><td class="year-diff">${diff}年</td></tr>`;});
  html+='</tbody></table>';area.innerHTML=html;
}
function copyTSV(){
  const list=getFiltered();
  const header='No.\tパターン\tAさん\tA拠点\tAチーム\tA入社年\tBさん\tB拠点\tBチーム\tB入社年\tマッチ理由\t入社年差';
  const rows=list.map(m=>`${m.id}\t${m.typeLabel}\t${m.A.name}\t${m.A.location}\t${m.A.team}\t${m.A.year}\t${m.B.name}\t${m.B.location}\t${m.B.team}\t${m.B.year}\t${m.reason}\t${Math.abs(m.A.year-m.B.year)}年`);
  navigator.clipboard.writeText([header,...rows].join('\n')).then(()=>{
    const btn=event.target.closest('button');const orig=btn.innerHTML;btn.innerHTML='✓ コピーしました！';btn.style.color='var(--accent)';setTimeout(()=>{btn.innerHTML=orig;btn.style.color='';},2000);
  });
}
</script>
</body>
</html>
