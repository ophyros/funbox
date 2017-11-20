/*
* Класс для обработки событий выбора товаров
* (для выполнения условия 5 в задаче)
*/

export default class Product {

  constructor(element) {
    this.product = element;
    this.checkbox = this.product.querySelector('.product__checkbox');

    this.checkbox.addEventListener('change', this.handleChange.bind(this));
    this.checkbox.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.product.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }

  /*
  * Пользователь выбрал/отменил выбор товара.
  */
  handleChange() {
    this.disableHover();
  }

  /*
  * Пользователь убрал курсор с товара
  */
  handleMouseLeave() {
    this.enableHover();
    this.checkbox.blur();
  }

  /*
  * Пользователь перешел TAB-ом на другую карточку.
  * Такое извращение приходится делать из-за IE, в других браузерах достаточно привязаться на событие blur или focus,
  * IE несколько раз генерирует blur и focus при изменении чекбокса, наведение включится слишком рано
  */
  handleKeyDown(e) {
    if (e.keyCode === 9) { // TAB key
      this.enableHover();
    }
  }

  /*
  * Добавляем класс, блокирующий состояние наведения
  */
  disableHover() {
    this.checkbox.classList.add('is-changed');
  }

  /*
  * Убираем класс, состояние наведения будет работать
  */
  enableHover() {
    this.checkbox.classList.remove('is-changed');
  }
}