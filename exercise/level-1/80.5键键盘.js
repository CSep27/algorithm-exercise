function getResult(arr) {
  let screen = [];
  let clipboard = [];
  // 只有一个全选，所以用一个标记就可以
  let selected = false;
  arr.forEach((item) => {
    switch (item) {
      case 1:
        // a
        // 输出一个字母a
        if (selected) {
          screen.length = 0;
          selected = false;
        }
        screen.push("a");
        break;
      case 2:
        // ctrl-c
        // 将当前选择的字母复制到剪贴板
        // 没有选择字母时操作无效
        if (selected) {
          // 新内容赋值到剪贴板会覆盖原来的内容
          clipboard = screen.concat();
        }
        break;
      case 3:
        // ctrl-x
        // 将当前选择的字母复制到剪贴板，并清空选择的字母
        // 没有选择字母时操作无效
        if (selected) {
          clipboard = screen.concat();
          screen.length = 0;
          selected = false;
        }
        break;
      case 4:
        // ctrl+v 将当前剪贴板的字母输出到屏幕
        if (selected) {
          screen = clipboard.concat();
          selected = false;
        } else {
          screen = screen.concat(clipboard);
        }
        break;
      case 5:
        // ctrl-a
        // 当屏幕上没有字母时，全选无效。
        if (screen.length) {
          selected = true;
        }
        break;
      default:
        break;
    }
  });
  return screen.length;
}
console.log(getResult([1, 1, 1]));
console.log(getResult([1, 1, 5, 1, 5, 2, 4, 4]));
