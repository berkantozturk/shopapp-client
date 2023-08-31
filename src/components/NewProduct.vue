<script>

// import axios from "axios";
export default {
  data() {
    return {
      type: '',
      category: '',
      size: '',
      piece: '',
      price: '',
      id: null,
      people: []
    };
  },
  created() {
    this.getFormData();

  },
  methods: {
   
  }
}
</script>