//创建cookie    setCookie

function setCookie(key, value, time) {
    var date_ = new Date();
    date_.setDate(date_.getDate() + time);
    document.cookie = `${key}=${value};expires=${date_}`;
}

//读取cookie   查找cookie      document.cookie

function getCookie(key) {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        if (newArry[0] == key) {
            return newArry[1];
        }
    }
}

//删除cookie     moveCookie

function removeCookie(key) {
    this.setCookie(key, '', -1);
}


//清空cookie    clearCookie
function clearCookie() {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        this.removeCookie(newArry[0]);
    }
}