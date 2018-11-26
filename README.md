CHALLENGE I
Continuing from the last Challenge on the previous lesson: 
Add some links to the card paragraphs that don’t need to go anywhere (href=”#”).
Add a script that performs the following:
When a paragraph is clicked, all the links within it are highlighted in yellow.

CHALLENGE II
Now with this knowledge of traversing the DOM, we can continue from the previous
lesson. Given the following HTML, what is the relationship between the button and
p elements? Use that relationship to close the p element by clicking on the
button using .slideToggle(‘slow’).

CHALLENGE III
Give the paragraphs inside the cards a display: none;
Use slideDown to display the card paragraphs when the card_image is clicked.

CHALLENGE IV
When a card is clicked on, the background color is highlighted – e.g., set
background-color to pink via adding a new class. When the card is clicked again, 
it is unhighlighted

CHALLENGE V
Add two more nav elements to the nav bar, select and all. When select is clicked, 
all panels disappear except those highlighted by clicking on them. It is a 
difficult challenge. Think about what is different about the highlighted panels.
How could we select only those without the highlighting?
Then make all the panels reappear by clicking all. 
A lot is going on here, but this combining of functions and selections is what
makes jQuery so powerful. Take your time to understand what’s happening before
moving on to the next section.

CHALLENGE VI
Let’s practice some of the traversing methods.
Download the boilerplate code from the source code link below and extract 
locally. Import into cloud9. Bring up button.html in a browser. Write jQuery code 
to perform the following (add to script.js): 
When a colored panel is clicked, all panels vanish. When a colored panel is 
clicked, just that panel disappears. When a panel is clicked, all siblings fade
to 10% opacity. When reset is clicked, all panels revert to full opacity. When 
the mouse hovers over a panel, that panel turns black. When the mouse moves away,
the panel reverts back to its previous colour.

CHALLENGE VII
Return to the table challenge. When a table header is clicked, the corresponding
row should highlight. When another table header (on the row) is clicked, the
corresponding row should highlight, and all others should turn white. Add extra 
rows if you need to. Traverse the DOM to find a solution.

CHALLENGE VIII
Change the text in the reset button to display the colour (RGB) of the selected panel.
