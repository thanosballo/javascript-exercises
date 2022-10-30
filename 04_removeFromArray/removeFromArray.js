const removeFromArray = function(...args) {
    let fargs=args.length;
    let array=args[0];
    let deleteArray=[];
    for (let k=1;k<fargs;k++){
        deleteArray[k-1]=args[k];
    }
    let arrayLength=array.length;
    for (let x=0;x<deleteArray.length;x++){
        for (let i=0;i<arrayLength;i++){
        if (array[i]===deleteArray[x]){
            array.splice(i,1);
        }
    }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
