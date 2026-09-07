---

title: "IMDB Sentiment Analysis"

year: "2026"

category: "Deep Learning"

description: "Benchmark of neural architectures and word representations for binary sentiment classification on 50,000 IMDB reviews."

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

A controlled deep learning benchmark for binary sentiment classification using the 50,000-review IMDB dataset.

The project was designed to compare how different neural architectures and word representation strategies affect the ability to model contextual information in natural language.

## What I built

- Cleaned and normalized the IMDB review corpus, including removal of HTML markup and unnecessary characters.

- Represented reviews using pretrained word embeddings.

- Compared GloVe, Word2Vec, and FastText representations.

- Implemented and evaluated five neural architectures.

- Built a Dense network as a baseline.

- Implemented a CNN to capture local textual patterns.

- Implemented a standard LSTM for sequential modeling.

- Implemented a Bidirectional LSTM to capture contextual information from both directions.

- Built a deeper CNN architecture for comparison.

- Evaluated the models using consistent classification metrics.

- Built a Streamlit interface for real-time sentiment prediction.

## Results

The best model was the **Bidirectional LSTM**, reaching approximately **89.1% accuracy**.

The benchmark also showed clear differences between architectures:

- Dense network: approximately **74%**

- CNN: approximately **84.6%**

- LSTM: approximately **84.3%**

- Bidirectional LSTM: approximately **89.1%**

- Deep CNN: approximately **87.1%**

The Bidirectional LSTM performed best because it could incorporate contextual information from both sides of a sequence, which is particularly useful for sentiment patterns involving negation and word order.

