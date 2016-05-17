For those that are in a timezone behind BST/GMT this bookmarklet will load a BBC radio programme suitable for your current time of day. (e.g. a breakfast show in the morning)

Install:

Add this bookmark:

```javascript
javascript:void function(e)%7Bvar t%3Dfunction(e)%7Bvar t%3Dnew Date%3Bt.setTime(t.getTime()-60*(t.getTimezoneOffset()%2B60)*1e3),e(".broadcast").each(function(a)%7Bvar n%3Dnew Date(e(this).find(".broadcast__info").find("h3").attr("content")),o%3Dnew Date(e(this).find(".broadcast__info").find("meta").attr("content"))%3Bif(t>n%26%26o>t)%7Bvar r%3D(t.getTime()-n.getTime())/1e3,i%3DMath.floor(r/3600)%3Br-%3D3600*i%3Bvar f%3DMath.floor(r/60)%3Br-%3D60*f%3Bvar c%3DMath.floor(r)%3Bwindow.location.href%3De(this).find(".programme").attr("resource")%2B"%23playt%3D"%2Bi%2B"h"%2Bf%2B"m"%2Bc%2B"s"%7D%7D)%7D,a%3De%26%26e.fn%26%26parseFloat(e.fn.jquery)>%3D1.7%3Bif(a)t(e)%3Belse%7Bvar n%3Ddocument.createElement("script")%3Bn.src%3D"//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js",n.onload%3Dn.onreadystatechange%3Dfunction()%7Bvar e%3Dthis.readyState%3Be%26%26"loaded"!%3D%3De%26%26"complete"!%3D%3De%7C%7Ct(jQuery.noConflict())%7D%7Ddocument.getElementsByTagName("head")%5B0%5D.appendChild(n)%7D(window.jQuery)%3B)
```

How to use:

Navigate to a BBC schedule, e.g. http://www.bbc.co.uk/6music/programmes/schedules#on-now
Press bookmarklet.
