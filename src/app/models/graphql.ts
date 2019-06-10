export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `ID` scalar type represents a unique MongoDB identifier in collection.
   * MongoDB by default use 12-byte ObjectId value
   * (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB
   * also may accepts string or integer as correct values for _id field.
 */
  MongoID: any,
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};

export type _IdOperatorsFilterFindManyCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyMapInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyRoleInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyStratInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyTeamInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneMapInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOnePlayerInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneRoleInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneTeamInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterRemoveOnePlayerInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterUpdateManyPlayerInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterUpdateOneTeamInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type Character = {
  __typename?: 'Character',
  name?: Maybe<Scalars['String']>,
  role?: Maybe<Role>,
  img?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
};

export type CreateOneMatchInput = {
  date: Scalars['Date'],
  sr?: Maybe<Scalars['Float']>,
  teamSr?: Maybe<Scalars['Float']>,
  lineup: Scalars['MongoID'],
  type: EnumMatchType,
  result?: Maybe<Array<Maybe<MatchResultInput>>>,
  vod?: Maybe<Array<Maybe<Scalars['String']>>>,
  debrief?: Maybe<Scalars['String']>,
};

export type CreateOneMatchPayload = {
  __typename?: 'CreateOneMatchPayload',
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Created document */
  record?: Maybe<Match>,
};

export type CreateOnePlayerInput = {
  mainBtag: Scalars['String'],
  lineup: Scalars['MongoID'],
  status: Array<Maybe<EnumPlayerStatus>>,
  doodle?: Maybe<Array<Maybe<Scalars['Float']>>>,
  bnetProfileId?: Maybe<Scalars['String']>,
  objectives?: Maybe<Scalars['String']>,
  discordAccount?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['MongoID']>,
  profile?: Maybe<PlayerProfileInput>,
  lastStats?: Maybe<Scalars['JSON']>,
  defaultAvailability?: Maybe<Scalars['Float']>,
};

export type CreateOnePlayerPayload = {
  __typename?: 'CreateOnePlayerPayload',
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Created document */
  record?: Maybe<Player>,
};

export type CreateOneStratInput = {
  lineup: Scalars['MongoID'],
  map: Scalars['MongoID'],
  comps?: Maybe<Array<Maybe<StratCompsInput>>>,
  comments?: Maybe<Scalars['String']>,
};

export type CreateOneStratPayload = {
  __typename?: 'CreateOneStratPayload',
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Created document */
  record?: Maybe<Strat>,
};


export enum EnumMatchType {
  Scrim = 'Scrim',
  Tournament = 'Tournament',
  Ranked = 'Ranked'
}

export enum EnumPlayerStatus {
  Player = 'Player',
  Candidate = 'Candidate',
  Captain = 'Captain',
  Coach = 'Coach',
  Staff = 'Staff',
  Founder = 'Founder'
}

export type FilterFindManyCharacterInput = {
  name?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['MongoID']>,
  img?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyCharacterInput>,
  OR?: Maybe<Array<FilterFindManyCharacterInput>>,
  AND?: Maybe<Array<FilterFindManyCharacterInput>>,
};

export type FilterFindManyMapInput = {
  name?: Maybe<Scalars['String']>,
  mapTypes?: Maybe<Array<Maybe<Scalars['String']>>>,
  thumbnail?: Maybe<Scalars['String']>,
  flagUrl?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyMapInput>,
  OR?: Maybe<Array<FilterFindManyMapInput>>,
  AND?: Maybe<Array<FilterFindManyMapInput>>,
};

export type FilterFindManyRoleInput = {
  name?: Maybe<Scalars['String']>,
  img?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyRoleInput>,
  OR?: Maybe<Array<FilterFindManyRoleInput>>,
  AND?: Maybe<Array<FilterFindManyRoleInput>>,
};

export type FilterFindManyStratInput = {
  lineup?: Maybe<Scalars['MongoID']>,
  map?: Maybe<Scalars['MongoID']>,
  comps?: Maybe<Array<Maybe<StratCompsInput>>>,
  comments?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyStratInput>,
  OR?: Maybe<Array<FilterFindManyStratInput>>,
  AND?: Maybe<Array<FilterFindManyStratInput>>,
};

export type FilterFindManyTeamInput = {
  name?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyTeamInput>,
  OR?: Maybe<Array<FilterFindManyTeamInput>>,
  AND?: Maybe<Array<FilterFindManyTeamInput>>,
};

export type FilterFindOneCharacterInput = {
  name?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['MongoID']>,
  img?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneCharacterInput>,
  OR?: Maybe<Array<FilterFindOneCharacterInput>>,
  AND?: Maybe<Array<FilterFindOneCharacterInput>>,
};

export type FilterFindOneMapInput = {
  name?: Maybe<Scalars['String']>,
  mapTypes?: Maybe<Array<Maybe<Scalars['String']>>>,
  thumbnail?: Maybe<Scalars['String']>,
  flagUrl?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneMapInput>,
  OR?: Maybe<Array<FilterFindOneMapInput>>,
  AND?: Maybe<Array<FilterFindOneMapInput>>,
};

export type FilterFindOnePlayerInput = {
  mainBtag?: Maybe<Scalars['String']>,
  lineup?: Maybe<Scalars['MongoID']>,
  status?: Maybe<Array<Maybe<EnumPlayerStatus>>>,
  doodle?: Maybe<Array<Maybe<Scalars['Float']>>>,
  bnetProfileId?: Maybe<Scalars['String']>,
  objectives?: Maybe<Scalars['String']>,
  discordAccount?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['MongoID']>,
  profile?: Maybe<PlayerProfileInput>,
  lastStats?: Maybe<Scalars['JSON']>,
  defaultAvailability?: Maybe<Scalars['Float']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOnePlayerInput>,
  OR?: Maybe<Array<FilterFindOnePlayerInput>>,
  AND?: Maybe<Array<FilterFindOnePlayerInput>>,
};

export type FilterFindOneRoleInput = {
  name?: Maybe<Scalars['String']>,
  img?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneRoleInput>,
  OR?: Maybe<Array<FilterFindOneRoleInput>>,
  AND?: Maybe<Array<FilterFindOneRoleInput>>,
};

export type FilterFindOneTeamInput = {
  name?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneTeamInput>,
  OR?: Maybe<Array<FilterFindOneTeamInput>>,
  AND?: Maybe<Array<FilterFindOneTeamInput>>,
};

export type FilterRemoveOnePlayerInput = {
  mainBtag?: Maybe<Scalars['String']>,
  lineup?: Maybe<Scalars['MongoID']>,
  status?: Maybe<Array<Maybe<EnumPlayerStatus>>>,
  doodle?: Maybe<Array<Maybe<Scalars['Float']>>>,
  bnetProfileId?: Maybe<Scalars['String']>,
  objectives?: Maybe<Scalars['String']>,
  discordAccount?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['MongoID']>,
  profile?: Maybe<PlayerProfileInput>,
  lastStats?: Maybe<Scalars['JSON']>,
  defaultAvailability?: Maybe<Scalars['Float']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveOnePlayerInput>,
  OR?: Maybe<Array<FilterRemoveOnePlayerInput>>,
  AND?: Maybe<Array<FilterRemoveOnePlayerInput>>,
};

export type FilterUpdateManyPlayerInput = {
  mainBtag?: Maybe<Scalars['String']>,
  lineup?: Maybe<Scalars['MongoID']>,
  status?: Maybe<Array<Maybe<EnumPlayerStatus>>>,
  doodle?: Maybe<Array<Maybe<Scalars['Float']>>>,
  bnetProfileId?: Maybe<Scalars['String']>,
  objectives?: Maybe<Scalars['String']>,
  discordAccount?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['MongoID']>,
  profile?: Maybe<PlayerProfileInput>,
  lastStats?: Maybe<Scalars['JSON']>,
  defaultAvailability?: Maybe<Scalars['Float']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateManyPlayerInput>,
  OR?: Maybe<Array<FilterUpdateManyPlayerInput>>,
  AND?: Maybe<Array<FilterUpdateManyPlayerInput>>,
};

export type FilterUpdateOneTeamInput = {
  name?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateOneTeamInput>,
  OR?: Maybe<Array<FilterUpdateOneTeamInput>>,
  AND?: Maybe<Array<FilterUpdateOneTeamInput>>,
};


export type Lineup = {
  __typename?: 'Lineup',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  objectives?: Maybe<Scalars['String']>,
  definedPlanning?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  _id: Scalars['MongoID'],
  strats?: Maybe<Array<Maybe<Strat>>>,
  players?: Maybe<Array<Maybe<Player>>>,
  matchHistory?: Maybe<Array<Maybe<Match>>>,
  matchSchedule?: Maybe<Array<Maybe<Match>>>,
  /** Average SR */
  averageSr?: Maybe<Scalars['Int']>,
  otherLineups?: Maybe<Array<Maybe<Lineup>>>,
};


export type LineupStratsArgs = {
  filter?: Maybe<FilterFindManyStratInput>,
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int'],
  sort?: Maybe<SortFindManyStratInput>
};


export type LineupPlayersArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int'],
  sort?: Maybe<SortFindManyPlayerInput>
};


export type LineupMatchHistoryArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int']
};


export type LineupMatchScheduleArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int']
};


export type LineupOtherLineupsArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int'],
  sort?: Maybe<SortFindManyLineupInput>
};

export type MainBtagOperatorsFilterFindOnePlayerInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type MainBtagOperatorsFilterRemoveOnePlayerInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type MainBtagOperatorsFilterUpdateManyPlayerInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type Map = {
  __typename?: 'Map',
  name?: Maybe<Scalars['String']>,
  mapTypes?: Maybe<Array<Maybe<Scalars['String']>>>,
  thumbnail?: Maybe<Scalars['String']>,
  flagUrl?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
};

export type Match = {
  __typename?: 'Match',
  date?: Maybe<Scalars['Date']>,
  sr?: Maybe<Scalars['Float']>,
  teamSr?: Maybe<Scalars['Float']>,
  lineup?: Maybe<Scalars['MongoID']>,
  type?: Maybe<EnumMatchType>,
  result?: Maybe<Array<Maybe<MatchResult>>>,
  vod?: Maybe<Array<Maybe<Scalars['String']>>>,
  debrief?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
};

export type MatchResult = {
  __typename?: 'MatchResult',
  map?: Maybe<Scalars['MongoID']>,
  score?: Maybe<Scalars['Float']>,
  enemyScore?: Maybe<Scalars['Float']>,
  _id?: Maybe<Scalars['MongoID']>,
};

export type MatchResultInput = {
  map?: Maybe<Scalars['MongoID']>,
  score?: Maybe<Scalars['Float']>,
  enemyScore?: Maybe<Scalars['Float']>,
  _id?: Maybe<Scalars['MongoID']>,
};


export type Mutation = {
  __typename?: 'Mutation',
  /** Create one document with mongoose defaults, setters, hooks and validation */
  playerCreateOne?: Maybe<CreateOnePlayerPayload>,
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
 */
  playerUpdateById?: Maybe<UpdateByIdPlayerPayload>,
  /** Update many documents without returning them: Use Query.update mongoose
   * method. Do not apply mongoose defaults, setters, hooks and validation. 
 */
  playerUpdateMany?: Maybe<UpdateManyPlayerPayload>,
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  playerRemoveById?: Maybe<RemoveOnePlayerPayload>,
  /** Create one document with mongoose defaults, setters, hooks and validation */
  stratCreateOne?: Maybe<CreateOneStratPayload>,
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
 */
  stratUpdateById?: Maybe<UpdateByIdStratPayload>,
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
 */
  lineupUpdateById?: Maybe<UpdateByIdLineupPayload>,
  /** Create one document with mongoose defaults, setters, hooks and validation */
  matchCreateOne?: Maybe<CreateOneMatchPayload>,
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
 */
  matchUpdateById?: Maybe<UpdateByIdMatchPayload>,
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  matchRemoveById?: Maybe<RemoveByIdMatchPayload>,
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
 */
  teamUpdateOne?: Maybe<UpdateOneTeamPayload>,
};


export type MutationPlayerCreateOneArgs = {
  record: CreateOnePlayerInput
};


export type MutationPlayerUpdateByIdArgs = {
  record: UpdateByIdPlayerInput
};


export type MutationPlayerUpdateManyArgs = {
  record: UpdateManyPlayerInput,
  filter?: Maybe<FilterUpdateManyPlayerInput>,
  sort?: Maybe<SortUpdateManyPlayerInput>,
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int']
};


export type MutationPlayerRemoveByIdArgs = {
  filter?: Maybe<FilterRemoveOnePlayerInput>,
  sort?: Maybe<SortRemoveOnePlayerInput>
};


export type MutationStratCreateOneArgs = {
  record: CreateOneStratInput
};


export type MutationStratUpdateByIdArgs = {
  record: UpdateByIdStratInput
};


export type MutationLineupUpdateByIdArgs = {
  record: UpdateByIdLineupInput
};


export type MutationMatchCreateOneArgs = {
  record: CreateOneMatchInput
};


export type MutationMatchUpdateByIdArgs = {
  record: UpdateByIdMatchInput
};


export type MutationMatchRemoveByIdArgs = {
  _id: Scalars['MongoID']
};


export type MutationTeamUpdateOneArgs = {
  record: UpdateOneTeamInput,
  filter?: Maybe<FilterUpdateOneTeamInput>,
  sort?: Maybe<SortUpdateOneTeamInput>,
  skip?: Maybe<Scalars['Int']>
};

export type NameOperatorsFilterFindManyCharacterInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type NameOperatorsFilterFindManyMapInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type NameOperatorsFilterFindOneCharacterInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type NameOperatorsFilterFindOneMapInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyCharacterInput = {
  name?: Maybe<NameOperatorsFilterFindManyCharacterInput>,
  _id?: Maybe<_IdOperatorsFilterFindManyCharacterInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyMapInput = {
  name?: Maybe<NameOperatorsFilterFindManyMapInput>,
  _id?: Maybe<_IdOperatorsFilterFindManyMapInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyRoleInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyRoleInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyStratInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyStratInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyTeamInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyTeamInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneCharacterInput = {
  name?: Maybe<NameOperatorsFilterFindOneCharacterInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneCharacterInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneMapInput = {
  name?: Maybe<NameOperatorsFilterFindOneMapInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneMapInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOnePlayerInput = {
  mainBtag?: Maybe<MainBtagOperatorsFilterFindOnePlayerInput>,
  _id?: Maybe<_IdOperatorsFilterFindOnePlayerInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneRoleInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneRoleInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneTeamInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneTeamInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveOnePlayerInput = {
  mainBtag?: Maybe<MainBtagOperatorsFilterRemoveOnePlayerInput>,
  _id?: Maybe<_IdOperatorsFilterRemoveOnePlayerInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateManyPlayerInput = {
  mainBtag?: Maybe<MainBtagOperatorsFilterUpdateManyPlayerInput>,
  _id?: Maybe<_IdOperatorsFilterUpdateManyPlayerInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateOneTeamInput = {
  _id?: Maybe<_IdOperatorsFilterUpdateOneTeamInput>,
};

export type Player = {
  __typename?: 'Player',
  mainBtag?: Maybe<Scalars['String']>,
  lineup?: Maybe<Lineup>,
  status?: Maybe<Array<Maybe<EnumPlayerStatus>>>,
  doodle?: Maybe<Array<Maybe<Scalars['Float']>>>,
  bnetProfileId?: Maybe<Scalars['String']>,
  objectives?: Maybe<Scalars['String']>,
  discordAccount?: Maybe<Scalars['String']>,
  role?: Maybe<Role>,
  profile?: Maybe<PlayerProfile>,
  lastStats?: Maybe<Scalars['JSON']>,
  defaultAvailability?: Maybe<Scalars['Float']>,
  _id: Scalars['MongoID'],
  /** Player name */
  name?: Maybe<Scalars['String']>,
};

export type PlayerProfile = {
  __typename?: 'PlayerProfile',
  level?: Maybe<Scalars['Float']>,
  portrait?: Maybe<Scalars['String']>,
  endorsement?: Maybe<Scalars['JSON']>,
  rank?: Maybe<Array<Maybe<PlayerProfileRank>>>,
  rank_img?: Maybe<Scalars['String']>,
  levelFrame?: Maybe<Scalars['String']>,
  levelStars?: Maybe<Scalars['String']>,
};

export type PlayerProfileInput = {
  level?: Maybe<Scalars['Float']>,
  portrait?: Maybe<Scalars['String']>,
  endorsement?: Maybe<Scalars['JSON']>,
  rank?: Maybe<Array<Maybe<PlayerProfileRankInput>>>,
  rank_img?: Maybe<Scalars['String']>,
  levelFrame?: Maybe<Scalars['String']>,
  levelStars?: Maybe<Scalars['String']>,
};

export type PlayerProfileRank = {
  __typename?: 'PlayerProfileRank',
  date?: Maybe<Scalars['Date']>,
  srValue?: Maybe<Scalars['Float']>,
  _id?: Maybe<Scalars['MongoID']>,
};

export type PlayerProfileRankInput = {
  date?: Maybe<Scalars['Date']>,
  srValue?: Maybe<Scalars['Float']>,
  _id?: Maybe<Scalars['MongoID']>,
};

export type Query = {
  __typename?: 'Query',
  mapOne?: Maybe<Map>,
  mapsMany?: Maybe<Array<Maybe<Map>>>,
  roleOne?: Maybe<Role>,
  rolesMany?: Maybe<Array<Maybe<Role>>>,
  characterOne?: Maybe<Character>,
  characterMany?: Maybe<Array<Maybe<Character>>>,
  updatePlayerData?: Maybe<Player>,
  playerLogin?: Maybe<Player>,
  playerOne?: Maybe<Player>,
  playerById?: Maybe<Player>,
  playersByIds?: Maybe<Array<Maybe<Player>>>,
  lineupById?: Maybe<Lineup>,
  lineupsByIds?: Maybe<Array<Maybe<Lineup>>>,
  matchById?: Maybe<Team>,
  matchMany?: Maybe<Array<Maybe<Team>>>,
  team?: Maybe<Team>,
};


export type QueryMapOneArgs = {
  filter?: Maybe<FilterFindOneMapInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneMapInput>
};


export type QueryMapsManyArgs = {
  filter?: Maybe<FilterFindManyMapInput>,
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int'],
  sort?: Maybe<SortFindManyMapInput>
};


export type QueryRoleOneArgs = {
  filter?: Maybe<FilterFindOneRoleInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneRoleInput>
};


export type QueryRolesManyArgs = {
  filter?: Maybe<FilterFindManyRoleInput>,
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int'],
  sort?: Maybe<SortFindManyRoleInput>
};


export type QueryCharacterOneArgs = {
  filter?: Maybe<FilterFindOneCharacterInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneCharacterInput>
};


export type QueryCharacterManyArgs = {
  filter?: Maybe<FilterFindManyCharacterInput>,
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int'],
  sort?: Maybe<SortFindManyCharacterInput>
};


export type QueryPlayerOneArgs = {
  filter?: Maybe<FilterFindOnePlayerInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOnePlayerInput>
};


export type QueryPlayerByIdArgs = {
  _id: Scalars['MongoID']
};


export type QueryPlayersByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>,
  limit: Scalars['Int'],
  sort?: Maybe<SortFindByIdsPlayerInput>
};


export type QueryLineupByIdArgs = {
  _id: Scalars['MongoID']
};


export type QueryLineupsByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>,
  limit: Scalars['Int'],
  sort?: Maybe<SortFindByIdsLineupInput>
};


export type QueryMatchByIdArgs = {
  _id: Scalars['MongoID']
};


export type QueryMatchManyArgs = {
  filter?: Maybe<FilterFindManyTeamInput>,
  skip?: Maybe<Scalars['Int']>,
  limit: Scalars['Int'],
  sort?: Maybe<SortFindManyTeamInput>
};


export type QueryTeamArgs = {
  filter?: Maybe<FilterFindOneTeamInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneTeamInput>
};

export type RemoveByIdMatchPayload = {
  __typename?: 'RemoveByIdMatchPayload',
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Removed document */
  record?: Maybe<Match>,
};

export type RemoveOnePlayerPayload = {
  __typename?: 'RemoveOnePlayerPayload',
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Removed document */
  record?: Maybe<Player>,
};

export type Role = {
  __typename?: 'Role',
  name?: Maybe<Scalars['String']>,
  img?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
};

export enum SortFindByIdsLineupInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPlayerInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  MainbtagAsc = 'MAINBTAG_ASC',
  MainbtagDesc = 'MAINBTAG_DESC'
}

export enum SortFindManyCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export enum SortFindManyLineupInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyMapInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export enum SortFindManyPlayerInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  MainbtagAsc = 'MAINBTAG_ASC',
  MainbtagDesc = 'MAINBTAG_DESC'
}

export enum SortFindManyRoleInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyStratInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyTeamInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export enum SortFindOneMapInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export enum SortFindOnePlayerInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  MainbtagAsc = 'MAINBTAG_ASC',
  MainbtagDesc = 'MAINBTAG_DESC'
}

export enum SortFindOneRoleInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneTeamInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOnePlayerInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  MainbtagAsc = 'MAINBTAG_ASC',
  MainbtagDesc = 'MAINBTAG_DESC'
}

export enum SortUpdateManyPlayerInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  MainbtagAsc = 'MAINBTAG_ASC',
  MainbtagDesc = 'MAINBTAG_DESC'
}

export enum SortUpdateOneTeamInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type Strat = {
  __typename?: 'Strat',
  lineup?: Maybe<Scalars['MongoID']>,
  map?: Maybe<Scalars['MongoID']>,
  comps?: Maybe<Array<Maybe<StratComps>>>,
  comments?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
};

export type StratComps = {
  __typename?: 'StratComps',
  name?: Maybe<Scalars['String']>,
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  isDefense?: Maybe<Scalars['Boolean']>,
  _id?: Maybe<Scalars['MongoID']>,
};

export type StratCompsInput = {
  name?: Maybe<Scalars['String']>,
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  isDefense?: Maybe<Scalars['Boolean']>,
  _id?: Maybe<Scalars['MongoID']>,
};

export type Team = {
  __typename?: 'Team',
  name?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
};

export type UpdateByIdLineupInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  objectives?: Maybe<Scalars['String']>,
  definedPlanning?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  _id: Scalars['MongoID'],
};

export type UpdateByIdLineupPayload = {
  __typename?: 'UpdateByIdLineupPayload',
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Updated document */
  record?: Maybe<Lineup>,
};

export type UpdateByIdMatchInput = {
  date?: Maybe<Scalars['Date']>,
  sr?: Maybe<Scalars['Float']>,
  teamSr?: Maybe<Scalars['Float']>,
  lineup?: Maybe<Scalars['MongoID']>,
  type?: Maybe<EnumMatchType>,
  result?: Maybe<Array<Maybe<MatchResultInput>>>,
  vod?: Maybe<Array<Maybe<Scalars['String']>>>,
  debrief?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
};

export type UpdateByIdMatchPayload = {
  __typename?: 'UpdateByIdMatchPayload',
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Updated document */
  record?: Maybe<Match>,
};

export type UpdateByIdPlayerInput = {
  mainBtag?: Maybe<Scalars['String']>,
  lineup?: Maybe<Scalars['MongoID']>,
  status?: Maybe<Array<Maybe<EnumPlayerStatus>>>,
  doodle?: Maybe<Array<Maybe<Scalars['Float']>>>,
  bnetProfileId?: Maybe<Scalars['String']>,
  objectives?: Maybe<Scalars['String']>,
  discordAccount?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['MongoID']>,
  profile?: Maybe<PlayerProfileInput>,
  lastStats?: Maybe<Scalars['JSON']>,
  defaultAvailability?: Maybe<Scalars['Float']>,
  _id: Scalars['MongoID'],
};

export type UpdateByIdPlayerPayload = {
  __typename?: 'UpdateByIdPlayerPayload',
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Updated document */
  record?: Maybe<Player>,
};

export type UpdateByIdStratInput = {
  lineup?: Maybe<Scalars['MongoID']>,
  map?: Maybe<Scalars['MongoID']>,
  comps?: Maybe<Array<Maybe<StratCompsInput>>>,
  comments?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
};

export type UpdateByIdStratPayload = {
  __typename?: 'UpdateByIdStratPayload',
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Updated document */
  record?: Maybe<Strat>,
};

export type UpdateManyPlayerInput = {
  mainBtag?: Maybe<Scalars['String']>,
  lineup?: Maybe<Scalars['MongoID']>,
  status?: Maybe<Array<Maybe<EnumPlayerStatus>>>,
  doodle?: Maybe<Array<Maybe<Scalars['Float']>>>,
  bnetProfileId?: Maybe<Scalars['String']>,
  objectives?: Maybe<Scalars['String']>,
  discordAccount?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['MongoID']>,
  profile?: Maybe<PlayerProfileInput>,
  lastStats?: Maybe<Scalars['JSON']>,
  defaultAvailability?: Maybe<Scalars['Float']>,
};

export type UpdateManyPlayerPayload = {
  __typename?: 'UpdateManyPlayerPayload',
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>,
};

export type UpdateOneTeamInput = {
  name?: Maybe<Scalars['String']>,
};

export type UpdateOneTeamPayload = {
  __typename?: 'UpdateOneTeamPayload',
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Updated document */
  record?: Maybe<Team>,
};
