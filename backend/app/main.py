import os
import requests

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from utils.filter import filter_response_data

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.environ.get("BLOCKCHAIR_API_KEY")


@app.get("/wallet/{address}")
def get_wallet(address: str):
    try:
        payload = {"state": "latest", "transaction_details": True, "key": API_KEY}
        res = requests.get(
            f"https://api.blockchair.com/bitcoin/dashboards/address/{address}",
            params=payload,
        )
        full_data = res.json()
        filtered_data = filter_response_data(full_data)
        return filtered_data
    except requests.exceptions.HTTPError as e:
        # Handle HTTP errors (e.g., 4XX, 5XX responses)
        raise HTTPException(status_code=res.status_code, detail=str(e)) from e
    except requests.exceptions.RequestException as e:
        # Handle other requests exceptions
        raise HTTPException(status_code=503, detail="Service Unavailable or bad request.") from e