<template>
  <v-container class="">
    <v-select
      :items="['USD', 'EUR', 'JPY', 'DKK']"
      label="Currency"
      v-model="name"
      required
    ></v-select>
    Value: {{ totalValue }} {{ name }}
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import sharedMethods from '@/mixins/sharedMethods'
export default {
  name: 'TotalValue',
  data () {
    return {
      name: 'USD'
    }
  },
  mixins: [sharedMethods],
  computed: {
    totalValue () {
      return this.calculateTotalValue()
    },
    currencyPriceBasedOnFiat () {
      return this.$store.getters.getCurrencyPrice
    },
    allTransaction () {
      return this.$store.getters.getTransaction
    }
  },
  watch: {
    name: {
      handler (newCurrency) {
        console.log(this.allCryptoValues().toString())
        this.getCurrencyPrice({ crypto: this.allCryptoValues().toString(), fiat: newCurrency })
      },
      immediate: true
    },
    allTransaction: {
      handler (newValue) {
        this.getCurrencyPrice({ crypto: this.allCryptoValues().toString(), fiat: this.name })
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      getCurrencyPrice: 'getCurrencyPrice'
    }),
    calculateTotalValue () {
      let total = 0
      const coinList = Object.keys(this.$store.getters.getCurrencyPrice)
      if (coinList.length) {
        this.allTransaction.forEach(transaction => {
          const typeOfCurrency = coinList.find(coin => coin === transaction.symbol)

          if (transaction.type === 'Buy' && typeOfCurrency) {
            total += transaction.amount * this.currencyPriceBasedOnFiat[typeOfCurrency][this.name]
          } else if (transaction.type === 'Sell' && typeOfCurrency) {
            total -= transaction.amount * this.currencyPriceBasedOnFiat[typeOfCurrency][this.name]
          }
        })
      }
      return total
    }
  }
}
</script>

<style scoped>

</style>
