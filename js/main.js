var app = new Vue({
  el: `#app`,
  data: {
    message: 'hello from vue',
    host: "http://localhost:3000",
    localStorageToken: localStorage.getItem("token"),
  },
  methods: {
    logout() {
      localStorage.clear()
      this.localStorageToken = ""
    },
  },
  mounted(){
  },
  computed: {
    
  }
})