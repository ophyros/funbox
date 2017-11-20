(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _product = require('./product');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productElements = document.querySelectorAll('.product');
var products = [];

Array.prototype.forEach.call(productElements, function (element) {
  products.push(new _product2.default(element));
});

},{"./product":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* Класс для обработки событий выбора товаров
* (для выполнения условия 5 в задаче)
*/

var Product = function () {
  function Product(element) {
    _classCallCheck(this, Product);

    this.product = element;
    this.checkbox = this.product.querySelector('.product__checkbox');

    this.checkbox.addEventListener('change', this.handleChange.bind(this));
    this.checkbox.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.product.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }

  /*
  * Пользователь выбрал/отменил выбор товара.
  */


  _createClass(Product, [{
    key: 'handleChange',
    value: function handleChange() {
      this.disableHover();
    }

    /*
    * Пользователь убрал курсор с товара
    */

  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.enableHover();
      this.checkbox.blur();
    }

    /*
    * Пользователь перешел TAB-ом на другую карточку.
    * Такое извращение приходится делать из-за IE, в других браузерах достаточно привязаться на событие blur или focus,
    * IE несколько раз генерирует blur и focus при изменении чекбокса, наведение включится слишком рано
    */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode === 9) {
        // TAB key
        this.enableHover();
      }
    }

    /*
    * Добавляем класс, блокирующий состояние наведения
    */

  }, {
    key: 'disableHover',
    value: function disableHover() {
      this.checkbox.classList.add('is-changed');
    }

    /*
    * Убираем класс, состояние наведения будет работать
    */

  }, {
    key: 'enableHover',
    value: function enableHover() {
      this.checkbox.classList.remove('is-changed');
    }
  }]);

  return Product;
}();

exports.default = Product;

},{}]},{},[1]);
