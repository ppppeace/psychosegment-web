from typing import Optional, Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    username: str
    password: str
    level: Optional[str] = "normal"


# http://127.0.0.1:3000/docs
@app.get("/")
def read_root():
    return {"Hello": "World123"}

@app.get("/json")
def testjson():
    # return  {"message": "This is data from FastAPI"}
    return "hello my name is hwak"


@app.get("/hi")
def hi(name:str):
    return {"hi": name}

# http://127.0.0.1:3000/name?name=Hwak&surname=Jira
@app.get("/name")
def hi(name:str, surname: Optional[str] = None):
    return {"nickname": name,"surname":surname}


@app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}
def read_item(item_id: int):
    return {"item_id": item_id+123}

@app.get("/list/{listId}")
def read_item(listId: str):
    return {"list_id": listId}

@app.post("/login")
def login(user:User):
    return {"echo":user}
