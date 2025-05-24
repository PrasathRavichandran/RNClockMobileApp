import {createContext, PropsWithChildren, useEffect, useState} from 'react';

export const CanvasContext = createContext<{now?: Date}>({});

export default function CanvasProvider({children}: PropsWithChildren) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <CanvasContext.Provider value={{now}}>{children}</CanvasContext.Provider>
  );
}
