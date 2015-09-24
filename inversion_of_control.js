// first of our major deficiencies with callbacks 

setTimeout(function(){ // line 1 - happens now
  // line 3 - continuation
  // line 4 - continuation
},1000); // line 2 - happens now

// eg -
trackCheckout(
  purchaseInfo,
  function finish(){
    chargeCreditCard(purchaseInfo);
    showThankYouPage();
  }
);

// second major problem - 
// not Reason-able: The way they are expressed in code is not in such a fashion that our brains
// can follow it correctly 
// notion of pausing and resuming 

// Sync-Looking Async
// Synchronous
// Sequential
// Blocking 

