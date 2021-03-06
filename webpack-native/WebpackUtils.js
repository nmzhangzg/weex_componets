/**
 * loader是否忽略该文件
 * @param path 文件路径
 * @return {boolean} true 忽略 false 不忽略
 */

const {INCLUDE_PATH} = require("../../../webpack-config/WebpackConfig");

const isExclude = function (path) {
    let isNodeModules = path.indexOf("node_modules") >= 0;    //是否为node_modules中的模块

    if (path.indexOf("wxp_weex_com") >= 0) {
        return false;
    }

    let isWxpWexxComponents = INCLUDE_PATH.some((item) => {
        return path.indexOf(item) >= 0;
    });

    if (isWxpWexxComponents) {
        return false;
    }
    return isNodeModules;
};

module.exports = {
    isExclude
};