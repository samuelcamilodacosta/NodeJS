
/**
 * Words
 * This class is responsible for handling the received sentences.
 */
export default class Words{
    private _word: string;
    private readonly _vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    constructor(word: string){
        this._word = word
    }
    
    /**
     * amountVowels 
     * This method calculates the number of vowels in the sentence
     * @returns returns the size of the string vector that contains the vowels of the setence
     */
    public amountVowels(): number {
        let result: string[] = this._word.toLowerCase().normalize('NFD').split('').filter((letter: string) => this._vowels.includes(letter));
        return result.length;
    }
}