// Generated by https://quicktype.io

export interface TasksList {
  users: User;
  tasks: Task[];
}

export interface Task {
  id:            string;
  title:         string;
  description:   string;
  user_owner:    string;
  category:      Category;
  importance:    Importance;
  done:          boolean;
  creation_date: string;
  deadline:      null | string;
}

export enum Importance {
  High = "high",
  Low = "low",
  Medium = "medium",
}

export enum Category {
  Home = "home",
  Shopping = "shopping",
  Work = "work",
  Leisure = "leisure",
  Others = "others",
}

export interface CategoriasIconos {
    [key: string]: string; // Firma de índice
    home: string;
    shopping: string;
    work: string;
    leisure: string;
    others: string;
    default: string;
  };

export interface User {
  id:    number;
  user:  string;
  email: string;
}
