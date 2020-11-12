<template>
  <div id="remover">
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
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f140945e928e100458f08a3/800x.webp?source_format=png",
      productInfo: {
        name: "裸光仙人掌卸妝露",
        price: "NT$1,280",
      },
      productURL:
        "https://shopee.tw/%F0%9F%8C%9F%E8%A3%B8%E5%85%89%E4%BB%99%E4%BA%BA%E6%8E%8C%E5%8D%B8%E5%A6%9D%E9%9C%B2%F0%9F%8C%B5-i.4237735.4454334619",
    };
  },
};
</script>