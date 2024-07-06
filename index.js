document.getElementById('generate').addEventListener('click', function () {
    const prompt = document.getElementById('prompt').value.toLowerCase();
    const responseElement = document.getElementById('response');

    const responses = {
        greetings: [
            { prompt: 'hello', response: 'Hi there! How can I help you today?' },
            { prompt: 'hi', response: 'Hello! What can I do for you?' },
            { prompt: 'hey', response: 'Hey! How can I assist you?' },
            { prompt: 'good morning', response: 'Good morning! Hope you have a great day!' },
            { prompt: 'good afternoon', response: 'Good afternoon! How can I help you?' },
            { prompt: 'good evening', response: 'Good evening! What do you need assistance with?' }
        ],
        wellbeing: [
            { prompt: 'how are you', response: 'I am just a program, but I am here to assist you!' },
            { prompt: 'how is it going', response: 'Everything is running smoothly! How can I help?' },
            { prompt: 'how have you been', response: 'I am here to assist you at any time!' }
        ],
        identity: [
            { prompt: 'what is your name', response: 'I am a simple AI prompt generator.' },
            { prompt: 'who are you', response: 'I am an AI created to assist you with your queries.' },
            { prompt: 'who made you', response: 'I was created by a developer to help answer your questions.' }
        ],
        capabilities: [
            { prompt: 'what can you do', response: 'I can provide responses based on your input. Try asking me something!' },
            { prompt: 'what is your purpose', response: 'My purpose is to assist and provide information based on your prompts.' },
            { prompt: 'can you help me', response: 'Of course! Please ask your question.' }
        ],
        gratitude: [
            { prompt: 'thank you', response: 'You are welcome!' },
            { prompt: 'thanks', response: 'Happy to help!' },
            { prompt: 'thank you very much', response: 'You are very welcome!' }
        ],
        smalltalk: [
            { prompt: 'what is the weather like', response: 'I am not connected to the internet, but I hope the weather is nice where you are!' },
            { prompt: 'do you like music', response: 'As an AI, I don’t have preferences, but music is a wonderful form of art!' },
            { prompt: 'tell me a joke', response: 'Why don’t scientists trust atoms? Because they make up everything!' },
            { prompt: 'what is your favorite color', response: 'I don’t have a favorite color, but I appreciate all colors!' }
        ],
        knowledge: [
            { prompt: 'who was the first president of the usa', response: 'The first president of the United States was George Washington.' },
            { prompt: 'what is the capital of france', response: 'The capital of France is Paris.' },
            { prompt: 'how many continents are there', response: 'There are seven continents: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America.' }
        ],
        friends: [
            { prompt: 'who is pranav', response: '<div class="friend-card"><img src="pranav.jpg" alt="Pranav"><div><strong>Pranav</strong><br>Pranav is my friend. He has the power to win every single match with just one touch in Free Fire, and he can destroy the world like Thanos<a href="https://example.com/pranav" target="_blank">More about Pranav</a></div></div>' },
            { prompt: 'who is krushna', response: '<div class="friend-card"><img src="kru.jpg" alt="krushna"><div><strong>krushna</strong><br>he is also my friend <br><a href="https://example.com/john" target="_blank">More about krushna</a></div></div>' }
        ],
        default: 'Sorry, I do not understand that prompt. Please try something else.'
    };

    function findResponse(category, prompt) {
        for (const item of responses[category]) {
            if (prompt.includes(item.prompt)) {
                return item.response;
            }
        }
        return null;
    }

    let generatedResponse = responses.default;
    for (const category in responses) {
   
    
        if (category !== 'default') {
            const response = findResponse(category, prompt);
            if (response) {
                generatedResponse = response;
                break;
            }
        }
    }
    
    
    responseElement.innerHTML = generatedResponse;

    responseElement.style.opacity = 0;
    setTimeout(() => {
        responseElement.style.opacity = 1;
    }, 300);
    
    
});
