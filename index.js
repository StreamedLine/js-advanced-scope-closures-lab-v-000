function produceDrivingRange(range) {
	return function(start, end) {
		start = Number(start.match(/^\d*/))
		end = Number(end.match(/^\d*/))
		let blockCount = Math.abs(start - end)
		return blockCount <= range ? `within range by ${range - blockCount}` : `${blockCount - range} blocks out of range`;
	}
}

function produceTipCalculator(tipPercentage) {
	return function(price) {
		return price * tipPercentage;
	}
}

function createDriver() {
	let driverId = 0;

	return class {
		constructor(name){
			this.name = name;
			this.id = ++driverId;
		}
	}
}