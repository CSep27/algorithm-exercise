// JS实现循环链表
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
