class Rubber {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction':5,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.r = 20
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('white')
      ellipseMode(RADIUS)
      ellipse(0, 0, this.r, this.r);
      pop();
    };
  };
  