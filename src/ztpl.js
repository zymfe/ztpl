/**
 * Description: JavaScript模板引擎
 * User: zhaoyiming
 * Date: 2018/07/07
 * License: MIT, https://github.com/zymseo/ztpl
 */

;(function (global, document, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(document) :
	typeof define === 'function' && define.amd ? define([], function () {return factory(document);}) :
	(global.ztpl = factory(document));
})(this, document, function () {
  'use strict';

  let str = 'var r=[];\n';
  const reg_out = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;

  function ztpl (id, data) {
    const ele = document.querySelector(id);
    if (!ele) throw new Error('无效dom对象id'); 
    let html = ele.value;
    
    const reg = /<%([^%>]+)?%>/g;
    let idx = 0;
    let match = null;

    while(match = reg.exec(html)) {
      addStr(html.slice(idx, match.index))(match[1], true);
      idx = match.index + match[0].length;
    }

    addStr(html.substr(idx, html.length - idx));
    str += 'return r.join("");';
    return new Function(str.replace(/[\r\t\n]/g, '')).apply(data);
  }

  function addStr (fragment, hasTplTab) {
    if (hasTplTab) {
      str += fragment.match(reg_out) ? (fragment + '\n') : ('r.push(' + fragment + ');\n');
    } else {
      str += fragment !== '' ? ('r.push("' + fragment.replace(/"/g, '\\"') + '");\n') : '';
    }
    return addStr;
  }

  return ztpl;
});