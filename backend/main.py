import openai
from fastapi import FastAPI, UploadFile
import io
from PIL import Image
import os

app = FastAPI()
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.post("/process_image")
async def process_image(file: UploadFile):
    image = Image.open(io.BytesIO(await file.read()))

    # OpenAI APIでOCR実行
    response = openai.ChatCompletion.create(
        model="gpt-4-vision-preview",
        messages=[
            {"role": "system", "content": "Extract text from the given image."},
            {"role": "user", "content": image}
        ],
        max_tokens=1000
    )

    extracted_text = response['choices'][0]['message']['content']
    return {"text": extracted_text}