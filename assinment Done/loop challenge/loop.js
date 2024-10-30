console.log("1-print odd numbers from 1-20");
//print odd numbers from 1-20
for(var i=1;i<=20;i++){
  if(i%2==1)
    console.log(i);
};
console.log("2-Decreasing multiples of 3");
//Decreasing multiples of 3
for(i=0;i<=100;i++){
 if(i%3==0)
  console.log(i);
};
console.log("3-Print the given squence");
//print the given squence
var squence=[4,2.5,1,-0.5,-2,-3.5]
for(var i=0;i<squence.length;i++){
  console.log(squence[i]);
};
console.log("4-sigma");
//sigma
var sum=0;
for(var i=1;i<=100;i++){
  sum+=i;
};
console.log(sum);
console.log("5-Fatorial")
//Factorial
var fact=1;
for(var i=1;i<=12;i++){
  fact*=i;
}
console.log(fact);