class Stone {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':0.3,
          'density': 3
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 60;
      this.height = 60;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  