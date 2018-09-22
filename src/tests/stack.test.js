const Stack = require('../dataStructures/Stack')

test('push to stack', () => {
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  expect(stack._storage).toEqual([1,2]);
})

test('push and pop to stack', () => {
  let stack = new Stack();
  stack.push(4);
  stack.push(5);
  expect(stack.pop()).toEqual(5);
  expect(stack.pop()).toEqual(4)
})

test('pop on empty stack', () => {
  let stack = new Stack()
  expect(stack.pop()).toEqual(undefined);
})