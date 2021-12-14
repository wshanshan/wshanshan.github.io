---
title:  "Visualization of Chicago Daycare Locations"
categories: Data Visualization
tags: Geopandas OpenData
excerpt: Data visualization and location analysis of Chicago daycares. Data from Illinois DCFS, Chicago Data Portal, Google Geocoding and US Census.
toc: true
---

When I started to look for a daycare in Chicago around 2016 , I thought it would be a piece of cake (how naive!). After all, I live in a neighborhood full of young families - Lake View, Chicago. It is [2nd in population](https://gist.github.com/wshanshan/e150855f7b09bebc9b1064e30e55a071) among Chicago's 77 communities. I just have one 'simple' request: within walking distance. 

But after months of searching, I couldn't find any available spot. I finally gave up but couldn't stop wondering: Is it only my bad luck or does everyone else have the same problem? Why?

I downloaded data from [daycare license authority, DCFS](https://sunshine.dcfs.illinois.gov/Content/Licensing/Daycare/ProviderLookup.aspx) and queried the geolocations of all the licensed daycare providers using Google Geocoding API. The plots are interesting. 

## Basics of Chicago Daycares

Chicago has ~ 2500 licensed daycares. It's 25% of Illnois's total counts. Considering Chicago has 21% of state population (2.705 million in 12.8 million, 2016 US Census estimates), it's reasonable.

{% include figure image_path="/assets/images/chicagoDaycares/pie_countsByType.png" alt="Illinois childcare counts by type" %}{: .align-right}
{% include figure image_path="/assets/images/chicagoDaycares/pie_capacityByType.png" alt="Illinois childcare capacity by type" %}{: .align-right}

There are three types of licensed childcare providers: *daycare centers*, *home daycares*, and *group home daycares*. *Home daycares* and *group daycares* are usually small operations at someone's home. Limited by their [licenses](http://ccrs.illinois.edu/providers/licensing.html), they can care for up to 8 to 16 kids. *Daycare centers* are much bigger. The average capacity is around ~ 70. Some large ones have capacity greater than 300. 

~71% childcare providers in Illinois are either home daycares or group home daycares. Nevertheless, daycare centers provide ~74% of total capacity. 


## Location, Location, Location

What's interesting about different types of daycares are their locations. As shown in the map below, home-based daycares are clustered in west and south Chicago communities, while daycare centers dominate central and north sides. 

{% include figure image_path="/assets/images/chicagoDaycares/scatterplot_locations.png" alt="Chicago daycare locations" %}{: .align-center}

Why is it happening? Maybe people living in central and north sides don't like the idea of opening daycares in their homes? Maybe there are less apartment/houses in those areas appropriate for home daycares? Maybe people in these communities generally prefer daycare centers, so there is not enough demand for home-based daycares? It's probably a mix of all. 

The consequence is apparent. In the communities where only big centers prevail, providers are relatively farther away from each other because of their large capacities, leaving patches of 'empty' space on the map. 

Unfortunately, my home is in such an empty spot, which makes it difficult to find a daycare within walking distance. ᕙ(⇀‸↼‶)ᕗ


## Capacity

What makes things even trickier is the capacity. Although Lake View is one of the top 10 communities having the highest daycare capacity per square feet, it's low on capacity by person. So among the only 2 daycares in my walking distance (even though I'm willing to walk 20 minutes one way), both have unrealistically long waiting lists. 
 
{% include figure image_path="/assets/images/chicagoDaycares/communityByCapacityDensity.png" alt="Chicago community colormap - daycare capacity density" %}{: .align-right}

Top 10 Chicago communities rank by daycare capacity per square feet:

1. ARMOUR SQUARE
2. NEAR NORTH SIDE
3. LINCOLN PARK
4. LOGAN SQUARE
5. UPTOWN
6. GREATER GRAND CROSSING
7. LAKE VIEW
8. NEAR SOUTH SIDE
9. WASHINGTON HEIGHTS
10. HUMBOLDT PARK
{: .small}

<figure class="full"></figure>

{% include figure image_path="/assets/images/chicagoDaycares/communityByCapacityPerPerson.png" alt="Chicago community colormap - daycare capacity by person" %}{: .align-right}

Top 10 Chicago communities rank by capacity per person:

1. AUSTIN
2. AUBURN GRESHAM
3. CHICAGO LAWN
4. WASHINGTON HEIGHTS
5. AVALON PARK
6. WEST GARFIELD PARK
7. SOUTH SHORE
8. CHATHAM
9. BELMONT CRAGIN
10. GREATER GRAND CROSSING
{: .small}

## On a final note

The data results explain my experience. 

Now I drive my kid to daycare everyday. I like the daycare but still don't like the driving. But at least I know that I'm only one of many. 

If you happen to thinking about opening a daycare, come to Lake View! Your business will boom here! 

## Technical notes

I use Python [Geopandas](http://geopandas.org/) to make the charts. Here is the gist if you are interested: [chicagoDaycares.ipynb](https://gist.github.com/wshanshan/e150855f7b09bebc9b1064e30e55a071)


