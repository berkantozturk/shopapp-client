<template>
  <div class="Man">
    <div class="image-row">
      <div class="image-column">
        <img alt="Kartal" src="../assets/kid.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/kid2.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/kid3.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/kid4.jpg" height="300" width="300">
      </div>
      <div class="image-column">
        <img alt="Kartal" src="../assets/kid5.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/kid6.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/kid7.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/kid8.jpg" height="300" width="300">
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
  name: 'KidView',
}
</script>
    