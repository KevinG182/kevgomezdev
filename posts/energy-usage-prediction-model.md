---
title: 'Energy Usage Prediction Model and Analysis'
group: 'CMPE 188: Machine Learning for Big Data'
date: '2019-12-07'
---
![Skyline](/images/ml-skyline.jpg)

During the construction of buildings, especially in the early 20th century, there was a lack of consideration for **energy efficiency;** however, now due to threats such as **Global Warming**, we have mission to decrease the use of resources. Our project is designed after a **Kaggle competition** project aimed at building an accurate model **predicting a building's energy usage.**

The data set used came from a **3 year-long study by ASHRAE** which recorded the chilled water, electricity, hot water, and steam meters from **over 1,000 buildings.** This information is useful in predicting the energy consumption to be used in **constructing energy-efficient buildings.**

View Kaggle Competition [HERE](https://www.kaggle.com/c/ashrae-energy-prediction)

Roles Included:
- Tested Machine Learning algorithms in **Python** using Jupyter Notebook with models imported from **Scikit Learn**
- Determined **Random Forest**, and **K-Nearest Neighbor** as the best algorithms for the dataset
- Implemented a database from a 3 yearlong study recording utility meters, weather patterns, and building statistics 
- Performed **data preprocessing** on the dataset by merging the tables, selecting the most relevant features, converting specific features to categorical or numeric, filled empty values using forward/backwards fill and normalized the data

During the submission of the test data, kaggle compared a small selection of the final results with the expected results we determined through the different algorithms ran and as a result **we earned a score of 1.45 RMS Error** with a ranking of **1925th place on the leaderboard of about 2,500 teams.** 

The evaluation metrics provided by the Kaggle competition include the use of a **Root Mean Squared Logarithmic Error.** Which is calculated by the function below:

![Root Mean Squared Logarithmic Error](/images/ml-evaluation.png)
