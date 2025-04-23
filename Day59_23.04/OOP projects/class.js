class library{
    constructor(){
        this.books =[]
    }
    addBook(book){
        this.books.push(...book)//spread operator to get individual value from array
    }
    listAllBooks(){
        this.books.forEach(function(book,index){
            process.stdout.write(`${index+1} : `);
            book.info()
            console.log();
            
        })
    }
}

class Book{
    constructor(name,isbn,price,author){
        this.name =name
        this.isbn =isbn
        this.price =price
        this.author =author
        this.readStatus = false
    }
    info(){
        console.log(`${this.readStatus ? '✅' : '❌'} The ${this.name} book , serial number - ${this.isbn} 
            for the price of ${this.price} written by: ${this.author} ${this.readStatus ? 'is read by you': 'is not read by you yet'} ` );
        
    }
    setReadStatus(){
        this.readStatus = !this.readStatus
    }
}

let book1 = new Book("Atomic Habit","122466a",360,"SomeOne");
let book2 = new Book("Do Epic Shit","12rr466a",260,"2-SomeOne");
let book3 = new Book("A very Large Book","122466a",560,"3-SomeOne");

book1.setReadStatus()

let khulnaLibrary = new library()
khulnaLibrary.addBook([book1,book2,book3])
khulnaLibrary.listAllBooks()