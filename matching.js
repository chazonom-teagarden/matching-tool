// =============================================
// サンプルデータ（実際のスプレッドシートをそのままペースト）
// =============================================
const SAMPLE = `tag_id\ttag_name\tuser_id\tfirst_name_ja\tlast_name_ja\tfirst_name_en\tlast_name_en\tlocation_id\tlocation_name\tcategory_type\tcategory_name\tteam_id\tteam_name\temail\tjoin_date\tbirthday
0158f06d-3a7e-4d3e-915c-e63493f8eb90\t写真撮影\t15facc32-85b6-4acd-af47-f0a73c4c8274\tプリチャヤー\tキッティチャリン\tPhurichaya\tKitticharin\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t72a13fcf-b92f-43d2-bbb5-f8035d9f4252\tTAMKO\tkitticharin.p@tam-tam.co.jp\t2025/9/11\t1999/6/29
23be8ce4-72e6-4d05-b4a5-8f2a05661110\t猫\t15facc32-85b6-4acd-af47-f0a73c4c8274\tプリチャヤー\tキッティチャリン\tPhurichaya\tKitticharin\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t72a13fcf-b92f-43d2-bbb5-f8035d9f4252\tTAMKO\tkitticharin.p@tam-tam.co.jp\t2025/9/11\t1999/6/29
82c43786-7123-447b-9279-bd81ad2bd28e\t海外旅行\t15facc32-85b6-4acd-af47-f0a73c4c8274\tプリチャヤー\tキッティチャリン\tPhurichaya\tKitticharin\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t72a13fcf-b92f-43d2-bbb5-f8035d9f4252\tTAMKO\tkitticharin.p@tam-tam.co.jp\t2025/9/11\t1999/6/29
e6282063-d3e7-4414-8ff9-fc8ed6e2e361\tアカウントプランナー\t15facc32-85b6-4acd-af47-f0a73c4c8274\tプリチャヤー\tキッティチャリン\tPhurichaya\tKitticharin\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t3\t広告\t72a13fcf-b92f-43d2-bbb5-f8035d9f4252\tTAMKO\tkitticharin.p@tam-tam.co.jp\t2025/9/11\t1999/6/29
362ffee9-5b87-4369-aa11-b1ae4e73fb2f\t銭湯\t6c6646db-68f6-4af8-83b8-120d1dff2f24\t実験家\tジャイロ杉本\tSUGIMOTO\tJIKKENKA\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t275a4ab8-8260-4a7e-96c0-5800bb6fff30\tTAMTO\tsugimoto.m@tam-tam.co.jp\t2019/11/11\t
8b822379-f175-458c-ad74-75fd062f3657\t実験\t6c6646db-68f6-4af8-83b8-120d1dff2f24\t実験家\tジャイロ杉本\tSUGIMOTO\tJIKKENKA\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t275a4ab8-8260-4a7e-96c0-5800bb6fff30\tTAMTO\tsugimoto.m@tam-tam.co.jp\t2019/11/11\t
d73822a3-25fb-4134-8ff9-2498a40ab3f9\tクリエイティブディレクター\t6c6646db-68f6-4af8-83b8-120d1dff2f24\t実験家\tジャイロ杉本\tSUGIMOTO\tJIKKENKA\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t3\tディレクター\t275a4ab8-8260-4a7e-96c0-5800bb6fff30\tTAMTO\tsugimoto.m@tam-tam.co.jp\t2019/11/11\t
5446be38-ee56-4f1b-858d-2cf320c9ad3c\tダンス\tec48b67a-0b2f-4735-ac7e-ad1c130e3448\tパウラ ミア\tプッル\tPaula\tPollu\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t27e84711-d7f8-469f-a063-4b6f9b875f5b\tTAMTO\tpaula.p@tam-tam.co.jp\t2026/4/1\t2001/7/17
82c43786-7123-447b-9279-bd81ad2bd28e\t海外旅行\tec48b67a-0b2f-4735-ac7e-ad1c130e3448\tパウラ ミア\tプッル\tPaula\tPollu\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t27e84711-d7f8-469f-a063-4b6f9b875f5b\tTAMTO\tpaula.p@tam-tam.co.jp\t2026/4/1\t2001/7/17
23be8ce4-72e6-4d05-b4a5-8f2a05661110\t猫\tec48b67a-0b2f-4735-ac7e-ad1c130e3448\tパウラ ミア\tプッル\tPaula\tPollu\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t27e84711-d7f8-469f-a063-4b6f9b875f5b\tTAMTO\tpaula.p@tam-tam.co.jp\t2026/4/1\t2001/7/17
ae11e82c-c001-4d68-9a2c-303d276fcd06\tディレクター\tec48b67a-0b2f-4735-ac7e-ad1c130e3448\tパウラ ミア\tプッル\tPaula\tPollu\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t3\tディレクター\t27e84711-d7f8-469f-a063-4b6f9b875f5b\tTAMTO\tpaula.p@tam-tam.co.jp\t2026/4/1\t2001/7/17
46edb0e6-3e0b-4791-82cc-0bde434add59\t温泉・サウナ\t9ca32fcd-492f-4eeb-ad1b-8303dfa8e1f1\t有紗\t伊勢\tArisa\tIse\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t0a72ed1d-eca8-4186-b7df-87554b8e1f65\tTAMUNO\tise.a@tam-tam.co.jp\t2024/6/17\t1998/6/3
82c43786-7123-447b-9279-bd81ad2bd28e\t海外旅行\t9ca32fcd-492f-4eeb-ad1b-8303dfa8e1f1\t有紗\t伊勢\tArisa\tIse\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t1\t趣味\t0a72ed1d-eca8-4186-b7df-87554b8e1f65\tTAMUNO\tise.a@tam-tam.co.jp\t2024/6/17\t1998/6/3
7bc77de8-4a02-4c9d-9924-e21b625203da\tデザイナー\t9ca32fcd-492f-4eeb-ad1b-8303dfa8e1f1\t有紗\t伊勢\tArisa\tIse\tbddabbc8-1918-4cba-b0e2-d61a5836b54a\t東京\t3\tデザイナー\t0a72ed1d-eca8-4186-b7df-87554b8e1f65\tTAMUNO\tise.a@tam-tam.co.jp\t2024/6/17\t1998/6/3`;

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
  document.getElementById('exclude-members').value = '';
  document.getElementById('exclude-pairs').value = '';
  document.getElementById('parse-err').style.display = 'none';
  document.getElementById('result-section').style.display = 'none';
  allMatches = [];
}

// =============================================
// 除外設定のパース
// =============================================
// 姓・名の間の空白（半角/全角）を除去し、小文字化して比較する
function normalizeName(s) {
  return (s || '').replace(/[\s　]+/g, '').toLowerCase();
}

// 1行1名の「姓 名」リスト → 正規化した名前のSet
function parseExcludedMembers(raw) {
  return new Set(
    raw.split('\n')
      .map(l => l.trim())
      .filter(l => l)
      .map(normalizeName)
  );
}

// 1行1組の「姓 名, 姓 名」リスト → 正規化ペアキー（アルファベット順結合）のSet
function parseExcludedPairs(raw) {
  const set = new Set();
  raw.split('\n').forEach(line => {
    const parts = line.split(',').map(s => s.trim()).filter(s => s);
    if (parts.length !== 2) return;
    const [a, b] = parts.map(normalizeName);
    if (!a || !b) return;
    set.add([a, b].sort().join('||'));
  });
  return set;
}

// =============================================
// データパース
//
// 列構成（ヘッダー行で自動検出）:
//   tag_id, tag_name, user_id, first_name_ja, last_name_ja,
//   first_name_en, last_name_en, location_id, location_name,
//   category_type, category_name, team_id, team_name,
//   email, join_date, birthday
//
// 使用する列:
//   user_id          → 人物の識別キー
//   last_name_ja + first_name_ja → 表示名
//   location_name    → 拠点
//   team_name        → 所属チーム
//   join_date        → 入社年（年のみ抽出）
//   category_type=1  → 趣味（tag_name を収集）
//   category_type=3  → 職種（tag_name を収集）
//
// 空欄チェック（いずれか欠損でもスキップせずマッチング対象に含める。
// 該当する判定条件は以下のとおり不問として扱う）:
//   first_name_ja, last_name_ja → 表示名のみに影響（欠損分は空のまま表示）
//   team_name   → 「チームが異なる」判定ができないため、常に別チーム扱いにする
//   location_name → 「東京/大阪同士」判定ができないため、常に拠点が異なる扱いにする
//   join_date   → 「入社年2年差以上」判定を不問（常に条件を満たす）にする
// =============================================
function parseData(raw) {
  const lines = raw.trim().split('\n').filter(l => l.trim());
  if (lines.length < 2) throw new Error('データが少なすぎます（ヘッダー＋1行以上必要）');

  const headers = lines[0].split('\t').map(h => h.trim());
  const need = ['user_id','first_name_ja','last_name_ja','location_name',
                'category_type','tag_name','team_name','join_date'];
  const idx = {};
  need.forEach(k => {
    const i = headers.findIndex(h => h.trim() === k);
    if (i === -1) throw new Error(`列「${k}」が見つかりません。ヘッダー行を確認してください。`);
    idx[k] = i;
  });

  const map = new Map(); // user_id → person object

  lines.slice(1).forEach(line => {
    const cols = line.split('\t');
    const uid      = cols[idx['user_id']]?.trim();
    if (!uid) return;

    const firstName = cols[idx['first_name_ja']]?.trim() || '';
    const lastName  = cols[idx['last_name_ja']]?.trim()  || '';
    const location  = cols[idx['location_name']]?.trim() || '';
    const team      = cols[idx['team_name']]?.trim()     || '';
    const joinRaw   = cols[idx['join_date']]?.trim()     || '';
    const catType   = cols[idx['category_type']]?.trim() || '';
    const tagName   = cols[idx['tag_name']]?.trim()      || '';
    const joinYear  = joinRaw ? parseInt(joinRaw.split('/')[0]) : NaN;

    if (!map.has(uid)) {
      const name = (lastName + ' ' + firstName).trim() || `(氏名未登録:${uid.slice(0, 8)})`;
      map.set(uid, {
        uid,
        firstName,
        lastName,
        name,
        location,
        team,
        joinYear,
        joinRaw,
        hobbies: [],
        roles: [],
        // 空欄のためマッチング判定上「別扱い」にするためのキー
        // （同じ空欄同士を誤って「同じ拠点／同じチーム」と判定しないよう、ユーザーごとに一意にする）
        _locKey: location || ('__blank_loc__' + uid),
        _teamKey: team || ('__blank_team__' + uid),
        _missingFields: []
      });
    }

    const p = map.get(uid);

    // 趣味を収集（category_type === '1'）
    if (catType === '1' && tagName && !p.hobbies.includes(tagName)) {
      p.hobbies.push(tagName);
    }
    // 職種を収集（category_type === '3'）
    if (catType === '3' && tagName && !p.roles.includes(tagName)) {
      p.roles.push(tagName);
    }
  });

  // 空欄チェック（スキップはせず、警告表示用に記録するのみ）
  const people = [];

  map.forEach(p => {
    const missing = [];
    if (!p.lastName)   missing.push('last_name_ja');
    if (!p.firstName)  missing.push('first_name_ja');
    if (!p.location)   missing.push('location_name');
    if (!p.team)       missing.push('team_name');
    if (!p.joinRaw || isNaN(p.joinYear)) missing.push('join_date');

    p._missingFields = missing;
    people.push(p);
  });

  return { people };
}

// =============================================
// マッチングロジック
// =============================================
// 絶対条件：チームが異なること（これだけ。入社年差・趣味・職種の共通は不問）
//
// カテゴリ分け（表示用。拠点のみで決まり、優先順位には影響しない）：
//   ①東京同士／②大阪同士／③拠点またぎ／④その他拠点同士（東京・大阪以外の同拠点ペア）
//
// マッチ理由の優先順位（タグの登録数に機会が左右されないよう、必須条件ではなく
// 「あれば使う」ラベルとして扱う）：
//   1. 趣味が1つ以上共通 → 「趣味：〇〇」
//   2. （趣味共通なしで）職種が1つ以上共通 → 「職種：〇〇」
//   3. どちらもなし → 「共通点なし（チーム違いのみ）」
// =============================================
function overlap(a, b) {
  return a.filter(x => b.includes(x));
}

function classifyLocation(A, B) {
  if (A._locKey === B._locKey) {
    if (A._locKey === '東京') return { type: 1, label: '①東京同士' };
    if (A._locKey === '大阪') return { type: 2, label: '②大阪同士' };
    return { type: 4, label: '④その他拠点同士' };
  }
  return { type: 3, label: '③拠点またぎ' };
}

function match(people, excludedPairs) {
  const results = [];
  let id = 1;

  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      const A = people[i], B = people[j];

      // team_nameが空欄の人は「別チーム」として扱う（_teamKeyがユーザーごとに一意になっているため自動で成立）
      if (A._teamKey === B._teamKey) continue;

      if (excludedPairs && excludedPairs.size) {
        const pairKey = [normalizeName(A.name), normalizeName(B.name)].sort().join('||');
        if (excludedPairs.has(pairKey)) continue;
      }

      const loc           = classifyLocation(A, B);
      const sharedHobbies = overlap(A.hobbies, B.hobbies);
      const sharedRoles   = overlap(A.roles, B.roles);

      let reason, tier;
      if (sharedHobbies.length) {
        reason = '趣味：' + sharedHobbies.join('・');
        tier = 1;
      } else if (sharedRoles.length) {
        reason = '職種：' + sharedRoles.join('・');
        tier = 2;
      } else {
        reason = '共通点なし（チーム違いのみ）';
        tier = 3;
      }

      results.push({
        id: id++, type: loc.type, typeLabel: loc.label, A, B, reason, tier
      });
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
  errEl.innerHTML = '';

  try {
    const { people: allPeople } = parseData(raw);

    // 除外メンバーを除く
    const excludedNames = parseExcludedMembers(document.getElementById('exclude-members').value);
    const excludedPeople = excludedNames.size
      ? allPeople.filter(p => excludedNames.has(normalizeName(p.name)))
      : [];
    const people = excludedNames.size
      ? allPeople.filter(p => !excludedNames.has(normalizeName(p.name)))
      : allPeople;

    const excludedPairs = parseExcludedPairs(document.getElementById('exclude-pairs').value);

    // 空欄項目があった人・除外設定で外した人を表示
    const msgs = [];
    const withMissing = people.filter(p => p._missingFields.length > 0);
    if (withMissing.length > 0) {
      const names = withMissing
        .map(p => `・${p.name}さんは${p._missingFields.join('、')}が空欄でしたが、マッチング対象に含めました（該当条件は不問として扱います）`)
        .join('<br>');
      msgs.push(`ℹ️ 以下のユーザーは一部項目が空欄でした：<br>${names}`);
    }
    if (excludedPeople.length > 0) {
      const names = excludedPeople.map(p => `・${p.name}`).join('<br>');
      msgs.push(`ℹ️ 以下のユーザーは除外設定によりマッチング対象から外しました：<br>${names}`);
    }
    if (msgs.length > 0) {
      errEl.innerHTML = msgs.join('<br>');
      errEl.style.display = 'block';
    }

    if (people.length < 2) throw new Error('有効な社員データが2名以上必要です');

    allMatches = match(people, excludedPairs);
    currentType = 'all';
    renderStats(people.length);
    updateReasonFilter();
    renderTable();
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (e) {
    errEl.innerHTML += (errEl.innerHTML ? '<br>' : '') + '❌ ' + e.message;
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
    <div class="stat"><div class="stat-num" style="color:var(--c4)">${counts[3]}</div><div class="stat-label">④その他拠点同士</div></div>`;
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

function fmtYear(y) {
  return isNaN(y) ? '不明' : y;
}
function fmtLoc(loc) {
  return loc || '拠点不明';
}
function fmtYearDiff(A, B) {
  return (isNaN(A.joinYear) || isNaN(B.joinYear)) ? 'ー' : (Math.abs(A.joinYear - B.joinYear) + '年');
}

const badgeHtml = {
  1: '<span class="badge badge-1">①東京</span>',
  2: '<span class="badge badge-2">②大阪</span>',
  3: '<span class="badge badge-3">③またぎ</span>',
  4: '<span class="badge badge-4">④他拠点</span>'
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
    html += `<tr>
      <td class="no-num">${m.id}</td>
      <td>${badgeHtml[m.type]}</td>
      <td>
        <div class="person-name">${m.A.name}</div>
        <div class="person-meta">${fmtLoc(m.A.location)} · ${m.A.team || '(チーム不明)'} · ${fmtYear(m.A.joinYear)}</div>
      </td>
      <td>
        <div class="person-name">${m.B.name}</div>
        <div class="person-meta">${fmtLoc(m.B.location)} · ${m.B.team || '(チーム不明)'} · ${fmtYear(m.B.joinYear)}</div>
      </td>
      <td class="reason-text">${m.reason}</td>
      <td class="year-diff">${fmtYearDiff(m.A, m.B)}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  area.innerHTML = html;
}

function copyTSV() {
  const list = getFiltered();
  const header = 'No.\tパターン\tAさん\tA拠点\tAチーム\tA入社年\tBさん\tB拠点\tBチーム\tB入社年\tマッチ理由\t入社年差';
  const rows = list.map(m =>
    `${m.id}\t${m.typeLabel}\t${m.A.name}\t${fmtLoc(m.A.location)}\t${m.A.team || '(チーム不明)'}\t${fmtYear(m.A.joinYear)}\t${m.B.name}\t${fmtLoc(m.B.location)}\t${m.B.team || '(チーム不明)'}\t${fmtYear(m.B.joinYear)}\t${m.reason}\t${fmtYearDiff(m.A, m.B)}`
  );
  navigator.clipboard.writeText([header, ...rows].join('\n')).then(() => {
    const btn = event.target.closest('button');
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ コピーしました！';
    btn.style.color = 'var(--accent)';
    setTimeout(() => { btn.innerHTML = orig; btn.style.color = ''; }, 2000);
  });
}
