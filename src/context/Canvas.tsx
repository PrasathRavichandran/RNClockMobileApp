import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

const CanvasContext = createContext<{now?: Date}>({});

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

export const useClock = () => {
  const context = useContext(CanvasContext);
  if (!context) throw new Error('useClock must be used within ClockProvider');
  return context;
};
