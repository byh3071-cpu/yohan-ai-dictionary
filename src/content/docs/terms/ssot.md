---
title: SSoT (Single Source of Truth)
description: 권위 있는 정보가 한곳에만 존재한다는 원칙. Yohan OS에서는 memory/가 SoT.
status: draft
updated: "2026-04-16"
source: memory/wiki/concepts/single-source-of-truth.md
tags: [ssot, sot, harness, yohan-os]
---

## 정의

**SSoT(Single Source of Truth)** 는 동일한 사실·설정·정책이 **여러 복사본으로 흩어지지 않고**, **단일 원본**에서 관리된다는 원칙입니다. 충돌이 나면 **항상 그 원본을 따른다**고 선언해야 자동화·에이전트·사람이 같은 기준을 본다.

## Yohan OS에서의 위치

- **진실의 원천**은 `memory/` + Git. 노션 등은 미러·입력 큐.
- **하네스 엔지니어링**은 “SoT를 어떻게 읽고 쓸지”를 규칙으로 고정한다.
- **컨텍스트엔지니어링**은 “에이전트에게 SoT 중 무엇을 얼마나 보여줄지”를 설계한다.

## 관련 용어

- [하네스엔지니어링](/terms/harness-engineering/) — SoT 위반·임의 수정을 막는 통제
- [컨텍스트엔지니어링](/terms/context-engineering/) — SoT에서 꺼내 보여 줄 맥락의 층위 설계
- [스키마](/terms/schema/) — SoT 문서·메타데이터가 지켜야 할 형식

## 원천

- Yohan OS SoT: `memory/wiki/concepts/single-source-of-truth.md`
