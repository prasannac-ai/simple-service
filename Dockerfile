FROM python:3.13-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# Install stress-ng for inducing CPU or memory stress. Added for testing for to induce load on the server.
RUN apt-get update && apt-get install -y stress-ng



#& stress-ng --cpu 4 --timeout 60s"

# stress-ng --vm 2 --vm-bytes 512M --timeout 60s

CMD ["uvicorn", "server:restapp", "--host", "0.0.0.0", "--port", "8111"]

