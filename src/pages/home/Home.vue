<template>
  <q-page>
    <div class="page-content">
      <!-- 當寬度小於 500px，顯示提示 -->
      <div v-if="$q.screen.width <= 800 && $q.screen.width > 0" class="home-bg-small q-pa-none flex flex-center full-width full-height">
        <!-- 中央 Logo -->
        <div class="center-logo-small">
          <img src="../../statics/home_home_logo.webp" alt="Home Logo" />
        </div>
        <!-- 右下角 70% 位置的圖 -->
        <div class="word-image-small">
          <img src="../../statics/home_img_word_1.webp" alt="Word Image" />
        </div>
        <!-- 右下角 80% 位置的圖 -->
        <div class="word-image2-small">
          <img src="../../statics/home_img_word_2.webp" alt="Word Image" />
        </div>
        <!-- 右下角 80% 位置的圖 -->
        <!-- <div class="word-image3-small">
          <img src="../../statics/home_button_about.webp" alt="Word Image" />
        </div> -->
      </div>
      <!-- 當寬度大於 1200px，顯示原本內容 -->
      <div v-else class="home-bg q-pa-none flex flex-center">
        <!-- 中央 Logo -->
        <div class="center-logo">
          <img src="../../statics/home_home_logo.webp" alt="Home Logo" />
        </div>
        <!-- 右下角 70% 位置的圖 -->
        <div class="word-image fade-up">
          <img src="../../statics/home_img_word_1.webp" alt="Word Image" />
        </div>
        <!-- 右下角 80% 位置的圖 -->
        <div class="word-image2 fade-up delay-1">
          <img src="../../statics/home_img_word_2.webp" alt="Word Image" />
        </div>
      </div>
      <!-- 你的內容 -->
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
/* === 淡入向上動畫 === */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translate(-50%, -40%); /* 稍微往下 */
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%); /* 回到原本位置 */
  }
}

.fade-up {
  opacity: 0;
  animation: fadeUp 3s ease-out forwards;
}

/* 第二張圖可以用延遲來讓它依序出現 */
.fade-up.delay-1 {
  animation-delay: 0.8s;
}

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
.center-logo-small {
  position: absolute;
  top: 29%;
  left: 50%;
  transform: translate(-50%, -70%); /* 原本 -50%，改成 -60% 就會往上移 */
}
.center-logo-small img {
  width: 60vw;   /* 佔螢幕寬度 10% */
  height: auto;  /* 高度等比例縮放 */
  max-width: none !important;   /* 解除全域 img 限制 */
}
.home-bg {
  /* 高度滿版（行動裝置也穩定） */
  min-height: 100dvh;
  height: 100dvh;
  /* 寬度滿版但不造成水平捲軸 */
  width: 100%;

  /* 背景鋪滿不留白 */
  background: url("../../statics/home-background.svg") no-repeat center center;
  background-size: cover; /* 若不想裁切可改 contain */
}
.home-bg-small {
  /* 高度滿版（行動裝置也穩定） */
  min-height: 100dvh;
  height: 100dvh;

  /* 寬度滿版但不造成水平捲軸 */
  width: 100%;

  /* 背景鋪滿不留白 */
  background: url("../../statics/home-background.svg") no-repeat center center;
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
/* 在寬度70%、高度70%位置的圖 */
.word-image-small {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.word-image-small img {
  width: 55vw;  /* 可依需求調整大小 */
  height: auto;
  max-width: none !important;   /* 解除全域 img 限制 */
}
/* 在寬度70%、高度80%位置的圖 */
.word-image2-small {
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.word-image2-small img {
  width: 55vw;  /* 可依需求調整大小 */
  height: auto;
  max-width: none !important;   /* 解除全域 img 限制 */
}
/* 在寬度70%、高度80%位置的圖 */
.word-image3-small {
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.word-image3-small img {
  width: 95vw;  /* 可依需求調整大小 */
  height: auto;
  max-width: none !important;   /* 解除全域 img 限制 */
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
