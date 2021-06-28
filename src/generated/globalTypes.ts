/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface ArrayCode {
  in: string[];
}

export interface ArrayNumber {
  in: number[];
}

export interface CoinWhereUniqueInput {
  id: string;
}

export interface CountryWhereCodeInput {
  code: ArrayCode;
}

export interface CountryWhereUniqueInput {
  code: string;
}

export interface CurrencyWhereUniqueInput {
  code?: string | null;
  id?: string | null;
}

export interface Filters {
  NameCollection?: NameCollectionWhereIdInput | null;
  country?: CountryWhereCodeInput | null;
}

export interface MintWhereUniqueInput {
  id?: number | null;
}

export interface NameCollectionWhereIdInput {
  id: ArrayNumber;
}

export interface NestedCoinCreateInput {
  connect: CoinWhereUniqueInput;
}

export interface NestedCountyCreateInput {
  connect: CountryWhereUniqueInput;
}

export interface NestedCurrencyCreateInput {
  connect: CurrencyWhereUniqueInput;
}

export interface NestedMintCreateInput {
  connect: MintWhereUniqueInput;
}

export interface NewCoinInput {
  country: NestedCountyCreateInput;
  currency: NestedCurrencyCreateInput;
  current: boolean;
  denomination: number;
  description: string;
  mint: NestedMintCreateInput;
  name: string;
  url: string;
  year: number;
}

export interface NewUserInput {
  confirmPassword: string;
  email: string;
  password: string;
}

export interface WhereFilters {
  where?: Filters | null;
}

export interface newCollectionInput {
  coin: NestedCoinCreateInput;
  count: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
