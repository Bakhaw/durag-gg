import { fetchAllChampions } from '../../api/champions';

export async function getAllChampions() {
  const data = fetchAllChampions();

  return data;
}
