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

DealDocAI is an end-to-end Retrieval-Augmented Generation system for working with financial and legal documents.

The system ingests SEC filings related to the Microsoft–Activision acquisition and lets users ask questions in natural language while grounding answers in the original documents.

## What I built

- Built the complete RAG pipeline from scratch.
- Processed and chunked large financial documents.
- Generated semantic embeddings with SentenceTransformers.
- Stored document representations in ChromaDB.
- Implemented semantic retrieval and context construction.
- Added citation-grounded question answering.
- Implemented structured extraction of deal terms as JSON.
- Added multi-query retrieval to improve recall.
- Built a FastAPI REST API with Pydantic validation.
- Added a lightweight browser interface for demonstration.

## Architecture

The system separates document processing, embeddings, retrieval, LLM interaction, and API layers into dedicated modules.

For generation, the system uses **Llama 3.3 70B through Groq**.

## Key design choice

I deliberately implemented the RAG pipeline without LangChain.

This allowed me to work directly with the core components of retrieval-augmented generation rather than hiding the architecture behind a high-level framework.

## Takeaway

DealDocAI demonstrates my ability to move beyond prompt-based LLM applications and build the retrieval, grounding, structured extraction, and API layers required for a complete AI system.