/**
 * Callback:
 * 			a function may be passed as a parameter to another function. This mechanism is termed as a Callback 
 */
function notifyAll(fnSms, fnEmail) {
	console.log("starting notification process 1");
	fnSms();
	fnEmail();
}

notifyAll(function(){
	console.log("Sms send .. 1");
}, function(){
	console.log("Email send ..1");
});

console.log("End of script 1");

/**
 *  the function calls are synchronous. It means the UI thread would be waiting to complete the entire notification process. Synchronous calls become blocking calls.
 */


/*
 * AsyncCallback
 */
function notifyAllAsyn(fnSms, fnEmail) {
	setTimeout( function(){
		console.log("starting notification process");
		fnSms();
		fnEmail();
	}, 2000);
}

notifyAllAsyn(function(){
	console.log("Sms send ..");
}, function(){
	console.log("Email send ..");
});

console.log("End of script"); // executes first or not blocked by others

/**
 * in case of multiple callbacks, the code  will look scary
 */
setTimeout(function(){
	console.log("one");
	setTimeout(function(){
		console.log("two");
		setTimeout(function(){
			console.log("three");
		}, 1000);
	}, 1000);
}, 1000);


