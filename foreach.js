const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var createSuspectObject = function(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak: function() {
      console.log(`my name is ${name}`);
    }
    // Or ES6 way
    // describeMyColor(){
    //     console.log(`my color is ${this.color}`);
    // }
  };
};

var person = createSuspectObject(suspects[0]);
// person.describeMyColor(); //my color is Scarlet

const suspectsList = [],
  anotherList = [];

// function convertToObject(listay){
//     for(index in listay){
//         const object = createSuspectObject(listay[index]);
//         suspectsList.push(object);
//         // Or one line
//         // suspectsList.push(createSuspectObject(listay[index]));
//     }
// }

// convertToObject(suspects);

// lodash or underscore is a library
// _.each(list, howToProcessList()). "_" here is a object and it has a method each(list, func)
const _ = {
  each(list, callback) {
    if (Array.isArray(list)) {
      for (let i = 0, length = list.length; i < length; i++) {
        callback(list[i]);
      }
    }
  }
};

_.each(suspects, val => console.log(val));

_.each(suspects, function(name) {
  suspectsList.push(createSuspectObject(name));
});

_.each(suspects, name => {
  anotherList.push(createSuspectObject(name));
});

