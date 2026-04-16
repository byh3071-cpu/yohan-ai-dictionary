# Yohan AI Dictionary

나만의 Verified AI 용어 사전 뷰어. Astro Starlight 기반.

## 왜 만들었는가

구글링 반복에서 해방되고, 내가 검증한 AI 용어 정의를 **로컬 검색 + 문서 간 점프**로 즉시 꺼내 쓰기 위해. Yohan OS `memory/wiki/` 지식 레이어의 **첫 공개 실증 앱**.

## 로컬 실행

```bash
npm install
npm run dev
```

→ http://localhost:4321

## 프로젝트 구조

```
yohan-ai-dictionary/
├── astro.config.mjs          # Starlight integration
├── src/
│   ├── content.config.ts     # 확장 프론트매터 스키마
│   └── content/
│       └── docs/
│           ├── index.mdx     # 홈 (splash)
│           └── terms/        # 용어 md 파일들
└── public/                   # 정적 파일
```

## 프론트매터 규격

```yaml
---
title: 하네스엔지니어링          # 필수
description: 한 줄 요약          # 필수 (검색 미리보기)
status: draft | review | stable | deprecated
updated: 2026-04-15
source: memory/wiki/concepts/harness-engineering.md   # 선택, 원천 있을 때만
tags: [context-engineering, harness]                   # 선택
---
```

## SoT 정책

4개 용어는 Yohan OS `memory/wiki/`가 원천. 반드시 `source:` 프론트매터로 링크:

- 하네스엔지니어링 → `memory/wiki/concepts/harness-engineering.md`
- 바이브코딩 → `memory/wiki/concepts/vibe-coding-pipeline.md`
- 컨텍스트엔지니어링 → `memory/wiki/concepts/layered-context.md`
- RAG → `memory/wiki/entities/rag.md`

원천 변경 시 사전뷰어 md도 갱신해야 한다.

## 스펙 문서

- vision.md: `memory/projects/yohan-ai-dictionary/vision.md`
- 티켓: `memory/projects/yohan-ai-dictionary/tickets/`
- 파이프라인 스펙: `docs/PROJECT-PIPELINE-SPEC.md`

## 라이선스

MIT (Phase 3에서 공개 repo 분리 예정)
