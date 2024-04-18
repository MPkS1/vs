function navigate(destination) {
    if (destination.toLowerCase() === 'open google') {
        window.location.href = 'https://google.com';
    } else if (destination.toLowerCase() === 'diseases') {
        window.location.href = 'diseases.html';
    } else if (destination.toLowerCase() === 'blood donation') {
        window.location.href = 'blooddonation.html';
    }
}

// Speech recognition
const recognition = new webkitSpeechRecognition(); // for Chrome
recognition.lang = 'en-US';

recognition.onresult = function(event) {
    const result = event.results[0][0].transcript;
    console.log('You said: ', result);
    navigate(result);
}

recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
}

// Function to start speech recognition when the page loads
function startSpeechRecognition() {
    recognition.start();
}

// Start speech recognition when the page loads
document.addEventListener('DOMContentLoaded', startSpeechRecognition);
