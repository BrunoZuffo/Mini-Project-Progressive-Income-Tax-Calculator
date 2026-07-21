//Describes the data structures used by the project

export type TaxBracket= {
    min: number; //lower limit
    max: number; //higher limit
    rate: number; //percentage of tax
};

export type TaxesDetails= {
    gross_income: number;
    total_tax: number;
    net_income: number;
    effective_tax_rate: number;
    bracket_taxes_list: number [];
};