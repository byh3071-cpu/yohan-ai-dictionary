---
title: 컨텍스트엔지니어링
description: 맥락을 계층별로 분리하여 필요한 시점에 필요한 깊이만 LLM에 주입하는 구조.
status: stable
updated: "2026-04-15"
source: memory/wiki/concepts/layered-context.md
tags: [context-engineering, layered-context, llm, harness]
---

## 정의

**컨텍스트엔지니어링(Context Engineering)** 은 맥락을 계층별로 분리하여 필요한 시점에 필요한 깊이만 LLM에 주입하는 구조입니다. 컨텍스트 윈도우 한계와 Attention 분산을 구조적으로 해결합니다.

## 3계층 맥락 구조

### 1계층 — Static/Core (불변)
철학, 가치관, 원칙. System Prompt에 상시 주입됩니다.

### 2계층 — Domain/Deep (전문 지식)
도메인별 깊은 지식. RAG로 필요 시 동적 로드됩니다.

### 3계층 — Dynamic/Transient (현재 상태)
현재 프로젝트 상태, 개발 로그, 금주 업무 특이사항. RAG로 동적 로드됩니다.

## 핵심 기법

- **점진적 컨텍스트 주입**: `@파일`/`@폴더`로 해당 작업에 필요한 최소 맥락만 주입합니다.
- **목차(Index) 문서**: SoT가 방대할 때 핵심 문서를 압축한 목차 + 메타데이터를 별도 유지합니다. AI가 목차를 우선 읽고 필요한 문서만 탐색합니다.

## 왜 중요한가

전체 `.md` 파일을 일괄 주입하면 Attention이 분산되어 할루시네이션이 유발됩니다. 맥락을 계층화하면 AI가 **지금 필요한 정보에 집중**하게 됩니다.

## Yohan OS에서의 구현

- 1계층: `agent-harness.md` (불변 원칙)
- 2계층: `memory/rules/` + `memory/wiki/` (도메인 지식)
- 3계층: `memory/inbox/` + `active-project.yaml` (현재 상태)

## 관련 용어

- [하네스엔지니어링](/terms/harness-engineering/) — 컨텍스트 구조를 AI에 강제하는 실행 메커니즘
- [RAG](/terms/rag/) — 2·3계층을 동적 로드하는 핵심 기술
- [토큰](/terms/token/) — 컨텍스트 윈도우의 물리적 한계 단위
- [LLM](/terms/llm/) — 맥락을 받아 추론하는 주체

## 원천

- Yohan OS SoT: `memory/wiki/concepts/layered-context.md`
- 파생 insight: `knowledge-base-strategy`, `vibe-coding-pipeline`
