import { FactcheckApi, FactcheckDataDto } from '@faktyczka/sdk';

import logo from '../../public/icons/Icon128.png';
import { addFactcheck, apiConfiguration, fetchCurrentUrl, readFactchecks, Status } from '../shared';

const factcheckApi = new FactcheckApi(apiConfiguration);

const updateIcon = async () => {
  const url = await fetchCurrentUrl();
  const factchecks = await readFactchecks();
  const statusString = factchecks.find((fc) => fc.url === url)?.status;
  const status = statusString ? Status.deserialize(statusString) : null;
  chrome.action.setIcon({
    path: `icons/${status?.badgePath ?? 'Icon128'}.png`,
  });
};

chrome.tabs.onUpdated.addListener(updateIcon);
chrome.tabs.onActivated.addListener(updateIcon);

let eventSource: EventSource | undefined;
(async () => {
  if (!eventSource || eventSource.readyState === EventSource.CLOSED) {
    const { token } = await chrome.storage.local.get(['token']);
    eventSource = new EventSource(`${apiConfiguration.basePath}/api/factchecks/sync${token ? `?token=${token}` : ''}`);

    eventSource.addEventListener('factcheck', async (event) => {
      const { id, url } = JSON.parse(event.data) as FactcheckDataDto;

      const visitsItems = await chrome.history.getVisits({ url });
      const userSawArticle = visitsItems.length > 0;

      const factcheck = await factcheckApi.findById({ id });

      if (token && userSawArticle) {
        chrome.notifications.create(id, {
          type: 'basic',
          title: 'Czytany przez Ciebie artykuł został zweryfikowany!',
          iconUrl: logo,
          message: factcheck.verificationSrc,
        });
      }

      await addFactcheck({ ...factcheck, inHistory: userSawArticle });
      await chrome.storage.local.set({ token: id });
      await updateIcon();
    });
  }
})();
