export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image?: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
}

export interface FetchGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface GenreList {
  onSelectedGenre: (genre: Genre) => void;
}

export interface GameGridProps {
  selectedGenre: Genre | null;
}
