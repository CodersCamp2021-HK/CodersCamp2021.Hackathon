import { CreateTicketDto, TicketsApi } from '@faktyczka/sdk';
import { createContext, ReactNode, useContext, useState } from 'react';

import { apiConfiguration } from '../../shared';

const ticketsApi = new TicketsApi(apiConfiguration);

const FormFeedbackContext = createContext({
  wasSent: false,
  send: (() => {
    throw new Error('No FormFeedbackContext available!');
  }) as (createTicketDto: CreateTicketDto) => void,
});

const FormFeedbackContextProvider = ({ children }: { children: ReactNode }) => {
  const [wasSent, setWasSent] = useState(false);

  const send = (createTicketDto: CreateTicketDto) => {
    setWasSent(true);
    ticketsApi.create({ createTicketDto }).then((resp) => console.log(resp));
  };

  return <FormFeedbackContext.Provider value={{ wasSent, send }}>{children}</FormFeedbackContext.Provider>;
};

const useFormFeedback = () => {
  return useContext(FormFeedbackContext);
};

export { FormFeedbackContextProvider, useFormFeedback };
