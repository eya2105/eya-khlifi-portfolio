---
title: "IMDB Sentiment Analysis"
year: "2026"
category: "Deep Learning"
description: "Benchmark of neural architectures for binary sentiment classification on 50,000 IMDB reviews."
technologies:
  - Python
  - TensorFlow
  - Keras
  - GloVe
  - Word2Vec
  - FastText
  - Streamlit
github: "https://github.com/eya2105/imdb-sentiment-analysis.git"
featured: false
---

## Overview

A deep learning benchmark for binary sentiment classification using the 50,000-review IMDB dataset.

## What I built

I compared five neural architectures:

- Dense network
- CNN
- LSTM
- Bidirectional LSTM
- Deep CNN

I also compared different word-embedding approaches, including GloVe, Word2Vec, and FastText.

## Results

The Bidirectional LSTM achieved the best performance at approximately **89.1% accuracy**.

The comparison showed how model architecture affects the ability to capture contextual information, particularly when sentiment depends on word order and negation.

## Demo

I also built a Streamlit interface allowing users to enter a review and receive an instant sentiment prediction.

## Takeaway

This project established my foundations in neural text classification, sequence modeling, embeddings, and empirical model comparison.