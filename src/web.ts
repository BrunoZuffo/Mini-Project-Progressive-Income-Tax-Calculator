import { calculateTax, errorFunction, isValidIncome } from "./taxCalculator.js";

const inputElement=document.querySelector<HTMLInputElement>("#income"); // # means find by id
const buttonElement=document.querySelector<HTMLButtonElement>("#calculate-button")
const grossIncomeElement=document.querySelector<HTMLSpanElement>("#gross-income")
const totalTaxElement=document.querySelector<HTMLSpanElement>("#total-tax")
const netIncomeElement=document.querySelector<HTMLSpanElement>("#net-income")
const effectiveTaxRateElement=document.querySelector<HTMLSpanElement>("#effective-tax-rate")
const resultElement=document.querySelector<HTMLSpanElement>("#result")
const errorElement=document.querySelector<HTMLElement>("#error-message")

buttonElement?.addEventListener("click",()=>{
    const number= Number(inputElement?.value); //if inputElement exists ( is not null ), then catch his value and convert into a number type
    
    if(isValidIncome(number)){
        if(errorElement){
            errorElement.hidden=true;
        }
        if(resultElement){
            resultElement.hidden=false;
        }
        const result=calculateTax(number);
        if(grossIncomeElement){
            grossIncomeElement.textContent=String(result.gross_income);
        }
        if(totalTaxElement){
            totalTaxElement.textContent=String(result.total_tax);
        }
        if(netIncomeElement){
            netIncomeElement.textContent=String(result.net_income);
        }
        if(effectiveTaxRateElement){
            effectiveTaxRateElement.textContent=String(result.effective_tax_rate);
        }
    }
    
    else{
        if(errorElement){
            errorElement.hidden=false;
            errorElement.textContent="Type a valid value!";
        }
        if(resultElement){
            resultElement.hidden=true;
        }
        
    }


})