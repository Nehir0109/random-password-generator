
# Random Password Generator.

## Introduction
This is a simple password generator web application built using HTML, CSS, and JavaScript. It allows users to generate random passwords of varying lengths using a set of predefined characters.

## Features

1. **Password Length Control:** Users can specify the desired length of the generated password using an input field. The allowed length is between 1 and 20 characters.

2. **Random Password Generation:** The application generates random passwords based on the selected length. It can include uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and special characters (~, !, @, #, etc.).

3. **Display Generated Passwords:** Two generated passwords are displayed in separate sections of the webpage when the "Generate Password" button is clicked. This allows users to compare and choose the one they prefer.

4. **Character Set:** The application uses a predefined character set that includes uppercase letters, lowercase letters, digits, and various special characters.


## Getting Started

To use this password generator, follow these steps:

1. Open the HTML file (index.html) in a web browser.

2. You will see an input field labeled "Password Length" where you can specify the desired length of the password.

3. Enter a number between 1 and 20 in the input field to set the password length.

4. Click the "Generate Password" button to generate two random passwords of the specified length. These passwords will be displayed in the "Result 1" and "Result 2" sections.

5. If you wish to generate another set of passwords, simply change the password length and click the button again.

## Code Structure

- The project is organized into three main components: HTML, CSS, and JavaScript.

- HTML (index.html): The HTML file defines the structure of the web page and includes the input field, buttons, and result sections.

- CSS (style.css): The CSS file contains styles for the web page, ensuring it looks visually appealing and user-friendly.

- JavaScript (index.js): The JavaScript file contains the logic for generating random passwords, handling user input, and updating the displayed passwords.


## Customization

If you want to customize this password generator, you can make the following modifications:

- Character Set: You can modify the characters array in the JavaScript code to include or exclude specific characters according to your preferences.

- Styling: Customize the CSS styles in the style.css file to change the appearance of the web page.


## Limitations

- The application generates passwords of a fixed length, between 1 and 20 characters. If you need passwords of different lengths, you would need to modify the code accordingly.

- The application doesn't provide advanced features like password strength estimation or the ability to exclude specific characters.

## Conclusion

This simple password generator web application allows users to quickly generate random passwords for various purposes. It can be a useful tool for enhancing the security of online accounts and ensuring password complexity.
