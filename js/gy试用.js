var minx = document.getElementsByClassName('box')[0].children;
var maxx = document.getElementsByClassName('box_2')[0].children;
for (var item of minx) {
    item.onclick = function () {
        for (var item of minx) {
            item.className = '';
        }
        this.className = 'a';
    }
}
for (var item of maxx) {
    item.onclick = function () {
        for (var item of maxx) {
            item.className = '';
        }
        this.className = 'a_1';
    }
}