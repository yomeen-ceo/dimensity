<template>
  <div>
    <q-layout view="lHh lpr lff">
      <q-footer class="floating-footer q-pa-none">
        <div class="footer-container">
          <button class="footer-btn" @click="showDialog('icon1')">
            <img class="btn-icon" src="../statics/home/button_icon-01.svg" alt="首頁" />
            <span class="btn-label">首頁</span>
          </button>

          <button class="footer-btn" @click="showDialog('icon2')">
            <img class="btn-icon" src="../statics/home/button_icon-02.svg" alt="關於公司" />
            <span class="btn-label">關於<br>公司</span>
          </button>

          <button class="footer-btn" @click="showDialog('icon4')">
            <img class="btn-icon" src="../statics/home/button_icon-03.svg" alt="最新消息" />
            <span class="btn-label">最新<br>消息</span>
          </button>

          <button class="footer-btn" @click="showDialog('icon3')">
            <img class="btn-icon" src="../statics/home/button_icon-04.svg" alt="產品介紹" />
            <span class="btn-label">產品<br>介紹</span>
          </button>
        </div>
        <!-- 放在你的 q-page 裡（建議靠近頁面結尾） -->
        <div class="contact-block">
          <div class="contact-line"></div>

          <div class="contact-text">
            <div class="contact-title">天璣生技科技(股)公司</div>

            <div class="contact-row">
              地址：407台中市西屯區台灣大道三段660號18樓之5
            </div>

            <!-- ✅ 改成 2 欄：左側電話+傳真 / E-MAIL，右側手機 / 統編 -->
            <div class="contact-2col">
              <div class="left-col">
                <div>電話：04-24520458  傳真：04-24520197</div>
                <div>E-MAIL：dimensity@gmail.com</div>
              </div>

              <div class="right-col">
                <div>手機：0919-525653</div>
                <div>統編：00115436</div>
              </div>
            </div>
          </div>
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
:root {
  --brand-c: #009DC3;
  --fs-title: clamp(18px, 1.4vw, 28px);   /* 標題字體 */
  --fs-body:  clamp(12px, 1.0vw, 22px);   /* 內文字體 */
}

.contact-block {
  position: absolute;
  right: 5vw;
  bottom: 1vh;
  display: flex;
  align-items: flex-start; /* ✅ 對齊頂部，與地址齊頭 */
  gap: clamp(8px, 2.9vw, 26px);
  color: var(--brand-c);
  max-width: min(56vw, 720px);
  z-index: 10;
}

/* 包住整段聯絡資訊 */
.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.6;
}

/* 這條線與 contact-info 等高，頂端對齊 */
.contact-line {
  width: clamp(2px, 0.15vw, 4px);
  background-color: var(--brand-c);
  border-radius: 2px;
  height: auto;          /* ✅ 等高 */
  align-self: stretch;   /* ✅ 跟著 flex 父層撐滿 */
  margin-top: 28px;         /* ✅ 與地址齊頭 */
}

.contact-text {
  line-height: 1.25;
}

.contact-title {
  font-size: var(--fs-title);
  font-weight: 700;
  margin-bottom: clamp(4px, .5vw, 8px);
}

.contact-row {
  font-size: var(--fs-body);
  margin-bottom: clamp(4px, .6vw, 10px);
}

/* ✅ 兩欄佈局 */
.contact-2col {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 左寬右窄 */
  gap: clamp(8px, 1vw, 16px);
  font-size: var(--fs-body);
  align-items: start;
}

.left-col,
.right-col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: clamp(4px, 0.4vw, 6px);
}

/* footer 固定底部 */
.floating-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--footer-h);
  display: flex;
  align-items: flex-end;
  z-index: 4000;
  /* 白色 + 透明度 0.85 */
  background: rgba(255, 255, 255, 0.70);

  /* 建議加 backdrop-filter 提升質感（模糊效果） */
  backdrop-filter: blur(8px);
}

/* 背景圖 */
.footer-bg {
  background: url("../statics/Footer.svg") no-repeat center bottom transparent;
  background-size: cover;
}

.footer-container {
  width: 36%; /* 5/12 */
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  gap: clamp(4px, 0.8vw, 12px);
}

.footer-btn {
  position: relative;
  background-color: #00C4DA;   /* 預設藍綠底 */
  overflow: hidden;
  flex: 1;
  aspect-ratio: 1 / 1;
  color: #FFFFFF;
  font-size: clamp(18pt, 3.5vw, 26pt);
  font-weight: 300;
  border: none;
  border-top-left-radius: 68px;
  border-top-right-radius: 68px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease, background-color 0.2s ease;
  white-space: pre-line;
  line-height: 1.2;
  letter-spacing: 0.2em;
  padding: clamp(4px, 0.8vw, 10px);
  margin: 0 clamp(1px, 0.8vw, 1px);
  text-align: center;
}
.footer-btn .btn-icon,
.footer-btn .btn-label {
  position: absolute;
  inset: 0;                     /* top/right/bottom/left: 0 */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .18s ease, transform .18s ease, color .18s ease, background-color .18s ease;
}
/* 圖示初始可見；尺寸可按需調整（相對按鈕寬度） */
.footer-btn .btn-icon {
  opacity: 1;
  transform: scale(1);
  width: 62%;                   /* ✅ 圖示大小：可調 55~70% */
  height: 62%;
  object-fit: contain;
  margin: auto;
}

/* 文字初始隱藏（保留你原先的字級、行距、字距設定） */
.footer-btn .btn-label {
  opacity: 0;
  color: #FFFFFF;
  text-align: center;
  white-space: pre-line;
  line-height: 1.2;
  letter-spacing: 0.2em;
  /* 如果之前有視覺右移，可保留；沒有就拿掉 */
  transform: translateX(4%);
}

/* Hover / Active / 鍵盤聚焦狀態：切換為文字 + 金色底 */
.footer-btn:hover,
.footer-btn:active,
.footer-btn:focus-visible {
  background-color: #D7B21D;    /* ✅ 你的金色 */
}

.footer-btn:hover .btn-icon,
.footer-btn:active .btn-icon,
.footer-btn:focus-visible .btn-icon {
  opacity: 0;
  transform: scale(0.92);
}

.footer-btn:hover .btn-label,
.footer-btn:active .btn-label,
.footer-btn:focus-visible .btn-label {
  opacity: 1;
  transform: translateX(4%);    /* 與上面保持一致 */
}

.footer-btn span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  white-space: pre-line;
  line-height: 1.2;
  letter-spacing: 0.2em;

  /* ✅ 字體大小會隨螢幕自適應（最小18pt，常用約3.5vw，最大26pt） */
  font-size: clamp(10pt, 2vw, 24pt);

  /* ✅ 視覺微調向右移，解決中文字偏左問題 */
  transform: translateX(4%);
}

.footer-btn:hover {
  filter: brightness(1.08);
  transform: translateY(-3px);
}

.footer-btn:active {
  transform: translateY(1px);
}

.q-layout .q-page-container {
  padding-bottom: 0 !important;  /* 移除 Quasar 自動留白 */
}

/* 小螢幕下自動滿版 */
@media (max-width: 600px) {
  .contact-2col {
    grid-template-columns: 1fr;
  }
  .footer-container {
    width: 100%;
  }
  .footer-btn span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    white-space: pre-line;
    line-height: 1.2;
    letter-spacing: 0.2em;

    /* ✅ 字體大小會隨螢幕自適應（最小18pt，常用約3.5vw，最大26pt） */
    font-size: clamp(18pt, 2.5vw, 30pt);

    /* ✅ 視覺微調向右移，解決中文字偏左問題 */
    transform: translateX(4%);
  }
  .contact-block {
    display: none;
  }
}
</style>

<script>
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
        // this.$router.push({
        //   name: 'products'
        // })
        window.location.href = 'https://www.qunfukang.com.tw/'
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
  }
}
</script>
