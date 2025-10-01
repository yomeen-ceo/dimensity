<template>
  <q-page class="q-pa-none flex flex-center">
    <div class="page-content">
      <!-- 當寬度小於 500px，顯示提示 -->
      <div v-if="$q.screen.width <= 800" class="flex flex-center full-width full-height">
        <div class="text-h6 text-center text-white bg-black q-pa-lg rounded-borders">
          📱 請使用電腦或橫向裝置觀看
        </div>
      </div>
      <!-- 左上角 10% 位置的圖 -->
      <div v-else  class="home-bg">
        <img src="../../statics/product.svg" alt="Background" class="bg-img">
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
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
  background-size: contain; /* 若不想裁切可改 contain 若想裁切可改 cover */
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
  left: 5.05%;
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
      if (val === 1) {
        this.no1 = true
        this.no2 = false
        this.no3 = false
      } else if (val === 2) {
        this.no1 = false
        this.no2 = true
        this.no3 = false
      } else if (val === 3) {
        this.no1 = false
        this.no2 = false
        this.no3 = true
      }
    }
  },
  mounted () {
  }
}
</script>
