// Observables
// kind of like a self-repeating promise
// every time an event fires we get a brand new promise every time we respond to it
RxJs library

var obsv = Rx.Observable.fromEvent(btn, 'click');

obsv
  .map(function mapper(evt) {
    return evt.target.className;
  })
  .filter(function filterer(className) {
    return /foobar/.test(className);
  })
  .distinctUntilChanged()
  .subscribe(function(data){
    var className = data[1];
    console.log(className);
  });

// reactive sequences -- aka observable in asynquence library
