// Enums
export enum TransactionType {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL", 
  TRANSFER = "TRANSFER",
  FEE = "FEE",
  INTEREST = "INTEREST"
}

// Interfaces  
export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  balance: number;
  timestamp: Date;
  description: string;
}

// TODO: Implement TransactionManager class
class TransactionManager{
    static transactionNums: number = 0

    constructor(){
        TransactionManager.transactionNums++
    }
    static generateTransactionId(): string{
        return `TXN000000${TransactionManager.transactionNums.toString().padStart(6, "0")}`
    }


    static createTransaction(): Transaction{
        return {id: TransactionManager.generateTransactionId(), 
            type: TransactionType.DEPOSIT,
            amount: 0,
            balance: 0,
            timestamp: new Date(),
            description: "Blah Blah Blah"
        }
    }

}
// TODO: Implement abstract BankAccount class  
abstract class BankAccount{


    static accounts: Map<string, BankAccount> = new Map()
    static counter: number = 0

    constructor(protected balance: number,
    protected transactions: Transaction[],
    public readonly accountNumber: string,
    public readonly accountHolder: string,
    public readonly dateCreated: Date){
        dateCreated = new Date()
    }

    abstract getAccountType(): string

    abstract getMonthlyFee(): number

    abstract getInterestRate(): number
    
    protected canWithdraw(amount: number): boolean{
        if(this.balance - amount >= 0){
            return true
        } else{
            return false
        }
    }

    deposit(amount: number): void{
        if(amount > 0){
            this.balance += amount
            console.log("success")
        } else {
            console.log("failure")
        }
    }

    withdraw(amount: number): void{
        if(this.canWithdraw(amount) === true){
            console.log("success")
            this.balance -= amount
        } else{
            console.log("failure")
            this.balance -= amount
        }
    }

    get currentBalance(): string{
        return this.balance.toFixed(2)
    }

    get transactionHistory(): Transaction[]{
        return [...this.transactions]
    }

    get accountAge(): number{

        return Date.now() - this.dateCreated.getDate()

    }
    
}
