document.addEventListener('DOMContentLoaded', () => {
  const homeButton = document.getElementById('homeButton');
  const homeMessage = document.getElementById('homeMessage');
  const aboutButton = document.getElementById('aboutButton');
  const aboutMessage = document.getElementById('aboutMessage');

  if (homeButton && homeMessage) {
    homeButton.addEventListener('click', () => {
      homeMessage.textContent = 'Are you ready to know about your number';
    });
  }

  if (aboutButton && aboutMessage) {
    aboutButton.addEventListener('click', () => {
      aboutMessage.textContent = 'You clicked the About page button.';
    });
  }

  // Handle number input on about page
  const urlParams = new URLSearchParams(window.location.search);
  const num = urlParams.get('num');
  if (num) {
    const numberInfo = document.getElementById('numberInfo');
    if (numberInfo) {
      const n = parseInt(num);
      const isEven = n % 2 === 0;
      numberInfo.textContent = `The number you entered is ${n}. It is ${isEven ? 'even' : 'odd'}.`;
    }
  }
});
