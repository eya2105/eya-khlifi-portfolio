---

title: "Yonn-GPT"

year: "2025"

category: "LLM Engineering"

description: "Fully local multilingual AI assistant for internal audit, combining domain fine-tuning, RAG, and optimized CPU inference."

technologies:

  - Python

  - Qwen2.5-7B-Instruct

  - LoRA

  - Unsloth

  - RAG

  - ChromaDB

  - llama.cpp

  - GGUF

  - FastAPI

  - React

  - PostgreSQL

  - Redis

  - Docker

private: true

featured: true

---

## Overview

Yonn-GPT is a fully local multilingual AI assistant developed during my internship at Yonnov’IA for internal audit use cases.

The system was designed to operate without external AI services while supporting French, English, and Arabic. The project covered the complete LLM lifecycle from model selection and domain data preparation to fine-tuning, retrieval, local inference, and application deployment.

## My contribution

I worked on the **fine‑tuning track** with another team member. The RAG pipeline was handled by the other two team members.

- Benchmarked open‑source LLMs across multilingual performance, latency, memory usage, and model size.
- Selected **Qwen2.5-7B-Instruct** for its multilingual capabilities and efficiency.
- Extracted knowledge from French PDF documents, including scanned documents through OCR.
- Built and cleaned a large domain‑specific training dataset.
- Generated and augmented approximately **200,000 multilingual Q/A pairs**.
- Structured training data in ChatML format.
- Fine‑tuned the model using **LoRA‑PEFT and Unsloth in 8‑bit mode**.
- Exported and quantized the model to GGUF.
- Optimized local inference with **llama.cpp**.

### RAG track (handled by other team members)

The other two team members were responsible for:

- The RAG pipeline: SentenceTransformers embeddings, ChromaDB vector search, and retrieval logic.
- The full‑stack application: FastAPI backend, React frontend, PostgreSQL, Redis, and Dockerized services.

## Architecture

The final system combines:

- Fine‑tuned Qwen2.5-7B-Instruct
- SentenceTransformers embeddings
- ChromaDB vector search
- Redis short‑term conversation memory
- FastAPI backend
- React frontend
- PostgreSQL
- llama.cpp local inference
- Dockerized services

## Results

- Simple chat latency: **under 2 seconds**
- RAG responses on large documents: **3–5 seconds**
- Improved domain relevance and contextualization
- Reduced hallucinations
- Improved handling of French, English, and Arabic technical terminology

## Why it matters

The project was designed around a real constraint: sensitive audit information should not depend on external AI services.

The result was a complete local AI stack, from data preparation and fine‑tuning to retrieval, inference, API integration, and deployment.