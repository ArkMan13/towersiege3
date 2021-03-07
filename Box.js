class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.0001,    
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.visiblity =255;

      World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
      if (this.body.speed<2) {
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height)
        pop ();
    } else {
        push ();
            World.remove(world,this.body);
            this.visiblity = this.visiblity-1
            tint(1000,200,this.visiblity)
        pop();
    }
  }
  score(){
    if(this.visibility<0 && this.visibility>-105){
      
       score++;
   }
  }
} 
