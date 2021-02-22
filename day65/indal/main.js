class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance = this.balance - amount;
    }

    return `your account balance is ${this.balance}`;
  }
}

c1 = new Account("Indal kumar", 1000);
console.log(c1.deposit(1000));
console.log(c1.withdraw(1000));
