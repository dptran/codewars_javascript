function toCamelCase(str){
    if (str) {
      if (str.includes("-")) {
      arr = str.split("-");
      for (i = 1; i < arr.length; i++) {
        x = arr[i].split("");
        x[0] = x[0].toUpperCase();
        y = x.join("");
        arr[i] = y;
      }
      return arr.join("");
    }
      else if (str.includes("_")) {
        arr = str.split("_");
        for (i = 1; i < arr.length; i++) {
          x = arr[i].split("");
          x[0] = x[0].toUpperCase();
          y = x.join("");
          arr[i] = y;
        }
        return arr.join("");
      }
    }
    else {
      return "";
    }
  }