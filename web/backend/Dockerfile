FROM python:3.9
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
COPY ./ /app
# RUN apt-get install -y curl
# RUN curl -o /app/utils/model/deepfake_model.h5 https://drive.usercontent.google.com/download?id=1-RTnCGtxicHFxcmzvnGRnGwoT8zaBbB3&export=download&authuser=0&confirm=t&uuid=c57b14c4-208e-4327-a629-b5bdd9efc9a6&at=APZUnTUQMz-PJCMQ0wIHy3HKtjeJ:1698955233333
# RUN apt-get remove --purge -y curl

RUN pip install gdown
RUN gdown --id 1-RTnCGtxicHFxcmzvnGRnGwoT8zaBbB3 -O /app/utils/model/deepfake_model.h5

CMD ["python3", "app.py"]