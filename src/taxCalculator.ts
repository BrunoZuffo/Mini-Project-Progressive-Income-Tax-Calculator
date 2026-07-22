//Contains the function responsible for calculating the tax

import { taxBracket } from "./taxRules.js";
import type { TaxesDetails } from "./types.js";


export function test(a: number): void{
    console.log(a);
}

export function isValidIncome( income: number | null | undefined ): boolean{
    if (income!==null && income!==undefined && income>0 && Number.isFinite(income)) // rejects negatives numbers, infinites numbers and NaN ( not a number ) inputs.
        return true;
    else
        return false;
}
//or even
export const isValidIncome2 = (income:number | null | undefined ): boolean =>{
    if (income!==null && income!==undefined && income>0 && Number.isFinite(income)) // rejects negatives numbers, infinites numbers and NaN ( not a number ) inputs.
        return true;
    else
        return false;
}
//these two isValidIncome are equivalent
export function errorFunction(): void{
    console.log("You must type an valid number, it cannot be: negative, infinity, NaN ( Not a Number )")
}

export function calculateTax( income: number ): TaxesDetails{
    let taxBefore:number=0;
    let tax_details: TaxesDetails={
        gross_income: income,
        total_tax: 0.00,
        net_income: 0.00,
        effective_tax_rate: 0.00,
        bracket_taxes_list: []
    };
    
    for(const bracket of taxBracket){
        if(income>bracket.max){
            tax_details.total_tax=(bracket.max-bracket.min)*bracket.rate+tax_details.total_tax;
        }
        else{
            if(income>bracket.min)
                tax_details.total_tax=(income-bracket.min)*bracket.rate+tax_details.total_tax;
        }
        tax_details.bracket_taxes_list.push(tax_details.total_tax-taxBefore);
        taxBefore=tax_details.total_tax;
    }
    tax_details.net_income=tax_details.gross_income-tax_details.total_tax;
    tax_details.effective_tax_rate=(tax_details.total_tax/tax_details.gross_income)*100;

    return tax_details;
}