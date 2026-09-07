---
title: "SmartAssign"
year: "2025"
category: "AI & Software Engineering"
description: "AI-assisted employee task management combining resume intelligence, skill matching, and biometric authentication."
technologies:
  - Python
  - Django
  - Computer Vision
  - Face Recognition
  - NLP
  - Resume Parsing
private: true
---

## Overview

SmartAssign is an employee task management application designed to support intelligent task allocation by combining employee skills, availability, resume information, and biometric authentication.

The project combined two applied AI components with a Django application: an automated resume and task matching pipeline, and a facial recognition authentication system.

**Note:** The full SmartAssign repository is private, but the two AI components I built are available as separate public repositories linked below.

## My contribution

My work focused on the AI components of the platform.

### AI-powered task matching

I developed a resume processing pipeline that:

- Parses PDF resumes and extracts relevant textual information.
- Identifies employee names and relevant skills using NLP techniques.
- Structures extracted information into machine-readable data.
- Compares employee skills against task requirements.
- Computes matching scores to support task assignment.

Built the standalone implementation in the **Resume Task Matcher** repository:  
[Resume Task Matcher](https://github.com/eya2105/Resume-Task-Matcher.git)

### Facial authentication

I developed a facial recognition login system using Django and the `face_recognition` library. The system provides two authentication methods:

- **Facial recognition:** Users capture their face via webcam, which is then encoded and compared against stored facial embeddings.
- **Traditional login:** A fallback username and password system in case face recognition fails.

The system works as follows:

- Captures a user's face through the browser webcam.
- Detects the face and generates a 128‑dimensional facial embedding using a ResNet-based deep learning model.
- Compares the embedding against registered users in the database using similarity comparison.
- Integrates the verification process with Django authentication and session management.
- Offers a reload/reset webcam interface with a preview of the captured photo before submission.

The implementation is available in the **FaceRecognitionAI** repository:  
[FaceRecognitionAI](https://github.com/eya2105/FaceRecognitionAI.git)


