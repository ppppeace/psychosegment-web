from fastapi import FastAPI
from pydantic import BaseModel
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# Load the pickled model
with open('naive_bayes_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Define FastAPI app
app = FastAPI()

# Define request body model
class TextRequest(BaseModel):
    text: str

# Define endpoint for prediction
@app.post("/predict")
async def predict(text_request: TextRequest):
    # Preprocess the input text if required (e.g., tokenization, vectorization)
    # Assuming the model was trained with TF-IDF vectorization
    tfidf_vectorizer = TfidfVectorizer()
    text_vectorized = tfidf_vectorizer.transform([text_request.text])

    # Make prediction
    prediction = model.predict(text_vectorized)

    # Return prediction
    return {"prediction": prediction[0]}
