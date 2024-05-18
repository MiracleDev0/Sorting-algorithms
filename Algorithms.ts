//Insertion Sort

function insertionSort(input: number[]): number[] {
    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i];
      let j = i - 1;

      while (j >= 0 && input[j] > currentElement) {
        input[j + 1] = input[j];
        j--;
      }

      input[j + 1] = currentElement;
    }
  
    return input;
  }
  
  const numbers = [3, 0, -8, 55, -13, 41, 13];
  const sortedNumbers = insertionSort(numbers);
  console.log(sortedNumbers)


  //Selection Sort

  function selectionSort(input: number[]): number[] {
    for (let i = 0; i < input.length - 1; i++) {
      let minIndex = i; // Assume the first element is the minimum
  
      // Find the index of the minimum element in the unsorted part
      for (let j = i + 1; j < input.length; j++) {
        if (input[j] < input[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element of the unsorted part
      if (minIndex !== i) {
        [input[i], input[minIndex]] = [input[minIndex], input[i]]; // Destructuring assignment for swap
      }
    }
  
    return input;
  }
  
  console.log(sortedNumbers); 
  
  
//Bubble Sort


function bubbleSort(input: number[]): number[] {
    for (let i = 0; i < input.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < input.length - i - 1; j++) {
        if (input[j] > input[j + 1]) {
          // Swap elements if they are in the wrong order
          [input[j], input[j + 1]] = [input[j + 1], input[j]];
          swapped = true;
        }
      }
  
      // If no swaps occurred in the inner loop, the array is already sorted
      if (!swapped) {
        break;
      }
    }
  
    return input;
  }
  

  console.log(sortedNumbers);
  



