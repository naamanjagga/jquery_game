// function minusone() {
// 	var x = document.getElementById('input').value;
// 	x = x - 1;

// 		input.value = x;
// 		setTimeout(myFunction, 1000);
// }
// function minustwo() {
// 	var x = document.getElementById('input').value;
// 	x = x - 2;

// 		input.value = x;
//         setTimeout(myFunction, 1000);

// }
// function myFunction() {
// 	var x = document.getElementById('input').value;
// 	if (x == 1){
//         x = x -1;
//         input.value = x;
//         document.getElementById('para1').innerHTML = 'YOU LOSE';
//      } else if (x == 2){
//         x = x -2;
//         input.value = x;
//         document.getElementById('para1').innerHTML = 'YOU LOSE';
//      } else if (x == 0){
//         document.getElementById('para1').innerHTML = 'YOU WIN';
//      } else {
// 		var y = Math.floor(Math.random() * 2) + 1;
// 		x = x - y;
// 		input.value = x;
// 	}
// }
$(document).ready(function() {
 
    $('#button1').on('click' , function() {
        var x = $('input').val();
        x = x-1;
        $('input').val(x);
        setTimeout(function(){
            var x = $('input').val();
            if (x == 1){
                    x = x -1;
                    $('input').val(x);
                    document.getElementById('para1').innerHTML = 'YOU LOSE';
            } else if (x == 2){
                        x = x -2;
                        $('input').val(x);
                        document.getElementById('para1').innerHTML = 'YOU LOSE';
            } else if (x == 0){
                        document.getElementById('para1').innerHTML = 'YOU WIN';
            } else {
                		var y = Math.floor(Math.random() * 2) + 1;
                		x = x - y;
                		$('input').val(x);
                	}

        }, 1000);
    });
    $('#button2').on('click' , function() {
        var x = $('input').val();
        x = x-2;
        $('input').val(x);
        setTimeout(function(){
            var x = $('input').val();
            if (x == 1){
                    x = x -1;
                    $('input').val(x);
                    document.getElementById('para1').innerHTML = 'YOU LOSE';
            } else if (x == 2){
                        x = x -2;
                        $('input').val(x);
                        document.getElementById('para1').innerHTML = 'YOU LOSE';
            } else if (x == 0){
                document.getElementById('para1').innerHTML = 'YOU WIN';
            } else {
                		var y = Math.floor(Math.random() * 2) + 1;
                		x = x - y;
                		$('input').val(x);
                	}

        }, 1000);
    })
})
