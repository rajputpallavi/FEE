function CountDigit(num)
     {
        let c=0;
        while(num>0)
             {
                c++;
                num=parseInt(num/10);
             }
             return c;
     }

     function sumDigits(num)
           {
            let s=0;
            while(num>0)
                  {
                    s=s+num%10;
                    num=parseInt(num/10);
                  }
         return s;         
           }
          function RevNumber(num)   
             {
                let rev=0;
                while(num>0)
                     {
                        rev=rev*10+num%10;
                        num=parseInt(num/10);
                     }
                 return rev;    
             }
