


function fu() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/useing/public');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {

                var data = (JSON.parse(ajax_.responseText));
                //把数据渲染到页面上   render函数名（参数）
                render(data);

            } else {
                console.log('请求失败');
            }
        }
    }

}

function render(data_) {
    var str = ''
    for (var item of data_) {
        str += `
        <a href="./shiyongxiangqing.html">
        <img src="${item.img}" alt="">
        <span>${item.text}</span>
        <p><span>${item.totalnum}</span><span>${item.num}</span></p>
        <p><span>${item.apply}</span>申请</p>
        <p>报告数量:8</p>
        <font>${item.info_ty}</font>
    </a>
    <a href="./shiyongxiangqing.html">
    <img src="${item.img}" alt="">
    <span>${item.text}</span>
    <p><span>${item.totalnum}</span><span>${item.num}</span></p>
    <p><span>${item.apply}</span>申请</p>
    <p>报告数量:8</p>
    <font>${item.info_ty}</font>
</a>
<a href="./shiyongxiangqing.html">
<img src="${item.img}" alt="">
<span>${item.text}</span>
<p><span>${item.totalnum}</span><span>${item.num}</span></p>
<p><span>${item.apply}</span>申请</p>
<p>报告数量:8</p>
<font>${item.info_ty}</font>
</a>
<a href="./shiyongxiangqing.html">
<img src="${item.img}" alt="">
<span>${item.text}</span>
<p><span>${item.totalnum}</span><span>${item.num}</span></p>
<p><span>${item.apply}</span>申请</p>
<p>报告数量:8</p>
<font>${item.info_ty}</font>
</a>
<a href="./shiyongxiangqing.html">
<img src="${item.img}" alt="">
<span>${item.text}</span>
<p><span>${item.totalnum}</span><span>${item.num}</span></p>
<p><span>${item.apply}</span>申请</p>
<p>报告数量:8</p>
<font>${item.info_ty}</font>
</a>
`;
        var li_ = document.createElement("li");
        if (li_.children.length < 4) {
            li_.innerHTML = str;

        } else if (li_.children.length == 4) {
            var li_ = document.createElement("li");
        }

    } var ul_ = document.getElementsByTagName('ul')[1];
    ul_.appendChild(li_);
}
