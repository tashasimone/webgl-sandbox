let startNum = 0;
let endNum = 500;
const duration =  1000; // 1000 milliseconds 

$w.onReady(function () {
	setInterval(()=> {
		countUp(); 	
	}, duration);
});

function countUp(){	
	if (startNum <= endNum ){
		$w('#text1').text = startNum.toString();
		startNum++;
	}
}
