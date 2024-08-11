export interface Gameassets {
    [x: string]: any;
    type:    Type;
    format:  string;
    version: Version;
    data:    { [key: string]: Datum };
}

export interface Datum {
    version: Version;
    id:      string;
    key:     string;
    name:    string;
    title:   string;
    blurb:   string;
    info:    Info;
    image:   Image;
    tags:    Tag[];
    partype: Partype;
    stats:   { [key: string]: number };
}

export interface Image {
    full:   string;
    sprite: Sprite;
    group:  Type;
    x:      number;
    y:      number;
    w:      number;
    h:      number;
}

export enum Type {
    Champion = "champion",
}

export enum Sprite {
    Champion0PNG = "champion0.png",
    Champion1PNG = "champion1.png",
    Champion2PNG = "champion2.png",
    Champion3PNG = "champion3.png",
    Champion4PNG = "champion4.png",
}

export interface Info {
    attack:     number;
    defense:    number;
    magic:      number;
    difficulty: number;
}

export enum Partype {
    Battlefury = "Battlefury",
    BloodWell = "BloodWell",
    Dragonfury = "Dragonfury",
    Energy = "Energy",
    Ferocity = "Ferocity",
    Gnarfury = "Gnarfury",
    Heat = "Heat",
    Mp = "MP",
    None = "None",
    Rage = "Rage",
    Wind = "Wind",
}

export enum Tag {
    Assassin = "Assassin",
    Fighter = "Fighter",
    Mage = "Mage",
    Marksman = "Marksman",
    Melee = "Melee",
    Support = "Support",
    Tank = "Tank",
}

export enum Version {
    The6241 = "6.24.1",
}
