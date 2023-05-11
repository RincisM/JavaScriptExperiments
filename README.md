# JavaScriptExperiments
JavaScript Experiments


1. [This Program is inside the Scripts Folder with the name isPhone.js]
Write and test a function named isPhone that will take a single parameter 
and return true if that argument represents a phone number and false 
otherwise. This function should check that the entire value passed as an 
argument is a phone number with nothing preceding or following it. It 
should accept phone numbers in the following formats:
• XXXXXXXXXX ,
• XXX-XXX-XXXX ,
• XXX XXX XXXX ,
• (XXX) XXX-XXXX , and
• (XXX)XXX-XXXX


2. [This Program is inside the Scripts Folder with the name containsPhone.js]
Write and test a function named containsPhone that will take a single 
parameter and return true if that argument contains a phone number and 
false otherwise. This function should ignore anything that may precede 
or follow the phone number in the passed string value. It should accept
phone numbers in the same formats as the previous step.


3. [This Program is inside the Scripts Folder with the name extractColorNumber.js]
Write and test a function named extractColorNumber that will take a 
single parameter and return the first valid CSS color specifier it finds in 
that value as a string converted and normalized to the format #HHHHHH 
(with any letters converted to uppercase). It should identify and extract 
CSS color specifiers in the following formats:
• #HHHHHH,
• #HHH,
• rgb(D, D, D), and
• rgb(P%, P%, P%)
where H is any valid hexadecimal digit, D is any decimal value between 
0 and 255 (inclusive), P is any decimal value between 0 and 100 
(inclusive), and the single spaces after the commas are optional. If the 
passed parameter contains no color specifier at all, or if the first thing 
that might be interpreted as a color specifier within the string is not a 
valid color specifier, this function should return a value of null.


4. [calculator.html] Create a simple calculator which performs three more calculations other 
than the basic arithmetic calculations. You must use an external 
JavaScript file. Name your files calculator.html and calculator.js.


5. [todolist.html] Create a "To-do list application". Through this 
application you should be able to add the task. Once you add the task to 
be get updated in the task list and you click on the next task button the 
task must be removed from the list and to be displayed in the next task. 
You must use an external JavaScript file. Name your files 
todolist.html and task.js


6. [Forms.html] Assume your online store also could only deliver a certain number of 
items to each of the available cities listed below. Unfortunately, you are 
still on a tight budget and do not have online ordering in place yet. The 
customer must print out a form, fill in each item number, and snail mail it 
to you. You want to display a printable form for the customer with enough 
lines that the customer can order up to the maximum number of items
for the city entered. Assign the following values to the item’s variable,
depending on the name of the city.
• 15 items if the city is Chennai.
• 12 items if the city is Coimbatore and Madurai.
• 8 items if the city is Salem.
• 6 items if the city is Tiruchirappalli.
• 2 items if the city is Thoothukudi.


7. [computer.html] and [computermodified.html] In your computer online store, you decide to display the features of each 
of your computer parts along with the part names that are available. The 
computer parts and their features to be displayed as, after the part name,
display a colon and a space. Between part features, display a comma 
and a space. At the end of the last part feature, insert a line break. A
nested array may be created as shown below with the values. 
• Monitors, LCD Screens, LED Screens, Vibrant Colors,
• Motherboards, Fast
• Chips, i9, i7, i5, i3, Core2Duo, Pentium, Very Fast
• Hard Drives, 2TB, 1TB, 100-500 GB, Fast Reading
• DVD-ROMs, Burn CDs, Burn DVDs
• Cases, ATX, AT, Mini, Other Sizes, Choice of Colors.
• Power Supplies, we can get one for any computer!


8. [SpeakSimplified.html]  In the Truth Magazine, Ramakrishnan and his colleagues are engaged in
simplifying English into a more regular language called Speak Simplified. 
The truth magazine it is described that the word can take a variety of 
prefixes to eliminate the need for the massive number of words we have 
in English. For example: 
Any word – could be negatived by adding the affix un-, or could be 
strengthened by the affix plus-, or, for still greater emphasis, doubleplus. 
Thus, for example, uncold meant “warm”, while pluscold and 
doublepluscold meant, respectively, “very cold” and “superlatively 
cold”.
Implement a JavaScript file (SpeakSimplified.js) with three functions 
– exclusion, strengthen and emphasize. The system must take the string 
as input as, prepend the prefixes "un", "plus", and "double" to that string, 
respectively, and return the new string. You can test your implementation 
by loading SpeakSimplified.html into the browser.


9. [pizzacorner.html] Pizzacorner has decided to create a mobileapp for getting orders from 
the customers through online. For an idea, you are advised to create a 
small prototype (Form layout) and a simple cost estimator based on the 
options chosen by the customer. The information you need is as follows:
• Plain thin-crust pizzas:
▪ Small: ₹99
▪ Medium: ₹199
▪ Large: ₹399
• For deep pan, add ₹20
• Extra toppings:
▪ mushrooms: add ₹15
▪ olives: add ₹10
▪ fingernail: add ₹30
▪ spicy beef: add ₹20
• For home delivery, add ₹25


10. [ColorSwapper2.html] Create a colour swapper using a JavaScript. Create 5 different colours
as a PNG files. Assume they are stacked over one another. Whenever, 
the user clicks on a colour the image must be swapped with the next 
colour (In a cycle).


11. [VendingMac.html] Adithi is planning to start manufacture the vending machine for the 
stationery supplies and keep it in the schools. For that, she wants to add 
an interface that is user-friendly to add or track inventory. Implement a 
JS program that creates an instance for the vending machine with the 
following specifications. 
  • The machine should have a callable sale method that takes the 
stationery id as an input and return a success message if in stock 
or a failed message if out of stock VM will always deduct one (1) 
from the product id stock after a successful sale. 
  • VM should also have a callable stock method. It does not take any 
parameters and should display the total count of available 
stationery.
  • The stationery_items object given as an example has a total of 25
items. After buying 2 four-line notebook, the output of the stock 
method should 23. it should also output ‘Out of stock’ if empty.


12. [ConsumptionBill.html] Shan energies PVT Ltd wants to create a bill calculator to calculate the 
amount for the consumed energy by the customer. The interface must
take the energy consumed in units and the default subsidy amount is 250. 
Below you can find the different slabs. 
Consumption Unit Rate of charge
0 - 100          Rs 0 per Unit
101-200          Rs 100 plus Rs 3.75 per Unit exceeding 150 units
201-400          Rs 250 plus Rs 4 per unit exceeding 350 units
401-600          Rs 300 plus Rs 4.25 per unit exceeding 450 units
Above 600        Rs 400 plus Rs 5 per unit exceeding 600 units


13. [scical.html] Create a Scientific calculator which performs more calculations other 
than the basic arithmetic calculations that are listed (sin, cos, tan, pow, 
round, log, log10, abs, n!) and demonstrate the usage of modules. You 
must use an external JavaScript file. Name your files scical.html and 
scical.js
