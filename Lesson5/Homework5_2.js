// Второе задание
const data = [0, 1, false, 2, undefined, '', 3, null];

const compact = (array) => {
  data.forEach((item, index) => {
    if (  item == undefined || item == false ) {
      array.splice(index, 1);
    }
  });
// Я хз пчему, но при удалении "undefined", значение не удаляется, а превращается в пустую строку, поэтому пришлось делать нижеприведенный костыль
  data.forEach((item, index) => {
    if ( item == '') {
      array.splice(index, 1);
    }
  });
  return array;
}
 console.log(compact(data)) // [1, 2, 3]