<template>
  <div id="essence">
    <div class="w-100">
      <ProductInfo
        :imgURL="imgURL"
        :productInfo="productInfo"
        :productURL="productURL"
      />

      <Effect :effectList="effectList" />

      <div class="w-100 mt-30">
        <img
          src="https://shoplineimg.com/5f130afa1eda70002741b159/external-e0d916922896608477fed4367d4aa067/original?image_url=https%3A%2F%2Fimg.shoplineapp.com%2Fmedia%2Fimage_clips%2F5f1ac7d832fbd50036316b98%2Foriginal.jpg%3F1595590614"
          alt="產品圖"
          width="100%"
        />
      </div>

      <div class="w-100">
        <div class="p-20 productDetail">
          <div class="w-100 text-left mt-30">
            <strong>產品容量：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">30ml</p>
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
                可以代替精華液及保養油使用，或搭配原有的精華液使用
              </p>
              <p class="m-0">孕婦期、哺乳期、美容課程後"皆可使用"</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">使用方法：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">
                一般保養｜ 當前導精華使用、當一般精華液使用、當保養油使用。
              </p>
              <p class="m-0">加強保養｜ 與乳霜或乳液1:1混入使用。</p>
              <p class="m-0">
                面膜保養｜ 清潔後>化妝水>蜂毒>再敷上面膜使效果加倍。
              </p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">產品成分：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">
                Cyclopentasiloxane、Polydimethylsiloxane、Octamethyl
                Cyclotetrasiloxane、Sclerocarya Birrea Seed Oil、Argania Spinosa
                Kernel Oil、Sweet Almond Oil、Tocopheryl Acetate、Bee
                Venom、Silkworm Cocoon Extract、Caviar Extract、Tocopheryl
                Acetate、Ubiquinone、Fragrance
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
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f14057a0225e30039302d9d/800x.webp?source_format=png",
      productInfo: {
        name: "蜂毒絲絨精萃",
        price: "NT$1,380",
      },
      productURL:
        "https://shopee.tw/%F0%9F%8C%9FTAGSKIN-%E8%9C%82%E6%AF%92%E7%B5%B2%E7%B5%A8%E7%B2%BE%E8%90%83%F0%9F%8C%9F-i.4237735.4943610093",
      effectList: [
        {
          context: "保濕滋潤",
        },
        {
          context: "毛孔細緻",
        },
        {
          context: "油水平衡",
        },
        {
          context: "延緩老化",
        },
        {
          context: "調理肌膚",
        },
        {
          context: "改善暗沉",
        },
        {
          context: "舒緩修復",
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