/////////       1 задание    //////////////
contents.onclick = function (event) {

  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) return false;
  }

  let target = event.target.closest('a');

  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute('href'));
  }
};

/////////       2 задание    //////////////
thumbs.onclick = function (event) {
  let thumbnail = event.target.closest('a');

  if (!thumbnail) return;
  showThumbnail(thumbnail.href);
  event.preventDefault();
}

function showThumbnail(href) {
  largeImg.src = href;
}


/////////       3 задание    //////////////    
ul.onclick = function (event) {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  }
  else if (event.altKey) {
    allnotSelect();
  }
  else if (event.shiftKey) {
    allSelect();
  }
  else {
    singleSelect(event.target);
  }

}
// предотвращает ненужное выделение элементов списка при клике
ul.onmousedown = function () {
  return false;
};

function toggleSelect(li) {
  li.classList.toggle('selected');
}

function singleSelect(li) {
  let selected = ul.querySelectorAll('.selected');
  for (let elem of selected) {
    elem.classList.remove('selected');
  }
  li.classList.add('selected');
}

function allnotSelect() {
  let selected = ul.querySelectorAll('.selected');
  for (let elem of selected) {
    elem.classList.remove('selected');
  }
}

function allSelect() {
  let selected = ul.querySelectorAll('li');
  for (let elem of selected) {
    elem.classList.add('selected');
  }
}

/////////       4 задание    //////////////   
let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function (event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

thumb.ondragstart = function () {
  return false;
};




/////////       6 задание    //////////////   
geralt.onclick = function () {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    geralt.style.left = timePassed / 2 + 'px';
    geralt.style.top = Math.sin(timePassed / 75) * 60 + 'px';


    if (timePassed > 2000) {
      geralt.style.top = 0 + 'px';
      geralt.style.left = 0 + 'px';
      clearInterval(timer);
    }

  }, 20);
}


ball.onclick = function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    ball.style.top = (-1) * timePassed * timePassed / 110 + 'px';


    if (timePassed > 200) {
      clearInterval(timer);
    }

  }, 20);
}

/////////       5 задание    ////////////// 
var Sum = 0;
let storageMock = [
  { id: 1, name: "Белое вино из Боклера", price: 18, amount: 1 },
  { id: 2, name: "Эрвелюс", price: 35, amount: 1 },
  { id: 3, name: "Козье молоко", price: 7, amount: 1 },
  { id: 4, name: "Геральт из Ривии", price: 14, amount: 1 },
  { id: 5, name: "Реданское светлое", price: 11, amount: 1 }];

let Cart = []
document.addEventListener("DOMContentLoaded", function () {
  fillStorageTable(storageMock);
});

function fillStorageTable(items) {
  let storageTable = document.getElementById('storage');

  items.forEach(e => {
    let itemTR = document.createElement('tr');
    itemTR.innerHTML = `<td>${e.id}</td><td>${e.name}</td><td>${e.price}</td><td>${e.amount}</td>`;
    storageTable.append(itemTR);
    itemTR.addEventListener('click', addToCart);



  });
}

function addToCart() {
  Sum += parseInt(this.childNodes[2].textContent.toString());
  document.getElementById('sum').innerHTML = Sum;
  let cartTR = document.createElement("tr");
  cartTR.innerHTML = `<td>${this.childNodes[1].textContent}</td><td>${this.childNodes[2].textContent}</td><td>${this.childNodes[3].textContent}</td>`;
  document.getElementById('cart').append(cartTR);
}