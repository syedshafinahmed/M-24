// document.getElementById('dekhi').childNodes[3].childNodes[3].parentNode.parentNode

// create element and set innertext or innerHTML
const newChild = document.createElement('li');
newChild.innerText = "new born footballer here";
// find the parent where you will add the child
const playersList = document.getElementById('player-list');
// append child to parent
playersList.appendChild(newChild);