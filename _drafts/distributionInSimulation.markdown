---
title: When mean and standard deviation are enough
category: Simulation
---
There is a recent post on reddit that shows that [data could be vastly different even they can have the same mean and standard deviation](https://www.reddit.com/r/dataisbeautiful/comments/6ssmzc/be_wary_of_boxplots_they_could_be_hiding/). It quickly got more than 5K upvotes and 200 comments. For the least, it speaks to the pain point of many statisticians, data scientists who struggles to convince people that 'simple-minded' approach such as box plots is not sufficient. 

I was one of them. New out of school. Trying so hard to explain distribution tails, skewness, multi-modals to people in the manufacturing plant who are comfortably living in the six-sigma world all about mu and sigma. However, I found that **in some models, mean and standard deviations are enough**. In this post, I'm going to show you such an example. 

Consider a simple case. We have one machine and observe that jobs arrives in Possion distribution, in averge 1 job every 6 hours. The time the machine needs to complete a job varies. We want to decide whether we need to add another machine to keep total cycle time (including queue time) under 8 hours. 

Assume we have tons of data of service times. The question for modeler/analyst is, how much data analysis is needed here? Does the pattern in the time matter? Does the shape of distribution matter? Through simple statistical summary, we know that the service takes 4 hours in average, 1.732 as standard deviation. Does the real distribution matters? 

We'll use the simulation to answer this question: 



Now you may be shake your heads in disbelief. Why is it? The simple case of xxx will give you some hints. It turns out, in a M/G/1 model, that the E(T) and E(N) are functions of first two modes of S and V(T), V(N) are fuctions of first three modes. 

Implications: it means that if we are use the first two modes of leadtime or buffer as goal metrics, we will get the same optimal number! 



Derived distribution 
https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-436j-fundamentals-of-probability-fall-2008/lecture-notes/MIT6_436JF08_lec10.pdf

click <a href="https://cloud.anylogic.com/#/model/a17b5bbe-7c9d-4460-9be7-15c9820ebec0;mode=SETTINGS">simulation model</a>








I wished I have known this earlier to save hours and hours trying to get the most accurate data and fitting the perfect distribution. 






