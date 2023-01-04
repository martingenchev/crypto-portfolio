<template>
  <v-container
    class="px-0 d-flex flex-column align-center align-self-center"
    fluid
  >
    <v-card
      elevation="2"
      outlined
      class="d-flex flex-column align-center pt-4 login-card"
    >
      <CodeInput
        :input-type="inputType"
        :length-of-pin="4"
        @entered="checkCode"
      />
      <v-checkbox
        v-model="checkbox"
        :label="'Hide characters'"
      />
    </v-card>
  </v-container>
</template>

<script>
import CodeInput from '@/components/CodeInput'
export default {
  name: 'HomeView',
  components: {
    CodeInput
  },
  data () {
    return {
      checkbox: false,
      inputType: 'text'
    }
  },
  watch: {
    checkbox (newValue) {
      this.inputType = newValue ? 'password' : 'text'
    }
  },
  methods: {
    checkCode (data) {
      // temp hardcoded entry
      const pinCode = Number(data.join(''))
      if (pinCode === 1234) {
        this.$router.push({ name: 'dashboard' })
      }
    }
  }
}
</script>
<style scoped>
.login-card {
  width: 50%;
}
</style>
