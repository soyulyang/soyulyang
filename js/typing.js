function startTyping(elementId) {
  const typingElement = document.getElementById(elementId);
  if (!typingElement) {
    console.error(`Element with ID ${elementId} not found.`);
    return;
  }
  const text = typingElement.getAttribute("data-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 300);
    } else {
      setTimeout(() => {
        erase();
      }, 5000);
    }
  }

  function erase() {
    if (index > 0) {
      typingElement.textContent = typingElement.textContent.slice(0, index - 1);
      index--;
      setTimeout(erase, 100);
    } else {
      setTimeout(() => {
        index = 0;
        typingElement.classList.remove("typing");
        type();
      }, 1000);
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  startTyping("typing-effect");
  startTyping("typing-title");
  startTyping("typing-design");
  startTyping("typing-web");
  startTyping("typing-application");
});
