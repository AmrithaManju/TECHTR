// Array of image paths (relative to the project folder)
const images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg',
    'images/image4.jpeg',
    'images/image5.jpeg',
    'images/image6.jpeg' // Add your final image path here
];

// Array of captions for different selfie counts
const captions = [
    'Looking good!',
    'Oww damn gorgeous!',
    'Why does it look like you were blessed by the selfie gods?',
    'Is it legal to look this good? I might need to call the authorities!',
    '10000+ aura',
    'No matter how many selfies you take, you’re just a walking masterpiece of hotness!' // Final caption
];

// Counter to track the number of selfies taken
let selfieCount = 0;

// Function to display a random image and message
function showRandomImage() {
    // Get a random index based on the number of images
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Set the image source to the random image
    const imageElement = document.getElementById('randomImage');
    imageElement.src = randomImage;
    imageElement.style.display = 'block';

    // Display the appropriate message based on the selfie count
    const messageElement = document.getElementById('message');
    if (selfieCount < captions.length) {
        messageElement.innerText = captions[selfieCount];
    } else {
        // This case won't be reached now but is here for safety
        messageElement.innerText = 'You are a selfie legend!';
    }

    // Update the button text and hide it after the final message
    const buttonElement = document.getElementById('selfieButton');
    selfieCount++;
    if (selfieCount >= captions.length) {
        buttonElement.style.display = 'none'; // Hide the button
    } else {
        buttonElement.innerText = 'Take another selfie'; // Update the button text
    }
}
