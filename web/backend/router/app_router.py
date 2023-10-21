# (c) 2022-2023, Akkil M G (https://github.com/HeimanPictures)
# License: GNU General Public License v3.0


from fastapi import APIRouter, Request

from config import *

router = APIRouter()

@router.get("/")
async def get_file(requests: Request):
    pass