from typing import Optional, Union
from fastapi import FastAPI
from pydantic import BaseModel
import pickle

app = FastAPI()

with open('bayes_classifier.pkl', 'rb') as file:
    bayes_classifier = pickle.load(file)

@app.get("/json/{data}")
def read_item(data: str):
    sentence_to_predict = [data]
    predicted_category = bayes_classifier.predict(sentence_to_predict)
    return {"data": int(predicted_category)}
