interface Tech{
  id: number;
  name: string;
  side: whereToUse;
}

enum whereToUse{
  Backend,
  Frontend,
  Mobile
}

export const Techs: Tech[] = 
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