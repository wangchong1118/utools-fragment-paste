# 垂直对齐---垂直对齐
```
.vc {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
```

# 渐变背景动画效果---按钮在鼠标滑进、滑出时呈现渐变动画效果
```
button {
    padding: 15px;
    background-image: linear-gradient(#FC6E51, #FFF);
    background-size: auto 200%;
    background-position: 0 100%;
    transition: background-position 0.5s;
}
button:hover {
    background-position: 0 0;
}
```