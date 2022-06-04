import { FactcheckApi, FactcheckEventDto } from '@faktyczka/sdk';

import logo from '../../public/icons/Icon128.png';
import { apiConfiguration } from '../shared';

const factcheckApi = new FactcheckApi(apiConfiguration);
const eventSource = new EventSource(`${apiConfiguration.basePath}/api/factchecks/sync`);

eventSource.addEventListener('factcheck', async (event) => {
  const { id } = JSON.parse(event.data) as FactcheckEventDto;
  const factcheck = await factcheckApi.findById({ id });
  chrome.notifications.create(id, {
    type: 'basic',
    title: 'Czytany przez Ciebie artykuł został zweryfikowany!',
    iconUrl: logo,
    message: factcheck.verificationSrc,
  });
});

export {};
