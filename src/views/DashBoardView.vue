<template>
  <v-container
    class="px-0 d-flex flex-column align-center align-self-center dashboard"
    fluid
  >
      <div class="dashboard-controls">
        <AddModal/>
      </div>
      <v-data-table
        :items="purchasedCryptocurrencies"
        :headers="headers"
      />
  </v-container>
</template>
<script>
import AddModal from '@/components/AddModal'
import { mapActions } from 'vuex'
export default {
  name: 'DashBoardView',
  components: {
    AddModal
  },
  computed: {
    purchasedCryptocurrencies () {
      return this.$store.getters.getTransaction
    }
  },
  data () {
    return {
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Type', value: 'type' },
        { text: 'Symbol', value: 'symbol' },
        { text: 'Price', value: 'price' },
        { text: 'Amount', value: 'amount' }
      ]
    }
  },
  methods: {
    ...mapActions({
      getCurrencyPrice: 'getCurrencyPrice'
    })
  },
  mounted () {
    this.getCurrencyPrice()
  }
}
</script>
