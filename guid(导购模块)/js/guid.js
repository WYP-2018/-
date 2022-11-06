// 创建ajax对象
function show() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/guid/new');
    ajax_.send();
    ajax_.onreadystatechange = function () {
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
    var ul = document.getElementById('buy');
    for (var item of data_) {
        var li = document.createElement('li');
        var str = `
        
        <a href="#">
            <img src="${item.img}">
            <div class="info">
                <p class="title">
                    ${item.text}
                </p>
                <div class="xia">
                    <div class="right icon">
                        <span class="xin">${item.like}</span>
                        <span class="look">${item.words}</span>
                    </div>
                </div>
            </div>
        </a>
    
       `
        li.innerHTML = str;
        ul.appendChild(li);
    }
}
