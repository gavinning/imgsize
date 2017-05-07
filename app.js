function size(url) {
    let img = new Image
    img.src = url

    return new Promise((res, rej) => {
        // 定时检查
        let set = setInterval(app => {
            if(img.width > 0 && img.height){
                clearInterval(set)
                res(img)
            }
        }, 10)

        // 检查缓存
        if(img.complete){
            clearInterval(set)
            res(img)
        }
        // 检查onload
        else{
            img.onload = function() {
                clearInterval(set)
                res(img)
            }
        }
    })
}

export default size
