import { Subject } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { multicast } from 'rxjs/operators/multicast';
import { refCount } from 'rxjs/operators/refCount';

const testObservable = interval(500)
  .pipe(
    multicast(() => {
      console.log('new subject!');

      return new Subject();
    }),
    refCount(),
  );

const subscription1 = testObservable
                        .subscribe(
                          (v) => console.log(`1st subscriber: ${v}`),
                        );

setTimeout(() => subscription1.unsubscribe(), 2000);

setTimeout(
  () => {
    const subscription2 = testObservable.subscribe((v) => console.log(`2nd subscriber: ${v}`));
    setTimeout(
      () => {
        subscription2.unsubscribe();
      },
      2000,
    );
  },
  3000,
);
