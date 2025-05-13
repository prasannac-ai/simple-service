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
docker build -t simple-service:v1 .
```
### Create Local Registry 
```bash
docker run -d -p 5001:5000 --name local-registry --restart=always registry:2
```

### Label and push versioned image to repository 
```bash
docker tag  simple-service:v1 localhost:5001/simple-service:v1
docker push localhost:5001/simple-service:v1
```
### Connect a Docker container (local-registry) to the Docker network used by Kind
```bash
docker network connect kind local-registry
```
### Look for images in registry
```bash
curl http://localhost:5001/v2/_catalog
```

### Load the image to kind
use this if you don't want to use local registry 
```bash
kind load docker-image <image name>
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

### Create Cluster
```bash
kind create cluster --config kind-config.yml
```
### Deploy services
```bash
kubectl apply -f simple-service-deployment.yaml
kubectl apply -f simple-service-svc.yaml
kubectl apply -f ingress.yml 
```
### Portforward for nginx
```bash
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8088:80
```

##  Swagger UI

FastAPI automatically generates Swagger UI at:

- [http://localhost:8111/docs](http://localhost:8111/docs) → Swagger UI (interactive)
- [http://localhost:8111/redoc](http://localhost:8111/redoc) → ReDoc UI (alternative style)
- [http://localhost:8111/openapi.json](http://localhost:8111/openapi.json) → Raw OpenAPI schema

## Important Note

This codebase is intentionally designed with bugs and imperfections to serve as a learning tool. The purpose is to encourage debugging, problem-solving, and critical thinking as part of the workshop exercises. Please keep this in mind while working through the code
