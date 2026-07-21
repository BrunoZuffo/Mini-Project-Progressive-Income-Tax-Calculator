import { describe, expect, test } from "vitest";
import {
    calculateTax,
    isValidIncome,
} from "../src/taxCalculator.js";

describe("isValidIncome", () => {
    test("rejects null", () => {
        expect(isValidIncome(null)).toBe(false);
    });

    test("rejects undefined", () => {
        expect(isValidIncome(undefined)).toBe(false);
    });

    test("rejects a negative income", () => {
        expect(isValidIncome(-100)).toBe(false);
    });

    test("rejects zero", () => {
        expect(isValidIncome(0)).toBe(false);
    });

    test("accepts 1,999.99", () => {
        expect(isValidIncome(1999.99)).toBe(true);
    });

    test("accepts 2,000.00", () => {
        expect(isValidIncome(2000)).toBe(true);
    });

    test("accepts 2,000.01", () => {
        expect(isValidIncome(2000.01)).toBe(true);
    });

    test("accepts 3,000.00", () => {
        expect(isValidIncome(3000)).toBe(true);
    });

    test("accepts 3,000.01", () => {
        expect(isValidIncome(3000.01)).toBe(true);
    });

    test("accepts 5,000.00", () => {
        expect(isValidIncome(5000)).toBe(true);
    });

    test("accepts 5,000.01", () => {
        expect(isValidIncome(5000.01)).toBe(true);
    });

    test("accepts a large finite income", () => {
        expect(isValidIncome(1_000_000_000)).toBe(true);
    });

    test("accepts a decimal with more than two decimal places", () => {
        expect(isValidIncome(2500.1234)).toBe(true);
    });

    test("rejects NaN", () => {
        expect(isValidIncome(Number.NaN)).toBe(false);
    });

    test("rejects positive infinity", () => {
        expect(isValidIncome(Infinity)).toBe(false);
    });

    test("rejects negative infinity", () => {
        expect(isValidIncome(-Infinity)).toBe(false);
    });
});

describe("calculateTax", () => {
    test.todo("calculates tax for 1,999.99");
    test.todo("calculates tax for 2,000.00");
    test.todo("calculates tax for 2,000.01");
    test.todo("calculates tax for 3,000.00");
    test.todo("calculates tax for 3,000.01");
    test.todo("calculates tax for 5,000.00");
    test.todo("calculates tax for 5,000.01");
    test.todo("calculates tax for a large income");
    test.todo("calculates tax without rounding intermediate decimal values");
});