---

title: "DealDocAI"

year: "2026"

category: "LLM Engineering"

description: "Evaluated RAG system for querying SEC filings and extracting structured, source-cited deal information."

technologies:

  - Python

  - RAG

  - SentenceTransformers

  - ChromaDB

  - Cross-Encoder Reranking

  - gpt-oss-120b (Groq)

  - FastAPI

  - Pydantic

  - pytest

github: "https://github.com/eya2105/dealdoc-ai.git"

featured: true

---

## Overview

DealDocAI is an end-to-end Retrieval-Augmented Generation system for querying financial and legal documents.

The system ingests SEC filings related to the Microsoft–Activision acquisition (the merger agreement and the proxy statement) and processes them for semantic retrieval. Users can ask natural-language questions or extract deal terms as structured JSON, with every answer and every extracted value grounded in the original evidence.

I treated evaluation as part of the system: a hand-written set of 26 questions measures retrieval quality, and an 8-field set measures extraction.

## What I built

- Designed and implemented the complete RAG pipeline directly on ChromaDB, SentenceTransformers and an LLM API, without a RAG framework.

- Parsed and chunked large legal and financial documents, with a data model that separates a deal from the documents it contains and supports filtered search.

- Generated semantic embeddings with SentenceTransformers and built the vector storage and retrieval layer with ChromaDB.

- Added a cross-encoder reranking stage that re-scores the top 30 candidates before context construction for grounded generation.

- Added citation-grounded question answering so responses can be traced back to the exact source passages.

- Implemented structured extraction of deal terms into validated JSON: one targeted retrieval and one LLM call per field, each value returned with the passages it was read from, and invented references rejected.

- Built an evaluation harness (recall@5, MRR, and per-field correctness and grounding) and used it to compare every change. Reranking raised recall@5 from 65% to 88% on 26 questions (96% after correcting two ambiguous test questions), and extraction reached 7 of 8 fields correct and grounded, up from 3.

- Tested multi-query retrieval (LLM-generated alternative questions) and disabled it after it showed no measurable gain and added an LLM call per query.

- Built a FastAPI REST API with Pydantic request and response validation.

- Structured the code with ports and adapters: the retrieval, extraction and ingestion logic depends only on small interfaces for embeddings, reranking, the LLM and the vector store, wired together in a single composition root.

- Wrote 106 pytest tests that run without a model or an API key, using hand-written fakes.

- Built a lightweight browser interface where citations open the source passage and extracted fields appear as a table with their sources.

## Architecture

The architecture separates document processing, embedding generation, vector retrieval, reranking, context construction, LLM generation, structured extraction, and API serving into dedicated components.

Routes stay thin and call an application service. The generation layer uses **gpt-oss-120b through Groq**, ChromaDB provides semantic document retrieval, SentenceTransformers generates the document representations, and a cross-encoder reranks the candidates. Because every external dependency sits behind an interface, the LLM can be replaced (for example by a local model) without touching the retrieval or extraction logic.

## Key design choice

I deliberately implemented the RAG pipeline without LangChain.

Working directly with document processing, embeddings, retrieval, prompting, and generation made the underlying architecture explicit and allowed me to control and measure each stage of the pipeline.

That also made it possible to diagnose failures stage by stage: for each extraction error, the evaluation shows whether retrieval missed the passage or the LLM misused it. The one remaining failure (a financial advisor mentioned only in passing in the negotiation narrative) is a retrieval limit.
