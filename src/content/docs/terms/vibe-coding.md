---
title: 바이브코딩
description: 자연어 지시와 구조화된 마크다운 문서로 AI가 코드를 생성·수정하는 개발 방식.
status: stable
updated: "2026-04-15"
source: memory/wiki/concepts/vibe-coding-pipeline.md
tags: [vibe-coding, harness, cursor, development]
---

## 정의

**바이브코딩(Vibe Coding)** 은 자연어 지시와 구조화된 마크다운 문서로 AI가 코드를 생성·수정하는 개발 방식입니다. SoT 기반 맥락 주입 + 하네스 통제로 품질을 유지합니다.

## 핵심 원리

### 1. 단일 환경 맥락 일치
Cursor 내에서 `.md` 파일을 즉시 참조합니다. 브라우저와 에디터를 오갈 필요 없이 개발 맥락이 한곳에 집중됩니다.

### 2. 자연어 시스템 설계
구조화된 MD + 프롬프트만으로 아키텍처와 비즈니스 로직을 구현합니다. 코드를 직접 쓰는 비중이 줄고, "무엇을 만들지" 기술하는 비중이 늘어납니다.

### 3. 빠른 이터레이션
프롬프트나 참조 문서를 수정하면 AI가 코드를 재작성합니다. 전통 개발 대비 반복 속도가 극대화됩니다.

## 주의점 — 바이브코딩의 맹점

- **자연어 지시에 논리 구멍** → AI가 임의 코드/로직으로 충전합니다. 요구사항은 명확히 문서화해야 합니다.
- **완료 조건이 문서에 없으면** AI가 구멍을 임의로 메웁니다. 속도만 빨라지는 함정입니다.
- **입력·출력·예외·비범위** 를 한 장에 적어 두면 반복 호출해도 결과가 흔들리지 않습니다.
- **우선순위와 트레이드오프** 는 사람이 기획으로 고정해야 되돌리기 비용이 줄어듭니다.

## 관련 용어

- [하네스엔지니어링](/terms/harness-engineering/) — 바이브코딩의 품질을 보장하는 통제 구조
- [컨텍스트엔지니어링](/terms/context-engineering/) — AI에 무엇을 보여줄지 결정하는 상위 설계
- [프롬프트](/terms/prompt/) — 바이브코딩의 기본 입력 단위

## 원천

- Yohan OS SoT: `memory/wiki/concepts/vibe-coding-pipeline.md`
- 파생 insight: `vibe-coding-pipeline`, `vibe-coding-planning-importance`
