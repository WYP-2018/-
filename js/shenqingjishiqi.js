var span1 = document.getElementsByClassName('span1')[0];
var span2 = document.getElementsByClassName('span2')[0];
var p = document.getElementById('time');
var sp1 = span1.innerHTML;
var sp2 = span2.innerHTML;

function fn() {
    if (sp2 > 0) {
        sp1++;
        sp2--;
        span1.innerHTML = sp1;
        span2.innerHTML = sp2;
    } else {
        alert('货源不足,已经没有了，请下次早点申请');
        span2.innerHTML = '0';
        clearInterval(timer);
        p.innerHTML = '货源不足，不能再申请啦！！！';
    }
}
var timer = setInterval(function() {
    var nowtime = new Date();
    var gotime = new Date(2022, 10, 18, 5, 37, 0);
    var cha = gotime - nowtime;
    var day = parseInt(cha / 1000 / 60 / 60 / 24);
    var hour = parseInt(cha / 1000 / 60 / 60 % 24);
    var m = parseInt(cha / 1000 / 60 % 60);
    var s = parseInt(cha / 1000 % 60);
    var time = '申请时间剩余：' + day + '天' + hour + '小时' + m + '分钟' + s + '秒';
    p.innerHTML = time;
    if (day == 0 && hour == 0 && m == 0 && s == 0) {
        p.innerHTML = '申请活动结束啦！！！';
        clearInterval(timer);
    }
}, 1000)