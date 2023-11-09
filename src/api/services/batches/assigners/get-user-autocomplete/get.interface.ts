export interface SearchUserParams {
  name: string;
}

export interface SearchUserResponseBatche {
  searchedText: string;
  users: User[];
}

export interface User {
  id: string;
  name: string;
}
