const types = require("./types.js")
const options = {}
const createOption = type => ({
	mode: 'list',
	args: {
		enter: (action, callbackSetList) => {
			load(type, callbackSetList)
		},
		search: (action, searchWord, callbackSetList) => {
            filter(searchWord, callbackSetList)
        },
		select: (action, itemData, callbackSetList) => {
            select(itemData)
        },
		placeholder: type + " 片段关键词",
	}
})
types.forEach(type => {
	options[type] = createOption(type)
})
window.exports = options

const data = []

/**
 * 字符串格式化： trim、toLowerCase
 */
let strFmt = str => str.trim().toLowerCase()

/**
 * 插件初始化
 */
let load = (type, callbackSetList) => {
  const fs = require("node:fs")
  const path = require("node:path")
  const marked = require("marked")
  const jsdom = require('jsdom')

  const dataPath = path.resolve(__dirname, `./doc/${type}.md`)
  let domList = jsdom.JSDOM.fragment(marked.parse(fs.readFileSync(dataPath, "utf8"))).children
  domList = Array.from(domList, item => {
  	let res = item.nodeName === "H1" ? item.innerHTML : item.firstChild.innerHTML.slice(0, -1)
  	return res
  })

  const keys = domList.filter((item, index) => !(index%2))
  const values = domList.filter((item, index) => index%2)
  keys.forEach((item, index) => {
  	data.push({ title: item.split("---")[0], description: item.split("---")[1], content: values[index] })
  })

  callbackSetList(data)
}

/**
 * 根据搜索关键词过滤展示片段标题
 */
let filter = (searchWord, callbackSetList) => {
    let _data_tmp = strFmt(searchWord) ? data.filter(item => strFmt(item.title).includes(strFmt(searchWord))) : data
    callbackSetList(_data_tmp)
}

/**
 * 选定搜索关键词，展示对应关键词下的所有片段
 */
let select = (itemData) => {
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