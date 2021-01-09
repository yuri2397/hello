import { Discussion } from "./discussion";

export interface User {
  uid: string;
  email: string;
  name: string;
  photoURL: string;
  emailVerified: boolean;
  discussions: Map<string, Array<Discussion>>;
}
