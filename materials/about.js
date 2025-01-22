const text = " Hello there! I’m SUBASH     BHANDARI, a creative soul with a curious mind and a heart full of passion for technology. I believe in the power of imagination and creativity to bring people closer and make life a little more magical.Whether I’m in front of computer, I find joy in the little things that spark connection and creativity. My goal is to leave the world a bit brighter and inspire others to chase their dreams.Let’s create something beautiful together! 💛                    Here i am going to post my personal thoughts in the form of poetry or story. You will find more about myself in portfolio section. I wll be posting the works i have done here too. Enjoy yourself here!!!!"; // The text you want to display
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
