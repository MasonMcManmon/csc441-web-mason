## Week 8 FRi
I added header {flex-warp: warp; } which will allow my header to stack if there is no room when it's trying to display.

## Week 9, Wednesday
1. What are your three pages, and why those three?
index, Projects, and contact are my 3 pages. The first 2 are the ones we did in class while contact is the one i chose to do. I chose to do that one because i wanted the expericen of doing a contact page as i would like to work on website in the future.

2. You changed one thing in styles.css and all three pages changed.
 What would you have had to do if each page carried its own copy?
I would have had to wirte the code 3 times, once for each page.

3. What is one thing on your page you don't know how to change yet?
I dont know how to make a drop down menu yet. 

## Week 9, Friday
1. What width did you pick for your breakpoint, and how did you choose it?
I went 48 as it seemed to work best. 

2. The two things you found and fixed at phone width.
I worked on my CSS for ul so it was cleaner. I allined it flex-end so it would be pushed to the right. I also added an image style for future images i plan to add.

3. In your own words: what is the difference between justify-content and align-items?
Justify moves itemas along the colum or rows direction while align moves items in a purpendiculare way.

4. Why does the plain rule hold the narrow layout and the media query hold the wide one, instead of the other way round?
The plain rule is for phones so everything fits on their smaller screens. While media query is for bigger screens.

## Week 10, Wednesday
1. In your own words: what is the difference between HTML, CSS and JavaScript? One sentence each.
HTML is like the bones/contents of a website. CSS is like the style/way a website looks. While JavaScript is like the brain of the website where all the functions and interactive parts of a website are.

2. What does `defer` do on the script tag, and what breaks without it?
Defer allows the HTML page to finish running first there for ensuing that when the skript runs the page will be fully load allowing the skript to find the needed information.

3. Dark mode changed your whole site with five lines of CSS. Why did that work? What would you have had to do without variables?
It worked because we called new colors using the JS file. And sense they are variables assigned to the colors when we called the dark or light color modes it reasings the virables which changes the color of everything assined with that variable.

4. Something went wrong this week and the Console said nothing at all. What was it, and how did you eventually find it?
We forgot .toggle in class which didnt show up in the console because the code could still run without having it. We found out when the button did nothing. WE saw we forgot .toggle and added it in and the button worked.

5. What is one thing on your page you don't know how to change yet?
I dont know how to add a data input and how to save the data not just locally. 


## Week 10, Friday
1. What does event.preventDefault() do, and what happens without it?
It doesnt allow the form to clear the information while refreshing.

2. You got "Cannot read properties of null" in class. In your own words, why did it happen, and why did if fix it?
The if statment looks to see if the element is there before trying to use it.

3. What rule did you write for your form, and why that rule?
I wrote 3 rules to check to make sure each person put there name, email, and message of 10 characters or longer.

4. The two things you found and fixed at phone width.
    <!-- Lab 16 : Task 3 - 2 fixes -->
    1. I broke my nav trying to do something and so i fixed it and it now back to stacking
    2. In form button i added min-heigth 4- px to make the button big enough for phones.

5. Your form does not actually send anything anywhere yet. What do you think is missing?
It's missing a place to send the inputs from the contact form we just made.