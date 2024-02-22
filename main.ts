import { faker, tr } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";

// CLASS CUSTOMER
class Customer {
  fname: string;
  lname: string;
  age: number;
  gender: string;
  mobNumber: number;
  accNumber: number;
  constructor(
    fname: string,
    lname: string,
    age: number,
    gender: string,
    mobNumber: number,
    accNumber: number
  ) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
    this.mobNumber = mobNumber;
    this.accNumber = accNumber;
  }
}

interface BankAccount {
  accNumber: number;
  balance: number;
}

class Bank {
  customer: Customer[] = [];
  account: BankAccount[] = [];
  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }
  addAccountNumber(obj: BankAccount) {
    this.account.push(obj);
  }
  transaction(accObj: BankAccount) {
    let newAccounts = this.account.filter(
      (acc) => acc.accNumber !== accObj.accNumber
    );
    this.account = [...newAccounts, accObj];
  }
}

let MyBank = new Bank();

for (let i = 1; i <= 3; i++) {
  let fname = faker.person.firstName("male");
  let lname = faker.person.lastName();
  let num = parseInt(faker.phone.number("3##########"));
  const cus = new Customer(fname, lname, 25 * 1, "male", num, 1000 + i);
  MyBank.addCustomer(cus);
  MyBank.addAccountNumber({ accNumber: cus.accNumber, balance: 1000 * i });
}

// console.log(MyBank);
// BAMK SERVICES
async function bankService(bank: Bank) {    
  do {
    let services = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "Please select the servic",
      choices: ["view balance", "cash withdraw", "cash deposite", "Exit"],
    });

    // VIEW BALANCE
    if (services.select === "view balance") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Please enter your Account Number",
      });
      let account = MyBank.account.find((acc) => acc.accNumber == res.num);
      if (!account) {
        console.log(chalk.red.bold.italic("Invalid Account Number"));
      }
      if (account) {
        let name = MyBank.customer.find(
          (item) => item.accNumber == account?.accNumber
        );
        console.log(
          `Dear ${chalk.green.bold.italic(
            name?.fname
          )}  ${chalk.green.bold.italic(
            name?.lname
          )} Your Account balance is  ${chalk.green.bold.italic(
            "$",
            account.balance
          )}`
        );
      }
    }

    // Cash with draw
    if (services.select == "cash withdraw") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Please enter your Account Number",
      });
      let account = MyBank.account.find((acc) => acc.accNumber == res.num);
      if (!account) {
        console.log(chalk.red.bold.italic("Invalid Account Number"));
      }
      if (account) {
        let ans = await inquirer.prompt({
          type: "number",
          message: "Enter your Ammount",
          name: "rupee",
        });
        if (ans.rupee > account.balance) {
          console.log(chalk.red.bold("Mojuda balance na kafe he "));
        }
        let newBalance = account.balance - ans.rupee;
        bank.transaction({ accNumber: account.accNumber, balance: newBalance });
        //   console.log(newBalance);
      }
    }
    // cash deposite
    if (services.select == "cash deposite") {
      //   if (services.select == "cash withdraw") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Please enter your Account Number",
      });
      let account = MyBank.account.find((acc) => acc.accNumber == res.num);
      if (!account) {
        console.log(chalk.red.bold.italic("Invalid Account Number"));
      }
      if (account) {
        let ans = await inquirer.prompt({
          type: "number",
          message: "Enter your Ammount",
          name: "rupee",
        });
        let newBalance = account.balance + ans.rupee;
        bank.transaction({
          accNumber: account.accNumber,
          balance: newBalance,
        });
        // console.log(newBalance);
      }
    }
    // }
    // exit
    if (services.select == "Exit") {
      return;
    }
  } while (true);
}
bankService(MyBank);
