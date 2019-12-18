// export all URLS and global constants in this file
export const DDRAGONS_BASE_URL = 'https://ddragon.leagueoflegends.com/cdn';
export const RIOT_API_BASE_URL = 'https://euw1.api.riotgames.com/lol';
export const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

const RANKED_FLEX = 'RANKED_FLEX_SR';
const RANKED_SOLO_QUEUE = 'RANKED_SOLO_5x5';

const NORMAL_DRAFT_QUEUE_ID = 400;
const RANKED_SOLO_QUEUE_ID = 420;
export const RANKED_FLEX_QUEUE_ID = 440;

export const queueTypeLabels = {
  [RANKED_SOLO_QUEUE]: 'Solo Queue',
  [RANKED_FLEX]: 'Flex Queue',
  [NORMAL_DRAFT_QUEUE_ID]: 'Normal Draft',
  [RANKED_SOLO_QUEUE_ID]: 'Solo Queue',
  [RANKED_FLEX_QUEUE_ID]: 'Flex Queue'
};

// const ME = [
//   {
//     profileIconId: 7,
//     name: 'Durag Don',
//     puuid:
//       '3tSeB8QuVWBL07-5HyyogHNnt9wg7pNyasJEh48IQrjnEBfAnBHtxwwoL4mdHtCbXQDoAmyAct_WFw',
//     summonerLevel: 310,
//     accountId: 'RwRN1oJFAC-tUh3ZL8tqlM_GzfCcbMgPdhXH8fQXFUuVgIs',
//     id: 'vAhi44Y7GDwUjecfqeNvn7GIXRc3KIQmqIrvHo6V1JoWoig',
//     revisionDate: 1574978631000
//   }
// ];
