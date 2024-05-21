/* 
不了解链表的特点时写的，不需要更改head和tail的指向
而是用一个新的指针current，更简单
*/

let input_array = [3, 1, 2, 4];
let m = 7;
let output_array = [];
// 计数
let i = 1;
let len = input_array.length;
let count = 0;

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    // 首尾指针
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(val) {
    const node = new Node(val);
    if (this.size) {
      // 建立与上一个元素的联系
      // 上一个元素的next指向当前元素
      this.tail.next = node;
      // 当前元素的prev指向上一个元素
      node.prev = this.tail;
      // 更新尾部指针指向当前新增元素
      this.tail = node;
    } else {
      // 第一次加元素时
      this.head = node;
      this.tail = node;
    }
    // 循环链表，首尾元素更新联系
    this.head.prev = this.tail;
    this.tail.next = this.head;

    this.size++;
  }
  init(arr) {
    arr.forEach((item) => {
      this.append(item);
    });
  }
}

const list = new CircularLinkedList();
list.init(input_array);
console.log(list);
const now = performance.now();
while (list.size) {
  count++;

  // 当前元素
  let current = list.head;
  // 链表head指针指向下一个值
  list.head = list.head.next;

  // 直接判断计数与m是否相等，相等才把head取出来
  if (i === m) {
    // 相等，重新计数
    i = 1;

    // m更新为head
    m = current.val;
    output_array.push(current.val);

    // 当前元素从列表中删除：prev和next指向null；list.size--
    current.prev = current.next = null;
    list.size--;

    // 更新head、tail关系
    list.head.prev = list.tail;
    list.tail.next = list.head;
  } else {
    // 不相等时，计数增加
    i++;

    // 当前的head放到尾部去
    list.tail.next = current;
    current.prev = list.tail;
    list.tail = current;
  }
}
console.log(performance.now() - now);
console.log(output_array); // [ 2, 3, 1, 4 ]
console.log(count); // 13
