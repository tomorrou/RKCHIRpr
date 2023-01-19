"use strict";



document.addEventListener('DOMContentLoaded', () => {

    const shopCart = document.querySelector('.shop__cart');
    const shopCartDelete = shopCart.querySelector('.shop__cart-delete');
    const shopCartChange = shopCart.querySelector('.shop__cart-change');
    const shopCartSortUp = shopCart.querySelector('.shop__cart-sort-up');
    const shopCartSortDown = shopCart.querySelector('.shop__cart-sort-down');
    const shopCartInner = shopCart.querySelector('.shop__cart-inner');
    const shopProducts = ['10', '20', '30', '40', '50', '60', '70', '80'];

    shopProducts.forEach(item => {
        let element = document.createElement('div');
        element.classList.add('shop__cart-item');
        element.textContent = item;
        shopCartInner.append(element);
    });

    // Функция по получению рандомного значения
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // Изменение одного из элементов на другой
    shopCartChange.addEventListener('click', () => {
        let newItem = shopProducts[getRandomInt(shopProducts.length)];
        shopProducts[getRandomInt(shopProducts.length)] = newItem;
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt];
            cnt += 1;
        });
    });

    // Удаление первого элемента
    shopCartDelete.addEventListener('click', () => {
        if (shopProducts.length != 0) {
            shopProducts.splice(0, 1);
            shopCart.querySelector('.shop__cart-item').remove();
        }
        // console.log(shopProducts);
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt++];
        });
    });

    // ------------------------------------------------------
    shopCartSortUp.addEventListener('click', () => {
        shopProducts.sort();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt++];
        });
    });

    shopCartSortDown.addEventListener('click', () => {
        shopProducts.sort();
        shopProducts.reverse();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt];
            cnt++;
        });
    });


    // 4 задание

    const notif = document.querySelector('.notifs');
    const notifBtn = notif.querySelector('.notif__btn');
    const notifInner = notif.querySelector('.notif__inner');
    const notifCounter = notif.querySelector('.notif__counter');
    const notifArr = [
        '- Это Даша?',
        '- Да',
        '- Ша',
        '- А?',
        '- лло',
    ];



    let numberNotif = 0;
    let counter = 0;

    function createNotif() {
        let element = document.createElement('div');
        element.classList.add('notif__item');

        if (numberNotif < notifArr.length) {
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        } else {
            numberNotif = 0;
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        }

        notifInner.append(element);

        notifCounter.textContent = counter;
    }

    let timerId = setInterval(createNotif, 3000);

    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function () {
            timerId = setInterval(createNotif, 3000);
        }, 10000);
    });
});

let filt = [];
let a = document.querySelectorAll('.filt_elm');
for (let i = 0; i < a.length; i++)
    filt.push(a[i].innerHTML);
filt = filt.map(item => Number(item));


let filting = document.getElementById('filting');
filting.onclick = function () {
    let min = Number(prompt("Выбраны числа от:", "0"));
    let max = Number(prompt("И до:", "100"));

    alert("Выбранные числа: (" + min + "-" + max + ")");

    let new_filt = filt.filter((a) => {
        if (a >= min && a <= max) return true;
        return false;
    });

    let f = document.getElementsByClassName('new_f')
    for (let j = 0; j < filt.length; j++) {
        f[j].innerHTML = "";
    }
    for (let j = 0; j < new_filt.length; j++) {
        f[j].innerHTML = new_filt[j];
    }
}