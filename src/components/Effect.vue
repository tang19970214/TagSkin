<template>
  <div id="effect">
    <div class="w-100">
      <div class="p-20">
        <div class="w-100 text-center mb-10">
          <strong class="py-5">功效：</strong>
        </div>

        <div
          class="w-100 py-5 d-flex align-items-center justify-content-center flex-row"
          v-for="(item, index) in effectList"
          :key="'EL_' + index"
        >
          <img src="@/assets/images/good.png" alt="" width="30px" />
          <p class="my-0 ml-10">{{ item.context }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    effectList: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="scss">
#effect {
  strong {
    font-weight: 700;
    line-height: 1.24;
    color: rgb(85, 85, 85);
    font-size: 18px;
  }
}
</style>