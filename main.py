from typing import Optional, Union
from fastapi import FastAPI
from pydantic import BaseModel
import pickle

app = FastAPI()

with open('naive_bayes_classifier.pkl', 'rb') as file:
    naive_bayes_classifier = pickle.load(file)

# Load the CountVectorizer
with open('vectorizer.pkl', 'rb') as file:
    vectorizer = pickle.load(file)

class User(BaseModel):
    username: str
    password: str
    level: Optional[str] = "normal"

@app.get("/json/{data}")
def read_item(data: str):
    sentence_to_predict = [data]
    sentence_to_predict_vectorized = vectorizer.transform(sentence_to_predict)
    predicted_category = naive_bayes_classifier.predict(sentence_to_predict_vectorized)
    print("ประเภทของประโยค:", predicted_category)
    return {"data is ": predicted_category}


# http://127.0.0.1:3000/docs
@app.get("/")
def read_root():
    return {"Hello": "World123"}

@app.get("/json")
def testjson():
    # return  {"message": "This is data from FastAPI"}
    return "hello my name is hwak"

# @app.get("/json/{data}")
# def read_item(data: str):
#     sentence_to_predict = [data]
#     sentence_to_predict_vectorized = vectorizer.transform(sentence_to_predict)
#     predicted_category = naive_bayes_classifier.predict(sentence_to_predict_vectorized)
#     print("ประเภทของประโยค:", predicted_category)
#     return {"data is ": predicted_category}

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
