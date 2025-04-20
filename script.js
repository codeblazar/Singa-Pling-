document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        // Append user message to chatbox
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${userInput}`;
        document.getElementById('chatbox').appendChild(userMessage);

        // Simulate chatbot response
        const botResponse = document.createElement('div');
        botResponse.textContent = `Bot: You said "${userInput}"`;
        document.getElementById('chatbox').appendChild(botResponse);

        // Clear input field
        document.getElementById('user-input').value = '';
        document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
    }
});
