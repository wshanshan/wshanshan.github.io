---
title: When mean and standard deviation are enough
category: Simulation
---
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

There is a recent post on reddit that shows that [data could be vastly different in distribution even that they have the same mean and standard deviation](https://www.reddit.com/r/dataisbeautifulcomments/6ssmzc/be_wary_of_boxplots_they_could_be_hiding/). It quickly got more than 5K upvotes and 200 comments. For the least, it speaks to the pain point of many statisticians, data scientists trying to convince people that 'simple' approach such as box plots is not sufficient. 

Here I'm going to show you something that might blow your mind. I'm going to show you a case when **mean and standard deviations are enough**. 

The point: the usefulness of details depends on the context and use cases. We shall never lose the understanding of context, which, I would argue, is the most important thing a lot of times. 

## The case. 
Assume that we have one machine to process all the incoming jobs (think about a donut shops having one cashier, a one-line cash washer, etc.) . Jobs arrival times follow Possion distribution of 1 job every 6 hours. The service time varies but in average 4 hours per job. Assume that we never lose a job because of waiting time (no preemption), we know that the utilization will be merely around 4/6 = 67%. However, because of the variance in service time, some customers may need to wait for longer time and become pretty upset. The question is that shall we add another machine the average waiting time will be under 8 hours? 

### Does the shape of distribution matter?

I build a simulation in Anylogic to answer this question, in which I test four service time distributions of very different shapes but of the same mean and standard deviation.  Click <a href="https://cloud.anylogic.com/#/model/a17b5bbe-7c9d-4460-9be7-15c9820ebec0;mode=SETTINGS">simulation model</a>

{% include figure image_path="/assets/images/isVarianceEnough/distributions.png" %}{: .align-right}


|No. |Distribution of service time | E(T)| V(T)| E(N) | V(N)|
|1|x ~ uniform(min = 1, max=7)|101|101|101|101|
|2|<span>x ~ triangular(min=median=4-$$\sqrt{6}$$, max =4+2$$\sqrt{6}$$) </span>|102|102|102|102|
|3|<span>x ~ normal(mu = 2, sigma=$$\sqrt{3}$$)</span>|102|102|102|102|
|4|<span>$$\sqrt{30}x +4-\frac{\sqrt{30}}{4}$$ where x ~ beta(a= $$\frac{71}{16}$$, b= $$\frac{213}{16}$$)</span>|102|102|102|102|

Now you may be shake your heads in disbelief. Why is it? The simple case of xxx will give you some hints. It turns out, in a M/G/1 model, that the E(T) and E(N) are functions of first two modes of S and V(T), V(N) are fuctions of first three modes(1). 


Implications: it means that if we are use the first two modes of leadtime or buffer as goal metrics, we will get the same optimal number! 

<p>$$E(T)= E(S) + \frac{\lambda E(S^2)}{2(1- \rho)}$$</p>
<p>$$V(N)= \rho + \frac{(\lambda)^2E(S^2)}{2(1- \rho)}$$</p>
Modeling and Analysis of Manufacturing Systems, 1993 edition, Section 11.2.2 


### Does the auto-correlation pattern matter? 

Derived distribution 
https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-436j-fundamentals-of-probability-fall-2008/lecture-notes/MIT6_436JF08_lec10.pdf

click <a href="https://cloud.anylogic.com/#/model/a17b5bbe-7c9d-4460-9be7-15c9820ebec0;mode=SETTINGS">simulation model</a>






I wished I have known this earlier to save hours and hours trying to get the most accurate data and fitting the perfect distribution. 






