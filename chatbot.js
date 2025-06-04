function toggleChat() {
  const container = document.getElementById('chat-container');
  container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;
  addMessage('You', msg);
  input.value = '';

  // Simple placeholder response
  setTimeout(() => {
    addMessage('Bot', 'Thanks for your message! Our team will respond shortly.');
  }, 500);
}

function addMessage(sender, text) {
  const messages = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.textContent = sender + ': ' + text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
