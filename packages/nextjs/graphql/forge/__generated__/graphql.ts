/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['Bytes']['output'];
  totalItemsForged: Scalars['BigInt']['output'];
  totalItemsSmelted: Scalars['BigInt']['output'];
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  totalItemsForged?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalItemsForged_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalItemsSmelted?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalItemsSmelted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Account_OrderBy {
  Id = 'id',
  TotalItemsForged = 'totalItemsForged',
  TotalItemsSmelted = 'totalItemsSmelted'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type ForgeQueueItem = {
  __typename?: 'ForgeQueueItem';
  gotchi: Gotchi;
  /**  Gotchi ID + Item ID + Forge Queue Item ID  */
  id: Scalars['ID']['output'];
  isClaimed: Scalars['Boolean']['output'];
  item: Item;
  /**  Forge Queue Item ID  */
  queueId: Scalars['BigInt']['output'];
  readyBlock: Scalars['BigInt']['output'];
};

export type ForgeQueueItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ForgeQueueItem_Filter>>>;
  gotchi?: InputMaybe<Scalars['String']['input']>;
  gotchi_?: InputMaybe<Gotchi_Filter>;
  gotchi_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_gt?: InputMaybe<Scalars['String']['input']>;
  gotchi_gte?: InputMaybe<Scalars['String']['input']>;
  gotchi_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_lt?: InputMaybe<Scalars['String']['input']>;
  gotchi_lte?: InputMaybe<Scalars['String']['input']>;
  gotchi_not?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isClaimed?: InputMaybe<Scalars['Boolean']['input']>;
  isClaimed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isClaimed_not?: InputMaybe<Scalars['Boolean']['input']>;
  isClaimed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  item?: InputMaybe<Scalars['String']['input']>;
  item_?: InputMaybe<Item_Filter>;
  item_contains?: InputMaybe<Scalars['String']['input']>;
  item_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  item_ends_with?: InputMaybe<Scalars['String']['input']>;
  item_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  item_gt?: InputMaybe<Scalars['String']['input']>;
  item_gte?: InputMaybe<Scalars['String']['input']>;
  item_in?: InputMaybe<Array<Scalars['String']['input']>>;
  item_lt?: InputMaybe<Scalars['String']['input']>;
  item_lte?: InputMaybe<Scalars['String']['input']>;
  item_not?: InputMaybe<Scalars['String']['input']>;
  item_not_contains?: InputMaybe<Scalars['String']['input']>;
  item_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  item_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  item_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  item_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  item_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  item_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  item_starts_with?: InputMaybe<Scalars['String']['input']>;
  item_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ForgeQueueItem_Filter>>>;
  queueId?: InputMaybe<Scalars['BigInt']['input']>;
  queueId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queueId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queueId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queueId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queueId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queueId_not?: InputMaybe<Scalars['BigInt']['input']>;
  queueId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  readyBlock?: InputMaybe<Scalars['BigInt']['input']>;
  readyBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  readyBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  readyBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  readyBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  readyBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  readyBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  readyBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ForgeQueueItem_OrderBy {
  Gotchi = 'gotchi',
  GotchiId = 'gotchi__id',
  GotchiLevelMultiplier = 'gotchi__levelMultiplier',
  GotchiSkillPoints = 'gotchi__skillPoints',
  GotchiSmithingLevel = 'gotchi__smithingLevel',
  GotchiTotalItemsForged = 'gotchi__totalItemsForged',
  GotchiTotalItemsSmelted = 'gotchi__totalItemsSmelted',
  Id = 'id',
  IsClaimed = 'isClaimed',
  Item = 'item',
  ItemId = 'item__id',
  ItemTimesForged = 'item__timesForged',
  ItemTimesSmelted = 'item__timesSmelted',
  QueueId = 'queueId',
  ReadyBlock = 'readyBlock'
}

export type GeodeDraw = {
  __typename?: 'GeodeDraw';
  blockNumber: Scalars['BigInt']['output'];
  geodeTokenId: Scalars['BigInt']['output'];
  /**  Tx hash + logIndex  */
  id: Scalars['ID']['output'];
  itemWon?: Maybe<Item>;
  requestId: Scalars['Bytes']['output'];
  user: Account;
};

export type GeodeDraw_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GeodeDraw_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  geodeTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  geodeTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  itemWon?: InputMaybe<Scalars['String']['input']>;
  itemWon_?: InputMaybe<Item_Filter>;
  itemWon_contains?: InputMaybe<Scalars['String']['input']>;
  itemWon_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemWon_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemWon_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemWon_gt?: InputMaybe<Scalars['String']['input']>;
  itemWon_gte?: InputMaybe<Scalars['String']['input']>;
  itemWon_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemWon_lt?: InputMaybe<Scalars['String']['input']>;
  itemWon_lte?: InputMaybe<Scalars['String']['input']>;
  itemWon_not?: InputMaybe<Scalars['String']['input']>;
  itemWon_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemWon_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemWon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemWon_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemWon_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemWon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemWon_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemWon_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemWon_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<GeodeDraw_Filter>>>;
  requestId?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<Account_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum GeodeDraw_OrderBy {
  BlockNumber = 'blockNumber',
  GeodeTokenId = 'geodeTokenId',
  Id = 'id',
  ItemWon = 'itemWon',
  ItemWonId = 'itemWon__id',
  ItemWonTimesForged = 'itemWon__timesForged',
  ItemWonTimesSmelted = 'itemWon__timesSmelted',
  RequestId = 'requestId',
  User = 'user',
  UserId = 'user__id',
  UserTotalItemsForged = 'user__totalItemsForged',
  UserTotalItemsSmelted = 'user__totalItemsSmelted'
}

export type GeodePrize = {
  __typename?: 'GeodePrize';
  /**  Geode Prize ID  */
  id: Scalars['ID']['output'];
  /**  Total quantity  */
  quantity: Scalars['BigInt']['output'];
  /**  Times empty  */
  timesEmpty: Scalars['BigInt']['output'];
  /**  Times won  */
  timesWon: Scalars['BigInt']['output'];
};

export type GeodePrize_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GeodePrize_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GeodePrize_Filter>>>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesEmpty?: InputMaybe<Scalars['BigInt']['input']>;
  timesEmpty_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timesEmpty_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timesEmpty_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesEmpty_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timesEmpty_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timesEmpty_not?: InputMaybe<Scalars['BigInt']['input']>;
  timesEmpty_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesWon?: InputMaybe<Scalars['BigInt']['input']>;
  timesWon_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timesWon_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timesWon_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesWon_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timesWon_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timesWon_not?: InputMaybe<Scalars['BigInt']['input']>;
  timesWon_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum GeodePrize_OrderBy {
  Id = 'id',
  Quantity = 'quantity',
  TimesEmpty = 'timesEmpty',
  TimesWon = 'timesWon'
}

export type GeodeRefund = {
  __typename?: 'GeodeRefund';
  blockNumber: Scalars['BigInt']['output'];
  geodeTokenId: Scalars['BigInt']['output'];
  /**  Tx hash + logIndex  */
  id: Scalars['ID']['output'];
  requestId: Scalars['Bytes']['output'];
  user: Account;
};

export type GeodeRefund_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GeodeRefund_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  geodeTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  geodeTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  geodeTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GeodeRefund_Filter>>>;
  requestId?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<Account_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum GeodeRefund_OrderBy {
  BlockNumber = 'blockNumber',
  GeodeTokenId = 'geodeTokenId',
  Id = 'id',
  RequestId = 'requestId',
  User = 'user',
  UserId = 'user__id',
  UserTotalItemsForged = 'user__totalItemsForged',
  UserTotalItemsSmelted = 'user__totalItemsSmelted'
}

export type Gotchi = {
  __typename?: 'Gotchi';
  id: Scalars['ID']['output'];
  itemsForged?: Maybe<Array<ItemForged>>;
  itemsSmelted?: Maybe<Array<ItemSmelted>>;
  levelMultiplier: Scalars['Int']['output'];
  skillPoints: Scalars['Int']['output'];
  smithingLevel: Scalars['Int']['output'];
  totalItemsForged: Scalars['BigInt']['output'];
  totalItemsSmelted: Scalars['BigInt']['output'];
};


export type GotchiItemsForgedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemForged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ItemForged_Filter>;
};


export type GotchiItemsSmeltedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemSmelted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ItemSmelted_Filter>;
};

export type Gotchi_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gotchi_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  itemsForged_?: InputMaybe<ItemForged_Filter>;
  itemsSmelted_?: InputMaybe<ItemSmelted_Filter>;
  levelMultiplier?: InputMaybe<Scalars['Int']['input']>;
  levelMultiplier_gt?: InputMaybe<Scalars['Int']['input']>;
  levelMultiplier_gte?: InputMaybe<Scalars['Int']['input']>;
  levelMultiplier_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  levelMultiplier_lt?: InputMaybe<Scalars['Int']['input']>;
  levelMultiplier_lte?: InputMaybe<Scalars['Int']['input']>;
  levelMultiplier_not?: InputMaybe<Scalars['Int']['input']>;
  levelMultiplier_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Gotchi_Filter>>>;
  skillPoints?: InputMaybe<Scalars['Int']['input']>;
  skillPoints_gt?: InputMaybe<Scalars['Int']['input']>;
  skillPoints_gte?: InputMaybe<Scalars['Int']['input']>;
  skillPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  skillPoints_lt?: InputMaybe<Scalars['Int']['input']>;
  skillPoints_lte?: InputMaybe<Scalars['Int']['input']>;
  skillPoints_not?: InputMaybe<Scalars['Int']['input']>;
  skillPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  smithingLevel?: InputMaybe<Scalars['Int']['input']>;
  smithingLevel_gt?: InputMaybe<Scalars['Int']['input']>;
  smithingLevel_gte?: InputMaybe<Scalars['Int']['input']>;
  smithingLevel_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  smithingLevel_lt?: InputMaybe<Scalars['Int']['input']>;
  smithingLevel_lte?: InputMaybe<Scalars['Int']['input']>;
  smithingLevel_not?: InputMaybe<Scalars['Int']['input']>;
  smithingLevel_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalItemsForged?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalItemsForged_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsForged_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalItemsSmelted?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalItemsSmelted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalItemsSmelted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Gotchi_OrderBy {
  Id = 'id',
  ItemsForged = 'itemsForged',
  ItemsSmelted = 'itemsSmelted',
  LevelMultiplier = 'levelMultiplier',
  SkillPoints = 'skillPoints',
  SmithingLevel = 'smithingLevel',
  TotalItemsForged = 'totalItemsForged',
  TotalItemsSmelted = 'totalItemsSmelted'
}

export type Item = {
  __typename?: 'Item';
  /**  Item ID  */
  id: Scalars['ID']['output'];
  itemsForged?: Maybe<Array<ItemForged>>;
  itemsSmelted?: Maybe<Array<ItemSmelted>>;
  /**  Number of times this item has been forged  */
  timesForged: Scalars['BigInt']['output'];
  /**  Number of times this item has been smelted  */
  timesSmelted: Scalars['BigInt']['output'];
};


export type ItemItemsForgedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemForged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ItemForged_Filter>;
};


export type ItemItemsSmeltedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemSmelted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ItemSmelted_Filter>;
};

export type ItemForged = {
  __typename?: 'ItemForged';
  gotchi: Gotchi;
  /**  Tx hash + logIndex  */
  id: Scalars['ID']['output'];
  item: Item;
  timestamp: Scalars['BigInt']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type ItemForged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ItemForged_Filter>>>;
  gotchi?: InputMaybe<Scalars['String']['input']>;
  gotchi_?: InputMaybe<Gotchi_Filter>;
  gotchi_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_gt?: InputMaybe<Scalars['String']['input']>;
  gotchi_gte?: InputMaybe<Scalars['String']['input']>;
  gotchi_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_lt?: InputMaybe<Scalars['String']['input']>;
  gotchi_lte?: InputMaybe<Scalars['String']['input']>;
  gotchi_not?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  item?: InputMaybe<Scalars['String']['input']>;
  item_?: InputMaybe<Item_Filter>;
  item_contains?: InputMaybe<Scalars['String']['input']>;
  item_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  item_ends_with?: InputMaybe<Scalars['String']['input']>;
  item_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  item_gt?: InputMaybe<Scalars['String']['input']>;
  item_gte?: InputMaybe<Scalars['String']['input']>;
  item_in?: InputMaybe<Array<Scalars['String']['input']>>;
  item_lt?: InputMaybe<Scalars['String']['input']>;
  item_lte?: InputMaybe<Scalars['String']['input']>;
  item_not?: InputMaybe<Scalars['String']['input']>;
  item_not_contains?: InputMaybe<Scalars['String']['input']>;
  item_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  item_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  item_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  item_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  item_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  item_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  item_starts_with?: InputMaybe<Scalars['String']['input']>;
  item_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ItemForged_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ItemForged_OrderBy {
  Gotchi = 'gotchi',
  GotchiId = 'gotchi__id',
  GotchiLevelMultiplier = 'gotchi__levelMultiplier',
  GotchiSkillPoints = 'gotchi__skillPoints',
  GotchiSmithingLevel = 'gotchi__smithingLevel',
  GotchiTotalItemsForged = 'gotchi__totalItemsForged',
  GotchiTotalItemsSmelted = 'gotchi__totalItemsSmelted',
  Id = 'id',
  Item = 'item',
  ItemId = 'item__id',
  ItemTimesForged = 'item__timesForged',
  ItemTimesSmelted = 'item__timesSmelted',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type ItemSmelted = {
  __typename?: 'ItemSmelted';
  gotchi: Gotchi;
  /**  Tx hash + logIndex  */
  id: Scalars['ID']['output'];
  item: Item;
  timestamp: Scalars['BigInt']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type ItemSmelted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ItemSmelted_Filter>>>;
  gotchi?: InputMaybe<Scalars['String']['input']>;
  gotchi_?: InputMaybe<Gotchi_Filter>;
  gotchi_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_gt?: InputMaybe<Scalars['String']['input']>;
  gotchi_gte?: InputMaybe<Scalars['String']['input']>;
  gotchi_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_lt?: InputMaybe<Scalars['String']['input']>;
  gotchi_lte?: InputMaybe<Scalars['String']['input']>;
  gotchi_not?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  item?: InputMaybe<Scalars['String']['input']>;
  item_?: InputMaybe<Item_Filter>;
  item_contains?: InputMaybe<Scalars['String']['input']>;
  item_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  item_ends_with?: InputMaybe<Scalars['String']['input']>;
  item_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  item_gt?: InputMaybe<Scalars['String']['input']>;
  item_gte?: InputMaybe<Scalars['String']['input']>;
  item_in?: InputMaybe<Array<Scalars['String']['input']>>;
  item_lt?: InputMaybe<Scalars['String']['input']>;
  item_lte?: InputMaybe<Scalars['String']['input']>;
  item_not?: InputMaybe<Scalars['String']['input']>;
  item_not_contains?: InputMaybe<Scalars['String']['input']>;
  item_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  item_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  item_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  item_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  item_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  item_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  item_starts_with?: InputMaybe<Scalars['String']['input']>;
  item_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ItemSmelted_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ItemSmelted_OrderBy {
  Gotchi = 'gotchi',
  GotchiId = 'gotchi__id',
  GotchiLevelMultiplier = 'gotchi__levelMultiplier',
  GotchiSkillPoints = 'gotchi__skillPoints',
  GotchiSmithingLevel = 'gotchi__smithingLevel',
  GotchiTotalItemsForged = 'gotchi__totalItemsForged',
  GotchiTotalItemsSmelted = 'gotchi__totalItemsSmelted',
  Id = 'id',
  Item = 'item',
  ItemId = 'item__id',
  ItemTimesForged = 'item__timesForged',
  ItemTimesSmelted = 'item__timesSmelted',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type Item_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Item_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  itemsForged_?: InputMaybe<ItemForged_Filter>;
  itemsSmelted_?: InputMaybe<ItemSmelted_Filter>;
  or?: InputMaybe<Array<InputMaybe<Item_Filter>>>;
  timesForged?: InputMaybe<Scalars['BigInt']['input']>;
  timesForged_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timesForged_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timesForged_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesForged_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timesForged_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timesForged_not?: InputMaybe<Scalars['BigInt']['input']>;
  timesForged_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesSmelted?: InputMaybe<Scalars['BigInt']['input']>;
  timesSmelted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timesSmelted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timesSmelted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesSmelted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timesSmelted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timesSmelted_not?: InputMaybe<Scalars['BigInt']['input']>;
  timesSmelted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Item_OrderBy {
  Id = 'id',
  ItemsForged = 'itemsForged',
  ItemsSmelted = 'itemsSmelted',
  TimesForged = 'timesForged',
  TimesSmelted = 'timesSmelted'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  forgeQueueItem?: Maybe<ForgeQueueItem>;
  forgeQueueItems: Array<ForgeQueueItem>;
  geodeDraw?: Maybe<GeodeDraw>;
  geodeDraws: Array<GeodeDraw>;
  geodePrize?: Maybe<GeodePrize>;
  geodePrizes: Array<GeodePrize>;
  geodeRefund?: Maybe<GeodeRefund>;
  geodeRefunds: Array<GeodeRefund>;
  gotchi?: Maybe<Gotchi>;
  gotchis: Array<Gotchi>;
  item?: Maybe<Item>;
  itemForged?: Maybe<ItemForged>;
  itemForgeds: Array<ItemForged>;
  itemSmelted?: Maybe<ItemSmelted>;
  itemSmelteds: Array<ItemSmelted>;
  items: Array<Item>;
  vrfRequestResponse?: Maybe<VrfRequestResponse>;
  vrfRequestResponses: Array<VrfRequestResponse>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryForgeQueueItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryForgeQueueItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ForgeQueueItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ForgeQueueItem_Filter>;
};


export type QueryGeodeDrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGeodeDrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GeodeDraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GeodeDraw_Filter>;
};


export type QueryGeodePrizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGeodePrizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GeodePrize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GeodePrize_Filter>;
};


export type QueryGeodeRefundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGeodeRefundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GeodeRefund_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GeodeRefund_Filter>;
};


export type QueryGotchiArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGotchisArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gotchi_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Gotchi_Filter>;
};


export type QueryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryItemForgedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryItemForgedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemForged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemForged_Filter>;
};


export type QueryItemSmeltedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryItemSmeltedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemSmelted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemSmelted_Filter>;
};


export type QueryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};


export type QueryVrfRequestResponseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVrfRequestResponsesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VrfRequestResponse_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VrfRequestResponse_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  forgeQueueItem?: Maybe<ForgeQueueItem>;
  forgeQueueItems: Array<ForgeQueueItem>;
  geodeDraw?: Maybe<GeodeDraw>;
  geodeDraws: Array<GeodeDraw>;
  geodePrize?: Maybe<GeodePrize>;
  geodePrizes: Array<GeodePrize>;
  geodeRefund?: Maybe<GeodeRefund>;
  geodeRefunds: Array<GeodeRefund>;
  gotchi?: Maybe<Gotchi>;
  gotchis: Array<Gotchi>;
  item?: Maybe<Item>;
  itemForged?: Maybe<ItemForged>;
  itemForgeds: Array<ItemForged>;
  itemSmelted?: Maybe<ItemSmelted>;
  itemSmelteds: Array<ItemSmelted>;
  items: Array<Item>;
  vrfRequestResponse?: Maybe<VrfRequestResponse>;
  vrfRequestResponses: Array<VrfRequestResponse>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionForgeQueueItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionForgeQueueItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ForgeQueueItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ForgeQueueItem_Filter>;
};


export type SubscriptionGeodeDrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGeodeDrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GeodeDraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GeodeDraw_Filter>;
};


export type SubscriptionGeodePrizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGeodePrizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GeodePrize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GeodePrize_Filter>;
};


export type SubscriptionGeodeRefundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGeodeRefundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GeodeRefund_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GeodeRefund_Filter>;
};


export type SubscriptionGotchiArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGotchisArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gotchi_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Gotchi_Filter>;
};


export type SubscriptionItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionItemForgedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionItemForgedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemForged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemForged_Filter>;
};


export type SubscriptionItemSmeltedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionItemSmeltedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemSmelted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemSmelted_Filter>;
};


export type SubscriptionItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};


export type SubscriptionVrfRequestResponseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVrfRequestResponsesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VrfRequestResponse_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VrfRequestResponse_Filter>;
};

export type VrfRequestResponse = {
  __typename?: 'VrfRequestResponse';
  blockNumber: Scalars['BigInt']['output'];
  /**  Tx Hash + logIndex + Request ID  */
  id: Scalars['ID']['output'];
  randomNumber: Scalars['BigInt']['output'];
  requestId: Scalars['Bytes']['output'];
  user: Account;
};

export type VrfRequestResponse_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VrfRequestResponse_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VrfRequestResponse_Filter>>>;
  randomNumber?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  randomNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<Account_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VrfRequestResponse_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  RandomNumber = 'randomNumber',
  RequestId = 'requestId',
  User = 'user',
  UserId = 'user__id',
  UserTotalItemsForged = 'user__totalItemsForged',
  UserTotalItemsSmelted = 'user__totalItemsSmelted'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type LeaderboardQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LeaderboardQuery = { __typename?: 'Query', gotchis: Array<{ __typename: 'Gotchi', id: string, totalItemsForged: any, totalItemsSmelted: any, skillPoints: number, smithingLevel: number, itemsForged?: Array<{ __typename?: 'ItemForged', timestamp: any }> | null }> };

export type LeaderboardByBlockQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LeaderboardByBlockQuery = { __typename?: 'Query', gotchis: Array<{ __typename: 'Gotchi', id: string, totalItemsForged: any, totalItemsSmelted: any, skillPoints: number, smithingLevel: number, itemsForged?: Array<{ __typename?: 'ItemForged', timestamp: any }> | null }> };


export const LeaderboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"leaderboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gotchis"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"skillPoints"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_not_in"},"value":{"kind":"ListValue","values":[{"kind":"IntValue","value":"18760"},{"kind":"IntValue","value":"15099"},{"kind":"IntValue","value":"11339"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalItemsForged"}},{"kind":"Field","name":{"kind":"Name","value":"totalItemsSmelted"}},{"kind":"Field","name":{"kind":"Name","value":"skillPoints"}},{"kind":"Field","name":{"kind":"Name","value":"smithingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"itemsForged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"timestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]} as unknown as DocumentNode<LeaderboardQuery, LeaderboardQueryVariables>;
export const LeaderboardByBlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"leaderboardByBlock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"block"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gotchis"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"skillPoints"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"block"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"block"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_not_in"},"value":{"kind":"ListValue","values":[{"kind":"IntValue","value":"18760"},{"kind":"IntValue","value":"15099"},{"kind":"IntValue","value":"11339"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"totalItemsForged"}},{"kind":"Field","name":{"kind":"Name","value":"totalItemsSmelted"}},{"kind":"Field","name":{"kind":"Name","value":"skillPoints"}},{"kind":"Field","name":{"kind":"Name","value":"smithingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"itemsForged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"timestamp"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]} as unknown as DocumentNode<LeaderboardByBlockQuery, LeaderboardByBlockQueryVariables>;