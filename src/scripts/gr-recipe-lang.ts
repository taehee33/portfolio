// Language for the GR Everyday recipe link pages (/gr-everyday/r/ and /gr-everyday/c/).
// Those links are shared between people and their URLs are Universal Links the app builds,
// so the page can't carry a language in its path: it picks the reader's language when it
// opens (a choice made with the page's switch, else the browser's languages) and renders
// in place. To add a language, add it to `recipeLangs`, `match`, `ui` and `values` below.
import { t, localePath } from '../i18n/ui';

export const recipeLangs = { ko: '한국어', en: 'English', ja: '日本語' } as const;
export type RecipeLang = keyof typeof recipeLangs;

const KEY = 'gr-everyday-lang';

/// Browser language prefix → page language. Anything else reads in English.
const match: Record<string, RecipeLang> = { ko: 'ko', en: 'en', ja: 'ja' };

export function chosenLang(): RecipeLang {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && saved in recipeLangs) return saved as RecipeLang;
  } catch {}
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language || 'en'];
  for (const l of langs) {
    const hit = match[String(l).toLowerCase().split('-')[0]];
    if (hit) return hit;
  }
  return 'en';
}

export function saveLang(lang: RecipeLang) {
  try { localStorage.setItem(KEY, lang); } catch {}
}

/// The page's fixed text. `{x}` is filled in by `say`.
const ui = {
  ko: {
    language: '언어',
    recipe: 'GR Everyday 레시피',
    recipeTitle: '레시피',
    controlCode: '이미지 컨트롤 코드 {x}',
    whiteBalance: '화이트밸런스',
    memo: '메모',
    sample: '견본 사진',
    author: '올린 사람 {x}',
    camera: '찍은 카메라 {x}',
    openApp: 'GR Everyday에서 열기',
    aboutApp: '앱 알아보기',
    howTo: '카메라의 이미지 컨트롤 메뉴에서 맨 위 항목을 고르고, 위 값대로 맞추면 같은 레시피로 찍을 수 있어요. 앱이 있으면 Bluetooth로 Custom 칸에 바로 넣을 수 있어요.',
    unreadable: '레시피를 읽지 못했어요. 링크가 중간에 잘렸을 수 있어요. 보낸 사람에게 다시 받아 주세요.',
    disclaimer: 'GR Everyday는 RICOH IMAGING과 제휴하지 않은 독립 앱이며, RICOH 및 GR은 각 권리자의 상표예요.',
    code: 'GR Everyday 레시피 코드',
    codeTitle: '레시피 코드',
    loading: '레시피를 불러오는 중이에요…',
    badCode: '코드가 올바르지 않아요. GR- 뒤 여섯 글자인지 확인해 주세요.',
    noCode: '이 코드의 레시피를 찾지 못했어요. 글자를 다시 확인해 주세요.',
    offline: '레시피를 불러오지 못했어요. 인터넷 연결을 확인해 주세요.',
    codeHowTo: '앱에서는 저장된 레시피 → … → 레시피 추가 → 코드·링크·QR로 가져오기에 코드를 입력해도 돼요.',
  },
  en: {
    language: 'Language',
    recipe: 'GR Everyday Recipe',
    recipeTitle: 'Recipe',
    controlCode: 'Image control code {x}',
    whiteBalance: 'White Balance',
    memo: 'Notes',
    sample: 'Sample photo',
    author: 'Posted by {x}',
    camera: 'Shot with {x}',
    openApp: 'Open in GR Everyday',
    aboutApp: 'About the App',
    howTo: 'On the camera, choose the top item in the Image Control menu and set the values above to shoot with the same recipe. With the app, you can put it straight into a Custom slot over Bluetooth.',
    unreadable: "Couldn't read the recipe. The link may have been cut off. Please ask the sender for it again.",
    disclaimer: 'GR Everyday is an independent app not affiliated with RICOH IMAGING. RICOH and GR are trademarks of their respective owners.',
    code: 'GR Everyday Recipe Code',
    codeTitle: 'Recipe Code',
    loading: 'Loading the recipe…',
    badCode: "This code isn't valid. Check that it's the six characters after GR-.",
    noCode: "Couldn't find a recipe for this code. Please check the characters again.",
    offline: "Couldn't load the recipe. Check your internet connection.",
    codeHowTo: 'In the app, you can also enter the code in Saved Recipes → … → Add Recipe → Import from Code, Link, or QR.',
  },
  ja: {
    language: '言語',
    recipe: 'GR Everyday レシピ',
    recipeTitle: 'レシピ',
    controlCode: 'イメージコントロール コード {x}',
    whiteBalance: 'ホワイトバランス',
    memo: 'メモ',
    sample: 'サンプル写真',
    author: '投稿者 {x}',
    camera: '撮影したカメラ {x}',
    openApp: 'GR Everydayで開く',
    aboutApp: 'アプリについて',
    howTo: 'カメラのイメージコントロールメニューで一番上の項目を選び、上の値に合わせると同じレシピで撮影できます。アプリがあれば、BluetoothでCustom枠に直接入れられます。',
    unreadable: 'レシピを読み取れませんでした。リンクが途中で切れている可能性があります。送った人にもう一度送ってもらってください。',
    disclaimer: 'GR EverydayはRICOH IMAGINGと提携していない独立したアプリです。RICOHおよびGRは各権利者の商標です。',
    code: 'GR Everyday レシピコード',
    codeTitle: 'レシピコード',
    loading: 'レシピを読み込んでいます…',
    badCode: 'コードが正しくありません。GR- の後ろの6文字か確認してください。',
    noCode: 'このコードのレシピが見つかりませんでした。文字をもう一度確認してください。',
    offline: 'レシピを読み込めませんでした。インターネット接続を確認してください。',
    codeHowTo: 'アプリでは、保存したレシピ → … → レシピを追加 → コード・リンク・QRから読み込む にコードを入力することもできます。',
  },
} satisfies Record<RecipeLang, Record<string, string>>;

export type UIKey = keyof typeof ui.ko;

export function say(lang: RecipeLang, key: UIKey, x?: string | number) {
  return ui[lang][key].replace('{x}', String(x ?? ''));
}

/// The recipe's own values, which the link carries in Korean as the app shows them
/// (GR repo: MakerNote.swift, RecipeWhiteBalance.swift). Names as the app's own
/// translations (Localizable.xcstrings); Korean shows them as they are.
const values: Partial<Record<RecipeLang, { names: Record<string, string>; patterns: [RegExp, string][] }>> = {
  en: {
    names: {
      // Image controls.
      '스탠다드': 'Standard', '비비드': 'Vivid', '모노톤': 'Monotone', '소프트 모노톤': 'Soft Monotone',
      '하드 모노톤': 'Hard Monotone', '하이 콘트라스트 흑백': 'Hi-Contrast B&W', '포지티브 필름': 'Positive Film',
      '블리치 바이패스': 'Bleach Bypass', '복고풍': 'Retro', 'HDR 톤': 'HDR Tone', '크로스 프로세스': 'Cross Processing',
      '네거티브 필름': 'Negative Film', '시네마톤 (옐로)': 'Cinema (Yellow)', '시네마톤 (그린)': 'Cinema (Green)',
      '솔리드': 'Solid', '소프트': 'Soft', '하이 콘트라스트': 'Hi-Contrast', '그레이니': 'Grainy',
      // Settings.
      '채도': 'Saturation', '색상': 'Hue', '키': 'Key', '콘트라스트': 'Contrast',
      '콘트라스트(하이라이트)': 'Contrast (Highlight)', '콘트라스트(섀도)': 'Contrast (Shadow)',
      '샤프니스': 'Sharpness', '조색': 'Toning', '색조': 'Tint', 'HDR톤 효과': 'HDR Tone Effect',
      '음영': 'Shading', '명료도': 'Clarity', '필터 효과': 'Filter Effect', '입자감': 'Grain',
      '끄기': 'Off', '켜기': 'On',
      // HDF.
      '꺼짐': 'Off', '켜짐': 'On', '레드 필터': 'Red Filter',
      // White balance.
      '자동': 'Auto', '자동(따뜻한 색감)': 'Auto (Warm)', '자동(흰색 우선)': 'Auto (White Priority)',
      '태양광': 'Daylight', '그늘': 'Shade', '흐림': 'Cloudy', '형광등': 'Fluorescent',
      '형광등(주광색)': 'Fluorescent (Daylight)', '형광등(주백색)': 'Fluorescent (Day White)',
      '형광등(백색)': 'Fluorescent (Cool White)', '형광등(온백색)': 'Fluorescent (Warm White)',
      '백열등': 'Tungsten', '멀티 패턴 자동': 'Multi-Pattern Auto', '수동': 'Manual', '색온도': 'Color Temperature',
    },
    patterns: [
      [/^색온도 (\d+)K$/, 'Color Temperature $1K'],
      [/^알 수 없음 \(코드 (-?\d+)\)$/, 'Unknown (code $1)'],
      [/^코드 (-?\d+)$/, 'Code $1'],
      [/^\? \((\d+)번\)$/, '? (#$1)'],
    ],
  },
  ja: {
    names: {
      // Image controls.
      '스탠다드': 'スタンダード', '비비드': 'ビビッド', '모노톤': 'モノトーン', '소프트 모노톤': 'ソフトモノトーン',
      '하드 모노톤': 'ハードモノトーン', '하이 콘트라스트 흑백': 'ハイコントラスト白黒', '포지티브 필름': 'ポジフィルム調',
      '블리치 바이패스': 'ブリーチバイパス', '복고풍': 'レトロ', 'HDR 톤': 'HDR調', '크로스 프로세스': 'クロスプロセス',
      '네거티브 필름': 'ネガフィルム調', '시네마톤 (옐로)': 'シネマ調(イエロー)', '시네마톤 (그린)': 'シネマ調(グリーン)',
      '솔리드': 'ソリッド', '소프트': 'ソフト', '하이 콘트라스트': 'ハイコントラスト', '그레이니': 'グレイニー',
      // Settings.
      '채도': '彩度', '색상': '色相', '키': 'キー', '콘트라스트': 'コントラスト',
      '콘트라스트(하이라이트)': 'コントラスト(ハイライト)', '콘트라스트(섀도)': 'コントラスト(シャドー)',
      '샤프니스': 'シャープネス', '조색': '調色', '색조': '色調', 'HDR톤 효과': 'HDR調効果',
      '음영': 'シェーディング', '명료도': '明瞭度', '필터 효과': 'フィルター効果', '입자감': '粒状感',
      '끄기': 'オフ', '켜기': 'オン',
      // HDF.
      '꺼짐': 'オフ', '켜짐': 'オン', '레드 필터': 'レッドフィルター',
      // White balance.
      '자동': 'オート', '자동(따뜻한 색감)': 'オート(暖色)', '자동(흰색 우선)': 'オート(白優先)',
      '태양광': '太陽光', '그늘': '日陰', '흐림': '曇天', '형광등': '蛍光灯',
      '형광등(주광색)': '蛍光灯(昼光色)', '형광등(주백색)': '蛍光灯(昼白色)',
      '형광등(백색)': '蛍光灯(白色)', '형광등(온백색)': '蛍光灯(温白色)',
      '백열등': '白熱灯', '멀티 패턴 자동': 'マルチパターンオート', '수동': 'マニュアル', '색온도': '色温度',
    },
    patterns: [
      [/^색온도 (\d+)K$/, '色温度 $1K'],
      [/^알 수 없음 \(코드 (-?\d+)\)$/, '不明 (コード $1)'],
      [/^코드 (-?\d+)$/, 'コード $1'],
      [/^\? \((\d+)번\)$/, '? ($1番)'],
    ],
  },
};

/// A value from the recipe in the reader's language; unknown ones as they are. White balance
/// ("흐림 · A2 · G1") is translated part by part.
export function value(lang: RecipeLang, text: string): string {
  const table = values[lang];
  if (!table) return text;
  return text.split(' · ').map((part) => {
    const name = table.names[part];
    if (name) return name;
    for (const [re, to] of table.patterns) if (re.test(part)) return part.replace(re, to);
    return part;
  }).join(' · ');
}

/// The support page in that language (/gr-everyday/ko/, /gr-everyday/en/, /gr-everyday/ja/).
export const appPage = (lang: RecipeLang) => `/gr-everyday/${lang}/`;

/// Fills the static parts of the page: every [data-t] element, <html lang>, the language
/// switch (#gr-langs) and the site header, which follows the language where the site has it
/// (English for Japanese, as on the /gr-everyday/ja/ pages).
export function paint(lang: RecipeLang, onSwitch: (lang: RecipeLang) => void) {
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll<HTMLElement>('[data-t]')) el.textContent = say(lang, el.dataset.t as UIKey);
  for (const a of document.querySelectorAll<HTMLAnchorElement>('a[data-app-page]')) a.href = appPage(lang);
  const chrome = lang === 'ko' ? 'ko' : 'en';
  const logo = document.querySelector<HTMLAnchorElement>('.site-header .logo');
  if (logo) { logo.textContent = t(chrome).siteTitle; logo.href = localePath(chrome); }
  const other = chrome === 'ko' ? 'en' : 'ko';
  const otherLink = document.querySelector<HTMLAnchorElement>('.site-header nav a[hreflang]');
  if (otherLink) { otherLink.textContent = t(chrome).otherLang; otherLink.href = localePath(other); otherLink.hreflang = other; }

  const nav = document.getElementById('gr-langs');
  if (!nav) return;
  nav.setAttribute('aria-label', say(lang, 'language'));
  nav.replaceChildren(...(Object.keys(recipeLangs) as RecipeLang[]).map((l) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.lang = l;
    b.textContent = recipeLangs[l];
    if (l === lang) b.setAttribute('aria-current', 'true');
    b.addEventListener('click', () => { if (l !== lang) { saveLang(l); onSwitch(l); } });
    return b;
  }));
}
