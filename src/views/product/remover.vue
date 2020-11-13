<template>
  <div id="remover">
    <div class="w-100">
      <ProductInfo
        :imgURL="imgURL"
        :productInfo="productInfo"
        :productURL="productURL"
      />

      <Effect :effectList="effectList" />

      <div class="w-100 mt-30">
        <img
          src="https://shoplineimg.com/5f130afa1eda70002741b159/external-85feaa8f7c6d99e80b3f85057c75d4b7/original?image_url=https%3A%2F%2Fimg.shoplineapp.com%2Fmedia%2Fimage_clips%2F5f5b2e34893bbb0036d7e701%2Foriginal.png%3F1599811124"
          alt="產品圖"
          width="100%"
        />
      </div>

      <div class="w-100">
        <div class="p-20 productDetail">
          <div class="w-100 text-left mt-30">
            <strong>產品容量：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">200ml</p>
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
              <p class="m-0">使用卸妝露後需以潔顏乳洗淨肌膚</p>
              <p class="m-0">孕婦期、哺乳期、美容課程後"皆可使用"</p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">使用方法：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">❶洗淨雙手甩乾水份，呈現手部半乾</p>
              <p class="m-0">❷取適量按壓約2 - 3下點壓於全臉</p>
              <p class="m-0">❸以指腹輕輕按摩全臉(淡妝30秒、濃妝60秒)</p>
              <p class="m-0 pl-12">➔淡妝以溫水洗淨即完成卸妝。</p>
              <p class="m-0 pl-12">
                ➔濃妝以面紙擦拭彩妝再重複❷、❸步驟
                (濃妝等於卸2次再以溫水洗淨即完成卸妝)。
              </p>
            </div>
          </div>
          <div class="w-100 text-left mt-50">
            <strong class="pb-10">產品成分：</strong>
            <div class="w-100 pt-10">
              <p class="m-0">
                Water、Propylene Glycol、Polysorbate 85、Olive Oli PEG-7
                Esters、Hydrolyzed Opuntia Ficus-Indica Flower
                Extract、Laminaria Saccharina Extract、Glycerin、Butylene
                Glycol、Euphrasia、fficinalis
                Extract、Lecithin、Phenoxyethanol、Ethylhexylglycerin、Fragrance
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
        "https://shoplineimg.com/5f130afa1eda70002741b159/5f140945e928e100458f08a3/800x.webp?source_format=png",
      productInfo: {
        name: "裸光仙人掌卸妝露",
        price: "NT$1,280",
      },
      productURL:
        "https://shopee.tw/%F0%9F%8C%9F%E8%A3%B8%E5%85%89%E4%BB%99%E4%BA%BA%E6%8E%8C%E5%8D%B8%E5%A6%9D%E9%9C%B2%F0%9F%8C%B5-i.4237735.4454334619",
      effectList: [
        {
          context: "卸除彩妝",
        },
        {
          context: "清潔肌膚",
        },
        {
          context: "淨化毛孔",
        },
        {
          context: "保濕滋潤",
        },
        {
          context: "透亮光澤",
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