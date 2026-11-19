# taehee33 portfolio

Astro로 만든 한/영 포트폴리오 사이트. Vercel에서 `main` 브랜치에 push할 때마다 자동 배포돼요.

## 로컬 실행

```bash
npm install
npm run dev   # http://localhost:4321
```

## 프로젝트 추가

`src/content/projects/ko/<slug>.md` 파일을 추가하고 push하면 끝이에요. 영어판은 같은 `<slug>`로 `en/`에 만들면 hreflang이 자동으로 연결돼요.

```md
---
title: "프로젝트 이름"
summary: "한 줄 소개"
stack: ["React", "Firebase"]
order: 6
github: "https://github.com/taehee33/..."
demo: "https://..."        # 선택
thirdPartyIP: false        # 타사 IP 팬 프로젝트면 true → 후원 버튼 숨김
---
## 문제
## 해결
## 배운 점
```

## 설정

`src/site.config.ts`에서 배포 주소, 후원 링크(토스·카카오페이·Buy Me a Coffee), 구글·네이버 소유권 확인 코드를 바꿔요. 후원 링크를 비워 두면 버튼이 숨겨져요.
