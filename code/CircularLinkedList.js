// JS实现循环链表
/* 
实例方法：
init
append
remove
toString
*/
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      // 链表没有元素时
      this.head = node;
      this.tail = node;
    } else {
      // 前面有元素，建立当前元素和上一个元素的关系
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    // 循环链表，建立head和tail的关系
    this.head.prev = this.tail;
    this.tail.next = this.head;
    this.size++;
  }
  init(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }
  remove(current) {
    const curPrev = current.prev;
    const curNext = current.next;
    curPrev.next = current.next;
    curNext.prev = current.prev;
    current.prev = null;
    current.next = null;

    // 参考答案完善方法
    // 当current是头尾指针时做下处理
    if (this.head === current) {
      this.head = curNext;
    }

    if (this.tail === current) {
      this.tail = curPrev;
    }

    this.size--;

    return curNext;
  }
  toString() {
    let l = this.size;
    let result = [];
    let current = this.head;
    while (l--) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(",");
  }
}
