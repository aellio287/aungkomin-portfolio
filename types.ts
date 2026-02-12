
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon: string;
}

export interface Book {
  title: string;
  author: string;
  category: string;
  cover: string;
}
