/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let ListNode = [];
let head = 5;
let middleNumber = 0;
let middleNode = function (head) {
	for (let i = 1; i <= head; i++) {
		ListNode.push(i);
	}
	return ListNode;
};

console.log(middleNode(head));
