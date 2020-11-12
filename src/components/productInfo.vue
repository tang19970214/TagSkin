<template>
  <div id="productInfo">
    <div class="w-100">
      <img :src="imgURL" alt="" width="100%" />
      <div class="w-100 productCard">
        <div class="p-20">
          <div class="w-100 d-flex align-items-center flex-row">
            <div class="text-left">
              <strong class="font-s-28">{{ productInfo.name }}</strong>
              <p class="m-0 font-s-20 mt-10">{{ productInfo.price }}</p>
            </div>
            <div class="ml-auto text-right">
              <a :href="productURL" target="_blank">
                <img
                  src="@/assets/images/buy-button.png"
                  alt="GoToShop"
                  width="60px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgURL: {
      type: String,
      require: true,
    },
    productInfo: {
      type: Object,
      require: true,
    },
    productURL: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss">
#productInfo {
  .productCard {
    &-introduce {
      //   p {
      //     border-bottom: 1px solid #C4C4C4;
      //   }
    }
  }
}
</style>