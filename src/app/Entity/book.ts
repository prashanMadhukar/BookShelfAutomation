export class Book {
    constructor(
      public bookId:number=null,
      public bookTitle:string=null,
      public bookAuthor:string=null,
      public bookPublisher:string=null,
      public bookPrice:ConstrainDouble=null,
      public bookQuantity:number=null,
      public isAvailable :string="true"
    ) {}
}