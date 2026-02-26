# project-x - A open source alternative to databricks and snowflake
<img width="1905" height="989" alt="image" src="https://github.com/user-attachments/assets/b1c963b6-f0cb-4b96-bebb-a0f3afcc1674" />
<img width="1896" height="982" alt="image" src="https://github.com/user-attachments/assets/e261d145-a433-4e79-a934-6e09ef61f941" />

# 🚀 Cloud-Native Lakehouse Data Warehouse Platform

> A modern, multi-tenant, cloud-native lakehouse architecture powered by Apache Iceberg, Trino, Apache Spark, and S3-compatible object storage.

---

## 🌍 Overview

A scalable, distributed data warehouse platform designed for:

- Distributed SQL analytics
- Large-scale batch & stream processing
- Decoupled storage and compute
- Open table format with ACID guarantees
- Multi-tenant data isolation
- Cloud-native containerized deployment

---

## 🏗 Architecture

```
                ┌────────────────────┐
                │    React Client    │
                └─────────┬──────────┘
                          ↓
                ┌────────────────────┐
                │   Node.js API      │
                │   (Stateless)      │
                └─────────┬──────────┘
                          ↓
        ┌────────────────────────────────────────┐
        │            Compute Layer               │
        │  ┌────────────┐   ┌──────────────┐   │
        │  │   Trino    │   │  Apache      │   │
        │  │ Distributed│   │  Spark       │   │
        │  │ SQL Engine │   │  Processing  │   │
        │  └────────────┘   └──────────────┘   │
        │              ┌───────────────────┐    │
        │              │   Apache Iceberg  │    │
        │              │   Open Table      │    │
        │              │   Format (ACID)   │    │
        │              └───────────────────┘    │
        └──────────────────────┬─────────────────┘
                               ↓
                ┌────────────────────┐
                │  MinIO (S3 Layer)  │
                │  Object Storage    │
                └────────────────────┘
```

---

## 🛠 Technology Stack

- Node.js + Express (Stateless API Layer)
- Trino (Distributed SQL Query Engine)
- Apache Spark (Batch & Stream Processing Engine)
- Apache Iceberg (Open Lakehouse Table Format)
- MinIO (S3-Compatible Object Storage)
- MongoDB (Metadata Store)
- Docker & Docker Compose (Containerized Deployment)
- React (Frontend Layer)

---

## 🔥 Core Capabilities

- High-performance distributed query execution
- Large-scale data transformation with Spark
- Lakehouse-native architecture
- ACID-compliant table operations
- Schema evolution & time travel ready
- Secure multi-tenant namespace isolation
- Horizontally scalable object storage
- Fully containerized cloud-native stack

---

## 👥 Multi-Tenant Namespace Model

```
bucket/
   └── tenant-id/
         └── database/
               └── table/
```

Designed for logical isolation, scalability, and enterprise-grade tenant separation.

---

## 📁 Project Structure

```
project-root/
├── frontend
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── routes/
│   └── app.js
│
├── docker/
│   └── docker-compose.yml
│
├── trino/
│   └── catalog/
│
├── spark/
│   └── jobs/
│
├── minio-data/
│
└── README.md
```

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/Altaf-Sheikh-Full-Stack/project-x.git
cd project-x
```

### Launch Platform

```bash
docker-compose up -d
```

---

## 🌟 Why This Architecture?

- Open standards (no vendor lock-in)
- Separation of compute and storage
- Unified batch + analytics engine (Spark + Trino)
- Cost-efficient object storage
- Cloud-native containerized deployment
- Designed for modern analytical & big data workloads

---

## 📈 Roadmap

- Kubernetes-native deployment
- Role-Based Access Control (RBAC)
- Query observability & telemetry
- Spark Connect integration
- Data governance & lineage
- AI-assisted SQL generation
- Streaming ingestion pipelines

---

## 👨‍💻 Author

Altaf Sheikh

---

## 📄 License

MIT License
