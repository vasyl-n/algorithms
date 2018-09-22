const Queue = require('../dataStructures/Queue');


test('queue has its prototype methods', () => {
  const q = new Queue();
  expect( typeof q.enqueue === 'function' ).toBe(true);
  expect( typeof q.dequeue === 'function' ).toBe(true);
})

test('enqueue', () =>{
  const q = new Queue();

  q.enqueue(4);
  q.enqueue(6);
  q.enqueue(49);
  
  expect(q.dequeue()).toEqual(4);
  expect(q.dequeue()).toEqual(6);
  expect(q.dequeue()).toEqual(49);
})