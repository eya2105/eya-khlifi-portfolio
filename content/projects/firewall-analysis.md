---

title: "Firewall Log Analysis Platform"

year: "2025"

category: "Cybersecurity"

description: "Modular full-stack platform for firewall log analysis with secure authentication, anomaly detection, and reporting."

technologies:

  - NestJS

  - TypeScript

  - Angular

  - PostgreSQL

  - JWT

  - RBAC

  - Firewall Analysis

  - REST API

github: "https://github.com/eya2105/firewall-analysis-project.git"

featured: false

---

## Overview

A modular full-stack platform for importing, processing, analyzing, and visualizing firewall logs.

The application combines secure backend services with firewall log parsing, normalization, filtering, anomaly analysis, statistical dashboards, and reporting.

## My contribution

I was responsible for the backend security and authentication layer.

- Implemented JWT-based access and refresh token authentication.

- Designed role-based access control to separate permissions across user roles.

- Implemented authorization guards for protected backend resources.

- Added audit logging for security-sensitive operations.

- Implemented account lockout mechanisms to mitigate repeated unauthorized access attempts.

- Added secure refresh-token rotation.

- Integrated the authentication and authorization layer with the rest of the NestJS backend.

## Platform

The wider application combines:

- NestJS backend services.

- Angular frontend.

- PostgreSQL data storage.

- Firewall log parsing and normalization.

- Dynamic log filtering.

- Anomaly analysis.

- Statistical dashboards.

- Report generation.

The architecture was designed as a modular application so that security controls, log processing, analysis, and presentation could evolve independently.

