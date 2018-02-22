/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let k = 0;
  for (let i = 1; i < preferences.length+1; i++) {
  	if ((i - 1 == preferences[preferences[preferences[i-1] - 1] - 1] - 1) && 
  		(preferences[i - 1] - 1 !== -1) &&
  		(preferences[preferences[i-1] - 1] - 1 !== -1) && 
  		(preferences[preferences[preferences[i-1] - 1] - 1] - 1 !== -1) && 
  		(i - 1 !== preferences[i-1] - 1) ) {
	  		k++;
	  		preferences[i-1] = 0;
	  		preferences[preferences[i-1]] = 0;
	  		preferences[preferences[preferences[i-1]]] = 0;
  	} else {
  	  continue;
  	}
  }
  
  return k;

};
