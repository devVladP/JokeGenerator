export interface Joke {
  id: number;
  type: "single" | "twopart";
  setup?: string | null;
  delivery?: string | null;
  joke?: string | null;
  activeFlags: string[];
  isFavourite: boolean;
}