<template>
  <header class="page_header">
    <div class="page_header_left">
      <div class="header_leasing_text"></div>
      <div class="header_car_text"></div>
      <span class="company_profession">лизинговая компания</span>
    </div>
    <label for="mobile_menu_icon_input" class="mobile_menu_icon"></label>
    <input type="checkbox" name="" id="mobile_menu_icon_input">
    <div class="page_header_right">
      <label for="mobile_menu_icon_input" class="mobile_menu_close_icon"></label>
      <nav class="navigation">
        <label for="dropdown_input" class="page_header_right_item dropdown_btn">Лизинг</label>
        <input type="checkbox" name="" id="dropdown_input">
        <div class="dropdown_block">
          <a href="#" class="dropdown_block_item">Для личного пользования</a>
          <a href="#" class="dropdown_block_item">Для юридических лиц</a>
          <a href="#" class="dropdown_block_item">Калькулятор</a>
        </div>
        <a class="page_header_right_item" href="#">Каталог</a>
        <a class="page_header_right_item" href="#">О нас</a>
      </nav>
      <a @click="openForm" class="page_header_right_item make_request_button open_form" href="#" target="blank">Оставить заявку</a>
    </div>
  </header>
</template>

<script>
import './header.css'
export default {
  methods: {
    openForm (e) {
      this.$root.openForm(e)
    }
  }
}
</script>
