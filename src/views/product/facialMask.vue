<template>
  <div id="facialMask">
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
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f1417309cfab70030814ea2/800x.webp?source_format=png",
      productInfo: {
        name: "裸光緊緻面膜",
        price: "NT$99",
      },
      productURL:
        "https://shopee.tw/2020%E5%BF%85%E6%95%B7%E7%9A%84%E9%9D%A2%E8%86%9C-TAG-SKIN%E8%A3%B8%E5%85%89%E9%9D%A2%E8%86%9C%F0%9F%8C%9F-i.4237735.7234730005",
    };
  },
};
</script>