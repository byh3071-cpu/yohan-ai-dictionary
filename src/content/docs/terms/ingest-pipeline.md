---
title: 인제스트 파이프라인
description: 외부 URL·RSS·파일 등을 받아 SoT 규격 Markdown으로 변환·저장하는 수집·변환 흐름.
status: draft
updated: "2026-04-16"
tags: [ingest, rag, pipeline, yohan-os]
---

## 정의

**인제스트 파이프라인(Ingest pipeline)** 은 웹·RSS·텔레그램 등 **원시 입력**을 받아, 메타데이터를 붙이고 **저장소(`memory/` 등)에 넣을 수 있는 형태**로 바꾸는 **자동화 흐름**입니다. RAG의 “최신 지식”은 결국 **잘 인제스트된 문서**에서 나옵니다.

## 구성 요소 (일반적)

1. **수집** — URL, 피드, 파일 업로드
2. **정제** — HTML→MD, OCR, 중복 제거
3. **저장** — SoT 경로·`source:`·태그 부여
4. (선택) **인덱싱** — 벡터 DB·검색 인덱스 갱신

## Yohan OS 맥락

- MCP·CLI로 `ingest_url`, RSS 등이 이 파이프라인에 해당한다.
- **SSoT** 규칙을 깨지 않으려면, 인제스트 결과가 **어느 파일이 권위인지**가 명확해야 한다.

## 관련 용어

- [RAG](/terms/rag/) — 인제스트된 문서를 검색해 LLM에 붙이는 단계
- [API](/terms/api/) — 외부 LLM·서비스와 연결할 때 쓰는 호출 경로
- [컨텍스트엔지니어링](/terms/context-engineering/) — 인제스트된 덩어리 중 무엇을 넣을지 설계
- [SSoT](/terms/ssot/) — 인제스트 결과가 최종으로 합쳐질 단일 원천 원칙

## 원천

- Yohan OS 인제스트·자동화 스펙은 레포 `docs/`·`memory/rules/`와 정합을 맞출 것.
