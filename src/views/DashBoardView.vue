<template>
  <v-container
    class="px-0 d-flex flex-column align-center align-self-center dashboard"
  >
      <v-row class="dashboard-controls d-flex flex-row align-center justify-lg-space-between">
        <v-col>
          <AddModal/>
        </v-col>
        <v-col>
          <TotalValue/>
        </v-col>
      </v-row>
      <v-data-table
        :items="purchasedCryptocurrencies"
        :headers="headers"
      />
  </v-container>
</template>
<script>
import AddModal from '@/components/AddModal'
import TotalValue from '@/components/TotalValue'
import sharedMethods from '@/mixins/sharedMethods'
import { mapActions } from 'vuex'
export default {
  name: 'DashBoardView',
  components: {
    AddModal,
    TotalValue
  },
  mixins: [sharedMethods],
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
      ],
      loading: false
    }
  },
  methods: {
    ...mapActions({
      getCurrencyPrice: 'getCurrencyPrice'
    })
  },
  mounted () {
    this.getCurrencyPrice({ crypto: this.allCryptoValues().toString(), fiat: 'USD' })
  }
}
</script>
<style scoped>
.dashboard{
  width: 100vw;
}
</style>
