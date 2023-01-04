<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add transaction
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add transaction</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['BTC', 'LTC', 'BNB', 'ETH']"
                  label="Currency"
                  v-model="transaction.name"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Amount"
                  required
                  v-model="transaction.amount"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Bought Price"
                  type="text"
                  v-model="transaction.price"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-menu
                  v-model="datepicker"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="transaction.date"
                      label="Picker without buttons"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="transaction.date"
                    @input="datepicker = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="transaction.type">
                  <v-radio
                    v-for="type in types"
                    :key="type"
                    :label="type"
                    :value="type"
                  >{{ type }}</v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addTransaction()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'AddModal',
  data: () => ({
    dialog: false,
    datepicker: false,
    transaction: {
      id: Math.random().toString(36).substr(2, 9),
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      type: '',
      name: '',
      amount: 0,
      price: 0
    },
    types: ['Sell', 'Buy']
  }),
  methods: {
    addTransaction () {
      console.log('transaction to be saved', this.transaction)
      // TODO add transaction to state
    }
  }
}
</script>

<style scoped>

</style>
