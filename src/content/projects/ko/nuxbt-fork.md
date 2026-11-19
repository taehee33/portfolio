---
title: "NUXBT 포크 — macOS용 닌텐도 스위치 웹 컨트롤러 개선"
summary: "브라우저로 닌텐도 스위치를 조작하는 오픈소스 NUXBT를 포크해, macOS 사용자도 쉽게 실행하고 문제를 진단할 수 있게 개선."
stack: ["Python", "Bluetooth (BlueZ)", "VirtualBox", "Vagrant", "GitHub Actions"]
order: 5
github: "https://github.com/taehee33/nuxbt_plus_hhh"
status: "오픈소스 포크"
---

원본: [hannahbee91/nuxbt](https://github.com/hannahbee91/nuxbt). 아래는 제가 추가한 부분이에요.

## 문제

NUXBT는 Linux 블루투스 스택이 필요해서 macOS에서는 직접 실행할 수 없고, VM과 USB 블루투스 동글을 연결하는 과정에서 막히기 쉬웠어요.

## 해결

- VirtualBox + Vagrant Ubuntu VM을 띄우고 웹 UI까지 여는 macOS 한방 실행 스크립트
- 웹 UI에 ‘Detected Adapters’ 패널과 호스트 USB 장치 확인 흐름 추가
- 초보자용 한국어 QUICKSTART·사용 가이드와 문제 해결 문서
- 릴리스 워크플로를 수동 실행 중심으로 정리

## 배운 점

남이 만든 오픈소스를 읽고, 내 환경에 맞게 고치고, 다음 사람을 위한 문서를 남기는 경험이었어요.
