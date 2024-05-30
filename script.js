//your JS code here. If required.
function secindHighest(arr){
	if (arr.length < 2){
		return -Infinity;
	}
	arr.sort((a, b) => b - a);
	if (arr[0] === arr[1]){
		return -Infinity;
	}
	return arr[1];
}