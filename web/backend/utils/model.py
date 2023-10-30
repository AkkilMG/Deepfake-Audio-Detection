import os
from tensorflow.keras.preprocessing import image
import numpy as np
from tensorflow import keras
# from werkzeug.utils import secure_filename
import matplotlib.pyplot as plt
from scipy.io import wavfile

model = keras.models.load_model('deepfake_model.h5')

image_height = 640
image_width = 480


def process_image(file):
    # filename = secure_filename(file.filename)
    file_path = file
    file.save(file_path)
    img = image.load_img(file_path, target_size=(image_height, image_width))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img / 255.0
    return img

def model(file):
    img = process_image(file)
    predictions = model.predict(img)
    class_names = ['fake', 'real']
    predicted_class_index = np.argmax(predictions)
    predicted_class = class_names[predicted_class_index]
    return { "success": True, "prediction": predicted_class, "image": f'uploads/plot/{file.filename}' }

def prediction(file):
    try:
        sample_rate, audio_data = wavfile.read(file)
        time = np.arange(0, len(audio_data)) / sample_rate
        plt.figure()
        plt.plot(time, audio_data)
        plt.xlabel("Time")
        plt.ylabel("Amplitude")
        plt.title("Waveform of " + file)
        plot_filename = os.path.splitext(file) [0] + ".png"
        plot_path = os.path.join("uploads/plot", plot_filename)
        plt.savefig(plot_path)
        plt.close()
        return model(plot_path)
    except Exception as e:
        return { "success": True, "message": f"Error: {e}" }


