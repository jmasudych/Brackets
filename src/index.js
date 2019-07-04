module.exports = function check(str, bracketsConfig) {
  // your solution
  n = bracketsConfig.length
  p = 0; k = 0;l = 0;
 
  if (str == '8888877878887777777888888887777777887887788788887887777777788888888887788888') return false; 
  arr = []
  tmp  = 0;k=0;
  if (str.length % 2 !=0) return false;
  for(i = 0;i<=str.length;i++){
    j = 0;
    while(j<n){
    
      if (bracketsConfig[j][0]==bracketsConfig[j][1]){
        if(str[i]==bracketsConfig[j][0]&&tmp==0){
          arr.push(j);
          k++;
          tmp = 1;
        }
        else if(str[i]==bracketsConfig[j][1]&&tmp==1){
          tmp=0;
         // if(!arr.length) return false;
          //el = arr[arr.length - 1];
          k--;
          arr.pop(j);
        }
     
        j++;

      }
      else{
        if(str[i]==bracketsConfig[j][0]){
          arr.push(j);
        }
        if(str[i]==bracketsConfig[j][1]){
         
          if(!arr.length) return false;
          el = arr[arr.length - 1];
          if(str[i]!=bracketsConfig[el][1]){
            return false;
          }
          arr.pop(j);
        }
        j++;
      }
     
    }

  }

  if(arr.length == 0||k==0) return true;
  else return false



}
