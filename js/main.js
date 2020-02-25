// функция переключение актив
document.querySelector('.burger').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.about').classList.toggle('active');
    document.querySelector('.main-body').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}

// функция вывод время на екран
let clock = document.querySelector('.clock__set');
const setTime = () => {
    let date = new Date();
    let h = date.getHours().toString();
    let m = date.getMinutes().toString();
    let s = date.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }
    clock.textContent = `${h}:${m}:${s}`;
}
setTime();

setInterval(setTime, 1000);
