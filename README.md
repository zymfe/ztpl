# JavaScript模板引擎（ztpl）
当前模板引擎正在不断完善中...

### 说明 
- 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
- 或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

### （1）使用script 标签引入:
``` javascript
<script type="text/javascript" src="ztpl.js"></script>
<script type="text/javascript">
	ztpl('#container',at data);
</script>
```
### （2）使用requireJs异步引入:
``` javascript
require(['ztpl'], function (ztpl) {
	ztpl('#container', data);
});
```
### （3）使用ES6方式导入：
``` javascript
import ztpl from './ztpl.js';
ztpl('#container', data);
```
