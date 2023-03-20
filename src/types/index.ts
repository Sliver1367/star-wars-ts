export interface Hero {
    name: string
    img: string
    url: string
}

export interface Friends {
    [key:string]: Hero
}

export interface HeroInfo {
    "name": string
    "gender": string
    "skin_color": string
    "hair_color": string
    "height": string
    "eye_color": string
    "mass": string
    "birth_year": string
}