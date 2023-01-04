<template>
  <div>
    <v-select
      :items="['USD', 'LTC', 'BNB', 'ETH']"
      label="Currency"
      v-model="name"
      required
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'TotalValue',
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style scoped>

</style>
