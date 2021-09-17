class Drop{
constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
      }
      display(){
        push();
        droplet = this.body.position
        translate(droplet.x, droplet.y);
        rectMODE(CENTER)
        strokeWeight(3);
        fill(0, 0, 255)
        ellipse(x,y,r,r);
        pop();

        var maxDrops = 100
        for(var i=0; i< maxDrops; i++){
        Drop.push(new newDrops(random(0,400), random(0,400)));
        }
        if(this.newDrops.position.y > height){
          Matter.Body.setPosition(this.newDrops, {x:random(0,400),y:random(0,400)})
        }
      }
}
