import { useEffect, useState } from 'react';

const fetchCurrentUrl = () =>
  chrome.tabs.query({ active: true, lastFocusedWindow: true }).then((tabs) => tabs[0].url ?? '');

const useCurrentUrl = () => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    fetchCurrentUrl().then(setUrl);
  }, []);
  return url;
};

export { fetchCurrentUrl, useCurrentUrl };
