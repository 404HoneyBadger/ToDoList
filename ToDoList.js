function addToList() {
  let input = document.getElementById('newToDo');
  let newLi = document.createElement("li");
  newLi.innerText = input.value;
  newLi.onclick = function (e) {
      aclist.removeChild(e.target);
  };
  let aclist = document.getElementById("list");
  input.value = " ";
  aclist.appendChild(newLi);
}

// let sotired = document.getElementsByTagName('li');
// sotired.onclick = function (e) {
//     aclist.removeChild(e.target);
// }
document.querySelector('ul').addEventListener('click',(e) => {
  if(e.target.tagName == "LI")
  {e.target.remove();
  }
})
// let sotired = document.getElementsByTagName("li")
// sotired.onclick = myFunction();


// function remove (list) {
//     list.parentNode.removechild(list);

// }
// }
