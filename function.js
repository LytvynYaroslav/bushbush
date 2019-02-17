function sort(arr){
    let paired = [];
    let notPaired = [];
   arr.forEach(function(element) {
     if(element % 2 == 0){
       paired.push(element);
 
         }else {
       notPaired.push(element);
     }
   });
   console.log(paired);
         console.log(notPaired);
 }
 
 let arr = [2, 23, 234, 3, 32, 25];
 sort(arr);

