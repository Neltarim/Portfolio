<template>
  <div class="w-full mb-10 lg:flex justify-center">
    <div class="w-full lg:max-w-[900px]  lg:flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center">
      
      <!-- TOP BAR -->
      <img
        class="w-full h-64 -my-24 rotate-90 flex lg:hidden justify-center"
        src="/images/separator_big.svg"
        alt=""
      />

      <!-- TEXT LEFT -->
      <div v-if="!alignRight" class="flex lg:justify-end mx-10 lg:ml-0 lg:-mr-16">
        <div class="lg:text-right">
          <slot />
        </div>
      </div>
      <div class="hidden lg:block" v-else></div>

      <!-- CENTER BAR -->
      <div class="hidden lg:flex justify-center">
        <img
          :class="[alignRight ? '' : 'scale-x-[-1]']"
          :src="`/images/separator_${sepSize}.svg`"
          alt=""
        />
      </div>

      <!-- TEXT RIGHT -->
      <div v-if="alignRight" class="flex justify-start mx-10 lg:mr-0 lg:-ml-16">
        <div class="text-left">
          <slot />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    alignRight: Boolean,
    sepSize: String,
  },
}
</script>
