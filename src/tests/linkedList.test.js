const LinkedList = require('../dataStructures/LinkedList').LinkedList
const Node = require('../dataStructures/LinkedList').Node

test('linked list has all the methods', () => {
  const list = new LinkedList();
  expect( typeof list.addToTail === 'function').toBe(true);
  expect( typeof list.removeHead === 'function').toBe(true);
  expect( typeof list.contains === 'function').toBe(true)
})

test('one element is head and tail', () => { 
  var list = new LinkedList();
  list.addToTail(4);

  expect(list.head.value).toEqual(4);
  expect(list.tail.value).toEqual(4);
})

test('adds things to tail', () => {
  var list = new LinkedList();
  list.addToTail(4);
  list.addToTail(5);
  expect(list.head.value).toEqual(4);
  expect(list.tail.value).toEqual(5);
  list.addToTail(6)
  expect(list.head.value).toEqual(4);
  expect(list.tail.value).toEqual(6);
  list.addToTail(7)
  expect(list.head.next.next.next.value).toEqual(7);
})

test('removes head', () => {
  var list = new LinkedList();
  list.addToTail(4);
  list.addToTail(5);
  expect(list.head.value).toEqual(4);
  expect(list.tail.value).toEqual(5);
  list.removeHead()
  expect(list.head.value).toEqual(5);
  expect(list.tail.value).toEqual(5);
})

test('contains', () => {
  var list = new LinkedList();
  list.addToTail(4);
  list.addToTail(5);
  expect(list.contains(4)).toBe(true)
  expect(list.contains(6)).toBe(false)
  list.addToTail(6)
  expect(list.contains(6)).toBe(true)
})