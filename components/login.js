Vue.component('login', {
  template:
  `
  <div>
    <div id="modal2" class="modal modal-fixed-footer">
      <div class="modal-content">
        <div class="row">
          <form class="col s12 m12 l12">
            <h3>Login</h3>
            <div class="row">
              <div class="input-field col m12 l12">
                <i class="material-icons prefix">mail</i>
                <input id="icon_prefix" type="text" class="validate" v-model="inputLogin.email">
                <label for="icon_prefix">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m12 l12">
                <i class="material-icons prefix">lock</i>
                <input id="icon_telephone" type="password" class="validate" v-model="inputLogin.password">
                <label for="icon_telephone">Password</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="modal-footer blue-grey darken-4">
        <a href="#!" class="modal-close waves-effect waves-green blue-grey lighten-1 btn" @click.prevent="login()">Login</a>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      inputLogin: {
        email: "",
        password: ""
      },
      token: ""
    }
  },
  props: [],
  methods: {
    login(){            
      axios({
        method: "POST",
        url: `http://localhost:3000/users/login`,
        data: {
          email: this.inputLogin.email,
          password: this.inputLogin.password
        }
      })
      .then(response => {
        localStorage.setItem("token", response.data.access_token)
        this.token = response.data
        this.$emit("resettoken", this.token)
        this.inputLogin.email = ""
        this.inputLogin.password = ""
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})