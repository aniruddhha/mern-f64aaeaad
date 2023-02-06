# > Our client -> 👩‍🦰, she runs a small finance bank and wants to build basic Banking App.This app will have two roles i.e. Admin and Customer. This app aims to provide a convenient and accessible platform for customers to manage their finances and for the bank to efficiently serve its customers. 

### Main Menu
- 1. Admin
    - 👉 Enter Admin Username
    - 👉 Enter Admin Password
- 2. Customer
    - 👉 Enter Customer Username
    - 👉 Enter Customer Password
- 3. Exit

### Admin Menu
- 1. Create New Customer
    - 👉 Enter Name
    - 👉 Enter User Name (unique)
    - 👉 Enter Password
    - 👉 Enter Dob
    - (initial amount, is_active, is_blocked, dt_creation)
- 2. Activate/Deactivate Customer
    - Show Current Status of User
    - 👉 Enter the User Id
    - 👉 Enter Operation(1/0)
- 3. Block/Unblock Customer
    - Show Current Status of User
    - 👉 Enter the User Id
    - 👉 Enter Operation(1/0)
- 4. View All Registered CUstomers
    - Show List of all users with name, id, active, blocked
- 5. Wallet Operations
    - 1. Check Balanace
        - 👉 Enter the User Id
        - Show Balance
    - 2. Withdraw Money
        - 👉 Enter the User Id 
        - 👉 Enter Amount
    - 3. Deposit Money
        - 👉 Enter the User Id 
        - 👉 Enter Amount
    - 4. Transfer Money
        - 👉 Enter Source Id 
        - 👉 Enter Destination Id 
        - 👉 Enter Amount
    - 5. Exit (it should go to Admin Menu) 
- 6. Exit (App Stop)

### Customer Menu
> Following operations would be getting performed only if, user is active, ublocked
- 1. Check Balanace
    - Show Balance and Last Txn Date
- 2. Withdraw Money
    - 👉 Enter Amount
- 3. Deposit Money
    - 👉 Enter Amount
- 4. Transfer Money
    - 👉 Enter Destination Id 
    - 👉 Enter Amount
- 5. Exit (it should go to Admin Menu) 

### Validations 
- No negative amount is allowed
- Before Transfer/Withdraw money, give a check to availability of the funds
- Maximum INR. 1000000 can be deposited, withdrawn and transferred
- Customer related operations would be getting performed only if customer is active, ublocked
- Proper Success, Failuer, Error Messages needs to displyed 
- Before Transfer money, give a check to availability of the funds
- For every transaction date and who should be added. E.g if admin is transferring mony value of who should be admin, if user on its own transferring amount who should self.

