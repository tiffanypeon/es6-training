// uninverted in the inversion of control (retained control)
// rather than passing in the callback, the promise is responsible for notifiying when task is done

function trackCheckout(info) {
  return new Promise(
    function(resolve,reject) {
      // 
    }
  )
}

function finish(){
  chargeCreditCard(purchaseInfo);
  showThankYouPage();
}

function erorr(err){
  logStatsError(err);
  finish();
}

var promise = trackCheckout(puchaseInfo);

promise.then(
  finish,
  error
);

// Promise trust: 
// 1. only resolved once
// 2. either success OR error
// 3. messages passed/kept
// 4. exceptions become errors
// 5. immutable once resolved

// Another way of thinking about a promise is as a callback manager - it manages callbacks in a trustable way
