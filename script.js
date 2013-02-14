if(document.getElementById)
{
    canvas = document.getElementById('content');

    if(canvas.getContext('2d'))
    {
        context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var width1 = Math.floor(Math.random() * canvas.width);
        var width2 = canvas.width - width1;

        context.fillStyle = 'rgb(' + Math.round(Math.random() * 255) + ', 0, 0)';
        context.fillRect(0, 0, width1, canvas.height);

        context.fillStyle = 'rgb(' + Math.round(Math.random() * 255) + ', 0, 0)';
        context.fillRect(width1, 0, width2, canvas.height);
        
        // Myrthe zegt "hoi".
        context.fillStyle = 'rgb(127, 0, 255)';
        context.beginPath();
        context.moveTo(75,40);
        context.bezierCurveTo(75,37,70,25,50,25);
        context.bezierCurveTo(20,25,20,62.5,20,62.5);
        context.bezierCurveTo(20,80,40,102,75,120);
        context.bezierCurveTo(110,102,130,80,130,62.5);
        context.bezierCurveTo(130,62.5,130,25,100,25);
        context.bezierCurveTo(85,25,75,37,75,40);
        context.fill();
    }
}
        
if(document.getElementById)
{
    canvas = document.getElementById('content');

    if(canvas.getContext('2d'))
    {
        context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var width1 = Math.floor(Math.random() * canvas.width);
        var width2 = canvas.width - width1;

        context.fillStyle = 'rgb(' + Math.round(Math.random() * 255) + ', 0, 0)';
        context.fillRect(0, 0, width1, canvas.height);

        context.fillStyle = 'rgb(' + Math.round(Math.random() * 255) + ', 0, 0)';
        context.fillRect(width1, 0, width2, canvas.height);
        
        // Myrthe zegt "hoi".
    	var no_of_hearts= 2;
		for(var i= 0; i < no_of_hearts; i++){
		    var x= Math.round(75+Math.random()*(canvas.width-150));
			var y= Math.round(40+Math.random()*(canvas.height-80));
			if(x > width1){	//on the right half of the screen
		        //red tinted hearts:
		        context.fillStyle = 'rgb(' + Math.round(Math.random() * 255) + ', 0, 0)';
			} else {	//on the left half of the screen
		        //green tinted hearts
		        context.fillStyle = 'rgb(127,' + Math.round(Math.random() * 255) + ', 0)';
			}
	        //purple hearts:	context.fillStyle = 'rgb(127, 0, 255)';
	        context.beginPath();
	        context.moveTo(x,y);		//(75,40);
	        context.bezierCurveTo(x,y-3, x-5,y-15, x-25,y-15);
	        context.bezierCurveTo(x-55,y-15, x-55,y+22.5, x-55,y+22.5);
	        context.bezierCurveTo(x-55,y+40, x-35,y+62, x,y+80);
	        context.bezierCurveTo(x+45,y+62, x+55,y+40, x+55,y+22.5);
	        context.bezierCurveTo(x+55,y+22.5, x+55,y-15, x+25,y-15);
	        context.bezierCurveTo(x+10,y-15, x,y-3, x,y);
            context.fill();

            // Myrthe zegt "Happy V-day, baby!"
            // ACJ zegt "Thanks, babe! :D <3"
	        context.fillStyle = 'rgb(127, 0, 255)';
	        context.beginPath();
	        context.moveTo(75,40);
	        context.bezierCurveTo(75,37,70,25,50,25);
	        context.bezierCurveTo(20,25,20,62.5,20,62.5);
	        context.bezierCurveTo(20,80,40,102,75,120);
	        context.bezierCurveTo(110,102,130,80,130,62.5);
	        context.bezierCurveTo(130,62.5,130,25,100,25);
	        context.bezierCurveTo(85,25,75,37,75,40);

	        context.fill();
		}
    }
}
