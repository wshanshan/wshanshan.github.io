---
title:  "Why can't I find a daycare"
categories: DataDoesntLie
tags: Python map geopandas Chicago daycare openData
thumbnail: /assets/images/daycaremap/pie_countsByType.png
---

When I started to look for a daycare, I thought it would be a piece of cake. After all, I live in a neighborhood full of young families - Lake view, Chicago. It is [2nd in population](https://gist.github.com/wshanshan/e150855f7b09bebc9b1064e30e55a071) among Chicago's 77 communities.

I didn't ask for much about daycares (I thought..). Besides the basics, I only have one simple wish: walking distance to home. But after months of search, I couldn't find any avaiable spot. I finally gave up but couldn't stop wondering: Is it only my bad luck or does everyone have the same problem?

So I went to the [government website](https://sunshine.dcfs.illinois.gov/Content/Licensing/Daycare/ProviderLookup.aspx), downloaded the data of all the licensed daycare providers, queried their geolocations from Google Geocoding API, and put them on a map. The findings are interesting. 

## Basics of Chicago Daycares

Chicago has a lot of daycares ~ 2500. It's 25% of Illnois's total counts. Considering Chicago has 21% of state population (2.705 million in 12.8 million, 2016 US Census estimates), it's not a bad representation. 

{% include figure image_path="/assets/images/chicagoDaycares/pie_countsByType.png" alt="Illinois childcare counts by type" %}{: .align-right}
{% include figure image_path="/assets/images/chicagoDaycares/pie_capacityByType.png" alt="Illinois childcare capacity by type" %}{: .align-right}

There are three types of licensed childcare providers: *daycare centers*, *home daycares*, and *group home daycares*. *Home daycares* and *group daycares* are usually small operations at someone's home. Limited by their [licenses](http://ccrs.illinois.edu/providers/licensing.html), they can care for up to 8 to 16 kids. *Daycare centers* are much bigger. The average capacity is around ~ 70. Some large ones have capacity more than 300. 

Most of the childcare providers in Illinois are either home daycares or group home daycares (~71%). Nevertheless, daycare centers provide ~74% of total capacity. 


## Location, Location, Location

What's interesting about different types of daycares are their locations. As shown in the map below, home-based daycares are clustered in west and south Chicago communities, while daycare centers dominate central and north sides. 

{% include figure image_path="/assets/images/chicagoDaycares/scatterplot_locations.png" alt="Chicago daycare locations" %}{: .align-center}

Why is it happening? Maybe people living in central and north sides don't like the idea of opening daycares in their homes? Maybe there are less apartment/houses in those areas appropriate as home daycares? Maybe people in these communities generally prefer daycare centers to home-based cares, so there is not enough demand? Maybe it's a mix of all above. 

The consequence is apparent. In the communities where only big centers prevail, providers are relatively farther away from each other because of their large capacities, leaving patches of 'empty' space on the map. 

Unfortunately, my home is in such an empty spot, which makes it difficult to find a daycare within walking distance. ᕙ(⇀‸↼‶)ᕗ


## Capacity

What makes things even tricker is the capacity. Although Lake View is one of the top 10 communites having the highest daycare capacity per square feet, it's low on capacity by person. So among the only 2 daycares in my walking distance (even I'm willing to walk 20 minutes one way), both have unrealistically long waiting lists. 
 
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

The data analysis perfectly explains my experience. 

Now I drive my son to daycare everyday. I like the daycare but still don't like the driving. But at least I know that I'm only one of many. 

If you happen to thinking about opening a daycare, come to my neighborhood! Your business will boom here! 

## Technical notes

I use Python [Geopandas](http://geopandas.org/) to make the charts. Here is the gist: [chicagoDaycares.ipynb](https://gist.github.com/wshanshan/e150855f7b09bebc9b1064e30e55a071)









