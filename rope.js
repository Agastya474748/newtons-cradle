class Rope {
    constructor(body1,body2,offsetX,offsetY)
    {
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options = {
        bodyA:body1,
        bodyB:body2,
    }
    
    }
    display(){
   var pointA = this.Rope.bodyA.position;
   var pointB = this.Rope.bodyB.position;

   strokeWeight(2);

   var Anchor1X = pointA.X
   var Anchor1Y = pointA.Y
   var Anchor2X = pointB.X+this.offsetX
   var Anchor2Y = pointB.Y+this.offsetY

   line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)

    }
}