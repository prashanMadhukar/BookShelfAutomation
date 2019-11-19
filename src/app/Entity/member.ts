export class Member {
    constructor(
      public   memberId:number=null,
      public   memberPassword:string=null,
      public   memberDob:Date=null,
      public   memberAddress:string=null,
      public   memberEmail:string=null,
      public   suspended:number=null
    ) {}
}
