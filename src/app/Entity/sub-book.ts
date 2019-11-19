import { Book } from './book';
import { Member } from './member';

export class SubBook {
    constructor(
        public subBookId: string = null,
	    public itemCondition: string = null,
	    public issueDate: Date = null,
	    public book = new Book(),
	    public member = new Member()
    ){}
}
