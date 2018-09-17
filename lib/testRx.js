"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// import { Observable } from 'rxjs/Observable';
const interval_1 = require("rxjs/observable/interval");
const multicast_1 = require("rxjs/operators/multicast");
const refCount_1 = require("rxjs/operators/refCount");
const testObservable = interval_1.interval(500)
    .pipe(multicast_1.multicast(() => {
    console.log('new subject!');
    return new rxjs_1.Subject();
}), refCount_1.refCount());
const subscription1 = testObservable
    .subscribe((v) => console.log(`1st subscriber: ${v}`));
setTimeout(() => subscription1.unsubscribe(), 2000);
setTimeout(() => {
    const subscription2 = testObservable.subscribe((v) => console.log(`2nd subscriber: ${v}`));
    setTimeout(() => {
        subscription2.unsubscribe();
    }, 2000);
}, 3000);
