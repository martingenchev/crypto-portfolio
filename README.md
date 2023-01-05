# crypto-portfolio
initially user can log in the default pincode is 1234 
PART 1 

    Each box should only contain 1 digit (0-9)
    After filling in 1 box, focus pointer should move to very next empty box
    Input wrong character should not move to next box
    Allow secret mode -> mask all the boxes if in secret mode
    Autofocus on the first box when the pin input render
    Invoke some method after all the boxes are filled
    Allow to change number of input boxes (length of the pin)
    Allow pasting
    As most configurable as possible
    Allow passing regex for box input -> can no longer digit but can be other 

PART 2 
After we 'logged in' we move to our crypto portfolio where we can get our transaction history
 it contains the following feature
- add transaction
- integration with cryptocompare api for getting values of coins and list of coins
- displaying the total value, which can be changed in couple fiat currencies 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
