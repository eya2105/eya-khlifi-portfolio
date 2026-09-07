---

title: "ICBHI Respiratory Sound Classification"

year: "2026"

category: "Research & Deep Learning"

description: "Transformer-based respiratory sound classification with imbalance-aware optimization, leakage-aware evaluation, and systematic error analysis."

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

A research-oriented reproduction and extension of an Audio Spectrogram Transformer approach for classifying respiratory sounds from the ICBHI 2017 dataset.

The task covers four classes: Normal, Crackle, Wheeze, and Both. Because abnormal respiratory sounds are heavily underrepresented, the main objective was to improve sensitivity to minority classes while maintaining reliable evaluation.

Rather than treating model architecture as the only optimization target, I investigated how class imbalance, threshold selection, overfitting, data augmentation, and validation methodology affected the final results.

## My approach

I reproduced the reference AST plus SAM configuration and then built a sequence of controlled experiments, with each experiment isolating a specific modification.

- Established a baseline using a pretrained Audio Spectrogram Transformer optimized with SAM.

- Diagnosed severe bias toward the majority Normal class.

- Added WeightedRandomSampler to increase minority-class representation during training.

- Replaced standard CrossEntropyLoss with Focal Loss to emphasize difficult and underrepresented samples.

- Implemented coordinate-descent threshold optimization to adjust class decision boundaries.

- Tested Test-Time Augmentation and identified why frequency-style augmentation was inappropriate for the stored 1D representation.

- Experimented with online waveform augmentation and different Focal Loss settings.

- Identified patient leakage caused by cycle-level validation splits.

- Rebuilt the validation protocol using patient-level splitting so that patients could not appear in both training and validation sets.

- Moved augmentation offline to the raw audio waveforms to preserve the semantics of temporal and acoustic transformations.

- Performed detailed confusion, confidence, and device-level error analysis.

## Results

The best configuration combined **WeightedRandomSampler, Focal Loss with γ = 2.0, and threshold tuning**.

On the official ICBHI test set, it achieved:

- Macro recall: **50.28%**

- Macro F1: **50.28%**

- Specificity: **82.91%**

- ICBHI score: **66.60%**

- Accuracy: **58.78%**

- Macro AUC ROC: **0.7908**

Compared with the reproduction baseline, macro recall improved from **45.22% to 50.28%**, a gain of **5.06 percentage points**.

The rare Both class improved from **8.88% to 39.64% recall**, demonstrating the effect of combining targeted sampling and Focal Loss.

The best configuration also reduced high-confidence errors from **442 to 48**, an **89% reduction**, indicating a substantial reduction in model overconfidence.

## Methodological finding

One of the most important findings was that an apparently strong validation score was partially caused by patient leakage.

Earlier experiments used cycle-level splits, allowing recordings from the same patient to appear in both training and validation. After switching to patient-level validation, the validation score became much closer to the official test performance.

This changed the interpretation of the earlier experiments and demonstrated why evaluation design is as important as model optimization in medical machine learning.

