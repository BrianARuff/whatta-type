const isString = (value) => {
  return typeof value === 'string' || value instanceof String;
}

const isNumber = (value) => {
  return typeof value === 'number' && isFinite(value);
}

const isArray = (value) => {
  return value && typeof value === 'object' && value.constructor === Array;
}

const isFunction = (value) => {
  return typeof value === 'function';
}

const isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object;
}

const isNull = (value) => {
  return value === null;
}

const isUndefined = (value) => {
  return typeof value === 'undefined';
}

const isBoolean = (value) => {
  return typeof value === 'boolean';
}

const isRegExp = (value) => {
  return value && typeof value === 'object' && value.constructor === RegExp;
}

const isError = (value) => {
  return value instanceof Error && typeof value.message !== 'undefined';
}

const isDate = (value) => {
  return value instanceof Date;
}

const isSymbol = (value) => {
  return typeof value === 'symbol';
}

const whattaType = {
  isString,
  isNumber,
  isArray,
  isFunction,
  isObject,
  isNull,
  isUndefined,
  isBoolean,
  isRegExp,
  isError,
  isDate,
  isSymbol,
}

module.exports = whattaType;