document.addEventListener('DOMContentLoaded', () => {
  const homeButton = document.getElementById('homeButton');
  const homeMessage = document.getElementById('homeMessage');
  const aboutButton = document.getElementById('aboutButton');
  const aboutMessage = document.getElementById('aboutMessage');

  if (homeButton && homeMessage) {
    homeButton.addEventListener('click', () => {
      homeMessage.textContent = 'Hello from the Home page JavaScript!';
    });
  }

  if (aboutButton && aboutMessage) {
    aboutButton.addEventListener('click', () => {
      aboutMessage.textContent = 'You clicked the About page button.';
    });
  }
});
