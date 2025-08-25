<template>
  <div>
    <q-layout view="lHh lpr lff">
      <q-footer class="footer-bg floating-footer q-pa-none">
        <div class="row no-wrap items-center justify-start">

          <!-- icon 1 -->
          <button
            flat
            class="footer-icon"
            @click="showDialog('icon1')"
            aria-label="icon1"
          >
            <q-img
              :src="homeSrc"
              :ratio="ICON_RATIO"
              class="icon-img"
              @mouseover="homeSrc = homeHover"
              @mouseleave="homeSrc = homeDefault"
              @mouseup="homeSrc = homeDefault"
              @error="onImgError"
            />
          </button>

          <!-- icon 2 -->
          <button
            flat
            class="footer-icon"
            @click="showDialog('icon2')"
            aria-label="icon2"
          >
            <q-img
              :src="aboutSrc"
              :ratio="ICON_RATIO"
              class="icon-img"
              @mouseover="aboutSrc = aboutHover"
              @mouseleave="aboutSrc = aboutDefault"
              @mouseup="aboutSrc = aboutDefault"
              @error="onImgError"
            />
          </button>

          <!-- icon 3 -->
          <button
            flat
            class="footer-icon"
            @click="showDialog('icon4')"
            aria-label="icon3"
          >
            <q-img
              :src="newSrc"
              :ratio="ICON_RATIO"
              class="icon-img"
              @mouseover="newSrc = newHover"
              @mouseleave="newSrc = newDefault"
              @mouseup="newSrc = newDefault"
              @error="onImgError"
            />
          </button>

          <!-- icon 4 -->
          <button
            flat
            class="footer-icon"
            @click="showDialog('icon3')"
            aria-label="icon4"
          >
            <q-img
              :src="productsSrc"
              :ratio="ICON_RATIO"
              class="icon-img"
              @mouseover="productsSrc = productsHover"
              @mouseleave="productsSrc = productsDefault"
              @mouseup="productsSrc = productsDefault"
              @error="onImgError"
            />
          </button>

        </div>
      </q-footer>
      <q-page-container>
        <router-view />
      </q-page-container>

      <app-loging />
    </q-layout>
  </div>
</template>

<style lang="scss">
/* ===== 佈局穩定關鍵：鎖定容器與圖片尺寸 ===== */
:root {
  --icon-w: clamp(48px, 10vw, 160px);     /* icon 寬度 RWD */
  --icon-r: 1.25;                        /* 和 JS 的 ICON_RATIO 一致：寬/高 */
  --icon-h: calc(var(--icon-w) / var(--icon-r));
  --footer-h: clamp(56px, 14vh, 120px);  /* footer 高度固定，避免高度跳動 */
}
/* 純浮動：自己固定在視窗底部，而不是讓 Quasar 處理 */
.floating-footer {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  height: var(--footer-h);          /* 鎖定 footer 高度 */
  display: flex;
  align-items: flex-end;
  z-index: 2000;
}
/* 背景圖會一起縮放鋪底；若不想裁切可改 contain */
.footer-bg {
  background: url("../statics/Footer.svg") no-repeat center bottom transparent;
  background-size: 80% auto; /* 寬度 90%，高度自動 */
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
}
/* icon 無底色、超緊湊間距 */
  .footer-icon {
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    min-width: unset;
    width: var(--icon-w);
    height: var(--icon-h);
    padding: 0;
    margin: 0 clamp(2px, 2vw, 8px); /* 左右間距也隨螢幕縮放 */
    display: flex;
    align-items: center;
    justify-content: center;
  }
.footer-icon:last-child { margin-right: 0; }
/* q-img 本體也鎖定為同樣寬度，以防內外尺寸不一致 */
.icon-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
}
@media (max-width: 800px) {
  :root {
    --icon-w: clamp(48px, 24vw, 260px);     /* icon 寬度 RWD */
    --icon-r: 1;                        /* 和 JS 的 ICON_RATIO 一致：寬/高 */
    --icon-h: calc(var(--icon-w) / var(--icon-r));
    --footer-h: clamp(56px, 14vh, 120px);  /* footer 高度固定，避免高度跳動 */
  }
  .footer-icon {
    margin: 0 clamp(1px, 1vw, 2px) !important; /* 左右間距統一縮小 */
  }
  .footer-icon:last-child {
    margin-right: 0 !important;
  }
}
.footer-icon:hover { filter: brightness(1.03); }
.footer-icon:active { transform: translateY(1px); }
.q-layout .q-page-container { padding-bottom: 0 !important; }
</style>

<script>
import homeDefault from '../statics/home_button_home.webp'
import homeHover from '../statics/home_hover_button_home.webp'
import aboutDefault from '../statics/home_button_about.webp'
import aboutHover from '../statics/home_hover_button_about.webp'
import newDefault from '../statics/home_button_new.webp'
import newHover from '../statics/home_hover_button_new.webp'
import productsDefault from '../statics/home_button_products.webp'
import productsHover from '../statics/home_hover_button_products.webp'
export default {
  name: 'MainLayout',
  computed: {
    // 依你的路由名稱調整成 Home.vue 的 name
    isOverlayRoute () {
      return this.$route.name === 'PageSet' || this.$route.name === 'Home'
    }
  },
  data () {
    return {
      ICON_RATIO: 1.25,
      homeDefault,
      homeHover,
      homeSrc: homeDefault,
      aboutDefault,
      aboutHover,
      aboutSrc: aboutDefault,
      newDefault,
      newHover,
      newSrc: newDefault,
      productsDefault,
      productsHover,
      productsSrc: productsDefault,
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      showAns: false
    }
  },
  methods: {
    showDialog (val) {
      if (val === 'icon1') {
        this.$router.push({
          name: 'home'
        })
      } else if (val === 'icon2') {
        this.$router.push({
          name: 'contact'
        })
      } else if (val === 'icon3') {
        this.$router.push({
          name: 'products'
        })
      } else if (val === 'icon4') {
        this.$router.push({
          name: 'news'
        })
      }
      console.log('========val')
      console.log(val)
    },
    onImgError (e) {
      console.warn('img load error', e?.target?.src)
    }
  },
  mounted () {
    // 預載 hover 圖，避免第一次 hover 顯示延遲或閃動
    const img = new Image()
    img.src = this.homeHover
  }
}
</script>
