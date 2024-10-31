var canvas = document.getElementById("game_canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

class monster{
    constructor(name = "hello", hp = 100, color = "red")
    {
        this.name = name;
        this.hp = hp;
        this.color = color;
        this.x = 10;
        this.y = 10;
        this.width = 100;
        this.height = 100;

    }


    draw()
    {
        console.log(this.color);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width,this.height);
    }
}

let testbed = new monster();
testbed.draw();
