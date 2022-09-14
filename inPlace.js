// *IN-PLACE SORTING ALGORITHMS

//Here's our index swapper for general purpose use
var swapEm = function (myArray, indexA, indexB) {
  var swapper = myArray[indexA];
  myArray[indexA] = myArray[indexB];
  myArray[indexB] = swapper;
};

//*SELECTION SORT
//time complexity chart says this algorithm SUX O(n^2)
//space complexity chart says YEAH THIS ALGORITHM IS P GOOD (O(1))
//(time complexity seems to usually be more important)

// BUT its easy to understand and we like that, generally.
var selectionSort = function (myArray) {
  for (j = 0; j < myArray.length; j++) {
    //iterate through the array
    var minIndex = myArray[j]; //set default minimum to value at the current index.
    for (i = j; i < myArray.length; i++) {
      //iterate through the array (again) starting at js position
      if (myArray[i] < minIndex) {
        //if at any point in the 2nd iteration we find a new minimum, set as new minIndex.
        minIndex = i;
      }
    }
    if (myArray[minIndex] < myArray[j]) {
      //if we get to the end and our min index value is less than the value of j
      swapEm(myArray, minIndex, j); //swap the 2.
    }
  } //once it finishes both iterations, it should return a sorted array.
  console.log(myArray);
};

selectionSort([5, 7, 2, 1]);
