# (c) 2022-2023, Akkil M G (https://github.com/HeimanPictures)
# License: GNU General Public License v3.0


import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import *
import router.app_router as app_router

app = FastAPI(
    title=ProjectName,
    description=ProjectDesc,
    version=ProjectVersion,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(app_router.router, prefix="/api/v1")

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)