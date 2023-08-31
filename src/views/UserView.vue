<template>
    <div>
        <form>
            <tr>
        <th>Kullanıcı Girişi </th>
    </tr>
    <br>
            <fieldset>
                <legend>Email</legend>
                <input type="text" required v-model="Name">
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input type="text" required v-model="LastName">
            </fieldset>
            <br>
            <button id="a">Log in</button>
        </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserView',
    props: {
        msg: String
    }
  }
  </script>
  <style>
  #a{
    float: right;
  }
  form {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(198, 178, 178);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  
  label {
    color: #f1ecec;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #ffffff;
  }
  </style>