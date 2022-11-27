const container = document.querySelector('#container');

const content  = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';
container.appendChild(content);

const redParagraph = document.createElement('p');
redParagraph.classList.add('red');
redParagraph.textContent = 'This is a red paragraph';
container.appendChild(redParagraph);

const blueH3 = document.createElement('h3');
blueH3.classList.add('blue');
blueH3.textContent = 'This is a blue H3';
container.appendChild(blueH3);

const blackBorderDiv = document.createElement('div');
blackBorderDiv.classList.add('black-border');
blackBorderDiv.classList.add('pink-background');
const anotherH1 = document.createElement('h1');
anotherH1.textContent = "I'm in a div";
const anotherP = document.createElement('p');
anotherP.textContent = "ME TOO!";
blackBorderDiv.appendChild(anotherH1);
blackBorderDiv.appendChild(anotherP);
container.appendChild(blackBorderDiv);
