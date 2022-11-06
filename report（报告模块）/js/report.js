// 创建ajax对象
function show() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/report/hot');
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
    var str = '';
    for (var item of data_) {
        str += `
        <li>
        <a href='#'>
      <img src="${item.img}">
      <div class='info'>
      <p class='title'>${item.text}</p>
      <div class="he">
      <div class="mixture left">
      <span class="avt"></span>
      <span class="name">苏苏</span>
      <span class="time">2016-01-25</span>
      </div>
      <div class="right icon">
      <span class="great">3</span>
      <span class="look">3</span>
      </div>
      </div>
      </div>
      </a>
      </li>
       `
    }
    // console.log(str);
    var ul = document.getElementsByTagName('ul')[1];
    ul.className = 'list';
    ul.innerHTML = str;
    // ul.appendChild(ul);
}

