/**
 * Returns a random number from 1 to max.
 * @param max Largest number to possibly return.
 * @returns
 */
export const rng = (max:number = 1) => Math.ceil(Math.random() * max);
