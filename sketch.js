let time=0;
let wave=[];

function setup() {
createCanvas(739,739);
frameRate(33);	
	
}

function draw() {
   
	background(0);
	translate(270,270);
	let x=0;
	let y=0;
	time=time+0.05;
	let j=document.getElementById("n").value;
 for(let i=0;i<j;i++){
	 let prevx39=x;
     let prevy39=y;
	 let n=2*i+1;
   let radius= 100*(4/(n*PI));
   x=x+ radius*cos(n*time);
   y=y+ radius*sin(n*time);

 
  stroke(255,100);
    noFill();
    ellipse(prevx39,prevy39, radius*2);
  fill(255);
  stroke(255);
  line(prevx39,prevy39, x, y);
  



 }
 wave.unshift(y);
  translate(200,0);
  line(x-200,y,0,wave[0]);
  beginShape();
  noFill();
  for(let i=0;i<wave.length;i++)
	vertex(i, wave[i]);
  endShape();
  




}