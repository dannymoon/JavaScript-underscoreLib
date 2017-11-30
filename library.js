var _ = {
    map: (array, callback) => {
        for (let i = 0; i<array.length; i++){
            array[i] = callback(array[i]);
        }
        return array;
    },
    reduce: (array, callback) => {
        var result = 0;
        for ( let i = 0; i<array.length; i++){
            result += callback(array[i]);
        }
        return result;
    },
    find: (array, callback) => {
        for(let i =0; i<array.length; i++){
            if(callback(array[i])){
                return array[i];

            }
        }
        return "No matching";
    },
    filter: (array, callback) => {
        var result = [];
        for (let i = 0; i<array.length; i++){
            if(callback(array[i])){
                result.push(array[i]);
            }
        }
        return result;
    },
    reject: (array, callback) => {
        var result = [];
        for (let i = 0; i<array.length; i++){
            if(!callback(array[i])){
                result.push(array[i]);
            }
        }
        return result;
    }
    
}
var map = _.map([1,2,3], function(num){ return num * 2; });
console.log(map);
var reduce = _.reduce([1,2,3], function(num){return num + 1 });
console.log(reduce);
var find = _.find([1,3,4,6,7,8], function(num){return num === 7 });
console.log(find);
var filter = _.filter([2,3,5,6,7,8,10], function(num){return num % 2 == 0});
console.log(filter);
var reject = _.reject([1,2,3,4,5,6], function(num){return num % 2 == 0});
console.log(reject);