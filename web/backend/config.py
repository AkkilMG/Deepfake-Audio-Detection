# (c) 2022-2023, Akkil M G (https://github.com/HeimanPictures)
# License: GNU General Public License v3.0


import os
import motor.motor_asyncio

ProjectName = "Farm"
ProjectDesc = "A template for FARM application."
ProjectVersion = "0.0.1"

# MongoDB connection
MONGODB_URL = os.getenv("MONGODB_URL")
mongoClient =  motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URL)
mongodb = mongoClient[ProjectName][ProjectName]