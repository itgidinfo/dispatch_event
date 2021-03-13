document.querySelector('.b-1').onclick = f1;

function f1() {
    console.group('function 1');
    console.log('function 1');
    console.log(this);
    console.groupEnd();
}

// document.querySelector('.b-1').click();

document.querySelector('.d-2').ondblclick = f2;
function f2() {
    console.group('function 2');
    console.log('function 2');
    console.log(this);
    console.groupEnd();
}

let dblEvent = new MouseEvent('dblclick');
// document.querySelector('.d-2').dispatchEvent(dblEvent);

// document.querySelector('.d-3').onmousemove = f3;
function f3() {
    console.group('function 3');
    console.log('function 3');
    console.log(this);
    console.groupEnd();
}

let enterEvent = new MouseEvent('mousemove');
// document.querySelector('.d-3').dispatchEvent(enterEvent);
// document.querySelector('.d-3').dispatchEvent(enterEvent);

document.querySelector('.i-5').onkeypress = f5;
function f5(event) {
    console.group('function 5');
    console.log('function 5');
    console.log(event.key);
    console.log(event.shiftKey);
    console.groupEnd();
}

let k1Event = new KeyboardEvent('keypress', {
    key: "z",
    shiftKey: true
});
// document.querySelector('.i-5').dispatchEvent(k1Event);

document.querySelector('.i-6').oninput = f6;
function f6() {
    console.group('function 6');
    console.log('function 6');
    console.log(this.value);
    console.groupEnd();
}

let inpEvent = new Event('input');
document.querySelector('.i-6').value = 'zW';
document.querySelector('.i-6').dispatchEvent(inpEvent);
