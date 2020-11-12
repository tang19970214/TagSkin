<template>
  <div class="home">
    <!-- Banner -->
    <div class="w-100">
      <img
        src="https://shoplineimg.com/5f130afa1eda70002741b159/5f9fd2312a92740504968df7/1000x.webp?source_format=jpg"
        alt=""
        width="100%"
      />
    </div>

    <!-- Our Story -->
    <div class="ourstory w-100 mt-30">
      <div
        class="ourstory-title w-100 d-flex align-items-center justify-content-start"
      >
        <strong class="px-10">OUT STORY</strong>
        <strong class="px-10">品牌故事</strong>
      </div>

      <div class="w-100">
        <div
          class="ourstory-introduce d-flex flex-column text-left p-20"
          v-for="(item, index) in ourstoryList"
          :key="'OS_' + index"
        >
          <p class="m-0">{{ item.title }}</p>
          <p class="m-0">{{ item.content }}</p>
        </div>
      </div>
    </div>

    <!-- Product -->
    <div class="w-100 mt-30">
      <div class="w-100 d-flex align-items-center justify-content-center">
        <img src="@/assets/images/svg/price-tag.svg" alt="" width="30px" />
        <strong class="px-10 font-s-20">熱門商品</strong>
      </div>
      <div class="w-100 mt-20">
        <el-row>
          <el-col
            class="mb-20"
            :span="12"
            v-for="(item, index) in productList"
            :key="'PL_' + index"
          >
            <div class="px-10 d-flex align-items-center flex-column">
              <img :src="item.imgURL" alt="" width="100%" />
              <div class="w-100">
                <div
                  class="productCard p-10 d-flex align-items-center flex-column"
                >
                  <div
                    class="w-100 pt-10 pb-20 d-flex align-items-center justify-content-center flex-column"
                  >
                    <p class="m-0">{{ item.productName }}</p>
                    <strong class="font-s-20">{{ item.price }}</strong>
                  </div>
                  <div class="w-100">
                    <button class="w-100 py-5" @click="goShop">
                      <img
                        src="@/assets/images/svg/shopping-cart.svg"
                        alt="shopping-cart"
                        width="20px"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--  -->
    <div class="w-100 mt-30">
      <img
        src="https://shoplineimg.com/5f130afa1eda70002741b159/5f155c8f03c199003cd0a8ff/1000x.webp?source_format=jpg"
        alt=""
        width="100%"
      />
    </div>

    <!-- introduce -->
    <div class="w-100 mt-80">
      <div class="px-20">
        <el-divider></el-divider>
      </div>

      <div
        class="introduce w-100 my-50 d-flex align-items-center justify-content-start"
      >
        <ul class="m-0 pl-50 list-none">
          <li
            class="text-left"
            v-for="(item, index) in introduceList"
            :key="'IL_' + index"
          >
            {{ item.context }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ourstoryList: [
        {
          title: '"#TAG SKIN"',
          content: "代表著創辦人的精神涵義，注重肌膚管理的重要性。",
        },
        {
          title: '"鑽研肌膚學理中的迷人之處，以純淨天然簡單為最高宗旨"',
          content: "愛自己並忠於自己，讓肌膚回歸美麗本質。",
        },
        {
          title: "TAG SKIN創立於2018年，專注致力於天然保養、護膚管理",
          content:
            "堅持純淨品質並嚴選天然高規格品質原料，杜絕所有有害的化學物質，以植物萃取為本源。",
        },
        {
          title: "",
          content:
            "在研發過程中我們不斷探索友善肌膚及環境的重要性，並與台灣最具經驗的專業生物科技實驗室攜手合作，推出一系列極單純護膚成份的高品質高效能護膚品。",
        },
        {
          title: "以肌之名宗旨；",
          content:
            "我們認為只要有對於友善肌膚環境更棒的原物料，都應該回饋至消費者身上，並且採納每一位支持TAG SKIN好朋友們的寶貴意見，投入大量時間研究並在產品原物料上用心，在每一個階段將產品做必要性升級，讓消費者可以充分感受產品的高品質價值體現。",
        },
        {
          title: "",
          content:
            "創辦人更希望能實質幫助正為肌膚困擾所苦的好朋友們以純淨極簡包裝更不使用誇大的行銷手法TAG SKIN更注重要求產品品質與產品效能能讓每一位支持我們的好朋友們明白並感受肌膚的重要性！",
        },
      ],
      productList: [
        {
          imgURL:
            "https://shoplineimg.com/5f130afa1eda70002741b159/5f7432ec5e3a80003b96015e/400x.webp?source_format=png",
          productName: "植萃平衡膏",
          price: "NT$1,080",
        },
        {
          imgURL:
            "https://shoplineimg.com/5f130afa1eda70002741b159/5f1402e7c5283c00396e473a/400x.webp?source_format=png",
          productName: "光感美肌霜",
          price: "NT$1,380",
        },
        {
          imgURL:
            "https://shoplineimg.com/5f130afa1eda70002741b159/5f14057a0225e30039302d9d/400x.webp?source_format=png",
          productName: "蜂毒絲絨精萃",
          price: "NT$1,380",
        },
        {
          imgURL:
            "https://shoplineimg.com/5f130afa1eda70002741b159/5f1417309cfab70030814ea2/400x.webp?source_format=png",
          productName: "裸光緊緻面膜",
          price: "NT$100",
        },
      ],
      introduceList: [
        {
          context: "｜以肌之名生技有限公司",
        },
        {
          context: "｜電子信箱：a0983322299@gmail.com",
        },
        {
          context: "｜LINE帳號：line051620",
        },
        {
          context: "｜客服時間：每日 09:00-20:00",
        },
      ],
    };
  },
  methods: {
    goShop() {
      window.open("https://shopee.tw/xxxxxyyyyy516?v=d41&smtt=0.0.4");
    },
  },
};
</script>

<style lang="scss">
.home {
  .ourstory {
    &-title {
      strong {
        &:first-child {
          font-size: 26px;
        }
        &:last-child {
          font-size: 20px;
        }
      }
    }
    &-introduce {
      color: #2D2929;
      font-size: 10px;
    }
  }

  .productCard {
    color: #888888;
    button {
      background: #f7f7f7;
      border: #f7f7f7;
    }
  }

  .introduce {
    ul {
      li {
        color: rgb(136, 136, 136);
      }
    }
  }
}
</style>