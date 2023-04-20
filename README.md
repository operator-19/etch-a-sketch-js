# etch-a-sketch-js

Demo here: https://operator-19.github.io/etch-a-sketch-js/

This code implements a simple interactive grid of squares that can be colored by hovering over them with the mouse. The techniques used in this code include:

DOM Manipulation: The code uses JavaScript's Document Object Model (DOM) to manipulate the web page by selecting and modifying HTML elements.

Event Listeners: The addEventListener() method is used to add an event listener to each square in the grid. In this case, a mouseover event listener is added to each square, which calls the colorSquare() function when the mouse hovers over the square.

CSS Styling: The code uses CSS styling to customize the appearance of the squares and the grid. Specifically, the gridTemplateColumns and gridTemplateRows properties are used to create a grid of squares with the desired size, while backgroundColor and border properties are used to style each square.

Control Structures: The code uses if...else statements to check if the user has selected a random color or a specific color for the squares, and then applies the appropriate style to each square.

Loops: The code uses a for loop to create a new square for each position in the grid. The loop iterates a number of times equal to the total number of squares in the grid, and uses the appendChild() method to add each new square to the board.

Functions: The code defines several functions to perform specific tasks, such as creating and populating the grid, changing the size of the grid, and resetting the color of the squares.

Overall, these techniques work together to create a simple but effective interactive grid of squares that can be customized by the user.
