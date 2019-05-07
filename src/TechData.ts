export interface TechData{
  id: number;
  name: string;
  side: whereToUse;
}

export enum whereToUse{
  Backend,
  Frontend,
  Mobile
}

export const Techs: TechData[] = 
[
  {
    id: 1,
    name: 'JavaScript',
    side: whereToUse.Frontend
  },
  {
    id: 2,
    name: 'PHP',
    side: whereToUse.Backend
  },
  {
    id: 3,
    name: 'React',
    side: whereToUse.Frontend
  },
  {
    id: 4,
    name: 'Laravel',
    side: whereToUse.Backend
  }
]