"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // Первое задание (изменение цвета ссылок)

    const links = document.querySelectorAll('.link');
    const colorList = ['red', 'greenyellow', 'deeppink', 'purple', 'deepskyblue', 'orange', 'gold', '#1234'];

    links.forEach(link => {
        link.querySelector('a').style.color = colorList[Math.floor(Math.random() * colorList.length)];
    });



    // Второе задание ()

    const listBlock = document.querySelector('.create-list');

    const list = document.createElement('ul');
    list.classList.add('user-list');
    list.style = `
    text-align: left;
    `;
    listBlock.append(list);

    while (true) {
        let item = prompt("Добавляйте элементы. Пустой ввод - остановка", "");

        if (!item) break;

        let listItem = document.createElement('li');
        listItem.textContent = item;
        list.append(listItem);
    }



    // Третье задание (уведомление)

    const notification = document.querySelector('.notif');
    const notif = 'Notification';

    function showNotification(text) {
        let notif = document.createElement('div');
        notif.className = 'notification';
        // notif.classList.add('notification');
        notif.textContent = text;
        notif.style = `
        padding: 10px 20px;
        display: inline-block;
        border: 1px solid black;
        `;

        notification.append(notif);
        // console.log(notification);

        setTimeout(() => { notif.remove() }, 1500);
    }

    setInterval(() => { showNotification(notif) }, 2500);



    // Четвертое задание ()

    const area = document.querySelector(".area");
    const png = area.querySelector('img');

    png.style.top = Math.round(area.clientHeight / 2 - png.offsetHeight / 2) + "px";
    png.style.left = Math.round(area.clientWidth / 2 - png.offsetWidth / 2) + "px";


    const clickX = document.querySelector('.clickX').querySelector('span');
    const clickY = document.querySelector('.clickY').querySelector('span');

    area.onclick = function (click) {
        clickX.textContent = click.clientX;
        clickY.textContent = click.clientY;
    }



    // Пятое задание (кнопка закрытия уведомления)

    const notifs = document.querySelector('.notifs');
    const notifBtn = notifs.querySelector('.notif__btn');
    const notifInner = notifs.querySelector('.notif__inner');
    const notifCounter = notifs.querySelector('.notif__counter');
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

        element.style = `
        position: relative;
        width: 200px;
        padding: 10px 20px;
        display: inline-block;
        border: 1px solid black;
        margin-bottom: 5px;
        `;

        notifInner.append(element);

        let closeTab = document.createElement('i');
        closeTab.className = 'fa-solid fa-xmark';

        closeTab.style = `
        position: absolute;
        right: 10px;
        top: 3px;
        cursor: pointer;
        `;

        element.append(closeTab);

        notifCounter.textContent = counter;

        // console.log(notifInner);
    }

    let timerId = setInterval(createNotif, 3000);

    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function () {
            timerId = setInterval(createNotif, 3000);
        }, 10000);
    });

    notifInner.onclick = function (event) {
        if (!event.target.classList.contains('fa-xmark')) return;

        let notif = event.target.closest('.notif__item');
        notif.remove();

        counter--;
        notifCounter.textContent = counter;
    };

});
