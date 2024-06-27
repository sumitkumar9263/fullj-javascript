const accountId = 144553
let accontEmail = "sumit@gmail.com"
//using let doesn't give scope problem
var accountPassword = "12345"

let accountState //it gives undefined

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/
accountCity = "Jaipur"

//accountId = 2 //not allowed

accountEmail = "hc@gmail.com"
accountPassword = "54445454"
accountCity = "bengaluru"

 console.log(accountId);
  console.table([accountId, accountEmail, accountPassword, accountCity, accountState])