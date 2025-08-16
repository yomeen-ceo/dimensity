<template>
  <q-page class="home-bg q-pa-none flex flex-center">
    <div class="page-content">
      <!-- 左上角 10% 位置的圖 -->
      <div class="word-image">
        <img src="../../statics/about_h1.svg" alt="Word Image" />
      </div>
      <div>
        <q-card class="my-card">
          <q-card-section class="word-image2">
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-actions align="around">
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
/* 在左邊邊距5%、高度10%位置的圖 */
.word-image {
  position: absolute;
  top: 10%;
  left: 5%;
  transform: translate(-50%, -25%);
  z-index: 3001;
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
.my-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%); /* 原本 -50%，改成 -60% 就會往上移 */
  width: 110vw;
  max-width: 1000px; /* 視需求限制最大寬度 */
  height: 35vw;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35); /* 柔和陰影 */
  border-radius: 50px; /* 導角，讓白邊不那麼突兀 */
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
