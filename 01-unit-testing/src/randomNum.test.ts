import { it, expect } from "vitest";
import { rng } from "./randomNum";

it("generates a random number between 1-10",()=>{
    expect(rng(10)).toBeTypeOf('number')
    expect(rng(10)).toBeGreaterThan(0)
    expect(rng(10)).toBeLessThan(11)

});

it("generates a random number between 1-50",()=>{
    expect(rng(50)).toBeTypeOf('number')
    expect(rng(50)).toBeGreaterThan(0)
    expect(rng(50)).toBeLessThan(51)
});