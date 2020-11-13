<template>
  <div id="lotion">
    <div class="w-100">
      <ProductInfo
        :imgURL="imgURL"
        :productInfo="productInfo"
        :productURL="productURL"
      />

      <Effect :effectList="effectList" />

      <div class="w-100 mt-30">
        <img
          src="https://shoplineimg.com/5f130afa1eda70002741b159/external-3c421ca2dc1027d1948b42133ad472af/original?image_url=https%3A%2F%2Fimg.shoplineapp.com%2Fmedia%2Fimage_clips%2F5f1aa889674e23002d847b03%2Foriginal.png%3F1595582601"
          alt="產品圖"
          width="100%"
        />
      </div>

      <div class="w-100">
        <div class="p-20 productDetail">
          <div class="w-100 text-left mt-30">
            <strong>產品容量：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">400ML</p>
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
              <p class="m-0">
                粉紅色並不是色素，而是龍血樹脂萃取原料成分，請安心使用：）
              </p>
              <p class="m-0">孕婦期、哺乳期、美容課程後"皆可使用"</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">使用方法：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">早晚清潔臉部後取適量於手心或搭配化妝棉使用</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">產品成分：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">
                Water, Hydrolyzed Manihot Esculenta Tuber Extract, Glycerin,
                Rice Bran Oil, Croton Lechleri Resin Extract, Honey Extract,
                Aloe Barbadensis Leaf Juice, Palmitoyl Hexapeptide-12, Centella
                Asiatica Extract, Hydrolyzed Yeast Protein, Calendula
                Officinalis Flower Extract, Copper Tripeptide, Chlorphenesin,
                Allantoin, Sodium Hyaluronate, Panthenol, Ruscus Aculeatus Root
                Extract, Aesculus Hippocastanum (Horse Chestnut), Ammonium
                Glycyrrhizate, Ethylhexylglycerin
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
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f1414250225e326d83029af/800x.webp?source_format=png",
      productInfo: {
        name: "裸光活化機能水",
        price: "NT$1,380",
      },
      productURL:
        "https://shopee.tw/%F0%9F%8C%9FTAGSKIN-%E8%A3%B8%E5%85%89%E6%B4%BB%E5%8C%96%E6%A9%9F%E8%83%BD%E6%B0%B4-i.4237735.3443862837",
      effectList: [
        {
          context: "長效保濕",
        },
        {
          context: "活化細胞",
        },
        {
          context: "強化防禦",
        },
        {
          context: "舒緩調理",
        },
        {
          context: "收斂消炎",
        },
        {
          context: "水嫩細緻",
        },
        {
          context: "滋養潤澤",
        },
        {
          context: "改善痘痘",
        },
        {
          context: "改善粉刺",
        },
        {
          context: "改善閉鎖",
        },
        {
          context: "增加光澤",
        },
        {
          context: "抗老抗皺",
        },
        {
          context: "抗自由基",
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