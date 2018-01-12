//Define function
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {

}


function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div');
  return deep[deep.length-1];
}
