const obj = {
    name : 'Misha',
    age : 17
};

function myFn (person) {
    const objOne = {...person}; 
    objOne.age ++;
    return objOne;
}

const updatedObj = myFn(obj);

console.log(obj);
console.log(updatedObj);