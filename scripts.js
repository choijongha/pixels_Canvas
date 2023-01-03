window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    console.log(ctx);

    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

    const image1 = this.document.getElementById('image1');

    class Particle {
        constructor(){
            this.x = 100;
            this.y = 150;
            this.size = 100;
        }
        draw(){
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    class Effect {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.particleArray = [];
        }
        init(){
            this.particleArray.push(new Particle());
        }
        draw(){
            this.particleArray.forEach(Particle => Particle.draw());
        }
    }
    
    const effect = new Effect(canvas.width, canvas.height);
    effect.init();
    effect.draw();
    console.log(effect);
    
    function animate(){

    }

});