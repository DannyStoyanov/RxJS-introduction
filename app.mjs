import * as Rx from "rxjs";

let observer = {
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {
        console.log("complete");
    } 
};

var subscribtion = Rx.Observable.create(function(obs) {
    obs.next("Msg1");
    obs.next("Msg2");
    setTimeout(function() {
        obs.complete();
    }, 1000);
    obs.next("Msg3");
}).subscribe(observer);

setTimeout(function() {
    subscribtion.unsubscribe();
}, 2000)


