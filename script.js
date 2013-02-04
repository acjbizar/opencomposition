
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
