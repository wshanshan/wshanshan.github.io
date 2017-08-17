---
title:  "Convert a Console Python Application to a Web Application"
categories: Python 
tags: Flask Bootstrap AWS tutorial
---

{% include toc icon="gears" title="Table of Contents" %}

Flask is a popular Python framework to build web application. With Flask, for the first time, I think I can focus more on the design and prototype instead of figuring out what ten different (and evolving) web technologies are doing. As you can see from the google trend, I'm not alone to have this feeling. Flask is gaining a lot of interests these years. 

<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/1087_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"python flask","geo":"","time":"2004-01-01 2017-07-19"},{"keyword":"python Django","geo":"","time":"2004-01-01 2017-07-19"}],"category":0,"property":""}, {"exploreQuery":"date=2004-01-01 2017-07-19&q=python%20flask,python%20Django","guestPath":"https://trends.google.com:443/trends/embed/"}); </script> 


In this article, I'm going to share my experiences of converting an Python Console application to a Flask web application. We will then use Bootstrap template to give it a professional look and deploy it onto AWS so everyone can use it!

I assume you have installed Python and a Python console application to convert. You need to have basic programming skill to understand the codes in the tutorial. The console program I'm going to use is a cryptogram game(https://github.com/wshanshan/cryptograms.git). It generates cryptrom games and let users play the game through Console. It's a one-page python applicatoin and it doesn't depend on other python libries than the basics. To keep this tutorial simple, we don't use database but to use data in a csv file(source: []). 

## Part I. Install Flask

To start this project, let's create a virtual environment and install Flask. 

If you are using Mac or Linux, follow Flask's official [installation instruction](http://flask.pocoo.org/docs/0.12/installation/). 

If you are using Windows, you need to open a command window and use the following commands. Note that 'venv' is the name of my virtual environment, you can use other names.

```
> virtualenv venv 

> venv\Scripts\activate 

(venv) >pip install flask

```

You don't really have to install virtual environment to use Flask. But because we will later deploy the applicatoin to AWS, it's a mandatory requirement for this tutorial.


## Part II. Create a Flask project

Download the sample console program from github. You can test the application by: 

```
>python cryptograms.py
```

If it runs correctly, you should be able to see the window as shown in : 

The general flow of the program is as follows: 
1. Generate a question, post the question through console 
2. wait for users to input anwser
3. compare the user inputs, score the result
4. print the results out to Console
5. ask user if they want to continue? Y-> step1, n-> stop

Create a Flask project is easy. Add a new python file called 'application.py' and copy paste the following codes.

``` python
from flask import Flask, jsonify 

import cryptograms 


# create our little application :) 

application = Flask(__name__) 

 
@application.route('') 

def main(): 

    original, author = cryptograms.loadData(gameId) 
    keyMap = cryptograms.genKeys(original) 

    encrypted = cryptograms.encrypt(original, keyMap) 
 
    display1= [original, author,keyMap,encrypted] 
 
    return jsonify(display1) 
 

if __name__ == "__main__": 

    application.run() 
```

If you run application.py. You should be able to see the following results

{% include figure image_path="/assets/images/tutorial-webapp/image1" alt="jsonified crytogram rendered in a web browse" caption="localhost:5000/game/1" %}

## Part III. Design and implement web page templates

 
Understand the syntax of [jinja2 templates](http://jinja.pocoo.org/docs/2.9/templates/).

Add codes to index.html 


## Part IV. Code the action of 'submit' button
 


## Part V. Style our web application 
'Bootstrap'(http://getbootstrap.com/) is a libary that you can use to build a 'responsive, mobile first projects on the web.' Responsive means that the website you build will scale with the device that the user uses. To do that, Bootstrap is using a lot of CSS, javascipts. The good news for you is that if you just want to can use all its well built and proved out components without knowing too much about complicated codes. 

All you need to do is: 
1. Download the distributed version of Bootstrap from http://getbootstrap.com/getting-started/#download
	* you do not need Source code or SASS 
2. The distribution is a zip file that contains three folders "css", "js" and "fonts". You can extract them into the 'static' folder of the project

{% include figure image_path="/assets/images/tutorial-webapp/Screenshot from 2017-07-21 15-40-28.png" alt="donwloaded bootstrap" %}

To use the bootstrap components, make the following lines to your index.html


## Part VI. Deploy the application on AWS 

There are many ways to deploy the application. Here I'll describe the easiest way for non-programmer, which doens't require using commands. 

1. Create an AWS account if you don't have one already.
2. Generate requirements.txt to describe the depended python libraries
3. create an environment using Amazon's Elastic Beanstalk service	
4. Zip the project, deploy it to the Amazon 

The deployment will take a few minutes. If the deployment is successful, You will be able to see your application dashbard turns green. click the URL link and you should be seeing your application up and running. 

	Note: The application we deployed is simple. If your application have a database,  you can go on reading XX's tutorial about 'AWS deployment' if there is any issue.





