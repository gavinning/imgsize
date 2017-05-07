imgsize
---
Get image size

### Webpack
```sh
npm i imgsize --save
```

### Usage
```js
import size from 'imgsize'
```
Promise
```js
size(imgurl).then(img => console.log(img.width, img.height))
```

Async await
```js
(async function(){
    let img = await size(imgurl)
    console.log(img.width, img.height)
})()
```
