---

title: "Multilingual Customer Review Sentiment Analysis"

year: "2025"

category: "NLP"

description: "Multilingual sentiment classification with web-scale data collection, imbalance-aware augmentation, and classical ML benchmarking."

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

A multilingual sentiment analysis system for classifying gym reviews as positive, neutral, or negative.

The project focused on a problem that appears frequently in real machine learning systems: the model is only as reliable as the data pipeline behind it. I therefore worked across data collection, multilingual preprocessing, augmentation, quality control, and model evaluation rather than treating classification as an isolated modeling task.

## My contribution

I owned the complete data pipeline and classical machine learning benchmarking.

- Built a Selenium-based multi-source scraper covering 12 Google Maps locations and three additional websites.

- Handled infinite scrolling, cookie-consent popups, duplicate reviews, and multilingual date formats.

- Collected **658 reviews** from heterogeneous sources.

- Implemented language detection and preprocessing for multilingual text.

- Preserved sentiment-bearing punctuation such as exclamation and question marks during cleaning.

- Diagnosed severe class imbalance in the original dataset.

- Designed a data augmentation pipeline using back-translation through English, German, and Spanish.

- Added synonym replacement using WordNet.

- Implemented a CamemBERT semantic similarity quality gate to reject augmented samples that deviated too far from the original review.

- Rebalanced the dataset while controlling augmentation quality.

- Benchmarked Multinomial Naive Bayes, Complement Naive Bayes, Logistic Regression, and Random Forest using TF-IDF representations.

- Used stratified 5-fold cross-validation to compare models on both original and augmented data.

## Results

The best classical configuration was **Logistic Regression on the augmented dataset**.

- Macro F1: **0.564**

- Neutral-class F1 improved from **0 to 0.286**

The improvement demonstrated that targeted augmentation could substantially improve representation of the minority class without relying solely on a more complex model.

My teammate also fine-tuned XLM-RoBERTa, achieving **84.4% accuracy** and **0.854 weighted F1**, and the project included a Streamlit interface for comparing the approaches.
