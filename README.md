# Material


## Dashboard

### About this Project

Detection of synthetic voice manipulation refers to the process of identifying whether an audio recording or voice sample has been artificially generated or altered using computer-generated techniques. With the advancement of technology, it has become possible to create highly realistic synthetic voices that can mimic human speech patterns and intonations. However, these synthetic voices can also be misused for malicious purposes, such as creating fake audio recordings to spread misinformation.

### Outcome Requirements

-[Week 1] Understanding Deep learning Neural Network Models
-[Week 2] Understanding Datasets
-[Week 3] Identifying Models and setting up the code
-[Week 4] Verifying the Results

### Required Skills

- Python Programming Language
- Git
- Basic of Unix
- Deep Learning Basics

### Outcome

Comparatives Study Report on Various Available existing System

## Detecting Synthetic Voice

#### Detecting Synthetic Voice

##### Data Collection
Gather a dataset of audio clips with both synthetic and natural voices. Label each clip as "synthetic" or "natural."

##### Feature Extraction
Extract relevant audio features from the clips. Common features include spectrograms, mel-frequency cepstral coefficients (MFCCs), or other time-domain or frequency-domain representations.

##### Model Architecture
Design a neural network architecture suitable for audio classification. A convolutional neural network (CNN) or a recurrent neural network (RNN) could be a good starting point.

##### Data Preprocessing
Normalize and preprocess the data. You may also want to augment the dataset to improve model generalization.

##### Model Training
Train the model using the labeled dataset. Use binary classification loss functions like binary cross-entropy.

##### Model Evaluation
Evaluate the model's performance using metrics such as accuracy, precision, recall, and F1-score on a validation dataset.

##### Fine-Tuning
Fine-tune the model as needed to improve its performance.


#### Detecting the Presence of Audio:
To determine if there is any audio present in a clip (regardless of whether it's synthetic or natural), you can use a simple energy-based approach:

##### Data Preprocessing
Convert the audio clip into a suitable digital representation, such as PCM audio data.

##### Energy Calculation
Calculate the energy of the audio signal by summing the squared values of the audio samples within fixed-sized frames (e.g., 20-50 ms frames).

##### Thresholding
Set a threshold energy level below which the audio is considered silent or absent. You can determine this threshold experimentally or based on your specific use case.

##### Detection
Analyze the energy levels within the audio clip. If the energy levels consistently stay below the threshold, you can conclude that there is no significant audio present.


## Work

- [Teammate grinds](https://github.com/Srujan-rai/Deepfake_voice_detection)
- [Colab Audio](https://colab.research.google.com/drive/1xCx5LCsbY1FbHN5xT8MQJwNENovIyLMC)
- [Colab Model](https://colab.research.google.com/drive/11kF8o5FfXf9YP_Pnp45UiQeZvnHTH5VC)


## Weekly Assigns

### [Week 1] Understanding Deep learning Neural Network Models


### [Week 2] Understanding Datasets


### [Week 3] Identifying Models and setting up the code


### [Week 4] Verifying the Results

