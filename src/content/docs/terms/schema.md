---
title: 스키마 (Schema)
description: 문서·데이터의 필드·타입·필수 여부를 정해 기계가 검증·연결할 수 있게 하는 구조 정의.
status: draft
updated: "2026-04-16"
tags: [schema, zod, frontmatter, yohan-os]
---

## 정의

**스키마(Schema)** 는 “이 데이터에 **어떤 키가 있고**, **타입은 무엇이며**, **필수인지**”를 적어 둔 **계약**입니다. YAML 프론트매터, JSON, Zod 같은 도구로 표현해 **파싱 오류·할루시네이션에 가까운 자유 입력**을 줄입니다.

## Yohan OS·사전에서의 예

- Starlight `content.config.ts`의 **확장 스키마**가 용어 md의 `status`, `source`, `tags`를 검증한다.
- **SSoT**와 맞물리면, “허용된 메타데이터만 SoT에 들어간다”는 정책을 스키마로 뒷받침할 수 있다.

## 인제스트와의 관계

- 인제스트 시 **동일한 스키마**로 변환하면, 이후 RAG·검색 인덱스가 **일관된 필드**를 본다.

## 관련 용어

- [하네스엔지니어링](/terms/harness-engineering/) — 스키마 위반 시 빌드·검증에서 걸러지게 하는 통제
- [SSoT](/terms/ssot/) — 스키마가 지키게 하는 데이터의 권위 원천
- [인제스트 파이프라인](/terms/ingest-pipeline/) — 수집 데이터를 스키마에 맞게 넣는 단계

## 원천

- 코드: `yohan-ai-dictionary/src/content.config.ts`. 개념 설명은 본 사전 요약(draft).
