const _Node = require('./Node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(data){
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    //create temp var for top
    const node = this.top;
    //reassign top
    this.top = node.next;
    //return the removed data
    return node.data;
  }
}

function main(){
  const starTrek = new Stack();

  //   console.log(isEmpty(starTrek));
  //   starTrek.push('Kirk');
  //   starTrek.push('Spock');
  //   starTrek.push('McCoy');
  //   starTrek.push('Scotty');

  starTrek.push(2);
  starTrek.push(5);
  starTrek.push(6);
  starTrek.push(7);
  starTrek.push(3);
  starTrek.push(4);

  //   console.log(isEmpty(starTrek));
  // console.log(peek(starTrek));
  // console.log(display(starTrek));
  //   console.log(dataRemove(starTrek, 'McCoy'));
  return starTrek;
}

function peek(list){
  return list.top.data;
}
function isEmpty(list){
  return !list.top;
}
function display(list){
  let currNode = list.top;
  let result = [];
  while (currNode !== null){
    result.push(currNode.data);
    currNode = currNode.next;
  }
  return result;
}
function dataRemove(list, data){
  let tempStack = new Stack();
  let currNode = list.top;
  while (currNode.data !== data){
    tempStack.push(list.pop(currNode));
    currNode = currNode.next;
  }
  if(currNode === null){
    console.log('Data not found');
    return;
  }
  list.pop(currNode);
  let newNode = tempStack.top;
  while(newNode !== null){
    list.push(newNode.data);
    newNode = newNode.next;
  }
  return display(list);
  /* Another solution
  let currNode = stack.pop()
  if(curr === val){
      return;
    }
  else { 
      remove(stack, val);
      stack.push(curr);
    }
    */
}
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // Your code goes here
  let check = new Stack();
  for(let i=0; i<s.length; i++){
    check.push(s[i]);
  }
  for(let i=0; i<s.length; i++){
    if(check.pop() !== s[i])
      return false;
  }
  return true;
}

function paraParser2(exp){
  let paraRes = 0;
  let lastOpen = '';
  for(let i=0; i<exp.length; i++){
    if(exp[i] === '('){
      paraRes++;
    }
    if(exp[i] === ')'){
      if(lastOpen !== '('){
        return `you are missing a close to your "${lastOpen}"`;
      }
      paraRes--;
    }
    if(paraRes === -1){
      return 'you are missing a "("';
    }
  }
  if(paraRes > 0){
    return 'you are missing a ")"';
  }
  return true;
}
function paraParser(exp){
  let lastOpen = new Stack();
  for(let i=0; i<exp.length; i++){
    if(exp[i] === '(' || exp[i] === '{' || exp[i] === '[' ){
      lastOpen.push(exp[i]);
    }
    if(exp[i] === ')'){
      if(lastOpen !== null && peek(lastOpen) === '('){
        lastOpen.pop();
      } else {
        return 'you are missing a closeing bracket"';
      }
    }
    if(exp[i] === '}'){
      if(lastOpen !== null && peek(lastOpen) === '{'){
        lastOpen.pop();
      } else {
        return 'you are missing a closeing bracket';
      }
    }
    if(exp[i] === ']'){
      if(lastOpen !== null && peek(lastOpen) === '['){
        lastOpen.pop();
      } else {
        return 'you are missing a closeing bracket';
      }
    }
  }
  if(!isEmpty(lastOpen)){
    return 'you need to close your open brackets';
  }
  return true;
}

function stackSort(list, tempStack = new Stack()){
//   let curr = list.pop();
//   let max = curr;
//   while(list.top !== null){
//     if(peek(list) <= curr){
//       if(peek(list) > max){
//         max = peek(list);
//       }
//       tempStack.push(list.pop());
//     } else{
//       tempStack.push(curr);
//       if(list.top !== null){
//         curr = list.pop();
//       }
//     }
//   }
//   tempStack.push(curr);
//   console.log(!sorted(display(tempStack)))
//   if(sorted(display(tempStack))){
//     stackSort(tempStack, list);
//   }else{
//     while(tempStack.top !== null){
//       list.push(tempStack.pop());
//     }
//   }
  let x = [...display(list).sort((a,b) => a - b)];
  while(x.length > 0){
    tempStack.push(x.pop());
  }
  return display(tempStack);
}
function stackQueue(){
  const front = new Stack();
  const back = new Stack();

  function enqueue(item){
    back.push(item);
  }
  function dequeue(){
    if(back === null){
      return;
    }
    while(back !== null){
      front.push(back.pop());
    }
    front.pop();
    while(front !== null){
      back.push(front.pop());
    }
  }
}

// console.log(sorted([2,1,3,4]));
// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));
// console.log(paraParser('{4+5 - 3}'));
// console.log(stackSort(main()));
// main();