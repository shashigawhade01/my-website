document.addEventListener('DOMContentLoaded', () => {
  const homeButton = document.getElementById('homeButton');
  const homeMessage = document.getElementById('homeMessage');
  const numberInput = document.getElementById('numberInput');
  const aboutButton = document.getElementById('aboutButton');
  const aboutMessage = document.getElementById('aboutMessage');

  if (homeButton && homeMessage && numberInput) {
    homeButton.addEventListener('click', () => {
      const value = numberInput.value.trim();
      if (value) {
        homeMessage.textContent = `Your number is ${value}.`;
      } else {
        homeMessage.textContent = 'Please enter a number first.';
      }
    });
  }

  if (aboutButton && aboutMessage) {
    aboutButton.addEventListener('click', () => {
      aboutMessage.textContent = 'You clicked the About page button.';
    });
  }
});
