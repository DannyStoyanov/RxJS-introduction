import * as Rx from "rxjs";
import * as RxOp from "rxjs/operators";

const observable = new Rx.Observable(function subscribe(subscriber) {
    let value = 0;
    const id = setInterval(() => {
        subscriber.next(value++);
    }, 500);
});

var observer = {
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(err);
    },
    complete: function(msg) {
        console.log(msg);
    }
};

let subscribtion = observable
    .pipe(
        RxOp.map(function(value) { 
            return value;
        }),
        RxOp.throttleTime(1000)
    )
    .subscribe(observer);


setTimeout(function() {
    subscribtion.unsubscribe();
}, 20000)
