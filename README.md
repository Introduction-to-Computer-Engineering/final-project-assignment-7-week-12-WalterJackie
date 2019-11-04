# original_guide.js

## goal
The programs function is to activate 3 LED’s through the pins on the micro.bit. Specifically, through analog out (instead of digital witch is either 1 or 0). 

## technique 
On start
“Led.Enable(false):”
Disables the 5X5 led screen so we can use the pins that effect the screen (specifically pins 3, 4, 6, 7, 9, 10)
On forever we initialize a for loop that increases and decreases the output of the pins to illuminate and dim the led’s. 

## limitations 
We cannot use the 5X5 screen while we use this program. Pin 9 is set to control column 7 so changing its output glitches that column.

## video
https://imgur.com/gallery/MieubeA

# enable-matrix.js

## goal
This program rewrites the former so the 5X5 led matrix can be used too display images as well as control led’s through the pins.
## technique 
By changing pin 9 too pin 8 we avoid manipulating the column allowing us to update the 5X5 matrix as well as the LED’s.
## limitations 
Updating both the LED’s and the 5X5 grid at the same time is near impossible.
## video
https://imgur.com/gallery/MieubeA

# twenty-eight.js

## goal
This program is a simple interactive bird animation that updates the external LED.
## technique 
A simple set of functions act a scenes within the animation. After the last scene the “dung” is represented by the lit LED
## limitations 

## video
https://imgur.com/gallery/MieubeA

