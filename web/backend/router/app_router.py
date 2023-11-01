# (c) 2022-2023, Akkil M G (https://github.com/HeimanPictures)
# License: GNU General Public License v3.0


import os, requests
from fastapi import APIRouter, Request, File, UploadFile
from fastapi.responses import JSONResponse

from config import *
from utils.model import prediction

router = APIRouter()

@router.post("/convert")
async def get_file(request: Request, file: UploadFile = File(...)):
    if not os.path.isdir("./upload"):
        os.makedirs("./upload")
    file_path = os.path.join("upload", file.filename)
    with open(file_path, "wb") as f:
        f.write(file.file.read())
    predict = prediction(file_path)
    os.remove(file_path)
    if predict["success"]:
        req = requests.post("https://fakedetection.heimanbotz.workers.dev/file", json={"name": file.filename }, files={'file': (file.filename, open(predict["image"], 'rb'))}).json()
        os.remove(predict["image"])
        if req["success"]:
            return JSONResponse({ "success": True, "predict": predict["prediction"], "image": f"https://fakedetection.heimanbotz.workers.dev/download/{req['id']}" })
        else:
            return JSONResponse({ "success": False, "message": req["message"] })
    else:
        return JSONResponse({ "success": False, "message": predict["message"] })
