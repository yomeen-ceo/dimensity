<template>
  <q-page>
    <div class="page-content">
      <!-- 當寬度小於 500px，顯示提示 -->
      <div v-if="$q.screen.width <= 800" class="home-bg-small q-pa-none flex flex-center full-width full-height">
        <!-- 中央 Logo -->
        <div class="center-logo-small">
          <img src="../../statics/home_home_logo.webp" alt="Home Logo" />
        </div>
      </div>
      <!-- 當寬度小於 1200px，顯示原本內容 -->
      <div v-else-if="$q.screen.width <= 1200">
        <div v-if="no1">
          <!-- 中央 Logo -->
          <div class="center-logo-1200">
            <img src="../../statics/background-234.svg" alt="Home Logo" />
          </div>
          <!-- 左上角 10% 位置的圖 -->
          <div class="word-image-1200">
            <img src="../../statics/about_h1.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image2-1200">
            <img src="../../statics/about-1_p.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image3-1200">
            <img src="../../statics/page_number_1.svg" alt="Word Image" />
          </div>
          <!-- 黑色方形按鈕 -->
          <div class="black-button2-1200" @click="onBlackButtonClick(2)" />
          <div class="black-button3-1200" @click="onBlackButtonClick(3)" />
          <div class="black-button4-1200" @click="onBlackButtonClick(2)" />
        </div>
        <!-- 你的內容 -->
        <div v-if="no2">
          <!-- 中央 Logo -->
          <div class="center-logo-1200">
            <img src="../../statics/background-234.svg" alt="Home Logo" />
          </div>
          <!-- 左上角 10% 位置的圖 -->
          <div class="word-image-1200">
            <img src="../../statics/about-2_h1.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image2-1200">
            <img src="../../statics/about-2_p.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image4-1200">
            <img src="../../statics/page_number_2.svg" alt="Word Image" />
          </div>
          <!-- 黑色方形按鈕 -->
          <div class="black-button0-1200" @click="onBlackButtonClick(1)" />
          <div class="black-button1-1200" @click="onBlackButtonClick(1)" />
          <div class="black-button3-1200" @click="onBlackButtonClick(3)" />
          <div class="black-button4-1200" @click="onBlackButtonClick(3)" />
        </div>
        <div v-if="no3">
          <!-- 中央 Logo -->
          <div class="center-logo-1200">
            <img src="../../statics/background-234.svg" alt="Home Logo" />
          </div>
          <!-- 左上角 10% 位置的圖 -->
          <div class="word-image-1200">
            <img src="../../statics/about-3_h1.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image2-1200">
            <img src="../../statics/about-3_p.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image5-1200">
            <img src="../../statics/page_number_3.svg" alt="Word Image" />
          </div>
          <!-- 黑色方形按鈕 -->
          <div class="black-button0-1200" @click="onBlackButtonClick(2)" />
          <div class="black-button1-1200" @click="onBlackButtonClick(1)" />
          <div class="black-button2-1200" @click="onBlackButtonClick(2)" />
        </div>
      </div>
      <!-- 當寬度大於 1200px，顯示原本內容 -->
      <div v-else class="home-bg q-pa-none flex flex-center">
        <div v-if="no1">
          <!-- 中央 Logo -->
          <div class="center-logo">
            <img src="../../statics/background-234.svg" alt="Home Logo" />
          </div>
          <!-- 左上角 10% 位置的圖 -->
          <div class="word-image">
            <img src="../../statics/about_h1.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image2">
            <img src="../../statics/about-1_p.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image3">
            <img src="../../statics/page_number_1.svg" alt="Word Image" />
          </div>
          <!-- 黑色方形按鈕 -->
          <div class="black-button2" @click="onBlackButtonClick(2)" />
          <div class="black-button3" @click="onBlackButtonClick(3)" />
          <div class="black-button4" @click="onBlackButtonClick(2)" />
        </div>
        <!-- 你的內容 -->
        <div v-if="no2">
          <!-- 中央 Logo -->
          <div class="center-logo">
            <img src="../../statics/background-234.svg" alt="Home Logo" />
          </div>
          <!-- 左上角 10% 位置的圖 -->
          <div class="word-image">
            <img src="../../statics/about-2_h1.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image2">
            <img src="../../statics/about-2_p.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image4">
            <img src="../../statics/page_number_2.svg" alt="Word Image" />
          </div>
          <!-- 黑色方形按鈕 -->
          <div class="black-button0" @click="onBlackButtonClick(1)" />
          <div class="black-button1" @click="onBlackButtonClick(1)" />
          <div class="black-button3" @click="onBlackButtonClick(3)" />
          <div class="black-button4" @click="onBlackButtonClick(3)" />
        </div>
        <div v-if="no3">
          <!-- 中央 Logo -->
          <div class="center-logo">
            <img src="../../statics/background-234.svg" alt="Home Logo" />
          </div>
          <!-- 左上角 10% 位置的圖 -->
          <div class="word-image">
            <img src="../../statics/about-3_h1.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image2">
            <img src="../../statics/about-3_p.svg" alt="Word Image" />
          </div>
          <!-- 右下角 80% 位置的圖 -->
          <div class="word-image5">
            <img src="../../statics/page_number_3.svg" alt="Word Image" />
          </div>
          <!-- 黑色方形按鈕 -->
          <div class="black-button0" @click="onBlackButtonClick(2)" />
          <div class="black-button1" @click="onBlackButtonClick(1)" />
          <div class="black-button2" @click="onBlackButtonClick(2)" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.page-content {
  position: relative;
  width: 100%;
  height: 100vh; // 撐滿整個螢幕高度
}
.page-content img {
  max-width: 100%;
  height: auto;
  display: block;
}
.center-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%); /* 原本 -50%，改成 -60% 就會往上移 */
}
.center-logo img {
  width: 110vw;
  max-width: 1000px; /* 視需求限制最大寬度 */
  height: auto;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35); /* 柔和陰影 */
  border-radius: 50px; /* 導角，讓白邊不那麼突兀 */
}
.center-logo-small {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -70%); /* 原本 -50%，改成 -60% 就會往上移 */
}
.center-logo-small img {
  width: 37vw;   /* 佔螢幕寬度 10% */
  height: auto;  /* 高度等比例縮放 */
  max-width: none !important;   /* 解除全域 img 限制 */
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
.home-bg-small {
  /* 高度滿版（行動裝置也穩定） */
  min-height: 100dvh;
  height: 100dvh;

  /* 寬度滿版但不造成水平捲軸 */
  width: 100%;

  /* 背景鋪滿不留白 */
  background: url("../../statics/small/home-background.svg") no-repeat center center;
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
  top: 10%;
  left: 5%;
  transform: translate(-50%, -25%);
}
.word-image img {
  width: 12vw;  /* 可依需求調整大小 */
  height: auto;
}
/* 在寬度70%、高度80%位置的圖 */
.word-image2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -63%);
}
.word-image2 img {
  width: 110vw;
  max-width: 1000px; /* 視需求限制最大寬度 */
  height: auto;
}
.word-image3 {
  position: absolute;
  top: 73%;
  left: 50%;
  transform: translate(-50%, -35%);
}
.word-image3 img {
  width: 25vw;
  max-width: 250px; /* 視需求限制最大寬度 */
  height: auto;
}
.word-image4 {
  position: absolute;
  top: 66.8%;
  left: 48.9%;
  transform: translate(-50%, -35%);
}
.word-image4 img {
  width: 25vw;
  max-width: 250px; /* 視需求限制最大寬度 */
  height: auto;
}
.word-image5 {
  position: absolute;
  top: 68.1%;
  left: 47.6%;
  transform: translate(-50%, -35%);
}
.word-image5 img {
  width: 20.9vw;
  max-width: 209px; /* 視需求限制最大寬度 */
  height: auto;
}
.black-button0 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 41.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
.black-button1 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 45.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
.black-button2 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 49.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
.black-button3 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 53.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
.black-button4 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 57.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
.center-logo-1200 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%); /* 原本 -50%，改成 -60% 就會往上移 */
}
.center-logo-1200 img {
  width: 80vw;
  max-width: 800px; /* 視需求限制最大寬度 */
  height: auto;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35); /* 柔和陰影 */
  border-radius: 50px; /* 導角，讓白邊不那麼突兀 */
}
/* 在寬度70%、高度70%位置的圖 */
.word-image-1200 {
  position: absolute;
  top: 10%;
  left: 5%;
  transform: translate(-50%, -25%);
}
.word-image-1200 img {
  width: 12vw;  /* 可依需求調整大小 */
  height: auto;
}
/* 在寬度70%、高度80%位置的圖 */
.word-image2-1200 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -63%);
}
.word-image2-1200 img {
  width: 80vw;
  max-width: 800px; /* 視需求限制最大寬度 */
  height: auto;
}
.word-image3-1200 {
  position: absolute;
  top: 73%;
  left: 50%;
  transform: translate(-50%, -35%);
}
.word-image3-1200 img {
  width: 20vw;
  max-width: 200px; /* 視需求限制最大寬度 */
  height: auto;
}
.word-image4-1200 {
  position: absolute;
  top: 68.3%;
  left: 48.6%;
  transform: translate(-50%, -35%);
}
.word-image4-1200 img {
  width: 20vw;
  max-width: 200px; /* 視需求限制最大寬度 */
  height: auto;
}
.word-image5-1200 {
  position: absolute;
  top: 69.2%;
  left: 47.1%;
  transform: translate(-50%, -35%);
}
.word-image5-1200 img {
  width: 16.9vw;
  max-width: 169px; /* 視需求限制最大寬度 */
  height: auto;
}
.black-button0-1200 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 41.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
.black-button1-1200 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 45.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
.black-button2-1200 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 49.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
.black-button3-1200 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 53.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
.black-button4-1200 {
  position: absolute;
  top: 59%;     /* 和 word-image3 一樣的位置 */
  left: 58.5%;
  transform: translate(-50%, 80px); /* 位於圖片下方 80px，可依需求調整 */
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  text-align: center;
  line-height: 60px; /* 讓文字垂直置中 */
  border-radius: 8px; /* 方形但有點圓角，想要完全方形可改 0 */
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'PageSet',
  data () {
    return {
      no1: true,
      no2: false,
      no3: false
    }
  },
  methods: {
    onBlackButtonClick (val) {
      this.no1 = val === 1
      this.no2 = val === 2
      this.no3 = val === 3
    }
  },
  mounted () {
  }
}
</script>
