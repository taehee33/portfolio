---
title: "MagicMagicTrack — 트랙패드별 설정 macOS 앱"
summary: "맥북 내장 트랙패드와 매직 트랙패드에 서로 다른 속도·스크롤·클릭 감도를 주고, 매직 트랙패드를 90°/180° 돌려 쓸 수 있게 해 주는 macOS 앱."
stack: ["Swift", "SwiftUI", "AppKit", "IOKit", "MultitouchSupport", "Xcode"]
order: 3
github: "https://github.com/taehee33/magictrack202603"
download: "https://github.com/taehee33/magictrack202603/releases/latest"
status: "v1.4.1 GitHub Releases"
---

## 문제

macOS는 모든 트랙패드에 설정을 하나만 적용해서, 크기와 위치가 다른 두 트랙패드를 같이 쓰면 항상 한쪽이 불편했어요. 매직 트랙패드를 옆으로 놓고 쓸 방법도 없었고요.

## 해결

- 손가락이 닿는 트랙패드를 실시간으로 감지해 설정을 자동 전환 (단축키 ⌃⌥M으로 고정 모드도 가능)
- 90° 회전 시 포인터·클릭·드래그·스크롤·스와이프 제스처까지 변환
- 프리셋과 앱별 규칙, 메뉴 막대 상태 표시, 한국어·영어 UI
- 시스템 설정값은 건드리지 않고 앱 실행 중에만 덮어쓰는 안전한 설계
- 단위 테스트, dmg 패키징, 자체 서명 배포 자동화

## 배운 점

비공개 API를 쓰는 앱의 한계(앱스토어 불가, OS 업데이트 리스크)를 문서로 솔직하게 알리고, 기능이 막히면 고정 모드로 되돌아가는 폴백을 설계했어요.
