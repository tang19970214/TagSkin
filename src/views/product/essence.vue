<template>
  <div id="essence">
    <div class="w-100">
      <ProductInfo
        :imgURL="imgURL"
        :productInfo="productInfo"
        :productURL="productURL"
      />
    </div>
  </div>
</template>

<script>
import ProductInfo from "@/components/productInfo.vue";
export default {
  components: {
    ProductInfo,
  },
  data() {
    return {
      imgURL:
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f14057a0225e30039302d9d/800x.webp?source_format=png",
      productInfo: {
        name: "蜂毒絲絨精萃",
        price: "NT$1,380",
      },
      productURL:
        "https://shopee.tw/%F0%9F%8C%9FTAGSKIN-%E8%9C%82%E6%AF%92%E7%B5%B2%E7%B5%A8%E7%B2%BE%E8%90%83%F0%9F%8C%9F-i.4237735.4943610093",
    };
  },
};
</script>