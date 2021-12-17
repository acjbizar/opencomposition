(function(window, undefined){
	window.Lock632= function(canvas){
		var canvas= canvas;
		var context= canvas.getContext('2d');
    //orange background
   	context.fillStyle = 'orange';
    context.fillRect(0, 0, canvas.width, canvas.height);
		//draw the head
		head(canvas);

    canvas.addEventListener('mousemove', function(evt){
      var mousePos= mouse_pos(evt);
			//redraw the head and the face at movements of the mouse pointer
      head();
      face(calculate_xy(mousePos));
    }, false);

		//draw the head
		function head(){
			context.beginPath();
			context.fillStyle= 'white';
			context.arc(Math.round(canvas.width/2), canvas.height, 210, 0, 2*Math.PI);
			context.fill();
  	}
  	
		//draw the face
  	function face(eye_xy){
			//eyes
			var x_eye_1= eye_xy.x;
			var y_eye_1= eye_xy.y;

			var dx_between_eyes= 0;	//you can vary this variable to have funny eyes
			
			context.beginPath();
			context.fillStyle = '614A3A';
			context.arc(x_eye_1, y_eye_1, 30, 0, 2*Math.PI);
			context.arc(x_eye_1+150-dx_between_eyes, y_eye_1, 30, 0, 2*Math.PI);
			context.fill();
			//mouth
			context.beginPath();
			context.fillStyle = 'cc3333';
			context.arc(x_eye_1+75, y_eye_1+130, 50, 0, 2*Math.PI);
			context.fill();
	  }
	  //calculate the position of one eye (right eye/ left on screen)
	  function calculate_xy(mousePos){
			var x_eye_1= Math.round(canvas.width/2)-80;
			var dx= Math.round((mousePos.x-x_eye_1))/30;
			//return x_eye_1+dx;
			var y_eye_1= Math.round(canvas.height)-120;
			var dy= Math.round((mousePos.y-y_eye_1))/25;
			//return y_eye_1+dy;
	    return {
	      x: x_eye_1+dx,
	      y: y_eye_1+dy,
	      dx: dx,
	      dy: dy
	    };
	  }
		/**
		 * mouse position
		 */
    function mouse_pos(evt){
      var rect= canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }

		//the methods going public
	  return {
			//head: head,
			//face: face
	  };
	}
	
})(window);




if(document.getElementById){
  canvas = document.getElementById('content');

  if(canvas.getContext('2d')){
    context= canvas.getContext('2d');

    canvas.width= window.innerWidth;
    canvas.height= window.innerHeight;

		//CT Au :-)
		var lock632= new Lock632(canvas);
  }
}
