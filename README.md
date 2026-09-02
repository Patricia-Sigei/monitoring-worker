# CloudOps Monitoring Worker

A background worker service for the CloudOps Monitoring project.

The worker runs independently from the Express API and is responsible for processing background tasks without requiring HTTP requests.

## Overview

The worker is a separate service within the CloudOps Monitoring application.

Its responsibilities will include:

* Running background jobs
* Processing tasks independently from the API
* Interacting with the PostgreSQL database when required
* Producing logs for monitoring and troubleshooting
* Exposing metrics for Prometheus monitoring

## Running Locally

Install dependencies:

```bash
npm install
```

Start the worker:

```bash
npm start
```

The worker should continue running and process background jobs periodically.

## Technologies

* Node.js
* PostgreSQL
* Prisma
* Docker
* Prometheus

## Project Role

The worker runs alongside the API service:

```text
CloudOps Monitoring
│
├── API
│   └── Handles HTTP requests
│
├── Worker
│   └── Handles background jobs
│
└── PostgreSQL
    └── Stores application data
```

The worker will later be integrated into Docker Compose and the project's monitoring stack.
