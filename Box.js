class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0,
            'friction':1,
            'isStatic' :false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pink.png");
        World.add(world, this.body);
    }
    display(){ 
      
      if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.hieght);
        pop();
        
     } 
     else{
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visiblity-5
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
     }
    }
  
  };