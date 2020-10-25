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
    console.log(lis[i])
    j = parseInt(lis[i]) + 1;
    console.log(j)
    lis[i].innerHTML = (j).toString();
  }

}

function deepestChild() {

}
