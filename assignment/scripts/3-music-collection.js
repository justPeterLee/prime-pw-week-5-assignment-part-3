console.log('***** Music Collection *****')

// collection array 
let collection = [];


// addToCollection function 
function addToCollection(title, artist, yearPublished){
    collection.push({title: title, artist: artist, yearPublished: yearPublished});
}


// testing addToCollection function (adding 6 random album)
addToCollection('song1', 'John Snow', '1999');
addToCollection('song2', 'Steve Liam', '2020');
addToCollection('song3', 'Oscar Fisch', '1932');
addToCollection('song4', 'Tammy Smith', '2002');
addToCollection('song5', 'Yoda Vader', '2010');
addToCollection('song6', 'Spongebob', '1997');

console.log(collection)

// showCollection function
function showCollection(arr){
    console.log(arr.length);
    for(let i = 0; i < arr.length; i++){
        console.log(`${arr[i].title} by ${arr[i].artist} published in ${arr[i].yearPublished}`);
    }
}

// calling showCellection on Collection
showCollection(collection)


// findByArtist function 
function findByArtist(artist){
    let sameArtist = [];
    for(let i=0; i < collection.length; i++){
        if(artist === collection[i].artist){
            sameArtist.push(collection[i]);
        }
    }
    return sameArtist;
}

// testing function
console.log(findByArtist("John Snow"));
console.log(findByArtist("Random Guy"));


// search function (STRETCH)
function search(){
    
} 

