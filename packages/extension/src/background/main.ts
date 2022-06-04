import { FactcheckApi, FactcheckDataDto } from '@faktyczka/sdk';

import logo from '../../public/icons/Icon128.png';
import { apiConfiguration } from '../shared';

const factcheckApi = new FactcheckApi(apiConfiguration);
const eventSource = new EventSource(`${apiConfiguration.basePath}/api/factchecks/sync`);

eventSource.addEventListener('factcheck', async (event) => {
  const { id, url } = JSON.parse(event.data) as FactcheckDataDto;

  const visitsItems = await chrome.history.getVisits({ url });
  const userSawArticle = visitsItems.length > 0;

  const { factchecks } = await chrome.storage.sync.get(['factchecks']);
  chrome.storage.sync.set({ factchecks: [...(factchecks ?? []), { id, url, inHistory: userSawArticle }] });

  const { verificationSrc } = await factcheckApi.findById({ id });

  if (userSawArticle) {
    chrome.notifications.create(id, {
      type: 'basic',
      title: 'Czytany przez Ciebie artykuł został zweryfikowany!',
      iconUrl: logo,
      message: verificationSrc,
    });
  }
});
