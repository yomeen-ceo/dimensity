<template>
  <q-page class="q-pa-none flex flex-center about-page">
    <div class="about-container">

      <!-- 分段一 -->
      <section class="about-section">
        <div class="about-title">
          <img src="../../statics/news/new_h1.png" alt="最新消息" />
        </div>

        <div class="about-content">

          <!-- ✅ 新增：DM 上方的資訊列 -->
          <div class="dm-header">
            <h2 class="dm-title">水廠知性之旅</h2>

            <div class="dm-meta">
              <div class="dm-meta-item">
                <img src="../../statics/news/new_icon_02.svg" alt="活動類圖示" class="meta-icon" />
                <span>活動類</span>
              </div>

              <div class="dm-meta-item">
                <img src="../../statics/news/new_icon_03.svg" alt="日期圖示" class="meta-icon" />
                <span>2025-08-12</span>
              </div>
            </div>
          </div>

          <!-- ✅ 包住 DM 圖片 -->
          <div class="dm-wrapper">
            <img src="../../statics/news/DM.jpg" alt="活動DM" class="dm-image" />
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.dm-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 15px;
}

.dm-wrapper::before {
  content: "";
  position: absolute;
  top: -30px; /* ✅ 控制線條距離圖片 */
  left: 50%;
  transform: translateX(-50%);
  width: 90%; /* ✅ 可依需求調整線條寬度 */
  height: 1px;
  background: #25BABA;
  border-radius: 2px;
  box-shadow: 0 0 12px rgba(37, 186, 186, 0.6);
}

.dm-image {
  max-width: 80%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
.about-page {
  background: url("../../statics/contact/about-background_about.svg") no-repeat center top;
  background-size: cover;
  min-height: 100vh;
}

.about-container {
  width: 100%;
  max-width: 1555px;
  padding: 4vh 4vw;
  display: flex;
  flex-direction: column;
  gap: 6vh;
  align-items: center;
}

/* 標題圖 */
.about-title {
  position: relative;
  left: calc(-4vw);      /* ✅ 把 container 的 padding 推回去，貼齊螢幕左側 */
  margin-left: 0;        /* ✅ 移除原本的 margin */
  width: auto;
}

.about-title img {
  height: 90px;
  width: auto;
  margin-bottom: 34px;
  display: block;
}

.about-content {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  padding: 10px 100px;       /* ✅ 內距保留 */
  width: 80%;                /* ✅ 改用 70%，讓白框與螢幕左右距離更大 */
  max-width: 1500px;          /* ✅ 限制最大寬度，讓它不會太寬 */
  margin: 50px auto;         /* ✅ 修正：auto 可讓它水平置中 */
  box-shadow: 0 0 30px rgba(37, 186, 186, 0.4);
  backdrop-filter: blur(6px);
  text-align: center;
}

.dm-header {
  text-align: center;
  margin-bottom: 32px;

  .dm-title {
    font-size: clamp(28px, 3vw, 48px); /* ✅ 標題自適應 */
    font-weight: 700;
    color: #18254C;
    margin-bottom: 16px;
  }

  .dm-meta {
    display: flex;
    justify-content: center;
    gap: 40px; /* ✅ 兩組資訊之間的間距 */
    font-size: clamp(16px, 2vw, 24px);
    color: #333;
  }

  .dm-meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .meta-icon {
    width: clamp(20px, 2.5vw, 32px);
    height: auto;
  }
}
.dm-image {
  display: block;
  margin: 0 auto;              /* ✅ 圖片水平置中 */
  max-width: 80%;              /* ✅ 限制最大寬度為白色底框的 80%（可調整） */
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

/* ✅ 小螢幕自適應 */
@media (max-width: 600px) {
  .about-title img {
    height: 60px;              /* ✅ 標題縮小 */
    margin-bottom: 20px;
  }

  .about-content {
    width: 90%;               /* ✅ 白色底框縮小、左右距離變大 */
    padding: 20px 30px;       /* ✅ 內部空間縮小 */
    border-radius: 20px;
    margin: 30px auto;
  }

  .dm-header {
    margin-bottom: 20px;

    .dm-title {
      font-size: 22px;         /* ✅ 標題縮小 */
      margin-bottom: 12px;
    }

    .dm-meta {
      flex-direction: column; /* ✅ 垂直排列 */
      gap: 10px;
      font-size: 16px;
    }

    .dm-meta-item {
      justify-content: center;
    }

    .meta-icon {
      width: 24px;
    }
  }

  .dm-wrapper::before {
    width: 80%;              /* ✅ 線條也縮短 */
    top: -20px;
  }

  .dm-image {
    max-width: 95%;          /* ✅ 圖片寬度縮小 */
    border-radius: 12px;
  }
}
</style>

<script>
export default {
  name: 'PageContact',
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
