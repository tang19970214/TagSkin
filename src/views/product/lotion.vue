<template>
  <div id="lotion">
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
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f1414250225e326d83029af/800x.webp?source_format=png",
      productInfo: {
        name: "裸光活化機能水",
        price: "NT$1,380",
      },
      productURL:
        "https://shopee.tw/%F0%9F%8C%9FTAGSKIN-%E8%A3%B8%E5%85%89%E6%B4%BB%E5%8C%96%E6%A9%9F%E8%83%BD%E6%B0%B4-i.4237735.3443862837",
    };
  },
};
</script>