import { TicketsApi } from '@faktyczka/sdk';
import { useEffect, useState } from 'react';

import { apiConfiguration } from '../../shared';

const ticketsApi = new TicketsApi(apiConfiguration);

const useCountNumberOfTickets = (url: string) => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (url !== '') {
      ticketsApi.countTicketsByUrl({ url }).then((x) => setCount(x.count));
    }
  }, [url]);

  return count;
};

export { useCountNumberOfTickets };
