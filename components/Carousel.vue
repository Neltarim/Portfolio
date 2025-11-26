<template>
  <div class="ml-28 relative">
    <ClientOnly>
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :space-between="0"
        :loop="false"
        :pagination="{
          el: '.custom-pagination',
          clickable: true
        }"
        :navigation="{
          nextEl: '.next-btn',
          prevEl: '.prev-btn'
        }"
        class="h-full"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <img class="absolute z-2 top-0 left-0" src="/assets/icons/image_corner.svg" alt="">
        <img class="absolute z-2 scale-[-1] right-0 bottom-0" src="/assets/icons/image_corner.svg" alt="">

        <SwiperSlide v-for="(item, index) in items" :key="index">
          <img class="z-1" :src="item" alt="">
        </SwiperSlide>
      </Swiper>
    </ClientOnly>

    <button 
      class="prev-btn absolute -left-16 top-1/2 -translate-y-1/2 z-20"
    >
      <img src="/assets/icons/arrow_able.svg" class="smooth scale-x-[-1] opacity-60 hover:opacity-100" />
    </button>

    <button 
      class="next-btn absolute -right-16 top-1/2 -translate-y-1/2 z-20"
    >
      <img src="/assets/icons/arrow_able.svg" class="smooth opacity-60 hover:opacity-100" />
    </button>

    <div class="custom-pagination z-2 flex justify-center mt-4"></div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { 
    Autoplay as SwiperAutoplay, 
    Pagination as SwiperPagination, 
    Navigation as SwiperNavigation 
  } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const items = ref([
  '/images/carousel_main.png',
  '/images/carousel_ik.png',
  '/images/carousel_big_models.png',
  '/images/carousel_gk.png'
]);

const marginLastFirst = (i) => {
  let margin = ''
  if (i === 0) {
    margin = 'pb-6 ml-10'
  } else if (i === items.value.length - 1) {
    console.log(items.value.length)
    margin = 'pb-6 mr-10'
  }
  return margin
};

const slidesPerView = ref(1); // default value for SSR

const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth < 768 ? 1 : 3;
};

onMounted(() => {
  updateSlidesPerView(); // set once after mount
  window.addEventListener("resize", updateSlidesPerView);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlidesPerView);
});
</script>

<style>
.swiper-pagination-bullet {
  background:#41706A;
  opacity: 0.6;
  transition: 0.2s;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.swiper-pagination-bullet-active {
  background: #80E1D6;
  opacity: 1;
  width: 40px;
  height: 10px;
  border-radius: 5px;
  transition: 0.2s;
}
</style>