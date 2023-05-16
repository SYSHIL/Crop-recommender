# Crop Recommender and Soil Fertility Calculator
This project is a crop recommender and soil fertility calculator developed using a random forest model. The aim of this tool is to assist farmers and agricultural professionals in making informed decisions about crop selection based on soil characteristics.

# Features
Crop Recommendation: The tool utilizes a random forest model trained on historical data to recommend suitable crops based on soil parameters such as pH level, nitrogen content, phosphorous content, and potassium content.

Soil Fertility Calculation: The tool also provides a soil fertility calculator that estimates the overall fertility of the soil based on the soil parameters mentioned above. This information can be useful for understanding the soil's nutrient content and making appropriate fertilization decisions.

# Installation
To run the Crop Recommender and Soil Fertility Calculator locally, follow these steps:

Clone the repository: git clone https://github.com/SYSHIL/crop-recommender.git
Navigate to the project directory: cd crop-recommender
Open the Crop_recommendation_p2.ipynb Jupyter notebook located in the models folder to explore the code and models used in the project.
Note: Make sure you have Python 3.6 or higher installed on your system.

# Usage
To use the Crop Recommender and Soil Fertility Calculator, follow these steps:

Ensure you have the necessary dependencies installed (see the "Installation" section).
Open the Crop_recommendation_p2.ipynb Jupyter notebook located in the models folder.
Execute the notebook cells sequentially to load the necessary models and functions.
Use the provided functions to input soil parameters and obtain crop recommendations or calculate soil fertility.
# Models
The models folder contains the trained random forest models used for crop recommendation. The models have been saved using a serialization library such as pickle or joblib. You can find the trained models and load them in the Crop_recommendation_p2.ipynb Jupyter notebook located in the models folder.

# Dataset
The historical data used for training the random forest model can be found in the dataset folder. The dataset includes information on soil parameters and corresponding crop yields. It is used to train the machine learning models for crop recommendation.
