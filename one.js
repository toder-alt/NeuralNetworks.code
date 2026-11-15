let sum=a*w+b;
if(sum=<0.2){return 0;}else{return 1;}
const the=setInterval(() => {sum=sum-0.01
                  if(
                    sum===0
                    ){
                    clearInterval(the);
                    }
            ,100);
