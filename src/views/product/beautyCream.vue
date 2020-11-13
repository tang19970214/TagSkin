<template>
  <div id="beautyCream">
    <div class="w-100">
      <ProductInfo
        :imgURL="imgURL"
        :productInfo="productInfo"
        :productURL="productURL"
      />

      <Effect :effectList="effectList" />

      <div class="w-100 mt-30">
        <img
          src="https://shoplineimg.com/5f130afa1eda70002741b159/external-d794d21a5585aea000f3bfef3542e594/original?image_url=https%3A%2F%2Fimg.shoplineapp.com%2Fmedia%2Fimage_clips%2F5f1acaad795ef7003cb72c77%2Foriginal.jpg%3F1595591340"
          alt="產品圖"
          width="100%"
        />
      </div>

      <div class="w-100">
        <div class="p-20 productDetail">
          <div class="w-100 text-left mt-30">
            <strong>產品容量：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">50g</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">保存方法：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">有效期限3年</p>
              <p class="m-0">請置於陰涼乾燥處避免陽光直射及幼童無法拿取處</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">注意事項：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">孕婦期、哺乳期、美容課程後"皆可使用"</p>
              <p class="m-0">
                代替乳液及乳霜使用，水凝霜質地可能與部分精華使用產生脫屑為正常現象，建議精華步驟按摩吸收後再使用
              </p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">使用方法：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">一般保養｜ 取10元硬幣大小均勻塗抹臉部→按摩吸收</p>
              <p class="m-0">晚安凍膜｜ 取50元硬幣大小均勻厚敷臉部→敷著入眠</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">產品成分：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">
                Aqua、Niacinamide、Butylene Glycol、Carbomer、Cetyl
                Octanoate、Hydrogenated Polydecene 、Jojoba Oil、Tocopheryl
                Acetate、Sodium Hyaluronate、Lactococcus ferment
                extract、Ubiquinone、Dipotassium
                Glycyrrhizinate、Allantion、Sorbitol 、Papaya Extract 、Lemon
                Extract 、Hexylene Glycol
                、Fructose、Glucose、Sucrose、Urea、Dextrin、Alanine、Glutamic
                Acid、Aspartic acid、Hexyl nicotinate、Cholesterol、Fullerence
                C60、Chamomile ET、Panthenol、Escin、Ruscus Aculeatus Root
                Extract、 Ammonium Glycyrrhizate、Centella Asiatica
                Extract、Hydrolyzed Yeast Protein、Calendula Officinalis Flower
                Extract、PEG-4 Laurate、Iodopropynyl
                Butylcarbamate、Phenoxyethanol、Ethylhexylglycerin、Fragrance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from "@/components/productInfo.vue";
import Effect from "@/components/Effect.vue";

export default {
  components: {
    ProductInfo,
    Effect,
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
      effectList: [
        {
          context: "阻斷暗沉",
        },
        {
          context: "保濕水嫩",
        },
        {
          context: "改善痘痘",
        },
        {
          context: "加倍淨白",
        },
        {
          context: "改善斑點",
        },
        {
          context: "改善細紋",
        },
        {
          context: "平衡油脂",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.productDetail {
  strong {
    font-weight: bolder;
    line-height: 1.2;
    color: rgb(85, 85, 85);
    font-size: 18px;
  }
  p {
    font-size: 14px;
    color: #333;
  }
}
</style>