<template>
  <div class="Women">
    <div class="image-row">
      <div class="image-column">
        <img alt="Kartal" src="../assets/women.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/women2.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/women3.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/women4.jpg" height="300" width="300">
      </div>
      <div class="image-column">
        <img alt="Kartal" src="../assets/women5.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/women6.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/women7.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/women8.jpg" height="300" width="300">
      </div>
    </div>
  </div>
</template>
<style>
.image-row {
  display: flex;
  flex-direction: column;
}

.image-row img {
  margin-right: 50px;
}

.image-column {
  display: flex;
  flex-direction: row;
  margin: 80px;
}
</style>
<script>


export default {
  name: 'WomenView',

}
</script>
  