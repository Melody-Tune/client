Vue.component('upload-music', {
    data () {
        return {
            title: '',
            artist: '',
            url: '',
            loading: false
        }
    },
    template: `
    <div class="col s12 m6 l6">
      <div class="row">
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Upload Music</span>
                <form class="col s6 m6 l6">
                  <div class="row">
                    <div class="input-field col s12 m6 l6">
                      <input type="text" class="validate" v-model="artist">
                      <label for="artist">Artist</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12 m6 l6">
                      <input type="text" class="validate" v-model="title">
                      <label for="title">Title</label>
                    </div>
                  </div>
                  <div class="row">
                    <form action="#">
                      <div class="file-field input-field">
                        <div class="btn">
                          <span>File</span>
                          <input type="file" @change="uploadMusic">
                        </div>
                        <div class="file-path-wrapper">
                          <input class="file-path validate" type="text">
                        </div>
                      </div>
                    </form>
                  </div>
                </form>
              </div>
              <div class="row">
                <div class="col s12 m12 l12 center">
                    <a href="#!" @click.prevent="addMusic" class="modal-close waves-effect waves-green blue-grey lighten-1 btn center">UPLOAD</a>
                  <div class="preloader-wrapper big active" v-show="loading">
                    <div class="spinner-layer spinner-red-only">
                      <div class="circle-clipper left">
                        <div class="circle"></div>
                      </div>
                      <div class="gap-patch">
                        <div class="circle"></div>
                      </div>
                      <div class="circle-clipper right">
                        <div class="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
       
    `,
    methods: {
        addMusic: function () {
            this.loading = true
            let formData = new FormData()
            formData.append('title', this.title)
            formData.append('artist', this.artist)
            formData.append('url', this.url)
            axios({
                url: `http://localhost:3000/music`,
                data: formData,
                method: `POST`,
                headers: {
                    "access-token": localStorage.getItem('token')
                },
            })
            .then(({ data }) => {
                this.loading = false
                let music = data.response
                this.$emit('newmusic', music)
            })
            .catch(err => {
                console.log(err)
            })
        },
        uploadMusic: function (url) {
            this.url = url.target.files[0]
        },
    }
})