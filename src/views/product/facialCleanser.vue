<template>
  <div id="facialCleanser">
    <div class="w-100">
      <ProductInfo
        :imgURL="imgURL"
        :productInfo="productInfo"
        :productURL="productURL"
      />

      <Effect :effectList="effectList" />

      <div class="w-100 mt-30">
        <img
          src="https://shoplineimg.com/5f130afa1eda70002741b159/external-27ffc8a326532e29fece2ff1dd316c7d/original?image_url=https%3A%2F%2Fimg.shoplineapp.com%2Fmedia%2Fimage_clips%2F5f1ac39c2aad6f004e39ad64%2Foriginal.jpg%3F1595589531"
          alt="產品圖"
          width="100%"
        />
      </div>

      <div class="w-100">
        <div class="p-20 productDetail">
          <div class="w-100 text-left mt-30">
            <strong>產品容量：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">100ml</p>
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
                絕對堅持不添加界面活性劑、起泡劑、酒精、防腐劑、香料、皂鹼、SLS、SLES等有害物質
              </p>
              <p class="m-0">孕婦期、哺乳期、美容課程後"皆可使用"</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">使用方法：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">早晚清潔臉部取適量使用後以清水洗淨</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">產品成分：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">
                Aqua、Sodium Lauryl Sarcosinate、Cocamidopropyl Betaine、1,3
                Butylene Glycol、Glycerine、Cocamide DEA、Glycosyl
                Trahalose、Panthenol、Tetrasodium EDTA、Lavandin、Acetyl
                Hexapeptide-8、Phenoxyethanol、Aloe Barbadensis Leaf
                Juice、Butylene Glycol、Algae Extract、Sea Salt
                Extract、Sorbitol、Tocopheryl Acetate、Lavandula
                angustifolia、Acrylates Copolymer
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
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f140680cac7ec0045c7ef43/800x.webp?source_format=png",
      productInfo: {
        name: "裸光胺基酸潔顏乳",
        price: "NT$680",
      },
      productURL:
        "https://shopee.tw/%E8%A3%B8%E5%85%89%E8%83%BA%E5%9F%BA%E9%85%B8%E6%B4%97%E9%9D%A2%E4%B9%B3%F0%9F%8C%9F%E8%AE%93%E6%82%A8%E6%B4%97%E5%87%BA%E5%A5%BD%E7%9A%AE%E8%86%9A-i.4237735.5844989544",
      effectList: [
        {
          context: "保水透亮光澤裸肌",
        },
        {
          context: "肌膚問題不再生成",
        },
        {
          context: "濃縮配方用量極省",
        },
        {
          context: "敏弱肌膚安心使用",
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