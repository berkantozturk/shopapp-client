<template>
    <nav class="navbar">
      <br>
      <router-link to="/">Anasayfa</router-link> |
      <router-link to="/man">Erkek</router-link> |
      <router-link to="/women">Kadın</router-link> |
      <router-link to="/kid">Çocuk</router-link> |
      <router-link to="/contact">İletişim</router-link> |
      <router-link to="/product">Ürün Ekle</router-link> |
      <router-link to="/sign">Giriş Yap</router-link> 
      <br>
    </nav>
    <router-view />
  </template>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #16181a;
  }
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #0b0c0d;
  }
  
  nav a.router-link-exact-active {
    color: #0c0e0d;
  }
  </style>
  