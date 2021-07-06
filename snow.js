class Snow {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.5,
        'friction':0.8,
        'density':0.3
          
      }
      this.image = loadImage("snow4.webp");
      this.body= Bodies.circle(x,y,50,options);
      this.width=40;
      this.height=40;
      this.x=x;
      this.y=y
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;

      push()
      fill("brown");
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image, this.x,this.y,this.width, this.height)
      pop()
    }
  };