var app = new Vue({
  el: `#app`,
  data: {
    message: 'hello from vue',
    host: "http://localhost:3000",
    localStorageToken: localStorage.getItem("token"),
    artist: "slipknot",
    title: "duality"
  },
  methods: {
    logout() {
      localStorage.clear()
      this.localStorageToken = ""
    },
    getLyric: function(){
      console.log('masuk')
      let body = {
        artist: this.artist,
        title: this.title
      }
      console.log(body)
      axios
        .post(
          `${url}/music/lyric`,
          body
        )
        .then(response => {
          console.log(response)
          
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted(){
  },
  computed: {}
})
    
