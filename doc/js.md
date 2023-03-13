# Hello World---Log 一下，嗨皮一下
```
console.log("Hello World");
```

# 随机生成字符串
```
const randomStr = () => Math.random().toString(20).slice(2);
randomStr();
```

# 获取两个日期间的间隔天数---日期格式形如 2023-03-11
```
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
const days = dayDif(new Date("2022-09-03"), new Date("2023-03-11"))
console.log(days)
```