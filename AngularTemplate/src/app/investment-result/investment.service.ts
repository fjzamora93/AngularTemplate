


export class InvestmentService {
    private initialInvestment: number;
    private annualInvestment: number;
    private expectedReturn: number;
    private duration: number;

    public annualData: any[] = [];

    constructor(
        initialInvestment: number = 0, annualInvestment: number = 0, expectedReturn: number = 0, duration: number = 0
    ) {
        this.initialInvestment = initialInvestment;
        this.annualInvestment = annualInvestment;
        this.expectedReturn = expectedReturn;
        this.duration = duration;
    }

    calculateInvestmentResults() {
        const annualData = [];
        let investmentValue = this.initialInvestment;
      
        for (let i = 0; i < this.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
            investmentValue += interestEarnedInYear + this.annualInvestment;
            const totalInterest = investmentValue - this.annualInvestment * year - this.initialInvestment;
          
            annualData.push({
                year: year,
                interest: interestEarnedInYear.toFixed(2),
                valueEndOfYear: investmentValue.toFixed(2),
                annualInvestment: this.annualInvestment.toFixed(2),
                totalInterest: totalInterest.toFixed(2),
                totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
            });
        }
        this.annualData = annualData;
        return annualData;
      }


}