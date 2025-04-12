from fastapi import FastAPI

restapp = FastAPI()
@restapp.get("/")
async def root():
    return {"message": "Hello World RestAPI from FastAPI"}


@restapp.get("/health")
async def health():
    return {"status": "healthy"}

