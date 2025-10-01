<template>
  <q-page class="q-pa-none flex flex-center about-page">
    <div class="about-container">

      <!-- 分段一 -->
      <section class="about-section">
        <div class="about-title">
          <img src="../../statics/contact/about-01.svg" alt="關於公司" />
        </div>
        <div class="about-content">
          <p>
            創辦「旭能生技科技股份有限公司」、「福展生物科技有限公司」、「群寶基因科技有限公司」與「天璣生技科技股份有限公司」成立企業集團，經營保健食品、醫療器材⋯等相關產業，員工包含醫檢師、保健食品專家，並匯集國內外傑出學者專家，並匯集國內外傑出生物醫學、化工材料、機械工程碩博士及多個國際知名研究機構…等專業人才合作，開發突破性新技術與先進研發設備。
          </p>
          <p>
            集團旗下「福展生物科技有限公司」健檢中心平均每年健檢超過12萬人次，由此健康大數據得知各種慢性病、癌症及新冠狀病毒，正快速侵蝕著人類，而我們致力於各種黑科技發明及知識分享給民眾！
          </p>
          <p>
            集團科研團隊歷經十餘年之專研，自2008年起至2025年陸續和美國航太工程團隊、台灣大學食品研究所、台北醫學大學生藥研究所、陽明交通大學、浙江工業大學⋯等，並技轉研發商品獲得許多專利製程，尤其是運用航太高科技溶氧技術，突破氣、液不相溶之物理極限，成功的將氧離子包覆於水分子中，使「氧」不易跑掉，開發出世界最佳的「高登氧飲用水」並榮獲台灣、日本、大陸專利及全球首創航太高科技的高濃度溶氧水，世界公認具高能量的台灣埔里好水結合，讓我們隨時都可以喝到甘甜、清純的高溶氧飲用水，滿足我們運動、美麗、活力與健康的需求！
          </p>
        </div>
      </section>

      <!-- 分段二 -->
      <section class="about-section">
        <div class="about-title">
          <img src="../../statics/contact/about-02.svg" alt="企業願景" />
        </div>
        <div class="about-content">
          <p>
            以「健康、美麗與幸福」為品牌核心價值 （OXYGOLDEN），我們的價值宣言：「精準科技，平衡健康」，同時象徵著讓世界變得更美好、更先進、更有意義，成為引領全球自然健康革命的先驅，透過創新與利他精神，啟動幸福的美好的未來人生。
          </p>
          <p>
            透過精準科技與智能大數據分析，提供個人健康的評估，促進健康生活方式的普及與發展，並跨領域促進醫療、科技、營養⋯等等的體驗，並讓更多的專家與學者參與合作，共同探討創新改善方案，並以「精準科技大健康」為人類找回美好的樂活人生為宗旨。
          </p>
        </div>
      </section>

      <!-- 分段三 -->
      <section class="about-section">
        <div class="about-title">
          <img src="../../statics/contact/about-03.svg" alt="核心理念" />
        </div>
        <div class="about-content">
          <p>1. 精準科學找回自然的平衡健康。</p>
          <p>2. 以利他精神創造幸福的未來。</p>
          <p>3. 翻轉思維，回歸本質的健康。</p>
          <p>4. 重啟生命能量，重建地球共生系統。</p>
          <p>5. 創新改變，為人類開啟希望。</p>
        </div>
      </section>

    </div>
  </q-page>
</template>

<style lang="scss" scoped>
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
  align-items: center; /* ✅ 讓所有 section 水平對齊置中 */
}

/* 標題圖 */
.about-title {
  align-self: flex-start; /* ✅ 讓標題不受 container 的左右 auto 置中影響 */
  margin-left: -4vw;      /* ✅ 把 padding 推回去，讓它貼齊螢幕左邊 */
}

.about-title img {
  height: 90px;
  width: auto;
  margin-bottom: 24px;
  display: block;
}

/* 每一段內容 */
.about-content {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 63.5px;
  padding: 50px 80px;
  width: 80%;          /* ✅ 改用百分比寬度，所有框保持一致 */
  max-width: 1000px;   /* ✅ 上限 */
  min-width: 600px;    /* ✅ 下限（避免太窄） */
  margin: 0 auto;
  font-size: 16pt;
  color: #18254C;
  line-height: 1.7;
  box-shadow: 0 0 30px rgba(37, 186, 186, 0.5); /* 陰影羽化 */
  backdrop-filter: blur(6px);
}

.about-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* ✅ 保證標題和文字框置中 */
}

/* 響應式：小螢幕適配 */
@media (max-width: 600px) {
  .about-container {
    padding: 20px;
    gap: 3vh; /* ✅ 間距縮小 */
  }

  .about-title img {
    height: clamp(50px, 12vw, 80px); /* ✅ 標題縮小，但不會太小 */
    margin-bottom: 12px;
  }

  .about-content {
    padding: 20px 24px;   /* ✅ 內距縮小 */
    width: 90%;           /* ✅ 小螢幕時靠百分比 */
    max-width: 500px;     /* ✅ 限制不要超過 500px */
    min-width: auto;      /* ✅ 移除下限，避免太寬 */
    font-size: clamp(12px, 3.5vw, 16px); /* ✅ 字體自適應 */
    border-radius: 30px;  /* ✅ 導角縮小 */
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
