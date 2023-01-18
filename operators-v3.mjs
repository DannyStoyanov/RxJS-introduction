import * as Rx from "rxjs";
import * as RxOp from "rxjs/operators";

const observable = Rx.of(1,2,3,4,5);

let subscribtion_reduce = observable
    .pipe(
        RxOp.reduce((total, current) => {
            return total + current;
        }, 0)
    )
    .subscribe({
        next: function(value) {
            console.log(value);
        }
    });

let subscribtion_scan = observable
.pipe(
    RxOp.scan((total, current) => {
        return total + current;
    }, 0)
)
.subscribe({
    next: function(value) {
        console.log(value);
    }
});