<template>
  <div class="contact">
    <div class="iamge-column">
      <img alt="eagle" src="../assets/eagle.png">
    </div>
    <p> HAYATIN İÇİNDE BEŞİKTAŞ!
      2001 yılında büyük Beşiktaş taraftarımızı lisanslı ürünlerimizle buluşturmak ve kulübümüze katma değer kazandırmak
      için BJKSTORE adıyla kurulmuştur.
      2007 yılında Yönetim Kurulu’muzun aldığı kararla ismi ‘KARTAL YUVASI’ olarak değiştirilmiştir.
      Türk Dil Kurumu, bu isim değişikliği sonrasında Türk diline yaptığı destekten dolayı kulübümüze "TDK Onur" ödülü
      vermiştir.

      2011 yılında orijinal ve lisanslı Beşiktaş ürünlerini gerek yurt içi gerekse yurt dışındaki taraflarımıza, 7/24
      ulaştırabilmek amacıyla online alışveriş sitemiz kartalyuvasi.com.tr açılmıştır. Avrupalı kara kartallar için de
      kartalyuvasi.eu sitemiz bulunmaktadır. Telefon aracılığı ile ürün satışımız yoktur.
    </p>
    <div id="resim">
      <div class="image-row">
        <img alt="Instagram" src="../assets/ig.png" height="75" width="75" style="margin-right: 0px;">
        <h5>@besiktasjk</h5>
      </div>

      <div class="image-row">
        <img alt="X" src="../assets/x.jpg" height="75" width="75" style="margin-right: 0px;">
        <h5>@besiktasjk</h5>
      </div>

      <div class="image-row">
        <img alt="Youtube" src="../assets/youtube.jpg" height="120" width="120" style="margin-right: 0px;">
        <h5>@besiktasjk</h5>
      </div>

      <div class="image-row">
        <img alt="service" src="../assets/service.png" height="110" width="110" style="margin-left: 50px;">
        <h5>Müşteri Hizmetleri İletişim: 0850 399 1903</h5>
        <h5>Çalışma Saatleri: Hafta içi 09:00-18:00</h5>
      </div>
    </div>
  </div>
</template>
<style>
#resim {
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
}

.image-row {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>
<script>
export default {
  name: 'ContactView',
}
</script>
