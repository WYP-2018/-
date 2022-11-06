//手机号
var tel = document.getElementsByClassName('tel')[0];
// console.log(tel);
//图片验证码
var pic = document.getElementsByClassName('pic')[0];
// 数字验证码
var num = document.getElementsByClassName('num')[0];
// 用户名
var user = document.getElementsByClassName('user')[0];
// 新密码
var psw1 = document.getElementsByClassName('psw1')[0];
// 确认密码
var psw2 = document.getElementsByClassName('psw2')[0];
// 登录
var button = document.getElementById('submit');
// console.log(button);
// span
var span1 = document.getElementsByTagName('span')[0];
var span2 = document.getElementsByTagName('span')[1];
var span3 = document.getElementsByTagName('span')[2];
var span4 = document.getElementsByTagName('span')[3];
var span5 = document.getElementsByTagName('span')[4];
var span6 = document.getElementsByTagName('span')[5];
// console.log(span1);
// console.log(span2);
// console.log(span3);
// console.log(span4);
// console.log(span5);
// console.log(span6);

tel.onfocus = function () {
    span1.innerText = '请输入手机号';
    span1.className = 'block';
}
tel.onblur = function () {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    right = reg.test(tel.value);  //true
    if (tel.value == '') {
        span1.innerText = '手机号为空';
        span1.className = 'red';
    } else if (!right) {
        span1.innerText = '手机号输入有误';
        span1.className = 'red';
    } else {
        span1.innerText = '正确';
        span1.className = 'green';
    }
}

pic.onblur = function () {
    if (pic.value == 'r2B7') {      //r2B7
        span2.innerText = '输入正确';
        span2.className = 'green';
    } else {
        span2.innerText = '输入有误,请重新输入';
        span2.className = 'red';
    }
}

// console.log(num.value);
// num.onblur = function () {
//     if (num.value == '0034') {
//         span3.className = 'green';
//         span3.innerText = '输入正确';
//     } else {
//         span3.className = 'red';
//         span3.innerText = '输入有误,请重新输入';
//     }
// }

// 验证码
var huoqu = document.getElementsByClassName('getCode')[0];
// console.log(huoqu);
var num = 60;
var time;
function dianji() {
    clearInterval(time);
    time = setInterval(fn, 1000);
}
function fn() {
    num = --num;
    huoqu.innerText = num + '秒后重发';
    if (num == 57) {
        alert('验证码:0034')
    } else if (num <= 0) {
        huoqu.innerText = '重新发送';
    }
}

user.onfocus = function () {
    span4.innerText = '用户名由6位数字构成';
    span4.className = 'block';
}
user.onblur = function () {
    var reg = /^\d{6}$/;
    right1 = reg.test(user.value);     //true
    if (user.value == '') {
        span4.innerHTML = '用户名为空';
        span4.className = 'red';
    } else if (!right) {
        span4.innerText = '用户名输入有误';
        span4.className = 'red';
    } else {
        span4.innerText = '正确';
        span4.className = 'green';
    }
}
psw1.onfocus = function () {
    span5.innerText = '由数字字母下划线组成，密码长度不能小于6位';
    span5.className = 'block';
}
psw1.onblur = function () {
    var reg = /^\w{6,}$/;
    right2 = reg.test(psw1.value);      //true
    if (psw1.value == '') {
        span5.innerText = '密码不能为空';
        span5.className = 'red';
    } else if (!right2) {
        span5.innerText = '不符合规范';
        span5.className = 'red';
    } else {
        span5.innerText = '密码正确';
        span5.className = 'green';
    }
}
psw2.onfocus = function () {
    span6.innerText = '请再次输入密码';
}
psw2.onblur = function () {
    if (psw1.value == psw2.value) {
        span6.innerText = '输入正确';
        span6.className = 'green';
    } else {
        span6.innerText = '输入错误';
        span6.className = 'red';
    }
}
// console.log(button);
button.onclick = function () {
    // var userV = user.value;
    if (right == true && right1 == true && right2 == true) {
        location.href = 'http://127.0.0.1:5500/index.html';
        window.event.returnValue = false;
        setCookie('用户名', user.value);
        setCookie('手机号', tel.value);
        setCookie('密码', psw1.value);
    } else {
        alert('发生未知错误')
    }
}