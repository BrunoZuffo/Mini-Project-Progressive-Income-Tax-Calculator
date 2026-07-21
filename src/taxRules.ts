//Contains the brackets (faixas), limits and percentages.

import type { TaxBracket } from "./types.js"

export const taxBracket: TaxBracket[]=[
    {
        min:0,
        max:2000,
        rate:0
    },
    {
        min:2000,
        max:3000,
        rate:0.1
    },
    {
        min:3000,
        max:5000,
        rate:0.2
    },
    {
        min:5000,
        max:Infinity,
        rate:0.3
    },
]