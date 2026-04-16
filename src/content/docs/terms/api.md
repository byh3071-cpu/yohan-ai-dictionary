---
title: API
description: LLM을 외부 애플리케이션에서 호출할 수 있게 하는 인터페이스. 토큰 기반 과금.
status: stable
updated: "2026-04-15"
tags: [api, llm, integration, cost]
---

## 정의

**API(Application Programming Interface)** 는 LLM을 외부 애플리케이션에서 호출할 수 있게 하는 인터페이스입니다. 웹 UI(ChatGPT, Claude.ai)가 아닌 **코드에서 직접** LLM을 사용할 때 필요합니다. 대부분 REST API 또는 SDK 형태로 제공됩니다.

## 왜 중요한가

### 1. 자동화의 필수 조건
API 없이는 "사람이 매번 채팅창에 타이핑"해야 합니다. API가 있어야 n8n, 커스텀 봇, 자동화 파이프라인 등에서 LLM을 호출할 수 있습니다.

### 2. 토큰 기반 과금
API 사용량은 **입력 토큰 + 출력 토큰** 으로 과금됩니다. 같은 질문도 컨텍스트를 얼마나 넣느냐에 따라 비용이 달라집니다.

### 3. 하네스 통합
Yohan OS의 MCP(Model Context Protocol) 서버는 API를 통해 Claude에 맥락을 주입합니다. API 호출마다 `memory/`의 관련 정보가 동적으로 포함됩니다.

## 주요 LLM API 비교

| API | 모델 | 특징 |
|---|---|---|
| Anthropic API | Claude 시리즈 | Messages API, 긴 컨텍스트, Tool Use |
| OpenAI API | GPT 시리즈 | Chat Completions, Function Calling |
| Google AI | Gemini | 멀티모달, 대용량 컨텍스트 |
| AWS Bedrock | 여러 모델 | 기업용, 통합 인터페이스 |

## 비용 최적화 팁

- **프롬프트 캐싱**: 반복되는 시스템 프롬프트를 캐싱하면 입력 토큰 비용 절감
- **모델 선택**: 단순 작업은 Haiku(저비용), 복잡한 추론은 Opus(고비용)로 분리
- **컨텍스트 최적화**: 필요한 맥락만 주입하여 불필요한 토큰 소비 방지

## 관련 용어

- [토큰](/terms/token/) — API 과금의 기준 단위
- [LLM](/terms/llm/) — API를 통해 접근하는 대상 모델
- [프롬프트](/terms/prompt/) — API로 보내는 입력 데이터
