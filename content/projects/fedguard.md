---

title: "FedGuard"

year: "2026–Present"

category: "AI Security"

description: "Privacy-preserving federated intrusion detection for DDoS traffic, combining unsupervised anomaly detection with human review."

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

FedGuard is a privacy-preserving intrusion detection system designed to detect DDoS attacks across distributed network environments without centralizing raw traffic.

Network traffic is processed through sliding time windows and transformed into statistical features. An unsupervised autoencoder learns the characteristics of normal traffic and uses reconstruction error to identify anomalous behavior. Predictions close to the decision boundary can then be routed to a Human-in-the-Loop module instead of being handled automatically.

## My contribution

I was responsible for the federated AI component of the project, covering model selection, anomaly detection, threshold calibration, and federated optimization.

- Benchmarked eight detection approaches, including Logistic Regression, Random Forest, XGBoost, MLP, Isolation Forest, One-Class SVM, LOF, and Autoencoder.

- Compared five autoencoder architectures with different depths and regularization strategies.

- Selected a Dropout-based architecture because of its lower false-positive rate, faster convergence, and compatibility with federated aggregation.

- Diagnosed a critical thresholding problem where the autoencoder achieved an AUC-ROC of 1.000 but initially produced an F1 score of only 0.54.

- Replaced the unsuitable percentile threshold with a Youden J threshold calibrated using labeled validation data.

- Designed a heterogeneous federated setting by partitioning clients according to time of day rather than randomly.

- Quantified the resulting non-IID distribution using the Kolmogorov-Smirnov statistic.

- Compared FedAvg and FedProx and selected FedAvg based on equivalent performance and the moderate degree of client heterogeneity.

- Integrated the federated model with the wider detection pipeline and Human-in-the-Loop decision layer.

**## Results**

On the synthetic evaluation set, the calibrated federated model achieved:

* AUC-ROC: **1.000**

* F1 score: **0.9999**

* Federated performance matched the centralized baseline.

* Mean KS score across clients: **0.213**

* Federated training converged after **43 rounds**.

These near-perfect results should **not be interpreted as evidence of real-world generalization**. The test traffic was generated using the same underlying process as the training data, meaning the evaluation distribution closely mirrors what the model was exposed to during training. The model can therefore learn and recognize patterns specific to the synthetic generation process, producing exceptionally high performance without demonstrating that it will generalize to genuinely unseen network traffic.

This limitation was an important finding of the project. Rather than presenting the synthetic benchmark as a definitive measure of IDS performance, I treat it as a controlled validation of the federated pipeline and its ability to learn the intended attack patterns.

Evaluation on real-world **CAIDA traffic** is ongoing and will provide a more meaningful test of generalization to unseen traffic distributions.


## What I learned

The most valuable part of FedGuard was diagnosing why apparently strong metrics could initially produce poor decisions.

The project required reasoning about anomaly-score distributions, threshold calibration, non-IID data, federated optimization, false positives, and the difference between centralized and distributed evaluation.


## Research direction

The next stage focuses on validating the architecture against real CAIDA traffic, improving generalization to realistic attack patterns, and developing the work toward a research publication.