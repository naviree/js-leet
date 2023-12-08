/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let ListNode = [];
let head = 6;
let middleNumber = 0;
let middleNode = function (head) {
	for (let i = 1; i <= head; i++) {
		ListNode.push(i);
	}
	middleNumber = Math.floor(ListNode.length / 2);
	if (ListNode.length % 2 === 0) {
		middleNumber = Math.floor(ListNode.length / 2);
	} else {
		middleNumber = Math.floor(ListNode.length / 2) + 1;
	}
	return middleNumber;
};

console.log(middleNode(head));
