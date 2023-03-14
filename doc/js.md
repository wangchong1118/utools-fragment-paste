# 返回页面顶部
```
const scrollToTop = _ => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
document.getElementById('topBtn').onclick = scrollToTop;
```

# 获取滚动位置
```
const getScrollPos = (el = window) => ({
    x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
});
```

# 数字验证---验证是否为合法数字
```
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
```

# 生成范围内的随机整数
```
const randomInRange = (min, max) => parseInt(Math.random() * (max - min) + min);
```

# 字符串反转
```
const reverseString = str => [...str].reverse().join('');
```

# 字符串自然排序---按字母顺序排序
```
const sortCharactersInString = str =>  str.split('').sort((a, b) => a.localeCompare(b)).join('');
```

# 数组去重
```
const unique = arr => [...new Set(arr)];
```

# 数组求和---基于数组 reduce() 方法实现
```
const sum = arr => arr.reduce((acc, val) => acc + val, 0);
```

# 数组阶乘
```
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
```

# 数组洗牌---随机排序数组元素
```
const shuffle = arr => {
    let r = arr.map(Math.random);
    return arr.sort((a, b) => r[a] - r[b]);
}
```

# 数组过滤---过滤掉有相同元素的，仅包含唯一值的部分
```
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
```

# 数组摊平---浅层次摊平
```
const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
console.log(flatten([1,[2],3,[4, 5]]));  // [1, 2, 3, 4, 5]
```

# 数组摊平---深层次递归摊平
```
const simpleNormalizeChildren = children => {
    for (let i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
            children = Array.prototype.concat.apply([], children);
            simpleNormalizeChildren(children)
        }
    }
    return children;
}
console.log(simpleNormalizeChildren([1, [2, 3], [4, [5, 6, [7, 8]]], [9, 10]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# 数组摊平追加---用 apply 将数组各项添加到另一个数组
```
const appendByArray = (array, elements) => {
    array.push.apply(array, elements);
    return array;
}
console.info(appendByArray(['a', 'b', 'c'], [0, 1, 2])); // ["a", "b", "c", 0, 1, 2]
```

# 数组生成---斐波那契数组
```
const fibonacci = n =>  Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
```

# RGB 转十六进制
```
const rgbToHex = (r, g, b) => '#'+((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
```

# 动态加载 CSS 文件
```
const LoadStyle = url => {
    try {
        document.createStyleSheet(url)
    } catch (e) {
        var cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.type = 'text/css';
        cssLink.href = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(cssLink)
    }
}
```

# 函数一次性执行---只执行一次
```
const once = fn => {
    let called = false
    return function () {
        if (!called) {
            called = true
            fn.apply(this, arguments)
        }
    }
}
const func = () => { console.log(123); }
let onlyOnce = once(func);
onlyOnce(); // 1
onlyOnce(); // 不执行
```

# 防抖
```
/**
 * 防抖
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
let timeout;
function Debounce(func, wait = 3000, immediate = true) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function() {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function() {
      typeof func === 'function' && func();
    }, wait);
  }
}

Debounce(()=>console.log(1));
```