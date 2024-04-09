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

# @app.get("/json/{data}")
# def read_item(data: str):
#     # error
#     sentence_to_predict = [data]
#     sentence_to_predict_vectorized = vectorizer.c(sentence_to_predict)
#     predicted_category = naive_bayes_classifier.predict(sentence_to_predict_vectorized)
#     changetype = predicted_category.tostring()
#     # decoded_string = bytes(changetype.encode("utf-8")).decode("unicode_escape")
#     # integer_value = int.from_bytes(decoded_string.encode(), byteorder='big')
#     return {"data is ": predicted_category}

    # pass
    # return {"data is ": data}

@app.get("/json")
def testjson():
    return "hello my name is hwak"

@app.get("/json/{data}")
def read_item(data: str):
    sentence_to_predict = [data]
    sentence_to_predict_vectorized = vectorizer.transform(sentence_to_predict)
    predicted_category = naive_bayes_classifier.predict(sentence_to_predict_vectorized)
    print("ประเภทของประโยค:", predicted_category)
    return {"data is ": predicted_category}


# http://127.0.0.1:3000/hi?name=hwak
# @app.get("/hi")
# def hi(name:str):
#     return {"hi": name}

# class User(BaseModel):
#     username: str
#     password: str
#     level: Optional[str] = "normal"

# http://127.0.0.1:3000/docs
# @app.get("/")
# def read_root():
#     return {"Hello": "World123"}

# # http://127.0.0.1:3000/name?name=Hwak&surname=Jira
# @app.get("/name")
# def hi(name:str, surname: Optional[str] = None):
#     return {"nickname": name,"surname":surname}

# @app.get("/list/{listId}")
# def read_item(listId: str):
#     return {"list_id": listId}

# @app.get("/items/{item_id}")
# def read_item(item_id: int):
#     return {"item_id": item_id+123}

