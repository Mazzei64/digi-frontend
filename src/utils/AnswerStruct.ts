export default class AnsweresStruct {
    public correctAnswer: string;
    public answeres: string[];
    public question: string;
    
    constructor() {
        this.question = '';
        this.correctAnswer = '';
        this.answeres = [];
    }
} 