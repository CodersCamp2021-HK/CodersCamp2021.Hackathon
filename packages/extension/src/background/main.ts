import { FactcheckApi, FactcheckDataDto } from '@faktyczka/sdk';

import logo from '../../public/icons/Icon128.png';
import { apiConfiguration, fetchCurrentUrl, readFactchecks, Status, storeFactchecks } from '../shared';

const factcheckApi = new FactcheckApi(apiConfiguration);

let eventSource: EventSource | undefined;
if (!eventSource || eventSource.readyState === EventSource.CLOSED) {
  eventSource = new EventSource(`${apiConfiguration.basePath}/api/factchecks/sync`);
}

eventSource.addEventListener('factcheck', async (event) => {
  const { id, url } = JSON.parse(event.data) as FactcheckDataDto;

  const visitsItems = await chrome.history.getVisits({ url });
  const userSawArticle = visitsItems.length > 0;

  const factcheck = await factcheckApi.findById({ id });

  if (userSawArticle) {
    chrome.notifications.create(id, {
      type: 'basic',
      title: 'Czytany przez Ciebie artykuł został zweryfikowany!',
      iconUrl: logo,
      message: factcheck.verificationSrc,
    });
  }

  await storeFactchecks([
    ...(await readFactchecks()).filter((fc) => fc.id !== factcheck.id),
    { ...factcheck, inHistory: userSawArticle },
  ]);
  await updateIcon();
});

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
