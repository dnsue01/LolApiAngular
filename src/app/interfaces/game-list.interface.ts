export interface GameLists {
    gameList: GameList[];
}

export interface GameList {
    gameId:            number;
    mapId:             number;
    gameMode:          string;
    gameType:          string;
    gameQueueConfigId: number;
    participants:      Participant[];
    observers:         Observers;
    platformId:        string;
    bannedChampions:   BannedChampion[];
    gameLength:        number;
}

export interface BannedChampion {
    championId: number;
    teamId:     number;
    pickTurn:   number;
}

export interface Observers {
    encryptionKey: string;
}

export interface Participant {
    puuid:         string;
    summonerId:    string;
    teamId:        number;
    spell1Id:      number;
    spell2Id:      number;
    championId:    number;
    profileIconId: number;
    riotId:        string;
    bot:           boolean;
}
