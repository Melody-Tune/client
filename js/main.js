var url = "http://localhost:3000"

Vue.component('get-lyric', {
  props: ['thislyric', 'thisartist', 'thistitle'],
  template: `
  <div class="col s12 m12 l12">
    <div class="row">
        <div class="card blue-grey darken-1" style="margin-left:10px;">
            <div class="card-content white-text">
              <span class="card-title">{{thistitle}}</span>
              <p>{{thisartist}}</p>
              <div v-html= "thislyric"><p></p></div>
            </div>
          </div>
    </div>
  </div>
  `,
  data: function(){
    return{
      artist: "",
      title: ""
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
    artist: "",
    title: "",
    playlists: [],
    lyric: "",
    music: {}
  },
  created () {
    this.getPlaylist()
  },
  methods: {
    logout() {
      localStorage.clear()
      this.localStorageToken = ""
    },
    getLyric: function(artist, title){

      let body = {
        artist: artist,
        title: title
      }
      axios
        .post(
          `${url}/music/lyric`,
          body
        )
        .then(response => {
          this.artist = artist
          this.title = title
          this.lyric = response.data.data
   
          
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
      this.music = val
      this.playlists.push(val)
    }
  },
  mounted(){
  },
  computed: {}
})
    
