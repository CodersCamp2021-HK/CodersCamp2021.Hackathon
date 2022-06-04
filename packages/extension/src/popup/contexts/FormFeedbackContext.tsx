import { createContext, ReactNode, useContext, useState } from 'react';

const FormFeedbackContext = createContext({
  wasSent: false,
  send: (() => {
    throw new Error('No FormFeedbackContext available!');
  }) as () => void,
});

const FormFeedbackContextProvider = ({ children }: { children: ReactNode }) => {
  const [wasSent, setWasSent] = useState(false);

  const send = () => {
    setWasSent(true);
  };

  console.log('test');

  return <FormFeedbackContext.Provider value={{ wasSent, send }}>{children}</FormFeedbackContext.Provider>;
};

const useFormFeedback = () => {
  return useContext(FormFeedbackContext);
};

export { FormFeedbackContextProvider, useFormFeedback };
