function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');

  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML)+n).toString();
  }
}

function deepestChild() {
  const divs = document.getElementById('grand-node').querySelectorAll()
  for(let i = 0; i < divs.length; i++) {
    console.log('test')
  }
}
