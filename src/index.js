import {produce} from 'immer'

let book = {title:"Harry Potter"}

function  publish(book){
  return produce(book,draftBook=>{
     draftBook.isPublished= true;
  })
}
let updated = publish(book)
console.log(updated)
console.log(book)