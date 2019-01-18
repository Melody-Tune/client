Vue.component('share', {
  template:
  `
  <div>
    <a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=' + 'song.url' + '&display=popup&ref=plugin&src=share_button'"> 
      Share<i class="material-icons prefix">share</i>
    </a>
  </div>
  `,
  props: [],
  methods: {

  }
})