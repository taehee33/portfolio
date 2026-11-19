---
title: "Digimon Tamagotchi — 디지몬 육성 웹앱"
summary: "추억의 디지몬 휴대용 기기를 브라우저에서 키울 수 있게 만든 육성 웹앱. v0.6.0까지 운영 중."
stack: ["React 18", "Tailwind CSS", "Firebase (Auth·Firestore)", "Supabase", "Vercel", "IndexedDB"]
order: 1
github: "https://github.com/taehee33/d2_tama_refact"
status: "v0.6.0 운영 중"
thirdPartyIP: true
---

## 문제

초기 버전은 브라우저 localStorage에만 저장해서 기기를 바꾸면 데이터가 사라지고, 진화·환생 기록이 섞이는 문제가 있었어요.

## 해결

- Firebase Auth(구글·게스트 로그인) + Firestore 슬롯 구조로 저장소를 전환
- 슬롯·디지몬 생애별 ID를 분리해 환생 후에도 이전 기록이 섞이지 않게 설계
- 진화·조그레스는 Firestore 트랜잭션과 서버 API로 상태와 로그를 한 번에 확정
- 알림 센터의 중복 요청을 묶고 읽기 범위를 최근 10개로 제한해 Firestore 읽기 비용을 절감
- 320px 폭까지 대응하는 모바일 UI

## 배운 점

혼자 만드는 프로젝트도 ‘저장 계약’을 문서로 먼저 정해야 리팩터링이 흔들리지 않는다는 것. AI 코딩 도구(Claude, Codex)와 협업하며 구조 분석 문서를 버전별로 관리했어요.

> 디지몬은 반다이의 IP이며, 이 프로젝트는 비상업적 팬 프로젝트입니다.
