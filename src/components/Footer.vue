<template>
  <section>
    <div class="w-100">
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

      <div class="w-100 footer">
        <div class="py-30 d-flex align-items-center flex-column">
          <p class="m-0 font-s-13">代理：施妏璇 小姐 ｜ 0983322299</p>
          <p class="m-0 pt-10">2020 © TAG SKIN</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>

<style lang="scss">
.introduce {
  ul {
    li {
      color: rgb(136, 136, 136);
    }
  }
}

.footer {
  background: #f7f7f7;
}
</style>