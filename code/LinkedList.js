// JS实现链表
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

class LinkedList {
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

// 翻转链表
// 注意点：需要存储next和next的next
const list = new LinkedList();
const arr = new Array(5).fill(0);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}
list.init(arr);
console.log("list", list);

let l = list.size;
let current = list.head;
let curNext = current.next;
while (l--) {
  // 上一步中current.next已经变了
  if (curNext === null) {
    // 最后一个元素
    current.prev = null;
    // 变成了第一个
    list.head = current;
  } else {
    if (current.prev === null) {
      // 第一个元素
      current.next = null;
      // 变成了最后一个
      list.tail = current;
    }
    current.prev = curNext;
    // 先存下来
    curNextNext = curNext.next;
    // 再改变指向
    curNext.next = current;
  }
  current = curNext;
  curNext = curNextNext;
}
console.log("reversedList", list);

// 验证代码，打印翻转后链表的value
let cur = list.head;
while (list.size--) {
  console.log("reversedList value", cur.value);
  cur = cur.next;
}
