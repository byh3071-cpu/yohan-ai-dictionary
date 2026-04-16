---
title: LLM
description: 대규모 텍스트 데이터로 학습한 언어 모델. 다음 토큰을 예측하는 방식으로 텍스트를 생성한다.
status: stable
updated: "2026-04-15"
tags: [llm, ai, foundation-model]
---

## 정의

**LLM(Large Language Model)** 은 대규모 텍스트 데이터로 학습한 언어 모델입니다. 핵심 원리는 **다음 토큰 예측(next token prediction)** — 주어진 텍스트 뒤에 올 가장 적절한 토큰을 확률적으로 선택하여 문장을 생성합니다.

## 핵심 구조

### Transformer 아키텍처
2017년 "Attention is All You Need" 논문에서 제안된 구조. **Self-Attention** 메커니즘으로 입력 토큰 간 관계를 병렬로 계산합니다. 이전의 RNN/LSTM 대비 학습 속도와 품질이 혁신적으로 향상됐습니다.

### 스케일링 법칙 (Scaling Laws)
모델 파라미터 수, 학습 데이터 양, 연산량을 늘리면 성능이 예측 가능하게 향상됩니다. 이 법칙이 GPT-3 → GPT-4 → Claude 시리즈 등 거대 모델 경쟁의 근거입니다.

### 컨텍스트 윈도우
LLM이 한 번에 처리할 수 있는 최대 토큰 수. 윈도우가 클수록 더 많은 맥락을 주입할 수 있지만, 비용과 Attention 분산 문제가 동반됩니다.

## 한계

- **할루시네이션**: 학습 데이터에 없는 내용을 그럴듯하게 생성
- **지식 컷오프**: 학습 시점 이후 정보를 모름 (RAG로 보완)
- **Attention 분산**: 컨텍스트가 길어질수록 중요 정보에 대한 집중도 저하

## 대표 모델

| 모델 | 개발사 | 특징 |
|---|---|---|
| Claude (Opus/Sonnet/Haiku) | Anthropic | 긴 컨텍스트, 안전성 중시 |
| GPT-4 / o1 | OpenAI | 범용성, 추론 체인 |
| Gemini | Google | 멀티모달, 대용량 컨텍스트 |
| Llama / Mistral | Meta / Mistral AI | 오픈소스/오픈웨이트 |

## 관련 용어

- [토큰](/terms/token/) — LLM이 처리하는 최소 단위
- [프롬프트](/terms/prompt/) — LLM에 보내는 입력 텍스트
- [RAG](/terms/rag/) — LLM의 지식 한계를 실시간으로 보완하는 기술
- [파인튜닝](/terms/fine-tuning/) — LLM을 특정 도메인에 맞게 추가 학습시키는 기법
