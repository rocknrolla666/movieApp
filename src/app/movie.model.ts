export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genres: string[];
  favorite?: boolean;
  overview?: string;
  genres_names?: string[];
}
