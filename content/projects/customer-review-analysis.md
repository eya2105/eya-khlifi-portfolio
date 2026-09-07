---
title: "Multilingual Customer Review Sentiment Analysis"
year: "2026"
category: "NLP"
description: "Multilingual sentiment classification with web-scale data collection, imbalance handling, and classical ML benchmarking."
technologies:
  - Python
  - Selenium
  - scikit-learn
  - TF-IDF
  - CamemBERT
  - Streamlit
github: "https://github.com/eya2105/customer_review_analysis.git"
featured: false
---

## Overview

A multilingual sentiment-analysis project for classifying gym reviews as positive, neutral, or negative.

## My contribution

I owned the complete data pipeline and classical machine-learning benchmarking.

- Built a Selenium-based multi-source review scraper.
- Collected reviews from Google Maps and additional websites.
- Handled infinite scrolling, cookie popups, duplicates, and multilingual dates.
- Collected **658 reviews**.
- Implemented language detection and text preprocessing.
- Preserved sentiment-bearing punctuation during cleaning.
- Addressed severe class imbalance through data augmentation.
- Used back-translation and synonym replacement.
- Added a CamemBERT-based semantic similarity quality gate.
- Benchmarked four classical ML models with TF-IDF features.
- Used stratified 5-fold cross-validation.

## Results

The augmentation pipeline substantially improved minority-class representation.

The best classical model was Logistic Regression on the augmented dataset:

- Macro F1: **0.564**
- Neutral-class F1: **0 → 0.286**

A teammate also fine-tuned XLM-RoBERTa, reaching **84.4% accuracy** and **0.854 weighted F1**.

## Takeaway

The project gave me practical experience with the part of ML that often matters most in real applications: collecting imperfect data, understanding its distribution, and designing preprocessing and evaluation around those constraints.