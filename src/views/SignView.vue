<template>
  <div>
    <form>
      <tr>
        <th>Kayıt Olma Alanı </th>
      </tr>
      <br>
      <fieldset>
        <legend>Name</legend>
        <input type="text" required v-model="Name">
      </fieldset>
      <fieldset>
        <legend>LastName</legend>
        <input type="text" required v-model="LastName">
      </fieldset>
      <fieldset>
        <legend>Email</legend>
        <input type="text" required v-model="Email">
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input type="text" required v-model="Password">
      </fieldset>
      <fieldset>
        <legend>Number</legend>
        <input type="number" required v-model="Number">
      </fieldset>
      <br>
      <div>
        <button @click.prevent="postData" id="a">Submit</button>
        <router-link to="/UserView" id="b">Already have an account?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignView",
  data() {
    return {
      Name: "",
      LastName: "",
      Email: "",
      Password: "",
      Number: "",
    };
  },
  created() {
    this.postData();
  },
  methods: {
    postData() {
      const data = {
        Name: this.Name,
        LastName: this.LastName,
        Email: this.Email,
        Password: this.Password,
        Number: this.Number,
      };

      axios.post("http://localhost:3000/sign", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log("Data successfully posted:", response.data);
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    },

  }
}
</script>
<style>
#a {
  float: right;
  color: blue;
}

#b {
  color: red;
  ;
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
  color: #a92121;
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
  color: #000000;
}
</style>