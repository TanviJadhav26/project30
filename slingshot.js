class SlingShot{
    constructor(bodyA,pointB){
var option={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.5,
    length:20
}
this.sling=Matter.Constraint.create(option);
World.add(world,this.sling);
this.pointB=pointB
    }
    display(){
        if(this.sling.bodyA){
        
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        }    
   }
fly(){
    this.sling.bodyA=null;

}
attach(body){
    this.sling.bodyA=body;
}

   } 
    