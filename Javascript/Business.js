let random = Math.random();
let f, s, t;
if (random < 0.33)
    f = "Crazy";
else if (random > 0.33 && random < 0.66)
    f = "Amazing";
else
    f = "Fire";

random = Math.random();
if (random < 0.33)
    s = "Engine";
else if (random > 0.33 && random < 0.66)
    s = "Foods";
else
    s = "Garments";

random = Math.random();
if (random < 0.33)
    t = "Bros";
else if (random > 0.33 && random < 0.66)
    t = "Limited";
else
    t = "Hub";

alert(`Your Business Name is : ${f} ${s} ${t}`);