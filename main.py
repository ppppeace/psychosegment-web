from typing import Optional, Union
from fastapi import FastAPI
from pydantic import BaseModel
import re
import emoji
import pickle
from thai_text_utility import ThaiTextUtility

app = FastAPI()
def clean_func(Text):
    Text = re.sub(r'฿', 'บาท', Text)
    Text = re.sub(r'[^ก-๙0-9a-zA-Z]', ' ', Text)
    Text = re.sub(r'5{2,}', 'ขำ', Text)
    Text = re.sub(r'ถ{2,}', 'ขำ', Text)
    Text = re.sub(r'\n+', '', Text)
    Text = re.sub('#\S+', '', Text)
    Text = re.sub('\r+', '', Text)
    Text = re.sub('\t+', '', Text)
    Text = emoji.demojize(Text)
    return "".join(Text.lower())

def cut_first_25_words(sentence):
    words = sentence.split()
    first_25_words = ' '.join(words[:128])
    return first_25_words

with open('bayes_classifier.pkl', 'rb') as file:
    bayes_classifier = pickle.load(file)

@app.get("/json/{data}")
def read_item(data: str):
    # thai_util = ThaiTextUtility()
    # sentence_to_predict = [data]
    # sentence_to_predict = sentence_to_predict.strip()
    # sentence_to_predict = clean_func(sentence_to_predict)
    # sentence_to_predict = cut_first_25_words(sentence_to_predict)
    # sentence_to_predict = thai_util.lemmatize(sentence_to_predict)
    # sentence_to_predict = [string.replace(",", "") for string in sentence_to_predict]
    # sentence_to_predict = ' '.join(sentence_to_predict)
    # predicted_category = bayes_classifier.predict(sentence_to_predict)
    # # return {"data": int(predicted_category)}
    # return predicted_category
    sentence_to_predict = data
    predicted_category = bayes_classifier.predict([sentence_to_predict])
    return {"data":int(predicted_category)}
