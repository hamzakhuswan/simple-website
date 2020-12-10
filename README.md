<h1 align="center">
  <a href="https://hamzakhuswan.com/simple-website">
    <svg width="150px"><circle cx="75" cy="75" r="40" fill="red"/></svg>  
  </a>
  <br/>
  Simple Website
</h1>

This is a simple website made for school, and it meant to be simple and not so complicated. This website was created using prebuilt webpack template (my private template which I use to create landig pages fast).

The purpsoe of the website is to show my teacher, the way I do websites. Of course I could do more complicated one, but I would miss the point here.

# The process

My process of building such simple website is pretty straight forward and this is how it looks like.

1. First thing I have to have i a sectch. I either create it via Figma or someone provide it to me.
2. Secondly when the idea is visulized, I have to think of technoloies and approches I have to take to create the website.
3. Then I code I lay the fundation and convert the sectch as good as I can to code.
4. Laslty is tweaks. This part takes most of the time and can last forever. So be sure to allocate resonable time for this.

The rest of the text is same thing but more verbose.

## Sectch

Sectch can be done of many ways, but I prefer one way and it is to use software called [Figma](http://figma.com/). Figma unlike many ui design tools doesn't need to pay to make use of it. An advantage of using such tool is that you it design for such thing, and you can visulize your ideas with good accuracy and with ease.

But of course you could use any other tool.

**Example:**
This is what sctched in Figma.
[![Figma output](./docs/simple-website-overview-sm.png)](./docs/simple-website-overview.png)
Of course this is a setch and finale will look different, as you can see bellow.

## Planing
This part is not what looks like. It is not about deciding forhand the list of technologies you need. Instead it is general, abstraction. E.g. think of the important thing, ask yourself good questions, for example how could I replicate the sectch as good and as efficent as possible?

Planning is for ending up with good resualt, but it aslo for your developer happienss. Because believe no one can write repeated `div` or code many 8 times. Look at what I did instead.

**Example:**
When I created the website I wrote notes. Since it is elementary school porject the look wasn't as improtant. But I hade limited time. So asked my self that question. The answer was to use a template. Lookly I had created many such simple website and the past, I had pre built template, I created so I used. You can as well use online template, it will be properly better then mine. (😂 that way I keept it private).

## Coding
In this part you lay out the sturture for the website. It is good idea to fellow good pratices like dividing the code spliting and doing component based code. It will make life easier. But if you using a framework like React, you are already doing that.

Try not to go in deatails here, becaue you will be tweaking a lot in the next part.

**Example:**

This was very simple website, and the code could be written in big chunck. But I can't work like this. I had to do something like compoenent so I used html preporcessor.

Look a souce code, it will give an idea how I think. Everything is abstracted in its "compoennt".
```txt
source
│   handlebars.js
│   index.hbs
│   index.js
│
├───assets
│       check.svg
│       style.scss
│
└───components
    ├───intro
    │       intro.hbs
    │       intro.js
    │       intro.scss
    │
    ├───navbar
    │       navbar.hbs
    │       navbar.js
    │       navbar.scss
    │
    └───product
            product.hbs
            product.js
            product.scss
```



<br>

## Tweaking (optional)
This is most timeconsuming part, and might take forever. So be careful here. I been there. It is a loop, and specially if you working with clients. 

This is what website look after that third stage. It could diffently be improved.
<div>
  <img src="./docs/desktop.png" alt="desktop version"  height="500px"/>
  <img src="./docs/mobile.png" alt="mobile version"  height="500px"/>
</div>

But because this is school project, I might not do any furhter improvement.




<br>

------

Hope my point was reached.

[Hamza Khuswan](https://hamzakhuswan.com) - web developer and  CS (Computer Science) learner.