Vue.component('register', {
  template:
  `
  <div>
    <div id="modal1" class="modal modal-fixed-footer">
      <div class="modal-content">
        <div class="row">
          <form class="col s12 m12 l12">
            <h3>Login</h3>
            <div class="row">
              <div class="input-field col m12 l12">
                <i class="material-icons prefix">mail</i>
                <input id="icon_prefix" type="text" class="validate" v-model="inputRegister.email">
                <label for="icon_prefix">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 m12 l12">
                <i class="material-icons prefix">lock</i>
                <input id="icon_telephone" type="tel" class="validate" v-model="inputRegister.password">
                <label for="icon_telephone">Password</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="modal-footer blue-grey darken-4">
        <a href="#!" class="modal-close waves-effect waves-green blue-grey lighten-1 btn">Register</a>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      inputRegister: {
        name: "",
        email: "",
        password: ""
      },
    }
  },
  props: [],
  methods: {
    register() {
      axios({
        method: "POST",
        url: `/users/register`,
        data: {
          email: this.inputRegister.email,
          password: this.inputRegister.password
        }
      })
      .then(response => {
        this.inputRegister.email = ""
        this.inputRegister.password = ""
      })
      .catch(err => {
        console.log(err)
      })
    },
  }
})