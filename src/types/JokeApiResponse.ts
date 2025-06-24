export interface JokeApiResponse {
  id: number;
  type: "single" | "twopart";
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  setup?: string | null;
  delivery?: string | null;
  joke?: string | null;
}