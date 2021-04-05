<template>
  <main>
    <div class="car_photo_block">
      <div class="car_photo_left">
        <span class="car_photo_left_main_text">Авто в лизинг для физических лиц</span>
        <span class="car_photo_left_second_text">Получите машину за 5 дней</span>
        <a @click="openForm" class="make_request_button car_photo_left_request_btn" href="#" target="blank">Оставить заявку</a>
      </div>
      <div class="car_photo_right">
        <img src="../../images/first_car.jpg" class="car_photo_right_image prev_image" alt="car_photo">
        <img src="../../images/second_car.jpg" class="car_photo_right_image center_image" alt="car_photo">
        <img src="../../images/third_car.jpg" class="car_photo_right_image next_image" alt="car_photo">
        <div class="pagination">
          <div class="pagination_item"></div>
          <div class="pagination_item"></div>
          <div class="pagination_item"></div>
        </div>
        <div class="car_photo_right_carusel_controls">
          <div class="prev car_photo_right_carusel_controls_item" @click="scrollToPrevImage"> </div>
          <div class="next car_photo_right_carusel_controls_item" @click="scrollToNextImage"> </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import './main.css'
export default {
  methods: {
    data: () => ({
      currentImage: null,
      prevImage: null,
      nextImage: null,
      paginationItemIdx: null
    }),
    openForm (e) {
      this.$root.openForm(e)
    },
    scrollToPrevImage () {
      this.nextImage.remove()
      this.currentImage.classList.remove('center_image')
      this.currentImage.classList.add('next_image')
      this.prevImage.classList.remove('prev_image')
      this.prevImage.classList.add('center_image')
      this.setPrevImage()
      this.setImages()
      this.paginationItemIdx -= 1
      this.setPaginationItem()
    },
    scrollToNextImage () {
      this.prevImage.remove()
      this.currentImage.classList.remove('center_image')
      this.currentImage.classList.add('prev_image')
      this.nextImage.classList.remove('next_image')
      this.nextImage.classList.add('center_image')
      this.setNextImage()
      this.setImages()
      this.paginationItemIdx += 1
      this.setPaginationItem()
    },
    setNextImage () {
      this.prevImage.classList.remove('prev_image')
      this.prevImage.classList.add('next_image')
      document.querySelector('.car_photo_right').insertAdjacentElement('afterbegin', this.prevImage)
    },
    setPrevImage () {
      this.nextImage.classList.remove('next_image')
      this.nextImage.classList.add('prev_image')
      document.querySelector('.car_photo_right').insertAdjacentElement('afterbegin', this.nextImage)
    },
    setImages () {
      let currentImage = document.querySelector('.center_image')
      let prevImage = document.querySelector('.prev_image')
      let nextImage = document.querySelector('.next_image')
      this.currentImage = currentImage
      this.prevImage = prevImage
      this.nextImage = nextImage
    },
    setPaginationItem () {
      this.removePrevPaginationItem()
      let items = Array.from(document.querySelectorAll('.pagination_item'))
      if (this.paginationItemIdx < 0) {
        this.paginationItemIdx = items.length - 1
      } else if (this.paginationItemIdx >= items.length) {
        this.paginationItemIdx = 0
      }
      if (this.paginationItemIdx || this.setPaginationItem === 0) {
        items[this.paginationItemIdx].classList.add('pagination_current')
      } else {
        items[0].classList.add('pagination_current')
      }
    },
    removePrevPaginationItem () {
      let item = document.querySelector('.pagination_current')
      item && item.classList.remove('pagination_current')
    },
    startCarusel () {
      setInterval(() => {
        this.scrollToNextImage()
      }, 3000)
    }
  },
  mounted () {
    this.setImages()
    this.setPaginationItem()
    this.paginationItemIdx = 0
    this.startCarusel()
  }
}
</script>
