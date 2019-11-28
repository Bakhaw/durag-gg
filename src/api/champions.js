import axios from 'axios';

export default {
  GET_ALL_CHAMPIONS: async () => {
    const url =
      'http://ddragon.leagueoflegends.com/cdn/9.23.1/data/fr_FR/champion.json';

    const { data } = await axios.get(url);

    const champs = Object.values(data.data).map(d => d);
    return champs;
  },
  GET_CHAMPION_DETAIL: async championName => {
    const url = `http://ddragon.leagueoflegends.com/cdn/9.23.1/data/fr_FR/champion/${championName}.json`;

    const { data } = await axios.get(url);
    return data.data[championName];
  },
  CHAMPION_IMAGE_BANNER: championName => {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;
  },
  CHAMPION_IMAGE_SQUARE: championName => {
    return `http://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/${championName}`;
  }
};
