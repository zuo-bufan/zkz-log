/**
 * author: zkz
 * @createTime: 2024-11-25 16:43:19
 * @Description: 入口文件
 */
"use strict"
if (process.env.NODE_ENV === 'production') {
	module.exports = require('./dist/zkz-log.min')
} else {
	module.exports = require('./dist/zkz-log')
}
