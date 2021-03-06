import { buildSchemaSync, Resolver, Query } from "type-graphql";
import { CoinResolver } from "./coin";
import { CollectionResolver } from "./collection";
import { CountryResolver } from "./country";
import { CurrencyResolver } from "./currency";
import { ImageResolver } from "./image";
import { MintResolver } from "./mind";
import { NameCollectionResolver } from "./nameCollection";
import { UserResolver } from "./user";
import { authChecker } from "./auth";
import { PriceResolver } from "./price";

export const schema = buildSchemaSync({
  resolvers: [UserResolver, CoinResolver, CollectionResolver, ImageResolver, CountryResolver, CurrencyResolver, MintResolver, NameCollectionResolver, PriceResolver],
  emitSchemaFile: process.env.NODE_ENV === "development",
  authChecker
});
