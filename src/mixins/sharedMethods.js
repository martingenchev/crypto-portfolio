export default {
  methods: {
    allCryptoValues () {
      return this.$store.getters.getTransaction.reduce(
        (accumulator, currentValue) => {
          if (accumulator.indexOf(currentValue.symbol) === -1) {
            accumulator.push(currentValue.symbol)
          }
          return accumulator
        }, [])
    }
  }
}
