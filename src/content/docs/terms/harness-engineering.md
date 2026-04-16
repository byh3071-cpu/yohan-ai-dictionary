---
title: 하네스 엔지니어링
description: AI 에이전트의 행동을 규칙·맥락·구조로 통제하면서도 유연성을 유지하는 방법론.
status: stable
updated: "2026-04-15"
source: memory/wiki/concepts/harness-engineering.md
tags: [context-engineering, harness, yohan-os]
---

## 정의

**하네스 엔지니어링(Harness Engineering)** 은 AI 에이전트의 행동을 규칙·맥락·구조로 통제하면서도 유연성을 유지하는 엔지니어링 방법론입니다. 핵심 원리는 **"바닥(비전·안전) + 그 위의 유연함"** — AI가 벗어나면 안 되는 경계선은 강제하되, 그 안에서는 최대한 자유로운 탐색을 허용합니다.

## 구성 요소

### 1. 규칙 파일 (`.cursorrules`, `AGENTS.md`)
프로젝트 루트에 절대 규칙 파일을 두어 AI 행동을 제한합니다. "에러 시 임의 수정 금지", "기능 구현 전 `docs/` 참조 필수" 같은 **검토 게이트**를 명문화합니다.

### 2. 실시간 컨텍스트 동기화
MD 파일 수정 → Vector DB 자동 재인덱싱으로 LLM이 항상 최신 지식 기반 위에서 판단하도록 만듭니다.

### 3. 검토자(Critic) 루프
생성자(Creator) 외에 **비즈니스 로직·현실성·사용자 제약** 을 기준으로 필터링하는 별도 에이전트를 배치합니다. 이 적대적 루프가 독창성과 통제력을 동시에 확보합니다.

### 4. 유연성 확보 4가지 기법
- 매개변수 동적 라우팅 (Temperature 스위칭)
- 멀티 에이전트 협업 (Creator + Critic)
- 구조화된 창의성 프롬프트 (SCAMPER, 무작위 변수)
- Cross-Domain RAG (이질적 데이터 교차 검색)

## Yohan OS에서의 구현

- **`memory/rules/`** 전체가 하네스 레이어
- **`.cursorrules`** + **`AGENTS.md`** 이중 규칙 파일로 Cursor/Claude Code 양쪽 통제
- **Evaluator 루프** 가 매 세션 결과물을 vision.md 기준으로 재검증

## 관련 용어

- [바이브코딩](/terms/vibe-coding/) — 하네스 엔지니어링을 실전 개발에 녹인 파이프라인
- [컨텍스트엔지니어링](/terms/context-engineering/) — 하네스의 상위 개념. "AI가 무엇을 보게 할 것인가"의 설계
- [프롬프트](/terms/prompt/) — 하네스가 매 호출마다 주입하는 지시문 레이어

## 원천

- Yohan OS SoT: `memory/wiki/concepts/harness-engineering.md`
- 파생 insight: `knowledge-base-strategy`, `vibe-coding-pipeline`, `exploration-vs-exploitation`
