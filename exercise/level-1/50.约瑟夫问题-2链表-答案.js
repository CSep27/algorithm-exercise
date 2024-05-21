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
// 不需要动链表的指针，用一个current指针指向要处理的元素，修改该指针的执行
// 当前元素
let current = list.head;
while (list.size) {
  count++;

  if (i === m) {
    // 获取当前元素的上一个和下一个，让这两个元素建立联系
    // 再把当前元素的prev和next指针指向null
    // 就相当于把当前元素从列表中删除了
    const prev = current.prev;
    const next = current.next;

    prev.next = next;
    next.prev = prev;

    m = current.val;
    output_array.push(m);
    current.prev = current.next = null;

    current = next;
    i = 1;
    list.size--;
  } else {
    // 不相等时，计数增加
    i++;
    // 处理下一个元素
    current = current.next;
  }
}
console.log(performance.now() - now);
console.log(output_array); // [ 2, 3, 1, 4 ]
console.log(count); // 13
