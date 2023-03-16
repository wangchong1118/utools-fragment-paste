const types = require("./types.js");
const updateTypes = types.map(type => type + "_update");
const createType = type => ({
  mode: 'list',
  placeholder: type + "片段关键词",
  args: {
    enter: (action, callbackSetList) => { load(type, callbackSetList) },
    search: (action, searchWord, callbackSetList) => { filter(searchWord, callbackSetList) },
    select: (action, itemData, callbackSetList) => { select(itemData) }
  }
});
const createUpdater = type => ({
  mode: "none",
  placeholder: "更新" + type + "片段仓库",
  args: {
    enter: (action) => { update(type.split("_")[0]); }
  }
})

let items = {}
let data = null;
types.forEach(type => {
  items[type] = createType(type)
})
updateTypes.forEach(type => {
  items[type] = createUpdater(type)
})

window.exports = items;

/**
 * 字符串格式化： trim、toLowerCase
 */
const strFmt = str => str.trim().toLowerCase()

/**
 * 新增、更新文档碎片
 */
const update = type => {
  const dbInstance = utools.db.get(type);
  const {resolve} = require('path');
  const readXlsxFile = require('read-excel-file/node')
  const filePath = resolve(__dirname, "./doc/" + type + ".xlsx");
  readXlsxFile(filePath).then((rows) => {
    let dbObj = dbInstance ? {_id: type, data: rows, _rev: dbInstance._rev} : {_id: type, data: rows}
    utools.db.put(dbObj)
    utools.showNotification(type + "存储数据库已更新，点击本弹窗查看更新内容", type)
    window.utools.hideMainWindow()
    window.utools.outPlugin()
  })
}

/**
 * 获取文档碎片初始化
 */
const load = (type, callbackSetList) => {
  data = utools.db.get(type).data.map(d => ({
    title: d[0], description: d[1], content: d[2]
  }))
  callbackSetList(data)
}

/**
 * 根据搜索关键词过滤展示文档碎片标题
 */
const filter = (searchWord, callbackSetList) => {
    let _data_tmp = strFmt(searchWord) ? data.filter(item => strFmt(item.title).includes(strFmt(searchWord))) : data
    callbackSetList(_data_tmp)
}

/**
 * 选定搜索关键词，复制粘贴预定的文档碎片到指定位置
 */
const select = (itemData) => {
  window.utools.hideMainWindow()
  utools.copyText(itemData.content)
  if (utools.isWindows()) {
    utools.simulateKeyboardTap('v', 'ctrl')
  }
  if (utools.isMacOs()) {
    utools.simulateKeyboardTap('v', 'command')
  }
  if (utools.isLinux()) {
    utools.simulateKeyboardTap('v', 'ctrl')
  }
  utools.outPlugin()
}