---
title: "Real-Time Shoplifting Detection with Vision-Language Models"
year: "2026"
category: "Computer Vision"
description: "Fine-tuned a vision-language model for shoplifting detection in retail surveillance video."
technologies:
  - Python
  - Qwen2-VL-7B-Instruct
  - QLoRA
  - LLaMA-Factory
  - PyTorch
  - Video Understanding
private: true
featured: true
---

## Overview

This internship project investigated whether a vision-language model could detect shoplifting directly from retail surveillance video.

The project combined model benchmarking, failure analysis, dataset design, QLoRA fine-tuning, prompt engineering, and confidence calibration.

## My work

- Benchmarked 5 open-source vision-language models.
- Selected **Qwen2-VL-7B-Instruct** for its performance and deployment constraints.
- Analyzed zero-shot failures on proprietary retail CCTV footage.
- Designed training data around recurring failure modes.
- Fine-tuned the model with **QLoRA**, using rank 16 and 4-bit NF4 quantization.
- Ran two training cycles with different task formulations.
- Identified data leakage caused by overlapping source videos across splits.
- Redesigned the evaluation protocol using group-aware splitting.
- Conducted a prompt-engineering study without additional training.
- Investigated confidence calibration and threshold-based human review.

## Results

The first training cycle achieved an F1 of **0.70** on an internal test set but collapsed to **2.1% recall** on a separate held-out set.

Rather than treating this as a model failure alone, I traced the problem to evaluation leakage and task formulation.

The redesigned V2 model achieved:

- **F1: 0.441** on the balanced held-out set
- **Precision: 0.714**
- **Recall: 0.319**

Prompt engineering then increased F1 to **0.667** with **78.7% recall**, without retraining the model.

## Key finding

The confidence scores were poorly calibrated: predictions were concentrated between 0.65 and 0.85, making confidence-based routing to human review unreliable.

This became an important finding for the next training cycle rather than something to hide.

## Takeaway

This project strengthened my experience in multimodal fine-tuning and, more importantly, in designing reliable ML experiments: detecting leakage, questioning misleading metrics, reformulating tasks, and analyzing model behavior rather than optimizing a single score.

The repository is private because the project was completed during an internship.