const startButton = document.getElementById('start-button');
const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const page3 = document.getElementById('page-3');

startButton.addEventListener('click', () => {
  page1.classList.add('hidden');
  page2.classList.remove('hidden');
});

page2.addEventListener('click', (event) => {
  const clickedButton = event.target;
  if (clickedButton.tagName !== 'BUTTON') return;

  // Ensure click only works on player buttons
  if (!clickedButton.hasAttribute('data-players')) return;

  const newPlayerCount = clickedButton.dataset.players;

  if (newPlayerCount === '2') {
    page2.classList.add('hidden');
    page3.classList.remove('hidden');
    document.body.style.overflowY = 'auto'; // Enable scrollbar for rules page
  } else {
    // Handle other player selections (if applicable)
  }
});
