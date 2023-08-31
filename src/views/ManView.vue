<template>
  <div class="Man">
    <div class="image-row">
      <div class="image-column">
        <img alt="Kartal" src="../assets/man.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/man2.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/man3.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/man4.jpg" height="300" width="300">
      </div>
      <div class="image-column">
        <img alt="Kartal" src="../assets/man5.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/man6.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/man7.jpg" height="300" width="300"> <br>
        <img alt="Kartal" src="../assets/man8.jpg" height="300" width="300">
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
  name: 'ManView',
}
</script>
  