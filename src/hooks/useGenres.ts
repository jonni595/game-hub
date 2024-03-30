import useData from "./useData";
import type { Genre } from "../interface";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
