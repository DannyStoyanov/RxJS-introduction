import * as Rx from "rxjs";
import * as RxOp from "rxjs/operators";

let subject = new Rx.Subject;

subject.subscribe({
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {
        console.log("complete");
    } 
});

subject.subscribe({
    next: function(value) {
        console.log(value);
    }
});

subject.next("New data");
subject.complete();
subject.next("New data");
