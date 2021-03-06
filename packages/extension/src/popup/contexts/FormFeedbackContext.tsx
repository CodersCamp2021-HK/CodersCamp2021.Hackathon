import { CreateTicketDto, TicketsApi } from '@faktyczka/sdk';
import { createContext, ReactNode, useContext, useState } from 'react';

import { apiConfiguration } from '../../shared';

const ticketsApi = new TicketsApi(apiConfiguration);

const submitTicket = async (createTicketDto: CreateTicketDto) => {
  try {
    await ticketsApi.create({ createTicketDto });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const FormFeedbackContext = createContext({
  result: null as boolean | null,
  send: (() => {
    throw new Error('No FormFeedbackContext available!');
  }) as (createTicketDto: CreateTicketDto) => void,
});

const FormFeedbackContextProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<boolean | null>(null);

  const send = (createTicketDto: CreateTicketDto) => {
    submitTicket(createTicketDto)
      .then(setResult)
      .then(() =>
        chrome.storage.local
          .set({ [`fc#${createTicketDto.url}`]: { url: createTicketDto.url, status: 'Warning', count: 0 } })
          .then(() => chrome.runtime.sendMessage('noop')),
      );
    chrome.storage.sync.set({ name: createTicketDto.name, email: createTicketDto.email });
  };

  return <FormFeedbackContext.Provider value={{ result, send }}>{children}</FormFeedbackContext.Provider>;
};

const useFormFeedback = () => {
  return useContext(FormFeedbackContext);
};

export { FormFeedbackContextProvider, useFormFeedback };
