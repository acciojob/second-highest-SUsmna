//your JS code here. If required.
function secindHighest(arr){
	if(arr.length<=1 || new Set(arr).size === 1){
		return -Infinity;
	}
	arr.sort((a,b)=>b-a);
	return arr[1];
}