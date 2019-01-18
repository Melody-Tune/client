var url = "http://localhost:3000"

Vue.component('get-lyric', {
  template: `
  <div class="col s12 m12 l12">
    <div class="row">
        <div class="card blue-grey darken-1" style="margin-left:10px;">
            <div class="card-content white-text">
              <span class="card-title">Song Title</span>
              <p>By: Artist</p>
              <button v-on:click.prevent="triggerGetLyric">get lyric</button>
            </div>
          </div>
    </div>
  </div>
  `,
  data: function(){
    return{
      artist: "slipknot",
      title: "duality"
    }
  },
  methods: {
    triggerGetLyric: function () {
      this.$emit('get-lyrics')
    }
  }
})


var app = new Vue({
  el: `#app`,
  data: {
    message: 'hello from vue',
    localStorageToken: localStorage.getItem("token"),
    artist: "slipknot",
    title: "duality",
    playlists: []
  },
  created () {
    this.getPlaylist()
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
    },
    getPlaylist: function () {
      axios({
          url: `http://localhost:3000/music/playlist`,
          headers: {
              'access-token': localStorage.getItem('token')
          }
      })
      .then(({ data }) => {
          this.playlists = data
      })
      .catch(err => {
          console.log(err)
      })
    },
    getMusic: function (val) {
      this.playlists.push(val)
    }
  },
  mounted(){
  },
  computed: {}
})
    
