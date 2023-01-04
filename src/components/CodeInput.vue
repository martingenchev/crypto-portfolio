<template>
  <div class="code-input">
    <label class="pin-input__length">
      {{ tittleLabel }}
    </label>
    <input
      v-for="(p , i) in pin"
      v-model="pin[i]"
      :key="i"
      :type="inputType"
      maxlength="1"
      class="pin-input__input"
      :pattern="inputPattern"
      @keydown="preventWrongCharacter(i, $event)"
      @input="focusNextInput(i)"
      @paste="handlePaste($event, i)"
      :ref="`pinRef_${i}`"
    />
  </div>
</template>

<script>
export default {
  name: 'CodeInput',
  props: {
    lengthOfPin: {
      type: Number,
      default: 4
    },
    tittleLabel: {
      type: String,
      default: 'Enter you pin code'
    },
    inputPattern: {
      type: String,
      default: '[0-9]'
    },
    inputType: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    complete () {
      return this.pin.every(p => p !== '')
    }
  },
  watch: {
    complete (newValue) {
      if (newValue) {
        this.submit()
      }
    }
  },
  data () {
    return {
      pin: new Array(this.lengthOfPin).fill('')
    }
  },
  methods: {
    preventWrongCharacter (index, event) {
      const character = event.key
      if (this.pin[index]?.length === 0) {
        const pattern = new RegExp(this.inputPattern)
        if (!character.match(pattern)) {
          event.preventDefault()
        }
      }
    },
    focusNextInput (index) {
      if (this.pin[index].length) {
        const nextIndex = index + 1
        if (nextIndex < this.lengthOfPin) {
          this.$refs[`pinRef_${nextIndex}`].focus()
        }
      }
    },
    handlePaste (event) {
      const pastedData = event.clipboardData.getData('text/plain')
      for (let i = 0; i < this.pin.length; i++) {
        this.pin[i] = pastedData[i]
      }
    },
    submit () {
      this.$emit('entered', this.pin)
    }
  },
  mounted () {
    this.$refs.pinRef_0.focus()
  }
}
</script>

<style scoped>
.pin-input__input {
  width: 50px;
  border: 1px solid #ccc;
  text-align: center;
}
</style>
