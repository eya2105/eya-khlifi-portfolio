---

title: "DealDocAI"

year: "2026"

category: "LLM Engineering"

description: "Grounded RAG system for querying financial filings and extracting structured deal information."

technologies:

  - Python

  - RAG

  - SentenceTransformers

  - ChromaDB

  - Llama 3.3 70B

  - FastAPI

  - Pydantic

github: "https://github.com/eya2105/dealdoc-ai.git"

featured: true

---

## Overview

DealDocAI is an end-to-end Retrieval-Augmented Generation system for querying financial and legal documents.

The system ingests SEC filings related to the Microsoft–Activision acquisition, processes the documents for semantic retrieval, and allows users to ask natural-language questions while grounding generated answers in the original evidence.

## What I built

- Designed and implemented the complete RAG pipeline from scratch.

- Processed and chunked large legal and financial documents.

- Generated semantic embeddings using SentenceTransformers.

- Built the vector storage and retrieval layer with ChromaDB.

- Implemented context construction for grounded generation.

- Added citation-grounded question answering so responses can be traced back to source documents.

- Implemented structured extraction of deal terms into validated JSON.

- Added multi-query retrieval by generating alternative formulations of the original question to improve retrieval recall.

- Built a FastAPI REST API with Pydantic request and response validation.

- Implemented dedicated modules for embeddings, retrieval, vector database operations, LLM interaction, and API functionality.

- Built a lightweight browser interface for demonstrating the complete system.

## Architecture

The architecture separates document processing, embedding generation, vector retrieval, context construction, LLM generation, and API serving into dedicated components.

The generation layer uses **Llama 3.3 70B through Groq**, while ChromaDB provides semantic document retrieval and SentenceTransformers generates the document representations.

## Key design choice

I deliberately implemented the RAG pipeline without LangChain.

Working directly with document processing, embeddings, retrieval, prompting, and generation made the underlying architecture explicit and allowed me to control each stage of the retrieval pipeline.
