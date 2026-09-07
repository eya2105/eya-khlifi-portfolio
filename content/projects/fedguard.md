---
title: "FedGuard"
year: "2026–Present"
category: "AI Security"
description: "Privacy-preserving federated intrusion detection for DDoS traffic, combining anomaly detection with human review."
technologies:
  - Python
  - PyTorch
  - Federated Learning
  - Autoencoders
  - scikit-learn
  - Network Security
github: "https://github.com/eya2105/FedGuard.git"
featured: true
---

## Overview

FedGuard is a privacy-preserving intrusion detection system designed to detect DDoS attacks without centralizing network traffic.

The system processes network traffic in time windows, extracts statistical features, and uses an autoencoder to detect anomalous behavior. Uncertain predictions can be routed to a Human-in-the-Loop module for analyst review.

## My contribution

I was responsible for the federated AI component of the project.

- Benchmarked 8 supervised and unsupervised detection models.
- Compared multiple autoencoder architectures and selected a Dropout-based model.
- Diagnosed and corrected a threshold-selection problem that caused severe false positives.
- Calibrated the anomaly threshold using Youden's J statistic.
- Designed a realistic non-IID partition across three simulated clients based on time of day.
- Compared FedAvg and FedProx for federated training.
- Evaluated the federated model against a centralized baseline.

## Results

- AUC-ROC: **1.000**
- F1 score: **0.9999**
- Federated model matched the centralized baseline on the synthetic evaluation set.
- Mean KS score across clients: **0.213**

These results are based on synthetic traffic generated from the same underlying process. Evaluation on real-world CAIDA traffic is ongoing.

## What I learned

The most important part of this project was not achieving a high score, but understanding why the model produced it.

The project involved diagnosing threshold failures, reasoning about non-IID data, comparing federated optimization strategies, and identifying the gap between synthetic performance and real-world generalization.

## Research direction

The next stage focuses on evaluation against real CAIDA traffic and further validation of the federated architecture.