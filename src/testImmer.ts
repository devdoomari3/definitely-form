import produce from 'immer';

const state = {
  a: 1,
  nested: {
    b: 3,
  },
};

const test2 = produce(state, s => {
  s.a = 3;
  s.nested.b = 5;
});

console.log(test2);
