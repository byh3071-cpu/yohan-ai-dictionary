---
title: 임베딩 (Embedding)
description: 텍스트·이미지 등을 고차원 벡터로 바꾸어 의미적 유사도 검색·RAG에 쓰는 표현.
status: draft
updated: "2026-04-16"
source: memory/wiki/entities/rag.md
tags: [embedding, rag, vector, llm]
---

## 정의

**임베딩(Embedding)** 은 토큰·문장·문서를 **고정 길이의 실수 벡터**로 바꾼 표현입니다. 의미가 가까운 텍스트는 벡터 공간에서도 가깝게 놓이므로, **유사도 검색·클러스터링·RAG의 검색 단계**에 쓰입니다.

## RAG와의 관계

RAG는 (1) 질의와 청크를 **임베딩**으로 바꾸고, (2) 벡터 DB에서 **가까운 문서**를 고른 뒤, (3) LLM에 붙여 생성합니다. 임베딩이 없으면 “의미 기반 검색”이 성립하지 않습니다.

## 비용·한계

- **토큰** 단위 과금과 별개로, 임베딩 API 호출 비용이 추가될 수 있다.
- **파인튜닝**은 모델 내부 가중치를 바꾸고, 임베딩은 주로 **검색·매칭** 층에서 동작한다.

## 관련 용어

- [RAG](/terms/rag/) — 임베딩으로 검색한 근거를 LLM에 붙이는 패턴
- [LLM](/terms/llm/) — 임베딩 이후 최종 생성을 담당
- [토큰](/terms/token/) — 임베딩 입력이 되기 전 텍스트의 최소 단위
- [파인튜닝](/terms/fine-tuning/) — 지식을 모델 안에 넣는 대안 축

## 원천

- Yohan OS SoT: `memory/wiki/entities/rag.md` (RAG·검색 맥락)
