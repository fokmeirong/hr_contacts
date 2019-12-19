(function () {
    debugger;
    var dpr = window.devicePixelRatio;
    var metaTag = document.createElement('meta');
    metaTag.name = "viewport"
    metaTag.setAttribute('content', 'initial-scale=' + 1 / dpr + ', maximum-scale=' + 1 / dpr + ', minimum-scale=' + 1 / dpr + ', user-scalable=no');
    document.getElementsByTagName('head')[0].appendChild(metaTag);

    document.addEventListener('DOMContentLoaded', function (e) {
        document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth + 'px';
    }, false);
})()