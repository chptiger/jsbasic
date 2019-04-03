/**
 * Promises are "Continuation events" and they help you execute the multiple
 * async operations together in a much cleaner code style.
 */
var promise = new Promise(function(resolve, reject) {
	// do a thing, possible asyny, then
	if (1 > 0) {
		resolve("stuff worked");
	} else {
		reject(Error("It broke"));
	}
});
return promise;

/**
 * the getSum() method is asynchronous i.e., its operation should not block
 * other methods’ execution. As soon as this operation completes, it will later
 * notify the caller.
 */

function getSum(n1, n2) {
	var isAnyNegative = function() {
		return n1 < 0 || n2 < 0;
	}

	var promise = new Promise(function() {
		if (isAnyNegative()) {
			reject(Error("Negative not supported"));
		}
		resolve(n1 + n2);
	});
	return promise;
}

getSum(5, 6).then(function() {
	console.log(result);
}, function(error) {
	console.log(error)
});