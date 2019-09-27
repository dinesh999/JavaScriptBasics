function sortArray(inputArray){
    this.originalArray = inputArray;
    var sort = function(Arr){
        return Arr.sort();
    }
    this.getSortedArray = function(){
        return sort(inputArray);
    }
}

var func = new sortArray([2, 1]);
console.log(func.originalArray);
console.log(func.getSortedArray());

function sortObjectArray(input){
    this.jsonObjectsInputArray=input;
    var sortedJsonObject=[];
    input.forEach(function(element){
        sortArrayFunc=new sortArray(element.arr);
        element.arr= sortArrayFunc.getSortedArray();
        sortedJsonObject.push(element);
    });
    console.log(sortedJsonObject);
}

var jsonObjectArray=[{arr:[3,1,2]},{arr:[3,8,4]}]
var sortJsonObjs=new sortObjectArray(jsonObjectArray);