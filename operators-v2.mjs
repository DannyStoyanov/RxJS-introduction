import * as Rx from "rxjs";
import * as RxOp from "rxjs/operators";

const observable = new Rx.Observable(function subscribe(subscriber) {
    let value = 0;
    const id = setInterval(() => {
        subscriber.next(value++);
    }, 500);
});

let subscribtion = observable
    .pipe(
        RxOp.filter(function(value) {
            return value % 2 == 0;
        })
    )
    .subscribe({
        next: function(value) {
            console.log(value);
        },
        error: function(error) {
            console.log("Error: ", error);
        },
        complete: function() {
            console.log("complete");
        } 
    });


setTimeout(function() {
    subscribtion.unsubscribe();
}, 20000)

