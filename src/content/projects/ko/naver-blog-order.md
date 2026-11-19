---
title: "네이버 블로그·카페 사진 순서 유지 + AI 회전"
summary: "네이버 블로그·카페에 사진을 여러 장 올릴 때 원하는 순서대로 넣고, 누워 있는 사진은 AI로 찾아 돌려 주는 크롬 확장."
stack: ["Chrome Extension MV3", "onnxruntime-web (WASM)", "Offscreen Document", "Cache Storage", "Playwright", "GitHub Pages"]
order: 2
github: "https://github.com/taehee33/naver-blog-order"
store: "https://chromewebstore.google.com/detail/plppacomhopmompmahdianidmdocbcfl"
status: "크롬 웹스토어 v1.4.0"
---

## 문제

네이버 에디터에 사진을 한꺼번에 올리면 순서가 뒤섞여서, 여행기처럼 시간순이 중요한 글을 쓸 때 매번 손으로 다시 맞춰야 했어요.

## 해결

- 파일명·수정일·촬영일(EXIF)·크기·종류 기준 정렬, 폴더 드롭도 지원
- JPEG·HEIC·PNG의 EXIF를 직접 파싱해 촬영일 순 정렬
- 사진 방향 판별 ONNX 모델을 브라우저 안에서 실행(서버 전송 없음), 원본 파일은 수정하지 않고 네이버 에디터의 회전 기능으로 처리
- 모델은 필요할 때만 내려받고 SHA-256으로 검증
- Playwright 자동 테스트와 실제 39장 업로드 검증

## 배운 점

내가 불편해서 만든 도구를 스토어 등록, 개인정보처리방침, 홍보까지 제품 전 과정으로 끝까지 만들어 본 경험. 개인정보를 서버로 보내지 않는 온디바이스 AI 설계를 적용했어요.
