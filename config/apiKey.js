import md5 from 'md5';

const ts = 'marvel-api';
const publicKey = '18cc2417b01f022541ab1aa947152fa0';
const privateKey = 'a478fb9376bb3dcb82dc95a7bde1018fb1a64aa9';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;