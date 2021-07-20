function receivesAFunction (cb) {
	return cb();
}

const returnsANamedFunction = () => receivesAFunction

function returnsAnAnonymousFunction () {
	return function(){}
}