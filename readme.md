
# Banking System

This is a simple banking system implemented in TypeScript, allowing users to view balance, withdraw cash, and deposit cash.

## Features

- **View Balance**: Users can check their account balance.
- **Cash Withdrawal**: Users can withdraw cash from their account.
- **Cash Deposit**: Users can deposit cash into their account.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abdulrehman104/banking-system.git
   ```

2. Install dependencies:

   ```bash
   cd banking-system
   npm install
   ```

## Usage

Run the following command to start the banking system:

```bash
npm start
```

Follow the prompts to perform banking transactions.

## Dependencies

- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker): A library for generating fake data.
- [chalk](https://www.npmjs.com/package/chalk): A library for styling console output.
- [inquirer](https://www.npmjs.com/package/inquirer): A library for interactive command-line user interfaces.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

Replace `your-username` with your GitHub username in the installation instructions. After creating this README.md file, you can push it to your GitHub repository.






# Details
1. **Imports**: The code begins with importing necessary modules:
   - `faker` and `tr` from "@faker-js/faker": These are used for generating fake data.
   - `chalk`: A library for styling console output.
   - `inquirer`: A library for creating interactive command-line interfaces.

2. **Customer Class**: 
   - Defines a `Customer` class with properties like first name, last name, age, gender, mobile number, and account number.
   - Constructor method initializes these properties.

3. **BankAccount Interface**: 
   - Defines an interface `BankAccount` with properties `accNumber` and `balance`.

4. **Bank Class**:
   - Defines a `Bank` class with `customer` and `account` properties.
   - Methods:
     - `addCustomer(obj: Customer)`: Adds a customer to the bank's customer list.
     - `addAccountNumber(obj: BankAccount)`: Adds an account number to the bank's account list.
     - `transaction(accObj: BankAccount)`: Updates the balance of a given account.

5. **Initializing Bank**:
   - Creates an instance of the `Bank` class named `MyBank`.
   - Generates 3 fake customer accounts and adds them to `MyBank`.

6. **Bank Services Function**:
   - Defines an async function `bankService` which handles banking operations.
   - Uses `inquirer` to prompt users for various banking services.
   - Implements functionalities like viewing balance, cash withdrawal, and cash deposit based on user input.

7. **Execution**:
   - Calls `bankService` function with the `MyBank` instance to start the banking system.

8. **Cash Deposit Issue**:
   - There's a logical error in the "cash deposite" section where it checks for "cash withdraw" unnecessarily. This should be corrected for the cash deposit functionality to work properly.

9. **Readme File**:
   - A README.md file is suggested to provide instructions for installation, usage, dependencies, contributing guidelines, and license information.

