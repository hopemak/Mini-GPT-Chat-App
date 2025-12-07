
// 1. Get Elements
const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");


// 2. Message Class

class Message {
  constructor(text, sender) {
    this.text = text;
    this.sender = sender; // "user" or "bot"
  }
}


// 3. Predefined Q&A

const qaList = [
  { q: "hello", a: "Hi! How are you today?" },
  { q: "your name", a: "I am Mini GPT Bot!" },
  { q: "time", a: "I can't see the real time, but you can check your clock!" },
  { q: "javascript", a: "JavaScript is a programming language for the web!" },
  { q: "weather", a: "I can't access live weather yet, but it's always sunny in code!" },
  {q:"hi" ,a:" hi what do you want from me" },
  { q:"what do you think now",a:"i am here to help you in any problem dont wory to ask me any question"},
  {q:"could you help me",a:"yes sure ask me what you want"}

];


// 4. Messages Array

const messages = [];


// 5. Get Bot Reply

function getBotReply(message) {
  const msg = message.toLowerCase();
  
  // Check predefined Q&A
  for (let item of qaList) {
    if (msg.includes(item.q)) return item.a;
  }

  // Default reply
  return "I am just a mini GPT bot. Ask me about JavaScript, weather, or say hello!";
}


// 6. Send Message Function

function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "") return;

  // User message
  const userMsg = new Message(text, "user");
  messages.push(userMsg);
  displayMessage(userMsg);
  messageInput.value = "";

  // Bot message (simulate delay)
  setTimeout(() => {
    const botReply = getBotReply(text);
    const botMsg = new Message(botReply, "bot");
    messages.push(botMsg);
    displayMessage(botMsg);
  }, 500);
}


// 7. Display Message

function displayMessage(msg) {
  const div = document.createElement("div");
  div.classList.add("message", msg.sender);
  div.textContent = msg.text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight; // auto scroll
}


// 8. Event Listeners
-
sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
