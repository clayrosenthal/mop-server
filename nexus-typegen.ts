/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  LibraryInput: { // input type
    id: string; // String!
  }
  PersonInput: { // input type
    id: string; // String!
  }
  TitleSearchRequest: { // input type
    searchText?: string | null; // String
  }
}

export interface NexusGenEnums {
  BorrowerVerificationFlags: "CURRENT_ADDRESS_VERIFIED" | "EMAIL_VERIFIED" | "ID_SCANNED" | "ITEM_RFID_CHIP" | "PHONE_NUMBER"
  FeeStatus: "FORGIVEN" | "IN_PAYMENT" | "OUTSTANDING" | "PAID"
  LoanStatus: "BORROWED" | "OVERDUE" | "RETURNED" | "RETURNED_DAMAGED" | "RETURN_STARTED" | "WAITING_ON_LENDER_ACCEPTANCE"
  LocationTypeEnum: "Distributed" | "Physical" | "Virtual"
  ThingStatus: "BORROWED" | "DAMAGED" | "READY" | "RESERVED"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  Borrower: { // root type
    BorrowerVerificationFlags: Array<NexusGenEnums['BorrowerVerificationFlags'] | null>; // [BorrowerVerificationFlags]!
    fees: Array<NexusGenRootTypes['LibraryFee'] | null>; // [LibraryFee]!
    library: NexusGenRootTypes['Library']; // Library!
    person: NexusGenRootTypes['Person']; // Person!
  }
  DistributedLibrary: { // root type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
  DueDate: { // root type
    date?: string | null; // String
  }
  Email: { // root type
    value: string; // String!
  }
  Lender: { // root type
    id: string; // String!
  }
  LibraryFee: { // root type
    amount: NexusGenRootTypes['Money']; // Money!
    chargedFor: NexusGenRootTypes['Loan']; // Loan!
    status: NexusGenEnums['FeeStatus']; // FeeStatus!
  }
  LibrarySearchResult: { // root type
    library: NexusGenRootTypes['Library']; // Library!
    things: Array<NexusGenRootTypes['Thing'] | null>; // [Thing]!
  }
  Loan: { // root type
    borrower: NexusGenRootTypes['Borrower']; // Borrower!
    dateReturned?: string | null; // String
    dueDate: NexusGenRootTypes['DueDate']; // DueDate!
    id: string; // String!
    item: NexusGenRootTypes['Thing']; // Thing!
    permanentLoan: boolean; // Boolean!
    returnLocation: NexusGenRootTypes['Location']; // Location!
  }
  Money: { // root type
    amount: number; // Float!
    currencyName: string; // String!
    symbol: string; // String!
  }
  Mutation: {};
  Person: { // root type
    emails: NexusGenRootTypes['Email'][]; // [Email!]!
    id: string; // String!
    name: NexusGenRootTypes['PersonName']; // PersonName!
  }
  PersonName: { // root type
    firstName: string; // String!
    lastName: string; // String!
    middleName?: string | null; // String
  }
  PhysicalArea: { // root type
    centerPoint: NexusGenRootTypes['PhysicalLocation']; // PhysicalLocation!
    distance: number; // Float!
  }
  PhysicalLocation: { // root type
    apartment?: string | null; // String
    city?: string | null; // String
    country?: string | null; // String
    latitude?: string | null; // String
    longitude?: string | null; // String
    state?: string | null; // String
    streetAddress?: string | null; // String
    streetName?: string | null; // String
    zipcode?: string | null; // String
  }
  Query: {};
  SimpleLibrary: { // root type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
  Thing: { // root type
    id: string; // String!
    imageUrls: string[]; // [String!]!
    owner: NexusGenRootTypes['Lender']; // Lender!
    storageLocation: NexusGenRootTypes['Location']; // Location!
    title: NexusGenRootTypes['ThingTitle']; // ThingTitle!
  }
  ThingTitle: { // root type
    description?: string | null; // String
    isbn?: string | null; // String
    name: string; // String!
    upc?: string | null; // String
  }
  TitleSearchResult: { // root type
    libraryResults: Array<NexusGenRootTypes['LibrarySearchResult'] | null>; // [LibrarySearchResult]!
    title: NexusGenRootTypes['ThingTitle']; // ThingTitle!
  }
  VirtualLocation: { // root type
    url?: string | null; // String
  }
}

export interface NexusGenInterfaces {
  Library: NexusGenRootTypes['DistributedLibrary'] | NexusGenRootTypes['SimpleLibrary'];
}

export interface NexusGenUnions {
  Location: NexusGenRootTypes['PhysicalArea'] | NexusGenRootTypes['PhysicalLocation'];
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects & NexusGenUnions

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Borrower: { // field return type
    BorrowerVerificationFlags: Array<NexusGenEnums['BorrowerVerificationFlags'] | null>; // [BorrowerVerificationFlags]!
    fees: Array<NexusGenRootTypes['LibraryFee'] | null>; // [LibraryFee]!
    library: NexusGenRootTypes['Library']; // Library!
    person: NexusGenRootTypes['Person']; // Person!
  }
  DistributedLibrary: { // field return type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    items: Array<NexusGenRootTypes['Thing'] | null>; // [Thing]!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
  DueDate: { // field return type
    date: string | null; // String
  }
  Email: { // field return type
    value: string; // String!
  }
  Lender: { // field return type
    id: string; // String!
  }
  LibraryFee: { // field return type
    amount: NexusGenRootTypes['Money']; // Money!
    chargedFor: NexusGenRootTypes['Loan']; // Loan!
    status: NexusGenEnums['FeeStatus']; // FeeStatus!
  }
  LibrarySearchResult: { // field return type
    library: NexusGenRootTypes['Library']; // Library!
    things: Array<NexusGenRootTypes['Thing'] | null>; // [Thing]!
  }
  Loan: { // field return type
    borrower: NexusGenRootTypes['Borrower']; // Borrower!
    dateReturned: string | null; // String
    dueDate: NexusGenRootTypes['DueDate']; // DueDate!
    id: string; // String!
    item: NexusGenRootTypes['Thing']; // Thing!
    permanentLoan: boolean; // Boolean!
    returnLocation: NexusGenRootTypes['Location']; // Location!
    status: NexusGenEnums['LoanStatus']; // LoanStatus!
  }
  Money: { // field return type
    amount: number; // Float!
    currencyName: string; // String!
    symbol: string; // String!
  }
  Mutation: { // field return type
    borrow: NexusGenRootTypes['Loan']; // Loan!
  }
  Person: { // field return type
    emails: NexusGenRootTypes['Email'][]; // [Email!]!
    id: string; // String!
    name: NexusGenRootTypes['PersonName']; // PersonName!
  }
  PersonName: { // field return type
    firstName: string; // String!
    lastName: string; // String!
    middleName: string | null; // String
  }
  PhysicalArea: { // field return type
    centerPoint: NexusGenRootTypes['PhysicalLocation']; // PhysicalLocation!
    distance: number; // Float!
  }
  PhysicalLocation: { // field return type
    apartment: string | null; // String
    city: string | null; // String
    country: string | null; // String
    latitude: string | null; // String
    longitude: string | null; // String
    state: string | null; // String
    streetAddress: string | null; // String
    streetName: string | null; // String
    zipcode: string | null; // String
  }
  Query: { // field return type
    allLibraries: NexusGenRootTypes['Library'][]; // [Library!]!
    librariesForPerson: NexusGenRootTypes['Library'][]; // [Library!]!
    loansForLibrary: NexusGenRootTypes['Loan'][]; // [Loan!]!
    loansForPerson: NexusGenRootTypes['Loan'][]; // [Loan!]!
    titleSearchResults: NexusGenRootTypes['TitleSearchResult'][]; // [TitleSearchResult!]!
  }
  SimpleLibrary: { // field return type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    items: Array<NexusGenRootTypes['Thing'] | null>; // [Thing]!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
  Thing: { // field return type
    id: string; // String!
    imageUrls: string[]; // [String!]!
    owner: NexusGenRootTypes['Lender']; // Lender!
    requiredBorrowerFlags: NexusGenEnums['BorrowerVerificationFlags'][]; // [BorrowerVerificationFlags!]!
    status: NexusGenEnums['ThingStatus']; // ThingStatus!
    storageLocation: NexusGenRootTypes['Location']; // Location!
    title: NexusGenRootTypes['ThingTitle']; // ThingTitle!
  }
  ThingTitle: { // field return type
    description: string | null; // String
    isbn: string | null; // String
    name: string; // String!
    upc: string | null; // String
  }
  TitleSearchResult: { // field return type
    libraryResults: Array<NexusGenRootTypes['LibrarySearchResult'] | null>; // [LibrarySearchResult]!
    title: NexusGenRootTypes['ThingTitle']; // ThingTitle!
  }
  VirtualLocation: { // field return type
    url: string | null; // String
  }
  Library: { // field return type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    items: Array<NexusGenRootTypes['Thing'] | null>; // [Thing]!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Borrower: { // field return type name
    BorrowerVerificationFlags: 'BorrowerVerificationFlags'
    fees: 'LibraryFee'
    library: 'Library'
    person: 'Person'
  }
  DistributedLibrary: { // field return type name
    administrator: 'Person'
    id: 'String'
    items: 'Thing'
    location: 'Location'
    name: 'String'
  }
  DueDate: { // field return type name
    date: 'String'
  }
  Email: { // field return type name
    value: 'String'
  }
  Lender: { // field return type name
    id: 'String'
  }
  LibraryFee: { // field return type name
    amount: 'Money'
    chargedFor: 'Loan'
    status: 'FeeStatus'
  }
  LibrarySearchResult: { // field return type name
    library: 'Library'
    things: 'Thing'
  }
  Loan: { // field return type name
    borrower: 'Borrower'
    dateReturned: 'String'
    dueDate: 'DueDate'
    id: 'String'
    item: 'Thing'
    permanentLoan: 'Boolean'
    returnLocation: 'Location'
    status: 'LoanStatus'
  }
  Money: { // field return type name
    amount: 'Float'
    currencyName: 'String'
    symbol: 'String'
  }
  Mutation: { // field return type name
    borrow: 'Loan'
  }
  Person: { // field return type name
    emails: 'Email'
    id: 'String'
    name: 'PersonName'
  }
  PersonName: { // field return type name
    firstName: 'String'
    lastName: 'String'
    middleName: 'String'
  }
  PhysicalArea: { // field return type name
    centerPoint: 'PhysicalLocation'
    distance: 'Float'
  }
  PhysicalLocation: { // field return type name
    apartment: 'String'
    city: 'String'
    country: 'String'
    latitude: 'String'
    longitude: 'String'
    state: 'String'
    streetAddress: 'String'
    streetName: 'String'
    zipcode: 'String'
  }
  Query: { // field return type name
    allLibraries: 'Library'
    librariesForPerson: 'Library'
    loansForLibrary: 'Loan'
    loansForPerson: 'Loan'
    titleSearchResults: 'TitleSearchResult'
  }
  SimpleLibrary: { // field return type name
    administrator: 'Person'
    id: 'String'
    items: 'Thing'
    location: 'Location'
    name: 'String'
  }
  Thing: { // field return type name
    id: 'String'
    imageUrls: 'String'
    owner: 'Lender'
    requiredBorrowerFlags: 'BorrowerVerificationFlags'
    status: 'ThingStatus'
    storageLocation: 'Location'
    title: 'ThingTitle'
  }
  ThingTitle: { // field return type name
    description: 'String'
    isbn: 'String'
    name: 'String'
    upc: 'String'
  }
  TitleSearchResult: { // field return type name
    libraryResults: 'LibrarySearchResult'
    title: 'ThingTitle'
  }
  VirtualLocation: { // field return type name
    url: 'String'
  }
  Library: { // field return type name
    administrator: 'Person'
    id: 'String'
    items: 'Thing'
    location: 'Location'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    borrow: { // args
      libraryID: string; // String!
      person: NexusGenInputs['PersonInput']; // PersonInput!
      thingID: string; // String!
      until?: string | null; // String
    }
  }
  Query: {
    librariesForPerson: { // args
      person: NexusGenInputs['PersonInput']; // PersonInput!
    }
    loansForLibrary: { // args
      hideNonReturn?: boolean | null; // Boolean
      library: NexusGenInputs['LibraryInput']; // LibraryInput!
    }
    loansForPerson: { // args
      hideNonReturn?: boolean | null; // Boolean
      person: NexusGenInputs['PersonInput']; // PersonInput!
    }
    titleSearchResults: { // args
      person: NexusGenInputs['PersonInput']; // PersonInput!
      searchRequest?: NexusGenInputs['TitleSearchRequest'] | null; // TitleSearchRequest
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Location: "PhysicalArea" | "PhysicalLocation"
  Library: "DistributedLibrary" | "SimpleLibrary"
}

export interface NexusGenTypeInterfaces {
  DistributedLibrary: "Library"
  SimpleLibrary: "Library"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "Library" | "Location";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}