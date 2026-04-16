---
title: RAG
description: 외부 문서를 검색하여 LLM 응답에 근거를 제공하는 기술.
status: stable
updated: "2026-04-15"
source: memory/wiki/entities/rag.md
tags: [rag, retrieval, llm, knowledge]
---

## 정의

**RAG(Retrieval-Augmented Generation)** 는 외부 문서를 검색하여 LLM 응답에 근거를 제공하는 기술입니다. LLM의 학습 데이터에 없는 최신 정보나 도메인 지식을 실시간으로 보충합니다.

## 작동 방식

1. **질의(Query)**: 사용자 질문 또는 프롬프트 수신
2. **검색(Retrieve)**: Vector DB에서 관련 문서 청크를 유사도 기반으로 추출
3. **주입(Augment)**: 검색된 문서를 프롬프트 컨텍스트에 삽입
4. **생성(Generate)**: LLM이 근거 문서와 함께 답변 생성

## 핵심 개념

### MD 기반 파이프라인
`.md` 파일 수정 → 자동 Vector DB 인덱싱으로 LLM 배경지식이 동기화됩니다. 마크다운으로 지식을 관리하면 RAG 파이프라인과 자연스럽게 연결됩니다.

### Cross-Domain RAG
단일 도메인만 참조하지 않고, 이종 범주(철학·심리학·디자인 등) 문서를 함께 검색합니다. 이질적 데이터를 엮기 위해 AI가 논리적 도약을 수행하여 틀에 갇힌 답변을 탈피합니다.

### 컨텍스트엔지니어링과의 관계
다층적 맥락 구조에서 2·3계층(Domain, Dynamic)을 RAG로 동적 로드합니다. 1계층(Core)은 System Prompt에 고정하고, 나머지는 RAG가 쿼리 시점에 검색합니다.

## RAG vs Wiki

- **RAG** = **query-time**: 매번 질의할 때마다 검색·생성
- **Wiki** = **compile-time**: 미리 축적·검증한 지식을 구조화
- LLM Wiki 패턴은 RAG의 "매번 재검색" 한계를 보완하는 상위 레이어입니다.

## 관련 용어

- [LLM](/terms/llm/) — RAG가 보강하는 대상 모델
- [토큰](/terms/token/) — 검색된 문서가 소비하는 컨텍스트 단위
- [할루시네이션](/terms/hallucination/) — RAG가 해결하려는 핵심 문제
- [컨텍스트엔지니어링](/terms/context-engineering/) — RAG를 포함하는 상위 설계

## 원천

- Yohan OS SoT: `memory/wiki/entities/rag.md`
- 파생 insight: `knowledge-base-strategy`, `exploration-vs-exploitation`
