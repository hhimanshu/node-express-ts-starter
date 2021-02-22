export interface Transaction {
  when: Date;
  amount: number;
  isDebit: boolean;
}

export interface Customer {
  first: String;
  last: String;
}
