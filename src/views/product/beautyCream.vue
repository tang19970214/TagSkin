<template>
  <div id="beautyCream">
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
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f1402e7c5283c00396e473a/800x.webp?source_format=png",
      productInfo: {
        name: "光感美肌霜",
        price: "NT$1,380",
      },
      productURL:
        "https://shopee.tw/%E7%86%AC%E5%A4%9C%E6%97%8F%E6%87%B6%E4%BA%BA%E6%97%8F%E6%9C%80%E6%84%9B%E7%9A%84%E5%85%89%E6%84%9F%E7%BE%8E%E8%82%8C%E9%9C%9C%F0%9F%8C%9F-i.4237735.3151885607",
    };
  },
};
</script>