const CLIENT_ID = '49e2795afc694129a71d7d35d1246401';
const REDIRECT_URI = 'http://localhost:3000'; // schimba aici si in Dashboard cand publici pe GitHub Pages
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPE = 'playlist-modify-public playlist-modify-private user-top-read user-library-read';

export const loginToSpotify = () => {
  window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
};

export const getTokenFromUrl = () => {
  const hash = window.location.hash;
  let token = '';

  if (hash) {
    token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
    window.location.hash = '';
    localStorage.setItem('spotify_access_token', token);
  }

  return token || localStorage.getItem('spotify_access_token');
};
