const strings = {
  auth: {
      jwtToken: 'jwtToken',
      login: 'Log In',
      logout: "Logout",
      email: 'Email',
      password: 'Password',
      error: {
        authenticationFailed: 'Authentication Failed',
        logoutFailed: "An error occoured while logging out"
      }
  },
  accounts: {
    title: 'Accounts',
    makeTransfer: 'Make a Transfer'
  },
  transfer: {
    makeTransfer: 'Transfer',
    error: {
      transferToSameAccount: "You can't transfer money to the same account",
      transferZeroAmount: "Amount must be greater than 0",
      failTransfer: "An error occured while transfering money"
    }
  }
};

export default strings;
