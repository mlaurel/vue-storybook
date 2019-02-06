export default {
  name: 'my-button',

  data () {
    return {
      buttonStyles: {
        border: '1px solid #000',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        color: 'red',
        cursor: 'pointer',
        fontSize: 15,
        padding: '3px 10px',
        margin: 10
      }
    }
  },

  template: `
    <button :style="buttonStyles" @click="onClick">
      <slot></slot>
    </button>
  `,

  methods: {
    onClick () {
      this.$emit('click')
      // console.log(this)
      this.buttonStyles.backgroundColor = 'red'
      this.buttonStyles.color = 'white'
    }
  }
}
