
export function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}

export const getUserAgent = function () {
  const userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1;
  //判断是否Opera浏览器
  if (isOpera) {
    return "Opera";
  }
  //判断是否Firefox浏览器
  if (userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  }
  //判断是否chorme浏览器
  if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  }
  //判断是否Safari浏览器
  if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  }
  //判断是否IE浏览器
  if (
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("MSIE") > -1 &&
    !isOpera
  ) {
    return "IE";
  }
  //判断是否Edge浏览器
  if (userAgent.indexOf("Trident") > -1) {
    return "Edge";
  }
};
/***
 *  存取sessionStorage
 * @param key
 * @param value
 */
export const writeSession = function (key, value) {
  if (value) {
    value = JSON.stringify(value);
  }
  sessionStorage.setItem(key, value);
};

/***
 *  读取sessionStorage
 * @param key
 * @param value
 */
export const readSession = function (key) {
  let value = sessionStorage.getItem(key);
  if (value && value !== "undefined" && value !== "null") {
    return JSON.parse(value);
  }
  return null;
};
/***
 *  移除sessionStorage
 * @param key
 * @param value
 */
export const removeSession = function (key) {
  key && sessionStorage.removeItem(key);
};
/***
 * localStorage
 * @param key
 * @param value
 */
export const writeLocal = function (key, value) {
  if (value) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};

/***
 * localStorage
 * @param key
 * @param value
 */
export const readLocal = function (key) {
  let value = localStorage.getItem(key);
  if (value && value !== "undefined" && value !== "null") {
    return JSON.parse(value);
  }
  return null;
};

/**
 * @description: 四舍五入保留两位小数
 * @param {type}
 * @return {type}
 */
export const keepTwoDecimalFull = function (num) {
  let result = parseFloat(num);
  if (isNaN(result)) {
    return false;
  }
  result = Math.round(num * 100) / 100;
  let s_x = result.toString();
  let pos_decimal = s_x.indexOf(".");
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += ".";
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += "0";
  }
  return s_x;
};

// 深拷贝
export const deepcopy = function (source) {
  if (!source) {
    return source;
  }
  let sourceCopy = source instanceof Array ? [] : {};
  for (let item in source) {
    sourceCopy[item] =
      typeof source[item] === "object" ? deepcopy(source[item]) : source[item];
  }
  return sourceCopy;
};

//过滤数组中重复部分

export const filterArray = function (arr) {
  let uniques = [];
  let stringify = {};
  for (let i = 0; i < arr.length; i++) {
    var keys = Object.keys(arr[i]);
    keys.sort(function (a, b) {
      return Number(a) - Number(b);
    });
    let str = "";
    for (let j = 0; j < keys.length; j++) {
      str += JSON.stringify(keys[j]);
      str += JSON.stringify(arr[i][keys[j]]);
    }
    if (!stringify.hasOwnProperty(str)) {
      uniques.push(arr[i]);
      stringify[str] = true;
    }
  }
  uniques = uniques;
  return uniques;
};
/**
 * --
 * @description 格式化时间
 * @param time
 * @param cFormat
 * @returns {string|null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}

/**
 * @description: 判断两个对象是否相等
 * @param {*} o1
 * @param {*} o2
 * @return {*}
 */
export function Compare(objA, objB) {
  if (!isObj(objA) || !isObj(objB)) return false; //判断类型是否正确
  if (getLength(objA) != getLength(objB)) return false; //判断长度是否一致
  return CompareObj(objA, objB, true); //默认为true
}

export function diffObject(obj1, obj2) {
  var o1 = obj1 instanceof Object;
  var o2 = obj2 instanceof Object;
  if (!o1 || !o2) {
    return obj1 === obj2;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (var attr in obj1) {
    var t1 = obj1[attr] instanceof Object;
    var t2 = obj2[attr] instanceof Object;
    if (t1 && t2) {
      return diff(obj1[attr], obj2[attr]);
    } else if (obj1[attr] !== obj2[attr]) {
      return false;
    }
  }
  return true;
}

//保留小数，无四舍五入
export const toFixed = function (num, decimal) {
  num = num.toString();
  let index = num.indexOf(".");
  if (index !== -1) {
    num = num.substring(0, decimal + index + 1);
  } else {
    num = num.substring(0);
  }
  return parseFloat(num).toFixed(decimal);
};

//获取订单状态
export const getOrderStateValue = function (code) {
  let orderStateList = readSession("svf-order-state") || [];
  let item =
    orderStateList &&
    orderStateList.length > 0 &&
    orderStateList.find((item) => {
      return item.orderStateCode == code;
    });
  let value = (item && item.orderStateName) || "";
  return value;
};

/***
 *  单位符号显示
 * @param key
 * @param value
 */
export const unitSymbol = function (key) {
  switch (key) {
    case "USD":
      return "$";
    case "GBP":
      return "£";
    case "CNY":
      return "¥";
    case "EUR":
      return "€";
    case "HKD":
      return "HK$";
    default:
      break;
  }
};

//匹配是否为图片或者音频
export const fileSuffixTypeUtil = function (fileName) {
  // 后缀获取
  let suffix = "";
  // 获取类型结果
  let result = "";
  try {
    var flieArr = fileName.split(".");
    suffix = flieArr[flieArr.length - 1];
  } catch (err) {
    suffix = "";
  }
  // fileName无后缀返回 other
  if (!suffix) {
    result = "other";
    return result;
  }
  // 图片格式
  var imglist = ["png", "jpg", "jpeg", "bmp", "gif"];
  // 进行图片匹配
  result = imglist.some(function (item) {
    return item == suffix;
  });
  if (result) {
    result = "image";
    return result;
  }

  // 匹配 excel
  var excelist = ["xls", "xlsx"];
  result = excelist.some(function (item) {
    return item == suffix;
  });
  if (result) {
    result = "excel";
    return result;
  }
  // 匹配 word
  var wordlist = ["doc", "docx"];
  result = wordlist.some(function (item) {
    return item == suffix;
  });
  if (result) {
    result = "word";
    return result;
  }

  // 匹配 视频
  var videolist = ["mp4", "m2v", "mkv"];
  result = videolist.some(function (item) {
    return item == suffix;
  });
  if (result) {
    result = "video";
    return result;
  }
  // 匹配 音频
  var radiolist = ["mp3", "wav", "wmv"];
  result = radiolist.some(function (item) {
    return item == suffix;
  });
  if (result) {
    result = "radio";
    return result;
  }
  // 其他 文件类型
  result = "other";
  return result;
};