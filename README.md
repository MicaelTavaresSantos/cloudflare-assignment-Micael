# cloudflare-assignment-Micael
CloudFlare Application Services Assignment - Micael Santos

# Cloudflare Application Services Assignment

## Overview

This project demonstrates the deployment of a secure and performant web application using Cloudflare services integrated with an AWS origin environment.

The architecture includes:

- Cloudflare DNS and Proxy
- SSL/TLS Full (Strict)
- Origin server on AWS EC2
- Reverse proxy and WSGI application
- Cloudflare Tunnel
- Cloudflare Zero Trust Access
- Cloudflare Worker
- Cloudflare R2 Object Storage

The goal was to implement a production-like environment showcasing security, performance, and access control best practices.

---

## Architecture

![Architecture Diagrams](architecture/escrever)

---

## Components

### Origin Application

A simple Flask application that returns HTTP request headers.

Gunicorn is used as a production WSGI server and managed with systemd for persistence.

### Cloudflare Tunnel

The origin is not exposed directly to the internet. Traffic is securely routed via Cloudflare Tunnel.

### Zero Trust Access

Authentication is enforced before accessing protected resources using Cloudflare Access with One-Time PIN.

### Cloudflare Worker + R2

A Worker intercepts requests to `/secure` and retrieves a file from an R2 bucket.

---

## Deployment Steps

### 1. AWS EC2 Setup

- Ubuntu instance deployed
- Security groups configured
- SSH access enabled

### 2. Application Deployment

# Cloudflare Application Services Assignment

## Overview

This project demonstrates the deployment of a secure and performant web application using Cloudflare services integrated with an AWS origin environment.

The architecture includes:

- Cloudflare DNS and Proxy
- SSL/TLS Full (Strict)
- Origin server on AWS EC2
- Reverse proxy and WSGI application
- Cloudflare Tunnel
- Cloudflare Zero Trust Access
- Cloudflare Worker
- Cloudflare R2 Object Storage

The goal was to implement a production-like environment showcasing security, performance, and access control best practices.

---

## Architecture

![Architecture Diagram](architecture/architecture-diagram.png)

---

## Components

### Origin Application

A simple Flask application that returns HTTP request headers.

Gunicorn is used as a production WSGI server and managed with systemd for persistence.

### Cloudflare Tunnel

The origin is not exposed directly to the internet. Traffic is securely routed via Cloudflare Tunnel.

### Zero Trust Access

Authentication is enforced before accessing protected resources using Cloudflare Access with One-Time PIN.

### Cloudflare Worker + R2

A Worker intercepts requests to `/secure` and retrieves a file from an R2 bucket.

---

## Deployment Steps

### 1. AWS EC2 Setup

- Ubuntu instance deployed
- Security groups configured
- SSH access enabled

### 2. Application Deployment

pip install flask gunicorn
gunicorn -b 127.0.0.1:5000 wsgi:app

Systemd service created for persistence.

### 3. Cloudflare Configuration

- Domain added to Cloudflare
- DNS A record configured
- Proxy enabled
- SSL set to Full (Strict)

### 4. Cloudflare Tunnel

cloudflared tunnel create
cloudflared tunnel run

Configured to route traffic to localhost origin.

### 5. Zero Trust Access

Access policy created requiring authentication via One-Time PIN.

### 6. Worker and R2

Worker configured to retrieve objects from R2 when accessing `/secure`.

---

## Testing

### Public Endpoint

https://tunnel.micael-cf-assignment.com

Returns HTTP headers.

### Secure Endpoint

https://tunnel.micael-cf-assignment.com/secure

Requires authentication and returns file from R2.

---

## Repository Structure

app/
architecture/
cloudflare/
docs/
nginx/
screenshots/
README.md

---

## Screenshots

See `/screenshots` directory for deployment evidence.

---

## Author

Micael Santos
