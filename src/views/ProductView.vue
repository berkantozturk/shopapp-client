<template>
    <div>
        <form>
            <tr>
        <th>Ürün Ekleme Alanı </th>
    </tr>
    <br>
            <fieldset>
                <legend>Type</legend>
                <input type="text" required v-model="type">
            </fieldset>
            <fieldset>
                <legend>Category</legend>
                <input type="text" required v-model="category">
            </fieldset>
            <fieldset>
                <legend>Size</legend>
                <input type="text" required v-model="size">
            </fieldset>
            <fieldset>
                <legend>Price</legend>
                <input type="number" required v-model="price">
            </fieldset>
            <fieldset>
                <legend>Piece</legend>
                <input type="number" required v-model="piece">
            </fieldset>
            <button id="b" @click.prevent="submit">Save</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductView",
  data() {
    return {
      type: "",
      category: "",
      size: "",
      price: "",
      piece: "",
    };
  },
  created() {
    //this.postData()
  },
  methods: {
    getFormData() {
      axios.get('http://localhost:3000',)
        .then((response) => {
          console.log(response);
          this.people = response.data
        })
        .catch((error) => {
          console.error(error);
        })
    },
    submit() {
      const formData = {
        type: this.type,
        category: this.category,
        size: this.size,
        piece: this.piece,
        price: this.price
      };
      axios.post("http://localhost:3000/createProduct", formData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          })
    },
    deleteData(id) {
      {
        axios.delete("http://localhost:3000" + id)
          .then(() => {
            this.getFormData();
          })
      }
    },
   
  }
}
</script>
<style>
#b{
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
    color: #171414;
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