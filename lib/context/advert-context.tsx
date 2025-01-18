import { ReactNode, createContext, useState } from "react";

const AdvertContext = createContext({});

const initialState = {
  show: false,
  content: <></>,
};

export const AdvertProvider = ({ children }: { children: ReactNode }) => {

  const [advert, setAdvert] = useState(false);

  return <AdvertContext.Provider value={{}}>{children}</AdvertContext.Provider>;
};
