# Getting Started with React Basics Assignment



## Available Assignmnt

#### Resume Builder

+ Create a simple React app for RESUME Builder. It is static website. 
+ make components like Resume as top level and under it - Skills, Education, Experience etc as components. 
+ All resume data is  under 1 big JavaScript object like which in components via props. 
<!-- + You can fix the number of items in Skills, Education, Experience or any section. Example you can say that only 3 experience items is allowed. -->
DATA is used like:

 resume = {
    experience : [ { year:2012, company:'xyz', role:'something' }],
    education:[ ],
    skills : [ 'react js', 'node js']
    .....
    ...
    }

#### Conditional Rendering & Lists:

+ Make a simple component which can conditionally render a list with number or alphabets or bullets in HTML 
+ for number. e..g. use a prop like layout for this. 
+ Also use a prop items for array of items in list.

< List layout="numbered" items={items}/> 
< List layout="alpha"  items={items}/> 
< List layout="bullet"   items={items}/>

#### State, useState Hooks:

+ Make a digital CLOCK Component using useEffect Hook. 
+ only update the time Upto seconds in it. 

+ HH:MM:SS format is used. [send a Console.log at end of every minute]
+ Implement a simple TIMER that displays the elapsed time since the start button was pressed, and it is stopped by pressing stop button. Like a stopwatch.

#### Form, Synthetic Event Object and Lifting State up

+ Create a Dropdown (< Select >) menu which is formed by a nations array. You can push to this array new items using a 2 input textbox (for country name and code) and button. 
+ On selection of the any option from dropdown, its value should be displayed on console.log

#### Make a useCounter Hook: To keep track of a number that can be incremented or decremented.

#### Use JSON Placeholder API (link given below):

API Link: https://jsonplaceholder.typicode.com/

+ create a button which can get some posts and show them in a List.
+ show comments button on each list item. On click of show comments, Post's comments should be fetched below that list item. [ Comments are available for each post in API]
+ When you click on a particular list item's show comments, it should expand and show comments, otherwise it should collapse and hide the comments.

`Try to optimize by :``

- Only getting comments of required Post items (not all at a time)
Storing somehow the old comments of closed list items. So you will not fetch them again, when your show comments again.



I will keep updating ....

In the project directory, you can run:

### `npm install node-module` 

first to get node-module to your local machine. then run:

### `npm start`


