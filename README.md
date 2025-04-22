# simple-service

## 🔧 Setup

```bash
pip install -r requirements.txt
```

```bash
uvicorn server:restapp --host 0.0.0.0 --port 8111
```

## 🐳 Docker Commands

### Build image
```bash
docker build -t simple-service .
```

### List Docker images
```bash
docker images
```

### Run container
```bash
docker run -p 8111:8111 simple-service
```

### Build versioned image
```bash
docker build -t simple-service:v2 .
```

### Label and push versioned image to repository 
```bash
docker tag  simple-service:v2 localhost:5001/simple-service:v2
docker push localhost:5001/simple-service:v2

```

### Compose up
```bash
docker compose up
```

### Compose up with scaling
```bash
docker compose up --build --scale simple-service=2
```

### List running containers
```bash
docker ps
```

### Shut down all containers
```bash
docker compose down
```

### Portforward for nginx
```bash
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80
```

##  Swagger UI

FastAPI automatically generates Swagger UI at:

- [http://localhost:8111/docs](http://localhost:8111/docs) → Swagger UI (interactive)
- [http://localhost:8111/redoc](http://localhost:8111/redoc) → ReDoc UI (alternative style)
- [http://localhost:8111/openapi.json](http://localhost:8111/openapi.json) → Raw OpenAPI schema
