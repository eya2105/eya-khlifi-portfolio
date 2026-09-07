---
title: "ICBHI Respiratory Sound Classification"
year: "2026"
category: "Research & Deep Learning"
description: "Transformer-based respiratory sound classification with leakage-aware evaluation and imbalance-focused optimization."
technologies:
  - Python
  - PyTorch
  - Audio Spectrogram Transformer
  - Focal Loss
  - Imbalanced Learning
  - Cross-Validation
github: "https://github.com/eya2105/icbhi-respiratory-sound-classification.git"
featured: false
---

## Overview

A research-oriented reproduction and extension of a respiratory sound classification approach using an Audio Spectrogram Transformer (AST) on the ICBHI 2017 dataset.

The task is to classify recordings into four categories: Normal, Crackle, Wheeze, and Both.

## My approach

The main objective was improving recall for abnormal respiratory sounds while maintaining reliable evaluation.

I implemented:

- Patient-level cross-validation to prevent information leakage.
- WeightedRandomSampler for minority-class representation.
- Focal Loss with γ = 2.
- Coordinate-descent threshold optimization.
- Controlled experiments focused on class imbalance and rare classes.

## Results

The best configuration improved:

- Macro recall: **45.22% → 50.28%**
- Improvement: **+5.06 percentage points**
- Rare "Both" class recall: **+30.7 points**
- Specificity: approximately **+15 points** over the reference approach

## Takeaway

This project strengthened my ability to reproduce research, identify evaluation risks, and improve a model through targeted experimentation rather than simply changing architectures.