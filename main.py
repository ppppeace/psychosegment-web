from typing import Optional, Union
from fastapi import FastAPI
from pydantic import BaseModel
import pickle

app = FastAPI()

# with open('naive_bayes_classifier.pkl', 'rb') as file:
#     naive_bayes_classifier = pickle.load(file)
# with open('vectorizer.pkl', 'rb') as file:
#     vectorizer = pickle.load(file)

# @app.get("/json/{data}")
# def read_item(data: str):
#     sentence_to_predict = [data]
#     sentence_to_predict_vectorized = vectorizer.transform(sentence_to_predict)
#     predicted_category = naive_bayes_classifier.predict(sentence_to_predict_vectorized)
    
#     return {"data is": list(predicted_category)}
with open('bayes_classifier.pkl', 'rb') as file:
    bayes_classifier = pickle.load(file)


@app.get("/json/{data}")
def read_item(data: str):
    sentence_to_predict = [data]
    predicted_category = bayes_classifier.predict(sentence_to_predict)
    # return{"data": list(predicted_category)}
    return {"data is":list(predicted_category)}