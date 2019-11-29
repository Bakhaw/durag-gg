import axios from 'axios';
import { BASE_URL } from './constants';

export async function fetchAllChampions() {
  const url = `${BASE_URL}/9.23.1/data/fr_FR/champion.json`;

  const { data } = await axios.get(url);

  const champs = Object.values(data.data).map(d => d);
  return champs;
}

export async function fetchAllChampionsNames() {
  const url = `${BASE_URL}/9.23.1/data/fr_FR/champion.json`;

  const { data } = await axios.get(url);

  const champs = Object.values(data.data).map(d => d.name);
  return champs;
}

export async function fetchChampionDetail(championName) {
  const url = `${BASE_URL}/9.23.1/data/fr_FR/champion/${championName}.json`;

  const { data } = await axios.get(url);
  return data.data[championName];
}

export function getChampionImageBanner(championName) {
  return `${BASE_URL}/img/champion/splash/${championName}_0.jpg`;
}

export function getChampionImageSquare(championName) {
  return `${BASE_URL}/9.23.1/img/champion/${championName}`;
}
