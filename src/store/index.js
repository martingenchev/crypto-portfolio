import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [
      { id: 1, date: '2022-01-01', type: 'Buy', symbol: 'BTC', price: '$10,000', amount: '1' },
      { id: 2, date: '2022-01-02', type: 'Sell', symbol: 'BTC', price: '$11,000', amount: '1' },
      { id: 3, date: '2022-01-03', type: 'Buy', symbol: 'ETH', price: '$1,000', amount: '10' }
    ],
    coinList: [],
    currencyPrice: []
  },
  getters: {
    getTransaction (state) {
      return state.transactions
    },
    getCoinList (state) {
      return state.coinList
    },
    getCurrencyPrice (state) {
      return state.currencyPrice
    }
  },
  mutations: {
    setCoinList: (state, data) => {
      state.coinList = Object.keys(data)
    },
    setCurrencyPriceList: (state, data) => {
      state.currencyPrice = data
    },
    addTransaction: (state, data) => {
      state.transactions.push(data)
    }
  },
  actions: {
    getCurrencyPrice ({ commit }, data) {
      Vue.axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${data?.crypto}&tsyms=${data?.fiat}`).then((response) => {
        commit('setCurrencyPriceList', response.data)
      })
    },
    getCoinList (context) {
      Vue.axios.get('https://min-api.cryptocompare.com/data/blockchain/list?api_key=e8d8a2d6b63036902c56ec54a6b8407d92c7e6c8c4a36cbcee8c217ad83a4f53').then((response) => {
        context.commit('setCoinList', response.data.Data)
      })
    },
    addTransaction ({ commit }, data) {
      commit('addTransaction', data)
    }
  },
  modules: {
  }
})
