<template>
  <q-page class="home-bg q-pa-none flex flex-center">
    <div class="page-content">
      <!-- 中央 Logo -->
      <div class="center-logo">
        <img src="../../statics/home_home_logo.webp" alt="Home Logo" />
      </div>
      <!-- 右下角 70% 位置的圖 -->
      <div class="word-image">
        <img src="../../statics/home_img_word_1.webp" alt="Word Image" />
      </div>
      <!-- 右下角 80% 位置的圖 -->
      <div class="word-image2">
        <img src="../../statics/home_img_word_2.webp" alt="Word Image" />
      </div>

      <!-- 你的內容 -->
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.center-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%); /* 原本 -50%，改成 -60% 就會往上移 */
}
.center-logo img {
  width: 20vw;   /* 佔螢幕寬度 10% */
  height: auto;  /* 高度等比例縮放 */
}
.home-bg {
  /* 高度滿版（行動裝置也穩定） */
  min-height: 100dvh;
  height: 100dvh;
  @supports not (height: 100dvh) {
    min-height: 100vh;
    height: 100vh;
  }

  /* 寬度滿版但不造成水平捲軸 */
  width: 100%;

  /* 背景鋪滿不留白 */
  background: url("../../statics/home-background.webp") no-repeat center center;
  background-size: cover; /* 若不想裁切可改 contain */
}
html, body, #q-app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;  /* 防止任何水平捲軸 */
}

.q-layout, .q-page-container, .q-page {
  min-height: 100%;
}

img, svg, video, canvas {
  max-width: 100%;
  display: block;      /* 防止 inline 元素造成的細微縫隙 */
}
/* 在寬度70%、高度70%位置的圖 */
.word-image {
  position: absolute;
  top: 60%;
  left: 70%;
  transform: translate(-50%, -50%);
}
.word-image img {
  width: 18vw;  /* 可依需求調整大小 */
  height: auto;
}
/* 在寬度70%、高度80%位置的圖 */
.word-image2 {
  position: absolute;
  top: 65%;
  left: 70%;
  transform: translate(-50%, -50%);
}
.word-image2 img {
  width: 18vw;  /* 可依需求調整大小 */
  height: auto;
}
</style>

<script>
export default {
  name: 'PageSet',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
