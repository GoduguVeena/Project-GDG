// script.js
let socket = null;

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat').style.display = 'block';
        socket = new WebSocket('ws://yourserver.com');
        socket.onopen = () => socket.send(JSON.stringify({ type: 'login', username }));
        socket.onmessage = event => {
            const message = JSON.parse(event.data);
            displayMessage(message.username, message.text);
        };
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput').value;
    if (messageInput && socket) {
        socket.send(JSON.stringify({ type: 'message', text: messageInput }));
        document.getElementById('messageInput').value = '';
    }
}

function displayMessage(username, text) {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${username}: ${text}`;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
}
