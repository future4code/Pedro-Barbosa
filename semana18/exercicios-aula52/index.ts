// Exercício 1

// a) Para inicializar, uma vez que for instanciada, uma classe. 
// Instanciando uma classe. Exemplo de UserAccount:
// const usuario1 : UserAccount = new UserAccount {
// "numerodocpf",
// "nomedousuario",
// 0
//}

//b) Uma.

//c) Através de métodos públicos contidos na classe.

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

  public getCpf() : string {
    return this.cpf
  }

  public getName() : string {
    return this.name
  }

  public getAge() : number {
    return this.age
  }
  

}

const usuario1 : UserAccount = new UserAccount (
    "15236978945",
    "Pedrin",
    20
)

const usuario2 : UserAccount = new UserAccount (
  "15236678945",
  "Jajaja",
  21
)

console.log(usuario1)


//2 - 

class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }

  public getDate(): string {
    return this.date
  }

  public getValue(): number {
    return this.value
  }

  public getDescription(): string {
    return this.description
  }

}

//3 -

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  public getAccounts() {
  return this.accounts
}

public setAccounts(
  newAccount : UserAccount
) {
  this.accounts.push(newAccount)
}

}



const banco1 : Bank = new Bank([usuario1, usuario2])

console.log(banco1)