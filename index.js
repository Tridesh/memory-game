let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let tries = 0; // Added the 'tries' variable

const colors = [
  'pink',
  'yellow',
  'red',
  'cyan',
  'blue',
  'teal',
  'orange',
  'green'
];

const cards = [...document.querySelectorAll('.card')];
for (let color of colors) {
  const cardAIndex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAIndex];
  cards.splice(cardAIndex, 1);
  cardA.className += ` ${color}`;
  cardA.setAttribute('data-color', color);
  cardA.addEventListener('click', onCardClicked);

  const cardBIndex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1);
  cardB.className += ` ${color}`;
  cardB.setAttribute('data-color', color);
  cardB.addEventListener('click', onCardClicked);
}

function onCardClicked(e) {
  const target = e.currentTarget;

  if (
    preventClick ||
    target === clickedCard ||
    target.className.includes('done')
  ) {
    return;
  }

  target.className = target.className.replace('color-hidden', '').trim();
  target.className += ' done';
  target.style.transform = 'rotateY(180deg)';

  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {
    var numValue = document.querySelector(".number");
    numValue.textContent = tries + 1;
    tries++; // Increment the 'tries' variable
    // Display or use the 'tries' variable as needed
    console.log(`Tries: ${tries}`);

    if (
      clickedCard.getAttribute('data-color') !==
      target.getAttribute('data-color')
    ) {
      preventClick = true;
      setTimeout(() => {
        clickedCard.className =
          clickedCard.className.replace('done', '').trim() +
          ' color-hidden';
        target.className =
          target.className.replace('done', '').trim() +
          ' color-hidden';
        clickedCard.style.transform = 'rotateY(0deg)';
        target.style.transform = 'rotateY(0deg)';
        clickedCard = null;
        preventClick = false;
      }, 500);
    } else {
      combosFound++;
      clickedCard = null;
      if (combosFound === 8) {
        alert(`YOU WIN!\nTotal Tries: ${tries}`);
      }
    }
  }
}
