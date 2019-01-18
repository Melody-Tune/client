Vue.component('playlist', {
    data () {
        return {
            playlists: []
        }
    },
    props: ['music'],
    template: `
    <div class="col s12 m6 l6">
    <div class="row center">
      <div class="card blue-grey darken-1" style="margin-left:10px;">
        <div class="card-content white-text">
          <span class="card-title">Playlist</span>
          <p>{{music.artist}}</p>
          <p>{{music.title}}</p>
          <audio controls>
            <source src="" type="audio/mpeg">
          </audio>
        </div>
        <div class="card-action">
          <a href="#">Get Lyrics<i class="material-icons prefix">music_note</i></a>
          <share></share>
        </div>
      </div>
    </div>
    </div>
    `,
    methods: {
        getPlaylist: function () {
            axios({
                url: `http://localhost:3000/music/playlist`,
                headers: {
                    'access-token': localStorage.getItem('token')
                }
            })
            .then(({ data }) => {
                console.log(this.music)
                
                this.playlists = data
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})