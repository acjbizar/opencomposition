
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
    }
}
