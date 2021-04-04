<template>
  <div class="request_form_block">
    <div @click="closeForm" class="form_close_button"></div>
    <form action="#" class="request_form">
      <span class="form_header">Онлайн-заявка</span>
      <span class="form_header_desc">Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы</span>
      <div class="inputs_block">
        <input type="tel" name="tel" id="tel" class="inputs_block_item tel" placeholder="Телефон">
        <input type="text" class="inputs_block_item name" placeholder="Имя">
      </div>
      <a @click="cancelUpdate" class="make_request_button car_photo_left_request_btn mobile_form_request_button" href="#">Оставить заявку</a>
      <div class="cookies_block">
        <div class="cookies_block_text">Нажимая на кнопку «Оставить заявку»,  я даю согласие на <span class="selected_text">обработку персональных данных</span></div>
        <a @click="cancelUpdate" class="make_request_button car_photo_left_request_btn form_request_btn" href="#">Оставить заявку</a>
      </div>
      <div class="icons_block">
        <a @click="cancelUpdate" href="#" class="icons_block_item"></a>
        <a @click="cancelUpdate" href="#" class="icons_block_item"></a>
      </div>
    </form>
  </div>
</template>

<script>
import './form.css'
export default {
  methods: {
    closeForm () {
      this.$root.closeForm()
    },
    cancelUpdate (e) {
      e.preventDefault()
    }
  }
}
</script>
