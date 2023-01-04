window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    console.log(ctx);

    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

    const image1 = this.document.getElementById('image1');

    class Particle {
        constructor(effect){
            this.effect = effect;
            this.x = Math.random() * this.effect.width;
            this.y = Math.random() * this.effect.height;
            this.size = 100;
        }
        draw(context){
            context.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    class Effect {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.particleArray = [];
        }
        init(){
            for (let i = 0; i <10; i++){
                this.particleArray.push(new Particle(this));
            }
        }
        draw(context){
            this.particleArray.forEach(Particle => Particle.draw(context));
        }
    }
    
    const effect = new Effect(canvas.width, canvas.height);
    effect.init();
    effect.draw(ctx);
    console.log(effect);
    
    function animate(){

    }

});