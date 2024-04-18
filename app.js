 function startVoiceRecognition() {
            // Check if browser supports SpeechRecognition
            if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
                // Create SpeechRecognition object
                var recognition = new webkitSpeechRecognition || SpeechRecognition();

                // Set recognition parameters
                recognition.lang = 'en-US'; // Language for speech recognition

                // Start recognition
                recognition.start();

                // Event listener for speech recognition result
                recognition.onresult = function (event) {
                    var result = event.results[0][0].transcript.toLowerCase(); // Get the recognized text

                    // Check if the recognized text matches the command
                    if (result.includes("open whatsapp")) {
                        var whatsappWebUrl = "https://web.whatsapp.com/";
                        window.open(whatsappWebUrl, "_blank");
                    } else {
                        alert("Command not recognized. Please try again.");
                    }
                };

                // Event listener for recognition error
                recognition.onerror = function (event) {
                    console.error('Speech recognition error:', event.error);
                    alert('Speech recognition error. Please try again.');
                };
            } else {
                alert('Speech recognition not supported in your browser.');
            }
        }
