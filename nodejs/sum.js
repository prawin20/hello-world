
var length = process.argv.length;
var sum=0;
for(var i=2;i<length;i++){
    sum += +process.argv[i]; //sum += Number(process.argv[i]);
}
console.log(sum);

/*var result = 0;  
       
     for (var i = 2; i < process.argv.length; i++)  
       result += Number(process.argv[i]);  // result += +process.argv[i]  
       
     console.log(result);*/  
