export interface IPersonality {
    topic: string;
    color: string;
    list: IPersonalityList[];
}

interface IPersonalityList {
    type: string;
    image: string;
    desc: string;
    content: string[];
}

interface IContentList {
    text: string;
}
