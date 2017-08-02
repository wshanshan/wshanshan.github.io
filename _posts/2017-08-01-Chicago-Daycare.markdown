---
title:  "Why can't I find a daycare"
categories: DataAnalysis
tags: Python map geopandas lifedata
thumbnail: /assets/images/daycaremap/pie_countsByType.png
---

When I started to look for a daycare, I thought it would be a piece of cake. After all, I live in a neighborhood full of young families. Besides the basic needs, I have only one wish: walking distance to home. However, surprisingly I couldn't find any close-to-home daycare after months of search.

I wondered whether it's only my bad location, bad luck or everyone else has the same problem. I went to the government website and downloaded the data of all the licensed daycare providers, trying to get some insights about 'where to find daycares'. The findings are interesting. 

## Basics of Chicago Daycares

Chicago has a lot of daycares ~ 2500. It's 25% of Illnois's total counts. Considering Chicago has 21% of state population (2.705 million in 12.8 million, 2016 US Census estimates), it's not a bad representation. 
{% include figure image_path="/assets/images/daycaremap/pie_countsByType.png" alt="Illinois childcare counts by type" %}{: .align-right}
{% include figure image_path="/assets/images/daycaremap/pie_capacityByType.png" alt="Illinois childcare capacity by type" %}{: .align-right}

There are three types of licensed childcare providers: daycare centers, home daycares, and group home daycares. 


**Home daycares** and **group daycares** are similar in terms of operations and capacity. Implied by their names, the owners care for kids in theirs homes. Based on the type of [licenses](http://ccrs.illinois.edu/providers/licensing.html), the number of kids they can care for ranges from 8 to 16. Most of the childcare providers in Illinois are either home daycares or group home daycares (>70%). But because their limited scope, they only provide ~25% of the daytime care capacity. 

**Daycare centers** are usually in a much bigger scale than home-based cares. They have larger capacity, professionally managed staff and generally more expensive than home-based cares. 

## Location, location, location

What's interesting about daycare centers and home daycares are their locations. As shown in the chart below, while home-based daycares are clustered in the west and south side communities, they are rare on the central and north sides. Those regions, where home-based cares thrive, have a pretty good density of providers. In the areas where big centers prevail, it's logical to see that centers are relatively farther away from each other since each center has more capacity. Because of the lower density and uneven distributions of daycare centers, sometimes you will see patches of 'empty' space in the middle of a very busy area.

Unfortunately, my home is in such an empty spot, which makes it difficult to find a daycare within walking distance. 

{% include figure image_path="/assets/images/daycaremap/scatterplot_locations.png" alt="Chicago daycare locations" %}{: .align-center}

## Capacity

Less daycare doesn't mean less capacity. So I sum up the capacity of all types of daycares in each community and normalize it by the area size. 

At first glance, it seems that my area 'lake view' is one of the top 10 out of 77 Chicago coummunities that have the highest capacity density. The top list also includes quite a few popular residential communities that mostly is occupied by daycare centers, such as ARMOUR SQUARE (China town), near north side, lincoln park. It's a reaonable result considering the large capacity of centers. 
{% include figure image_path="/assets/images/daycaremap/communityByCapacityDensity.png" alt="Chicago community colormap - daycare capacity density" %}{: .align-right}

Top 10 Chicago communities rank by capacity area density:

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

But does it mean the capacity in those 'daycare centers' areas are sufficient. I downloaded the 2010 US census population data and used it to calculate the capacity per person. Here is result: 
{% include figure image_path="/assets/images/daycaremap/communityByCapacityPerPerson.png" alt="Chicago community colormap - daycare capacity by person" %}{: .align-right}

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

It turns out that the relative large capacity of day cares in my area is quickly offset by the larger population. The capacity per person in the 'center' area looks pretty pale compared to other areas. 

## Summary

The analysis results are pretty aligned with my experiences. There are not too many daycare providers with my walking distance. Among the limited choices, all of them have long wait lists that we couldn't get into any. I end up with driving my son to a slightly farther daycares everyday. We love the daycare. However, it's still not a convenient choice. 

It's hard to tell why there are so few home-based daycares in my neighborhood. 

## Notes on the data 
The limitation of the study: licensed capacity doesn't equal to current service capacity.






