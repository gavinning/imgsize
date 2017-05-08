"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function size(url) {
    var img = new Image();
    img.src = url;

    return new Promise(function (res, rej) {
        // 定时检查
        var set = setInterval(function (app) {
            if (img.width > 0 && img.height) {
                clearInterval(set);
                res(img);
            }
        }, 10);

        // 检查缓存
        if (img.complete) {
            clearInterval(set);
            res(img);
        }
        // 检查onload
        else {
                img.onload = function () {
                    clearInterval(set);
                    res(img);
                };
            }
    });
}

exports.default = size;