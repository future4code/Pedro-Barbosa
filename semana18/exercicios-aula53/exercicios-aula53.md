# Exercícios

## Herança

### 1 -

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

 //  public introduceYourself(): void {
 //   return console.log("Olá, bom dia!")
 // }

public introduceYourself(): void {
    return console.log(`Olá, sou ${this.name}. Bom dia!`)
  }

}

const pedro: User = new User("1", "pedro@gmail.com", "Pedrin", "heyheyhey");

- a) Dentro dessa classe, sim. Fora, só se fosse criado um getter.
- b) Uma.

### 2 -

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const bia: Customer = new Customer(
  "1",
  "bia@gmail.com",
  "Bia Ramos",
  "oioioi",
  "1234 2345 1234 2345"
);
console.log(bia);

- a) Uma.
- b) Uma. Porque primeiramente foi buscado o construtor que foi chamado na superclasse, e então, depois, os atributos da subclasse.

### 3 -
- a) Não. Porque ela tem propriedade private e só pode ser acessada na própria classe, e não há um getter para buscar essa informação.

### 4 - 
- bia.introduceYourself()

### 5 -
- Feito diretamente no código, olhar acima.

## Polimorfismo

### 1 - 

const client1: Client = {
  name: "Jão",
  registrationNumber: 1,
  consumedEnergy: 500,

  calculateBill: () => {
    return 2;
  }
}

console.log(client1)
console.log(`O resultado do cálculo da conta é ${client1.calculateBill()}`}

- a) Todas. Não.

### 2 - 
- a) "Cannot create an instance of an abstract class"
- b) Extender ela em alguma classe.

### 3 -

export class Residence extends Place {
  constructor(
    private residentsQuantity: number,
    cep: string
  ) {
    super(cep);
  }
  
  public getResidentsQuantity(): number {
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    private floorsQuantity: number,
    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export class Industry extends Place {
  constructor(
    private machinesQuantity: number,
    cep: string
  ) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

### 4 -

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

- a) Ela deve conter o nome do residente, o número de registro da interface de cliente, a energia consumida para cálculo, a quantidade de residentes e quantidade de energia consumida para cálculo contida na interface, a propriedade cpf solicitada no exercício, o CEP e quantidade de residentes contidas na classe abstrada que foi extendida.
Em relação a métodos, o getter do cpf solicitado, e a função de cálculo de um cliente residencial.

## 5 - 

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}

- a)b) Tem majoritariamente os mesmos atributos, com exceção daqueles que foram herdados e o cpnj que difere do cpf do cliente residencial.

## 6 - 
class IndustrialClinet extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, // tanto faz ser string ou number
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}

- a) Industry. Porque é um cliente industrial, logo está ligado a indústria.
- b) Client. Porque é um cliente da companhia, assim como as residenciais e comércios.
- c) Porque a única necessidade de alteração de dados contida no sistema de auxílio de cálculo está no método de cálculo da conta; fora desse escopo só é necessária a verificação de dados.
