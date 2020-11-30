class Block{
  constructor(x, y, width, height, red, green, blue){
    var options = {
      'isStatic': false,
      'restitution':0.8,
      'friction':1.0,
      'density':1
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.colorRed = red;
  this.colorGreen = green;
  this.colorBlue = blue;
  World.add(world, this.body);
  }

  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    fill(this.colorRed, this.colorGreen, this.colorBlue);
    rect(0, 0, this.width, this.height);
    pop();
  };
};
