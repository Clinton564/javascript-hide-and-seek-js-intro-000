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
    console.log(lis[i].innerHTML)
    console.log(parseInt(lis[i].innerHTML)+1)
    //lis[i].innerHTML = (parseInt(lis[i].innerHTML) + 1).toString();
  }

}

function deepestChild() {

}
