var isValid = function (s) {
	let parenth = {
		"(": ")",
		"{": "}",
		"[": "]",
	};

	let stack = [];

	for (let char of s) {
		if (parenth[char]) {
			stack.push(char);
		} else {
			let top = stack.pop();

			if (char !== parenth[top]) {
				return false;
			}
		}
	}
	return stack.length === 0;
};

console.log(isValid("()"));
