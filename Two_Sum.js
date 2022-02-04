function twoSum(numbers, target) {
    for (index = 0; index < numbers.length; index++) {
      let x = numbers.indexOf(target - numbers[index]);
      if (x != -1 && x != index) {
        return [index, x];
      }
    }
  }