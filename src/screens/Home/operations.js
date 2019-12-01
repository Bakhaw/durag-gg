import { fetchAllChampions } from '../../api/champions';

export async function getAllChampions() {
  const data = await fetchAllChampions();

  return data;
}
