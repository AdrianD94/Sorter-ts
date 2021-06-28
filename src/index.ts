import { NumbersCollection } from './NumbersCollection';
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([1, -5, 10, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
