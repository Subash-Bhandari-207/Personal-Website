const text = "Hello, I am learning web development! My name is subsash bhandari and i am from home. This is my portfolio. Here i am writing all the things the value will go high and i am this"; // The text you want to display
const typedText = document.querySelector('.typed-text'); // The element to hold the text
const typingSpeed = 20; // Speed in milliseconds

const cursor = document.createElement('span'); // Create a span element for the cursor
cursor.classList.add('cursor'); // Add the cursor class
typedText.appendChild(cursor); // Append the cursor inside the typed text container

let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        typedText.textContent = text.substring(0, charIndex + 1); // Add one character at a time
        charIndex++;
        setTimeout(type, typingSpeed); // Continue typing after a delay
    }
}

type(); // Start the typing effect
