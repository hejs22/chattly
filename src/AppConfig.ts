import { REACT_APP_WS_URL, REACT_APP_HTTP_URL } from '@env';

export default {
  apiHttpURL: REACT_APP_HTTP_URL ?? '',
  apiWsURL: REACT_APP_WS_URL ?? '',
};
