export interface TechData{
  id: number;
  name: string;
  side: whereToUse;
  memo: string;
}

export enum whereToUse{
  Backend,
  Frontend,
  Mobile,
}

export const Techs: TechData[] = 
[
  {
    id: 1,
    name: 'JavaScript',
    side: whereToUse.Frontend,
    memo: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  },
  {
    id: 2,
    name: 'PHP',
    side: whereToUse.Backend,
    memo: 'PHP: Hypertext Preprocessor (or simply PHP) is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994 the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.'
  },
  {
    id: 3,
    name: 'React',
    side: whereToUse.Frontend,
    memo: 'React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'
  },
  {
    id: 4,
    name: 'Laravel',
    side: whereToUse.Backend,
    memo: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony. '
  },
  {
    id: 5,
    name: 'Swift',
    side: whereToUse.Mobile,
    memo: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. "
  }
]