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

      update(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body, {x:random(0,400),y:random(0,400)})
        }
      }
      display(){
        push();
        droplet = this.body.position
        translate(droplet.x, droplet.y);
        ellipseMODE(RADIUS)
        strokeWeight(3);
        fill(0, 0, 255)
        ellipse(x,y,r,r);
        pop();
      }
}
