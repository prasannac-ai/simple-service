from fastapi import FastAPI

restapp = FastAPI()
@restapp.get("/")
async def root():
    return {"message": "Hello World RestAPI from FastAPI V2"}


@restapp.get("/health")
async def health():
    return {"status": "healthy"}

