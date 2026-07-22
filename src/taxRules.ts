//Contains the brackets (faixas), limits and percentages.

import type { TaxBracket } from "./types.js"

export const taxBracket: TaxBracket[]=[
    {
        min:0.00,
        max:2000.00,
        rate:0
    },
    {
        min:2000.00,
        max:3000.00,
        rate:0.1
    },
    {
        min:3000.00,
        max:5000.00,
        rate:0.2
    },
    {
        min:5000.00,
        max:Infinity,
        rate:0.3
    },
]