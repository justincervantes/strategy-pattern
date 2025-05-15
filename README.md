# LodgeLink Developer Workshop 1 - Object Oriented Programming

Conducted by Maurizio Tripi - January 30, 2025 as a mob programming exercise. This exercise has been formatted into a quick to start assignment for developers to work through their understanding of SOLID principles.

## Prompt

Create a calculator that converts temperatures from Celsius to Fahrenheit, and from Fahrenheit to Celsius unit to another. The calculator has an optional toggle to run a console log in the format of `<VALUE> <FORMAT>`, for example 32 degrees fahrenheit converted to celsius should log out `0 celsius`. Model the calculator using OOP. The catch? You cannot use an `if` statement anywhere in this application. This exercise is focused on your OOP skills, and as such the frontend has been completed for you, and no work on components should be required except for the implementation of the `onClick` in `TemperatureConverter.tsx`.

## Instructions

1. Write your model in the `lib` directory
2. Implement your model into the component (find the TODO comments)
3. Run the application to see if its working as expected `npm run dev`
4. Check if your solution passes the test cases by running `npm run evaluate`

## Test Cases

1. 32, Fahrenheit to Celsius, Logging Enabled, will update the screen and log out `0 celsius`
2. 32, Fahrenheit to Celsius, Logging Disabled, will update the screen and log nothing out
3. 100, Celsius to Fahrenheit, Logging Enabled, will update the screen and log out `212 fahrenheit`
4. 100, Celsius to Fahrenheit, Logging Disabled, will update the screen and log nothing out

## Review For Discussion

- What if your calculator implement Kelvin and Rankine. What did you have to change? Do you still like your solution?
- Is OOP forced in this example? Is there a better, less complex way to solve this without using `if` statements? If so, how?
- Is there an area of our codebase that we could improve by using this kind of modeling?
- What is the balance between OOP and Functional Programming?
