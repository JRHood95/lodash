let _ = {
	// NUMBER METHODS

	// _.clamp() Method
	clamp (num, lowNum, upperNum) {
	  if (num >= lowNum && num <= upperNum) {
		return num;
	  } else if (num < lowNum) {
		return lowNum;
	  } else if (num > upperNum) {
		return upperNum;
	  }
	},

	// _.inRange() Method
	inRange (num, start, end) {
	  // if end is undefined 
	  if (end === undefined) {
		end = start;
		start = 0;
	  }
	  // if start is bigger than end
	  if (start > end) {
		let actualEnd = end;
		let actualStart = start;
		start = actualEnd;
		end = actualStart;
	  }
	  // check and return
	  if (num > start && num < end) {
		return true;
	  } else if (num === start) {
		return true;
	  } else {
		return false;
	  }
	},

	//STRING METHODS

	// _.words() Method
	words (string) {
	  let arr = string.split(' ');
	  return arr;
	},

	//_.pad() Method
	pad (string, length) {
	  if (string.length < length) {
		let totalPad = length - string.length;
		let beginning = Math.floor(totalPad/2);
		let end = Math.ceil(totalPad/2);
		let space = ' ';
		let newString = `${space.repeat(beginning)}${string}${space.repeat(end)}`;
		return newString;
	  } else {
		return string;
	  };
	},
 
	// OBJECT METHODS

	//_.has() Method
	 has (object, key) {
	   if (object[key]) {
		 return true;
	   } else {
		 return false;
	   }
	 },

	 //_.invert() Method 
	 invert (obj) {
	   let inverted = {};
	   for (let key in obj) {
		 inverted[obj[key]] = key;
		 // Their Method below is simpler to understand 
		 /* originalValue = obj[key];
		 inverted = {original Value: key};
		 */
	   }
	   return inverted;
	  },

	  //_.findKey() Method
	  findKey (obj, func) {
		for (let key in obj) {
		  let value = obj[key];
		  let result = func(value);
		  if (result === true) {
			return key;
		  } else {
			return undefined;
		  };
		};
	  },

	  // ARRAY METHODS

	  //_.drop() Method
	   drop (arr, dropNum) {
			if (!dropNum) {
			   dropNum = 1;
		   }
			let newArr = arr.slice(dropNum);
			return newArr;
	   },

	 //_.dropWhile() Method
	  dropWhile(arr, predicate) {
		//My method was a bit flawed in its logic but works
		let dropNum = arr.findIndex((element, index) => {
		  !(predicate(element, index, arr))
		});
		let droppedArr = this.drop(arr, dropNum - 1);
		return droppedArr;
		// Their method was again more simple to understand and follow
		/*
		const callback = (element, index) => {
		  return !predicate(element, index, arr)
		};
		let dropNum = arr.findIndex(callback);
		let droppedArr = this.drop(arr, dropNum);
		return droppedArr;
		*/
	  }, 

	  //_.chunk() Method
	  chunk (arr, size = 1) {
			  let chunkedArr = [];
			  let index = 0;
			  while (index < arr.length) {
				chunkedArr.push(arr.slice(index, size + index));
				index += size;
			  };
			  return chunkedArr;
		// Their method uses a for loop
		/*
		let chunkedArr = [];
		for (let i = 0; i < arr.length; i += size) {
		  let arrChunk = arr.slice(i, i + size);
		  chunkedArr.push(arrChunk);
		};
		return chunkedArr;
		*/
		  }
  };




// Do not write or modify code below this line.
module.exports = _;


