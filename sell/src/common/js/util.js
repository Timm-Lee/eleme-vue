/**
 * 解析url参数
 * @example ?id=123456&a=b
 * @return Object {id:123456, a:b}
 */

export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
    return obj;
  }
  /**
   * [?&] 包含 ? 或者 &
   * [^?&]+ 非 ? 或者 非 & 的字符, +表示一个或者多个
   * 中间用等号连接
   * [^?] 非？一个或者多个
   * g全局匹配
   */
}
