// =============================================
// サンプルデータ
// =============================================
const SAMPLE = `名前\t拠点\t趣味\tスキル\t職種\t所属チーム\t入社年
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

// =============================================
// 状態
// =============================================
let allMatches = [];
let currentType = 'all';

// =============================================
// UI操作
// =============================================
function loadSample() {
  document.getElementById('raw-data').value = SAMPLE;
}

function clearAll() {
  document.getElementById('raw-data').value = '';
  document.getElementById('parse-err').style.display = 'none';
  document.getElementById('result-section').style.display = 'none';
  allMatches = [];
}

// =============================================
// データパース（縦持ち対応）
// =============================================
function parseData(raw) {
  const lines = raw.trim().split('\n').filter(l => l.trim());
  if (lines.length < 2) throw new Error('データが少なすぎます（ヘッダー＋1行以上必要）');

  const headers = lines[0].split('\t').map(h => h.trim());
  const keys = ['名前', '拠点', '趣味', 'スキル', '職種', '所属チーム', '入社年'];
  const idx = {};
  keys.forEach(k => {
    const i = headers.findIndex(h => h.replace(/\s/g, '') === k.replace(/\s/g, ''));
    if (i === -1) throw new Error(`列「${k}」が見つかりません。1行目のヘッダーを確認してください。`);
    idx[k] = i;
  });

  const map = new Map();
  lines.slice(1).forEach((line, li) => {
    const cols = line.split('\t');
    const name = cols[idx['名前']]?.trim();
    if (!name) return;
    const year = parseInt(cols[idx['入社年']]?.trim());
    if (isNaN(year)) throw new Error(`${li + 2}行目の入社年が数値ではありません`);
    const hobby = cols[idx['趣味']]?.trim();

    if (map.has(name)) {
      const p = map.get(name);
      if (hobby && !p.hobbies.includes(hobby)) p.hobbies.push(hobby);
    } else {
      map.set(name, {
        name,
        location: cols[idx['拠点']]?.trim() || '',
        hobbies: hobby ? [hobby] : [],
        skills: (cols[idx['スキル']]?.trim() || '').split(/[,、，]/).map(s => s.trim()).filter(Boolean),
        role: cols[idx['職種']]?.trim() || '',
        team: cols[idx['所属チーム']]?.trim() || '',
        year
      });
    }
  });
  return [...map.values()];
}

// =============================================
// マッチングロジック
// =============================================
// 変更したい場合はこのブロックを編集してください
//
// 条件①：東京同士 / 入社年2年差以上 / 趣味が同じ / チームが異なる
// 条件②：大阪同士 / 入社年2年差以上 / 趣味が同じ / チームが異なる
// 条件③：拠点が異なる / 趣味が同じ / チームが異なる
// 条件④：拠点不問 / 職種が同じ / チームが異なる
// =============================================
function overlap(a, b) {
  return a.filter(x => b.includes(x));
}

function match(people) {
  const results = [];
  let id = 1;

  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      const A = people[i], B = people[j];

      // 共通前提：チームが異なる
      if (A.team === B.team) continue;

      const yearDiff = Math.abs(A.year - B.year);
      const sameLoc = A.location === B.location;
      const diffLoc = !sameLoc;
      const sharedHobbies = overlap(A.hobbies, B.hobbies);
      const sameRole = A.role === B.role && A.role !== '';

      // ①東京同士：入社年2年差以上 & 趣味が同じ
      if (sameLoc && A.location === '東京' && yearDiff >= 2 && sharedHobbies.length) {
        results.push({
          id: id++, type: 1, typeLabel: '①東京同士', A, B,
          reason: '趣味：' + sharedHobbies.join('・')
        });
      }
      // ②大阪同士：入社年2年差以上 & 趣味が同じ
      else if (sameLoc && A.location === '大阪' && yearDiff >= 2 && sharedHobbies.length) {
        results.push({
          id: id++, type: 2, typeLabel: '②大阪同士', A, B,
          reason: '趣味：' + sharedHobbies.join('・')
        });
      }
      // ③拠点またぎ：趣味が同じ
      else if (diffLoc && sharedHobbies.length) {
        results.push({
          id: id++, type: 3, typeLabel: '③拠点またぎ', A, B,
          reason: '趣味：' + sharedHobbies.join('・')
        });
      }
      // ④職種マッチ：拠点不問・職種が同じ（①②③に該当しないペアも含む）
      else if (sameRole) {
        results.push({
          id: id++, type: 4, typeLabel: '④職種マッチ', A, B,
          reason: '職種：' + A.role
        });
      }
    }
  }
  return results;
}

// =============================================
// 実行
// =============================================
function parseAndRun() {
  const raw = document.getElementById('raw-data').value;
  const errEl = document.getElementById('parse-err');
  errEl.style.display = 'none';
  try {
    const people = parseData(raw);
    if (people.length < 2) throw new Error('社員データが2名以上必要です');
    allMatches = match(people);
    currentType = 'all';
    renderStats(people.length);
    updateReasonFilter();
    renderTable();
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (e) {
    errEl.textContent = e.message;
    errEl.style.display = 'block';
  }
}

// =============================================
// 表示
// =============================================
function renderStats(total) {
  const counts = [1, 2, 3, 4].map(t => allMatches.filter(m => m.type === t).length);
  document.getElementById('stats-area').innerHTML = `
    <div class="stat"><div class="stat-num">${total}</div><div class="stat-label">社員数</div></div>
    <div class="stat"><div class="stat-num">${allMatches.length}</div><div class="stat-label">総マッチ数</div></div>
    <div class="stat"><div class="stat-num" style="color:var(--c1)">${counts[0]}</div><div class="stat-label">①東京同士</div></div>
    <div class="stat"><div class="stat-num" style="color:var(--c2)">${counts[1]}</div><div class="stat-label">②大阪同士</div></div>
    <div class="stat"><div class="stat-num" style="color:var(--c3)">${counts[2]}</div><div class="stat-label">③拠点またぎ</div></div>
    <div class="stat"><div class="stat-num" style="color:var(--c4)">${counts[3]}</div><div class="stat-label">④職種マッチ</div></div>`;
}

function filterType(t) {
  currentType = t;
  document.querySelectorAll('.tab').forEach((el, i) => {
    el.classList.toggle('active', ['all', '1', '2', '3', '4'][i] === t);
  });
  renderTable();
}

function getFiltered() {
  let list = allMatches;
  if (currentType !== 'all') list = list.filter(m => m.type === +currentType);
  const rf = document.getElementById('reason-filter').value;
  if (rf && rf !== 'all') list = list.filter(m => m.reason.includes(rf));
  return list;
}

function updateReasonFilter() {
  const reasons = new Set(allMatches.map(m => m.reason.split(' / ')).flat());
  const sel = document.getElementById('reason-filter');
  sel.innerHTML = '<option value="all">すべて</option>';
  [...reasons].sort().forEach(r => {
    sel.innerHTML += `<option value="${r}">${r}</option>`;
  });
}

const badgeHtml = {
  1: '<span class="badge badge-1">①東京</span>',
  2: '<span class="badge badge-2">②大阪</span>',
  3: '<span class="badge badge-3">③またぎ</span>',
  4: '<span class="badge badge-4">④職種</span>'
};

function renderTable() {
  const list = getFiltered();
  const area = document.getElementById('table-area');
  if (!list.length) {
    area.innerHTML = '<div class="empty">条件に合うマッチングはありません</div>';
    return;
  }
  let html = `<table><thead><tr>
    <th style="width:40px">No.</th>
    <th style="width:86px">パターン</th>
    <th style="width:22%">Aさん</th>
    <th style="width:22%">Bさん</th>
    <th>マッチ理由</th>
    <th style="width:52px">年差</th>
  </tr></thead><tbody>`;
  list.forEach(m => {
    const diff = Math.abs(m.A.year - m.B.year);
    html += `<tr>
      <td class="no-num">${m.id}</td>
      <td>${badgeHtml[m.type]}</td>
      <td>
        <div class="person-name">${m.A.name}</div>
        <div class="person-meta">${m.A.location} · ${m.A.team} · ${m.A.year}</div>
      </td>
      <td>
        <div class="person-name">${m.B.name}</div>
        <div class="person-meta">${m.B.location} · ${m.B.team} · ${m.B.year}</div>
      </td>
      <td class="reason-text">${m.reason}</td>
      <td class="year-diff">${diff}年</td>
    </tr>`;
  });
  html += '</tbody></table>';
  area.innerHTML = html;
}

function copyTSV() {
  const list = getFiltered();
  const header = 'No.\tパターン\tAさん\tA拠点\tAチーム\tA入社年\tBさん\tB拠点\tBチーム\tB入社年\tマッチ理由\t入社年差';
  const rows = list.map(m =>
    `${m.id}\t${m.typeLabel}\t${m.A.name}\t${m.A.location}\t${m.A.team}\t${m.A.year}\t${m.B.name}\t${m.B.location}\t${m.B.team}\t${m.B.year}\t${m.reason}\t${Math.abs(m.A.year - m.B.year)}年`
  );
  navigator.clipboard.writeText([header, ...rows].join('\n')).then(() => {
    const btn = event.target.closest('button');
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ コピーしました！';
    btn.style.color = 'var(--accent)';
    setTimeout(() => { btn.innerHTML = orig; btn.style.color = ''; }, 2000);
  });
}
