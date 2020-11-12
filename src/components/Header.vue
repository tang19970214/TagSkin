<template>
  <section>
    <div class="titlebar w-100 d-flex align-items-center flex-row">
      <router-link class="ml-10" to="/">
        <img src="../assets/images/BigLOGO.png" alt="LOGO" width="150px" />
      </router-link>

      <div class="overflow-x">
        <div class="titlebar-menu h-100 px-20 d-flex align-items-center">
          <div
            class="titlebar-menu_list px-10"
            :class="{ 'titlebar-menu_active': item.pathName == $route.name }"
            v-for="(item, index) in menuList"
            :key="'ML_' + index"
          >
            <router-link
              class="text-decoration-none"
              :to="{ name: item.pathName }"
            >
              <p class="m-0">{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          pathName: "beautyCream",
          name: "美肌霜",
        },
        {
          pathName: "facialCleanser",
          name: "潔顏乳",
        },
        {
          pathName: "facialMask",
          name: "緊緻面膜",
        },
        {
          pathName: "lotion",
          name: "機能水",
        },
        {
          pathName: "essence",
          name: "絲絨精萃",
        },
        {
          pathName: "remover",
          name: "卸妝露",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.titlebar {
  width: 100%;
  height: 65px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  &-menu {
    &_list {
      border-right: 1px solid #d3d3d3;
      &:last-child {
        border-right: none;
      }
      a {
        color: #C4C4C4;
      }
      p {
        min-width: 70px;
        max-width: 70px;
      }
      :hover {
        color: #f38c00;
      }
    }
    &_active {
      p {
        color: #f38c00;
      }
    }
  }
}
</style>