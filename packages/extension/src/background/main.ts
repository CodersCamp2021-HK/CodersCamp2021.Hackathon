import { apiConfiguration } from '../shared';

const eventSource = new EventSource(`${apiConfiguration.basePath}/api/factchecks/sync`);

eventSource.addEventListener('message', (event) => {
  console.log(event.data);
});

export {};
