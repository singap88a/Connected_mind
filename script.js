
//Hammenu
const hamMenu = document.querySelector('.br-menu');

const offScreenMenu = document.querySelector('.nav-links');

hamMenu.addEventListener('click',() => {
  hamMenu.classList.toggle('open');
  offScreenMenu.classList.toggle('open');
})

//chat 

document.getElementById("sendBtn").addEventListener("click", function() {
  let messageInput = document.getElementById("messageInput");
  let messageText = messageInput.value.trim();

  if (messageText !== "") {
      let chatMessages = document.querySelector(".chat-messages");
      let newMessage = document.createElement("div");
      newMessage.classList.add("message", "sent");
      newMessage.innerText = messageText;

      chatMessages.appendChild(newMessage);
      messageInput.value = "";

      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});


