document.getElementById("chat-toggle").addEventListener("click", function() {
    const chatContainer = document.getElementById("chatbot-container");
    chatContainer.style.display = chatContainer.style.display === "none" || !chatContainer.style.display ? "flex" : "none";
});

document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "none";
});

document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage("user", userMessage);
        userInput.value = "";
        setTimeout(() => {
            addMessage("bot", generateBotResponse(userMessage));
        }, 500);
    }
});

function addMessage(sender, text) {
    const messages = document.getElementById("messages");
    const message = document.createElement("div");
    message.className = `message ${sender}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function generateBotResponse(userMessage) {
    return "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?";
}

