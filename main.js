const miscRequests = require('./src/miscRequests');
const Client = require('./src/client');
const BuiltInIndicator = require('./src/classes/BuiltInIndicator');
const PineIndicator = require('./src/classes/PineIndicator');
const PinePermManager = require('./src/classes/PinePermManager');

const TradingView = { ...miscRequests, Client, BuiltInIndicator, PineIndicator, PinePermManager };

// CommonJS 导出 (向后兼容)
module.exports = TradingView;

// ES6 模块导出
export { Client, BuiltInIndicator, PineIndicator, PinePermManager };
export default TradingView;

// 导出 miscRequests 中的所有函数
export const {
  searchMarket,
  searchIndicator,
  getIndicator,
  getPrivateIndicators,
  getUser,
  scanSymbol
} = miscRequests;
