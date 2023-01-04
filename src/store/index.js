import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [
      { date: '2022-01-01', type: 'Buy', symbol: 'BTC', price: '$10,000', amount: '1' },
      { date: '2022-01-02', type: 'Sell', symbol: 'BTC', price: '$11,000', amount: '1' },
      { date: '2022-01-03', type: 'Buy', symbol: 'ETH', price: '$1,000', amount: '10' }
    ],
    coinList: [],
    CurrencyPrice: []
  },
  getters: {
    getTransaction (state) {
      return state.transactions
    }
  },
  mutations: {
    setCoinList: (state, data) => {
      state.coinList = data
    },
    setCurrencyPriceList: (state, data) => {
      state.CurrencyPrice = data
    },
    addTransaction: (state, data) => {
      const stateTransactions = JSON.parse(JSON.stringify(state.transactions))
      stateTransactions.push(data)
      state.transactions = stateTransactions
    }
  },
  actions: {
    getCurrencyPrice (commit) {
      Vue.axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR').then((response) => {
        console.log(response.data)
        commit('setCurrencyPriceList', response.data)
      })
    },
    getCoinList (commit) {
      Vue.axios.get('https://min-api.cryptocompare.com/data/blockchain/list').then((response) => {
        console.log(response.data)
        commit('setCoinList', response.data)
      })
    },
    addTransaction (commit, data) {
      commit('addTransaction', data)
    }
  },
  modules: {
  }
})
