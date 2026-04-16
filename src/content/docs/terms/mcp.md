---
title: MCP (Model Context Protocol)
description: AI 애플리케이션이 로컬·원격 도구·데이터에 표준 방식으로 연결하기 위한 개방형 프로토콜.
status: draft
updated: "2026-04-16"
tags: [mcp, api, agent, protocol]
---

## 정의

**MCP(Model Context Protocol)** 는 LLM이 **파일 읽기, API 호출, DB 조회**처럼 **컨텍스트와 도구**를 안전하게 쓰도록, 클라이언트와 서버가 따르는 **표준 계약**입니다. “에이전트에게 손과 눈을 달아주는” 쪽에 가깝고, **API**와 달리 **대화·세션 맥락**과 묶어 설계하는 경우가 많습니다.

## 왜 쓰는가

- 툴마다 다른 인증·페이로드를 매번 맞추지 않고, **한 번 MCP 서버**로 감싸 재사용한다.
- **하네스 엔지니어링**과 함께 쓰면 “어떤 도구까지 허용할지”를 레포 규칙과 맞출 수 있다.

## Yohan OS 맥락

- Yohan OS MCP 서버는 `memory/`를 읽고 결정을 남기는 등 **SoT와 직결**된다.
- **에이전트**가 목표를 실행할 때 MCP가 **실제 외부 세계**와 연결되는 층이다.

## 관련 용어

- [API](/terms/api/) — LLM·서비스를 코드에서 호출하는 인터페이스
- [LLM](/terms/llm/) — MCP로 도구 결과를 받아 추론하는 코어
- [에이전트](/terms/agent/) — MCP 도구를 호출 주체로 쓰는 실행 모델
- [하네스엔지니어링](/terms/harness-engineering/) — MCP 허용 범위·검증을 규칙으로 고정

## 원천

- `memory/wiki`에 MCP 전용 노트가 생기면 `source:`로 연결. 현재는 사전 요약(draft).
