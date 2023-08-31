<template>
  <details-home></details-home>
</template>
  
<script>
//import NewUser from './components/NewUser.vue'
//import NewProduct from './components/NewProduct.vue';
import DetailsHome from './components/DetailsHome.vue';

export default {
  name: "App",
  components: {
 //"new-user": NewUser,
   // "new-product": NewProduct,
    "details-home":DetailsHome
  },
};
</script>