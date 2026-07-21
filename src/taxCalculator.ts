//Contains the function responsible for calculating the tax

export function test(a: number): void{
    console.log(a);
}

export function isValidIncome( income: number | null | undefined ): boolean{
    if (income!==null && income!==undefined && income>0 && Number.isFinite(income)) // rejects negatives numbers, infinites numbers and NaN ( not a number ) inputs.
        return true;
    else
        return false;
}

export function errorFunction(): void{
    console.log("You must type an valid number, it cannot be: negative, infinity, NaN ( Not a Number )")
}

export function calculateTax( income: number ): number{
    let tax:number;
    if(income<=2000){
        tax=0;
    }
    else{
        if(income<=3000){
            tax=(income-2000)*0.1;
        }
        else{
            if(income<=5000){
                tax=100+0.2*(income-3000);
                //0.1*1000+0.2*(income-3000)
            }
            else{
                tax=income*0.3;
                //income above 5000
            }
        }
    }
    return tax;
}