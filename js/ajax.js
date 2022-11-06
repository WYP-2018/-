// 创建ajax对象
function show() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/guid/new');
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                // console.log(data);
                every(data);
            } else {
                console.log('请求错误');
            }
        }
    }
}

//渲染数据
function every(data_) {
    // console.log(data_);
    //拼接
    var ul = document.getElementById('ul1');
    for (var item of data_) {
        var li = document.createElement('li');
        var str = `<a href="./use（试用模块）/shiyongxiangqing.html">
            <img src="${item.img}" alt="">
            <p>${item.text}<br><span>能吸取65000种颜色</span></p>
            <div class="d1">
                    <span>1212</span>
                    <div class="d2">
                    <span class="sp1">${item.like}</span>
                    <span class="sp2">${item.words}</span>
                </div>
            </div>
        </a>`
        li.innerHTML = str;
        ul.appendChild(li);
    }
}