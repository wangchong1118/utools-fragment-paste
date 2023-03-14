# 页面元素 CSS 初始化
```
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    outline: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
html {
    height: 100%;
}
body {
    font-size: 62.5%;
    line-height: 1;
    font-family: Arial, Tahoma, sans-serif;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
}
strong {
    font-weight: bold;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
img {
    border: 0;
    max-width: 100%;
}
p {
    font-size: 1.2em;
    line-height: 1.0em;
    color: #333;
}
```

# 清除浮动
```
.clearfix:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
}
.clearfix {
    display: inline-block;
}
html[xmlns] .clearfix {
    display: block;
}
* html .clearfix {
    height: 1%;
}
```

# 单行文本溢出显示省略号
```
span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

# 多行文本溢出显示省略号
```
p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
```

# 背景渐变---线性渐变(向下/向上/向左/向右/对角线)
```
/*
 * background-image: linear-gradient( 方向/角度 , 颜色1，颜色2，颜色3....);
 * 方向： 在关键字 to 后面加上 top、bottom、right、left 中的某一个关键字或多个关键字
 * 角度：除了使用关键字to +方向名词外，我们还可以使用角度去任意的规定
 */
// 从上到下（默认）
background-image: linear-gradient(#FF0000,#FFF200, #1E9600);
// 从下到上
background-image: linear-gradient(to top, #FF0000,#FFF200, #1E9600);
// 从左到右
background-image: linear-gradient(to right, #FF0000,#FFF200, #1E9600);
// 从左上到右下
background-image: linear-gradient(to right bottom , #FF0000,#FFF200, #1E9600);
// 使用角度：45°
background-image: linear-gradient(45deg, #FF0000,#FFF200, #1E9600);
// 颜色还可以使用rgb模式，这样就可以使用透明度了
background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
// 重复线性渐变
background-image: repeating-linear-gradient(45deg, #F27121 20px, #E94057 30px, #8A2387 40px);
```

# 背景渐变---径向渐变（由其中心定义）
```
/*
 * background-image: radial-gradient(shape size at position, start-color, ..., last-color);
 * shape： 定义形状。它可接受 circle 或 ellipse 值。默认值为 ellipse（椭圆）
 * size：渐变的大小，它可接受四个值：closest-side、farthest-side、closest-corner、farthest-corner
 * at position：用关键字 at 后面加上 position 属性支持的定位关键字和数值，指定渐变中心的位置
 */
// 均匀间隔的色标（默认）
background-image: radial-gradient(#d63c21, #e0d865);
// 圆形渐变
background-image: radial-gradient(circle, red, yellow, green);
// at position：指定渐变中心的位置
background-image: radial-gradient(farthest-corner at 60% 55%, red, yellow, black);
// 平铺的径向渐变
background-image: repeating-radial-gradient(circle at 20% 40%,#eea2a2 20px, #57c6e1 20px, #b49fda 40px, #7ac5d8 40px, #b49fda 60px, #4F9C9C 60px, #57c6e1 80px, #99CCCC 80px, #eea2a2 100px);
```

# 中英文自动换行
```
p{
 	word-wrap: break-word;
 	white-space: normal;
 	word-break: break-all;
}
/*不换行*/
.wrap {
	white-space:nowrap;
}
/*自动换行*/
.wrap {
 	word-wrap: break-word;
	word-break: normal;
}
/*强制换行*/
.wrap {
	word-break:break-all;
}
```

# 不固定高宽 div 垂直居中---1. 伪元素和 inline-block / vertical-align（兼容 IE8）
```
.box-wrap:before {
	content: '';
	display: inline-block;
	height: 100%;
	vertical-align: middle;
	margin-right: -0.25em; //微调整空格
}
.box {
	display: inline-block;
	vertical-align: middle;
}
```

# 不固定高宽 div 垂直居中---2. flex(不兼容 ie8 以下)
```
.box-wrap {
    height: 300px;
    justify-content:center;
    align-items:center;
    display:flex;
    background-color:#666;
}
```

# 不固定高宽 div 垂直居中---3. transform(不兼容 ie8 以下)
```
.box-wrap {
     width:100%;
     height:300px;
     background:rgba(0,0,0,0.7);
     position:relative;
}
.box{
    position:absolute;
    left:50%;
    top:50%;
    transform:translateX(-50%) translateY(-50%);
    -webkit-transform:translateX(-50%) translateY(-50%);
}
```

# 不固定高宽 div 垂直居中---4. 设置 margin:auto（该方法并非严格意义上的非固定宽高，而是 50% 的父级的宽高）
```
.box-wrap {
	position: relative;
    width:100%;
    height:300px;
    background-color:#f00;
}
.box-content{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:50%;
    height:50%;
    margin:auto;
    background-color:#ff0;
}
```

# 解决 IOS 页面滑动卡顿
```
body, html{
    -webkit-overflow-scrolling: touch;
}
```

# 设置页面滚动条样式
```
body::-webkit-scrollbar{
    /*滚动条整体样式*/
    width : 15px;  /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}
body::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius   : 15px;
    background-color: crimson;
    background-image: -webkit-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%,
            transparent
    );
}
body::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background   : #ededed;
    border-radius: 10px;
}
```

# 实现隐藏滚动条同时又可以滚动
```
.demo::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.demo {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
```

# font 属性缩写
```
p {
  font: italic small-caps bold 1.2em/1.0em Arial, Tahoma, Helvetica;
}
```

# 设置 placeholder 的字体样式
```
input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
	color: red;
}
input::-moz-placeholder { /* Firefox 19+ */
	color: red;
}
input:-ms-input-placeholder { /* IE 10+ */
	color: red;
}
input:-moz-placeholder { /* Firefox 18- */
	color: red;
}
```

# 全屏背景
```
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: url('b.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
```

# 页面卷曲效果
```
ul.box {
    position: relative;
    z-index: 1; /* prevent shadows falling behind containers with backgrounds */
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
}
ul.box li {
    position: relative;
    float: left;
    width: 250px;
    height: 150px;
    padding: 0;
    border: 1px solid #efefef;
    margin: 0 30px 30px 0;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
}
ul.box li:before,
ul.box li:after {
    content: '';
    z-index: -1;
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 70%;
    max-width: 300px; /* avoid rotation causing ugly appearance at large container widths */
    max-height: 100px;
    height: 55%;
    -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    -webkit-transform: skew(-15deg) rotate(-6deg);
    -moz-transform: skew(-15deg) rotate(-6deg);
    -ms-transform: skew(-15deg) rotate(-6deg);
    -o-transform: skew(-15deg) rotate(-6deg);
    transform: skew(-15deg) rotate(-6deg);
}
ul.box li:after {
    left: auto;
    right: 10px;
    -webkit-transform: skew(15deg) rotate(6deg);
    -moz-transform: skew(15deg) rotate(6deg);
    -ms-transform: skew(15deg) rotate(6deg);
    -o-transform: skew(15deg) rotate(6deg);
    transform: skew(15deg) rotate(6deg);
}
```

# 固定页脚
```
#footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 30px;
    width: 100%;
    background: #444;
}
```

# 禁止文字选中
```
*:not(input,textarea) {
    -webkit-user-select:none;
    user-select:none;
    -webkit-tap-highlight-color:rgba(255,0,0,0);
}
```

# 禁用移动Webkit的选择高亮
```
body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```

# 安卓CSS不识别边框0.5px解决办法
```
.border {
    position: relative;
}
.border::after {
     content: '';
     position: absolute;
     width: 200%;
     height: 200%;
     left: -50%;
     top: -50%;
     border: 1px solid #000;
     border-radius: 4px;
     transform: scale(0.5);
     box-sizing: border-box;
 }
```

# 显示链接名称的同时并显示当前 URL
```
a::after {
    content: " (" attr(href) ")";
}
```

# 绘制三角形---向上
```
div {
    width: 0;
    height: 0;
    border-width: 0 40px 40px;
    border-style: solid;
    border-color: transparent transparent red;
}
```

# 绘制三角形---向上，带边框
```
#blue {
    position:relative;
    width: 0;
    height: 0;
    border-width: 0 40px 40px;
    border-style: solid;
    border-color: transparent transparent blue;
}
#blue:after {
    content: "";
    position: absolute;
    top: 1px;
    left: -38px;
    border-width: 0 38px 38px;
    border-style: solid;
    border-color: transparent transparent yellow;
}
```

# 表格边框合并
```
table{
    border-collapse: collapse;
}
table, tr, td{
	border: 1px solid #666;
}
```

# 容器阴影---底边阴影
```
.box-shadow {
    background-color: #FF8020;
    width: 160px;
    height: 90px;
    margin-top: -45px;
    margin-left: -80px;
    position: absolute;
    top: 50%;
    left: 50%;
}
.box-shadow:after {
    content: "";
    width: 150px;
    height: 1px;
    margin-top: 88px;
    margin-left: -75px;
    display: block;
    position: absolute;
    left: 50%;
    z-index: -1;
    -webkit-box-shadow: 0px 0px 8px 2px #000000;
       -moz-box-shadow: 0px 0px 8px 2px #000000;
            box-shadow: 0px 0px 8px 2px #000000;
}
```

# 容器阴影---一个好看的阴影容器
```
.text_shadow{
  width:500px;
  height:500px;
  box-shadow: 0px 0px 13px 1px rgba(51, 51, 51, 0.1);
}
```

# 文字竖向排版
```
/* 单列展示时*/
.wrap {
    width: 25px;
    line-height: 18px;
    height: auto;
    font-size: 12px;
    padding: 8px 5px;
    word-wrap: break-word;/*英文的时候需要加上这句，自动换行*/ 
}
/*多列展示时*/
.wrap {
    height: 210px;
    line-height: 30px;
    text-align: justify;
    writing-mode: vertical-lr;  /*从左向右    */
    writing-mode: tb-lr;        /*IE从左向右*/
    /*writing-mode: vertical-rl;  -- 从右向左*/
    /*writing-mode: tb-rl;        -- 从右向左*/
}
```

# 立体字效果
```
.text_solid {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    line-height:100px;
    text-transform:uppercase;
    position: relative;
    background-color: #333;
    color:#fff;
    text-shadow:
            0px 1px 0px #c0c0c0,
            0px 2px 0px #b0b0b0,
            0px 3px 0px #a0a0a0,
            0px 4px 0px #909090,
            0px 5px 10px rgba(0, 0, 0, 0.6);
}
```

# 文字描边---镂空效果
```
 .stroke {
    -webkit-text-stroke: 1px greenyellow;
    text-stroke: 1px greenyellow;
    font-size: 60px;
    color: white;
}
```

# 文字模糊
```
.vague_text{
    color: transparent;
    text-shadow: #111 0 0 5px;
}
```

# 虚线---横向虚线
```
.dashed {
    width: 100px;
    height: 1px;
    background: linear-gradient(to right, #000, #000 5px, transparent 5px, transparent);
    background-size: 10px 100%;
}
```

# 页面动画出现闪烁问题---使用 transforms 或 animations时可能会有页面闪烁的效果
```
.cube {
   -webkit-backface-visibility: hidden;
   backface-visibility: hidden;
 
   -webkit-perspective: 1000;
   perspective: 1000;
   /* Other transform properties here */
}
// webkit内核的浏览器中，另一个行之有效的方法是
.cube {
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
  /* Other transform properties here */
}
```

# 消除 transition 闪屏
```
.wrap {
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
}
```

# 解决 vertical-align 属性不生效
```
.box{
  width:300px; 
  line-height: 300px;
  font-size: 16px; 
}
.box img{
  width: 30px; 
  height:30px; 
  vertical-align:middle
}
.box span{
  vertical-align:middle
}
```

# select 内容居中显示、下拉内容右对齐
```
select{
    text-align: center;
    text-align-last: center;
}
select option {
    direction: rtl;
}
```

# 宽高等比例自适应矩形
```
 .scale {
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    position: relative;
}
.item {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #499e56;
}
```

# 加载动画
```
.loader {
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #3498db;
    width: 80px;
    height: 80px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

# 文字渐变效果实现
```
.text_signature {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #ec2239, #40a4e2,#ea96f5);
    width: 320px;
}
```

# 方格图案背景---国际象棋棋盘
```
body {
    background-color: white;
    background-image: linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
    linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
    background-size: 100px 100px;
    background-position: 0 0, 50px 50px;
}
```