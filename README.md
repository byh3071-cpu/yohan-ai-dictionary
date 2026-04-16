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

### 검색·프로덕션 동작 확인 (005)

Starlight 검색(Pagefind)은 **빌드 결과**가 있어야 한다.

```bash
npm run build
npm run preview
```

터미널에 나온 URL(기본 `http://localhost:4321`)로 연다.

### `preview`에서 전 페이지가 404일 때

1. `dist` 폴더 안에 **`index.html`이 있는지** 본다. 없으면 `npm run build`가 끝까지 돌지 않은 것이다.
2. Windows에서 **OneDrive + 한글·공백 경로**일 때 `astro build`가 중도 종료(비정상 exit)되는 경우가 있다.
3. **대처:** 프로젝트 폴더 전체를 **짧은 영문 경로**로 복사한다 — 예: `C:\dev\yohan-ai-dictionary` — 그 디렉터리에서 `npm install` 후 `npm run build` → `npm run preview`를 다시 실행한다.

(대안: `subst`로 드라이브 문자를 잡아 같은 효과를 낼 수 있다.)

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
