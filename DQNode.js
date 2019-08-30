class _Node {
  constructor(data, prev, next) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
  
module.exports = _Node;