import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 100, -100]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);