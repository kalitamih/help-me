module.exports = function count(s, pairs) {
	
  function Eiler(pairs) {
    let eiler = 1;
  
    for ( let i=0; i < pairs.length; i++ ) 
      eiler = eiler * ( Math.pow(pairs[i][0], pairs[i][1])
                      - Math.pow(pairs[i][0], pairs[i][1] - 1) );
					  
    return eiler;
  }  
  

  function Number(pairs) {
    let multiply = 1;
  
    for ( let i=0; i < pairs.length; i++ ) 
      multiply = multiply * Math.pow(pairs[i][0], pairs[i][1]);
                      
    return multiply;
  }  
  

  if (s[0] == '1') return Eiler(pairs);
    else return Number(pairs) - Eiler(pairs);
  
}