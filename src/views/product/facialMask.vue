<template>
  <div id="facialMask">
    <div class="w-100">
      <ProductInfo
        :imgURL="imgURL"
        :productInfo="productInfo"
        :productURL="productURL"
      />

      <Effect :effectList="effectList" />

      <div class="w-100 mt-30">
        <img
          src="https://shoplineimg.com/5f130afa1eda70002741b159/external-747b0324a74e36fed0d6c607ededd8de/original?image_url=https%3A%2F%2Fimg.shoplineapp.com%2Fmedia%2Fimage_clips%2F5f19470e4da12000421abb14%2Foriginal.png%3F1595492110"
          alt="產品圖"
          width="100%"
        />
      </div>

      <div class="w-100">
        <div class="p-20 productDetail">
          <div class="w-100 text-left mt-30">
            <strong>產品容量：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">0.84 FTOZ / 25ML</p>
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
              <p class="m-0">使用過程有繃麻感屬正常現象(含有緊緻原料關係)</p>
              <p class="m-0">孕婦期、哺乳期、美容課程後"皆可使用"</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">使用方法：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">
                清潔臉部→輕拍化妝水→敷臉20分鐘→按摩吸收不需清洗→務必上乳液或乳霜
              </p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">產品成分：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">
                Water, Propylene Glycol, Waltheria Indica Leaf Extract,
                Mannitol, Acetyl Tetrapeptide-9, Hydrolyzed Manihot Esculenta,
                Tuber ExtratHyaluronic Acid, Sodium Hyaluronate, Palmitoyl
                Oligopeptide, Cichorium Intybus Root Extract, Crithmum Maritimum
                Extract, Chondrus crispus Extract, Dipotassium Glycyrrhizinate,
                Xanthan Gum, Hydroxyethylcellulose, Chlorphenesin,
                Ethylhexylglycerin, Disodium EDTA, Fullerence, Pentapeptide-18 ,
                Acetyl Hexapeptide-8, Leontopodium alpinum
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
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f1417309cfab70030814ea2/800x.webp?source_format=png",
      productInfo: {
        name: "裸光緊緻面膜",
        price: "NT$99",
      },
      productURL:
        "https://shopee.tw/2020%E5%BF%85%E6%95%B7%E7%9A%84%E9%9D%A2%E8%86%9C-TAG-SKIN%E8%A3%B8%E5%85%89%E9%9D%A2%E8%86%9C%F0%9F%8C%9F-i.4237735.7234730005",
      effectList: [
        {
          context: "緊緻拉提",
        },
        {
          context: "長效保濕",
        },
        {
          context: "改善痘痘",
        },
        {
          context: "透亮透白",
        },
        {
          context: "延緩老化",
        },
        {
          context: "鎮定退紅",
        },
        {
          context: "鎮水滋潤",
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