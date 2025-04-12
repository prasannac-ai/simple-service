# simple-service
pip install -r requirements.txt

uvicorn server:restapp --host 0.0.0.0 --port 8111


docker build -t simple-service .        

docker images    

docker run -p 8111:8111 simple-service 

docker build -t simple-service:v2 .   

docker compose up

docker compose up --build --scale simple-service=2

docker ps

docker compose down