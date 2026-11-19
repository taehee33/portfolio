export const languages = { ko: '한국어', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  ko: {
    siteTitle: '태희의 프로젝트',
    siteDescription: 'EPC IT 6년 차 개발자 태희가 만든 웹앱, 크롬 확장, macOS 앱, 게임 프로젝트 모음.',
    heroTitle: '불편한 걸 직접 고쳐서 만드는 사람',
    heroBody: 'EPC 엔지니어링 IT에서 6년간 시스템을 다뤄 왔고, 퇴근 후에는 직접 쓰고 싶은 도구를 만들어요. AI 도구와 함께 기획부터 배포까지 혼자 끝까지 해 본 프로젝트들이에요.',
    projects: '프로젝트',
    stack: '기술 스택',
    back: '← 전체 프로젝트',
    demo: '데모 열기',
    store: '스토어에서 보기',
    download: '다운로드',
    github: 'GitHub',
    supportTitle: '도움이 되셨다면',
    supportBody: '커피 한 잔으로 응원해 주시면 다음 업데이트에 큰 힘이 돼요.',
    otherLang: 'English',
  },
  en: {
    siteTitle: "Taehee's Projects",
    siteDescription: 'Web apps, a Chrome extension, a macOS app and games built by Taehee, an engineering IT developer.',
    heroTitle: 'I build the tools I wish existed',
    heroBody: 'Six years in EPC engineering IT by day; by night I ship small products end to end — planning, building with AI tools, and releasing.',
    projects: 'Projects',
    stack: 'Tech stack',
    back: '← All projects',
    demo: 'Open demo',
    store: 'View in store',
    download: 'Download',
    github: 'GitHub',
    supportTitle: 'Enjoying this?',
    supportBody: 'If it helped you, consider buying me a coffee.',
    otherLang: '한국어',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

export function localePath(lang: Lang, path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`;
  return lang === 'ko' ? p : `/en${p}`;
}
