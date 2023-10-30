# (c) 2022-2023, Akkil M G (https://github.com/HeimanPictures)
# License: GNU General Public License v3.0


import os
from fastapi import APIRouter, Request, File, UploadFile
from fastapi.responses import JSONResponse

from config import *
from utils.model import prediction

router = APIRouter()

@router.get("/")
async def get_file(requests: Request, file: UploadFile = File(...)):
    with open(f"upload/audio/{file.filename}", "wb") as f:
        f.write(file.file.read())
    predict = prediction(f"upload/audio/{file.filename}")
    os.remove(f"upload/audio/{file.filename}")
    if predict["success"]:
        return JSONResponse({ "success": True, "predict": predict["prediction"], "image": predict["image"] })
    else:
        return JSONResponse({ "success": False, "message": predict["Message"]})
