var arr = [4,1,9,5,0];
		var biggest = arr[0];

		for(var i=1; i<arr.length; i++){
			if(arr[i] > biggest){
				biggest = arr[i];   
			}
		}

		console.log(biggest);
