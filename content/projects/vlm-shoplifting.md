---

title: "Real-Time Shoplifting Detection with Vision-Language Models"

year: "2026"

category: "Computer Vision"

description: "Fine-tuned a vision-language model for shoplifting detection in retail surveillance video through failure-driven experimentation."

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

The work followed a failure-driven methodology: benchmark candidate VLMs, establish a zero-shot baseline, analyze failure modes, redesign the training task, fine-tune the selected model, and evaluate whether inference-time prompt design could improve detection without additional training.

## My work

- Benchmarked five open-source vision-language models on the UCF-Crime dataset and compared their precision, recall, inference speed, and behavior on surveillance footage.

- Selected **Qwen2-VL-7B-Instruct** based on its strong precision, identifiable failure modes, and favorable inference speed.

- Evaluated the model zero-shot on proprietary retail CCTV footage using different temporal configurations.

- Analyzed recurring false negatives and false positives to identify concrete failure patterns.

- Designed training data around observed failure modes rather than relying on generic augmentation.

- Fine-tuned Qwen2-VL using **QLoRA with rank 16 and 4-bit NF4 quantization** on two NVIDIA T4 GPUs.

- Conducted two training cycles with different task formulations.

- Identified evaluation leakage caused by overlapping source videos across dataset splits.

- Simplified the second training cycle from a seven-category classification task to binary theft versus normal classification.

- Conducted a five-variant prompt engineering study to improve the precision and recall trade-off without retraining.

- Investigated confidence calibration and evaluated whether model confidence could reliably support human review.

## Results

The first training cycle appeared promising on its internal test set with an F1 of approximately **0.70**, but achieved only **2.1% recall** on a separate held-out set.

This exposed problems in both task formulation and evaluation methodology.

The redesigned V2 model achieved:

- **F1: 0.4412** on the balanced held-out set.

- **2.5× higher F1** than the original model.

- Detected **3× more theft cases** on the full imbalanced test set.

Prompt engineering then improved the same model to:

- **F1: 0.6667**

- **Recall: 78.7%**

This improvement was obtained entirely at inference time, without additional training.

## Key finding

The project also uncovered a critical limitation in the model's confidence estimates.

Theft and normal predictions had almost identical average confidence, and most predictions were concentrated in a narrow confidence range. As a result, simple confidence thresholds could not reliably separate uncertain cases for human review.

