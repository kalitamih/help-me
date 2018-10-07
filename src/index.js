module.exports = function count(s, pairs) {
	
  let  counterPow1 = 0;		
  for ( let i=0; i < pairs.length; i++ ) //Check powers for Eiler's theorem
	 if ( pairs[i][1] == 1 ) counterPow1++;

  function theoremEiler(s, pairs){   //Special case, where you can use Eiler's theorem
    
	function Eiler(pairs){  // Count  simple divider
      let eiler = 1;
      for (let i=0; i < pairs.length; i++) 
        eiler = eiler * ( Math.pow(pairs[i][0], pairs[i][1])
                      - Math.pow(pairs[i][0], pairs[i][1] - 1));
	return eiler;
    }  
  
    function Number(pairs){
      let multiply = 1;
      for ( let i=0; i < pairs.length; i++ ) 
        multiply = multiply * Math.pow(pairs[i][0], pairs[i][1]);       
      return multiply;
    }  
    if (s[0] == '1') return Eiler(pairs);
      else return Number(pairs) - Eiler(pairs);
  }

  function consecutiveOnes(s, pairs){ //Many consecutive 1s give us a result equals 0
    let min = pairs[0][0];
    let counter2019 = 0;  
    let string2019 = '1';
	
    for ( let i=0; i < pairs.length; i++ ) 
	  if ( pairs[0][0] >  pairs[i][0] ) min = pairs[i][0];;

    while( s.indexOf(string2019) != -1 ){
	   counter2019++;
	   string2019 += '1';
    }
    return min <= counter2019++
  }
   
  function sieve2019(s,pairs){ // Create array of special numbers for all rounds
    let counter2018 = 0;

    function simplicity(a,pairs2018){ // Checking common dividers
      let count = 0;
	  
      for (let j = 0; j < pairs2018.length; j++)
        if ( a % pairs2018[j][0] == 0 ){ 
	      count =  1; break;
		}

    if (count) return false;
      else return true;
    }
   
    function sieve(a,pairs2018,s){ // Create array of special numbers for one round
      let count = 0;
  
      for(let n = 0; n < s.length; n++){  
        if ( s[n] == '1' && simplicity( a+n,pairs2018 ) ) count++;
	    if ( s[n] == '0' && simplicity( a+n,pairs2018 ) != true ) count++;
	}
    if (count == s.length) return true;
    else return false;
    }
    
    for (let i=0; i < multiply; i++) if(sieve(i,pairs,s)) counter2018++; //calculation of how many such integer numbers 

    return counter2018 % 1000000007;
  }   
   
  function power(pairs){ //Owrk with the secondth numbers in array pairs
    let multiply2019 = 1;
	
	for (let i = 0; i < pairs.length; i++){
	    multiply2019 *=  Math.pow( pairs[i][0], pairs[i][1] - 1 ) % 1000000007 ;
	}
    return multiply2019 % 1000000007;  
  }
  
  let multiply = 1;
  for (let i = 0; i < pairs.length; i++){
    multiply = multiply * pairs[i][0];
  }   
   
 if ( counterPow1 == pairs.length && s.length == 1 ) return theoremEiler(s,pairs) % 1000000007; //Check to use Eiler's theorem
 if ( consecutiveOnes(s, pairs) ) return 0; // Check consectutive 1s
 if ( counterPow1 == pairs.length ) return sieve2019(s,pairs); // Calculate cases with powers don't exceed 1
 if ( multiply < 1000000007) return sieve2019(s,pairs) * power(pairs); // All of remain cases with not much calculation
 
 return -1;
}
