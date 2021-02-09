import sha256 from 'crypto-js';



export class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}



const head = new ListNode(sha256.HmacSHA256('1', 'super secret message'));

const secondNode = new ListNode(sha256.HmacSHA256('2', ' another super secret message'));
head.next = secondNode;
secondNode.prev = head;

const thirdNode = new ListNode(sha256.HmacSHA256('3', 'yet another super secret message'));
secondNode.next = thirdNode;
thirdNode.prev = secondNode;

const tail = thirdNode;

console.log(head, secondNode);
