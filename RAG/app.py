from fastapi import FastAPI
from pydantic import BaseModel
from basescript import returnResponse

app = FastAPI()

# Define a Pydantic model for the incoming JSON data
class Item(BaseModel):
    ID: str
    query: str


@app.post("/items/")
async def fetchResponse(item: Item):
    rseponse = returnResponse(item.query, item.ID)
    return {"response": rseponse}
