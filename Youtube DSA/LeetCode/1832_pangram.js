
var  sentence = "thequickbrownfoxjumpsoverthelazydog"

var checkIfPangram = function(sentence) {
    // 97, 122
    // return  
    return 'thequickbrownfoxjumpsoverthelazydog'.split('').every((item)=> sentence.split('').includes(item)) ;
};

console.log(checkIfPangram(sentence));
