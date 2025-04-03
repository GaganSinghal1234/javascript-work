const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12304"
accountCity = "japur"
let accountState;

// accountId=616418 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

console.table([accountEmail, accountId, accountPassword, accountState])

// prefer not to use var
// because of issue in block scope{} and functional scope