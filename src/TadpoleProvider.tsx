import { createContext, useContext, useState, ReactNode } from 'react';
import { makeRandomTadpole } from './utils/random_data';
import { getTadpole, hasTadpole } from './utils/misc';
import { Tadpole } from './domain/user';
import { NavigateFunction, useNavigate } from 'react-router';

// Define types for the context
interface TadpoleContextType {
    tadpoles: Tadpole[];
    currentTP: Tadpole | null;
    setTP: (t: Tadpole | null) => void,
    handleLogin: (username: string, password: string, navigate: NavigateFunction) => boolean;
    handleRegister: (username: string, email: string, password: string, navigate: NavigateFunction) => boolean;
    updateTadpole: (u: Tadpole) => void;
}

const TadpoleContext = createContext<TadpoleContextType | undefined>(undefined);

export const TadpoleProvider = ({ children }: { children: ReactNode }) => {
    const [tadpoles, setTadpoles] = useState<Tadpole[]>([]);
    const [currentTP, setCurrentTP] = useState<Tadpole | null>(null);

    // Generate initial data
    function generateData() {
        const newTadpoles: Tadpole[] = [];
        for (let i = 0; i < 30; i++) {
            let tp = makeRandomTadpole();
            while (hasTadpole(newTadpoles, tp.username)) {
                tp = makeRandomTadpole();
            }
            newTadpoles.push(tp);
            console.log(tp.username);
        }
        setTadpoles(newTadpoles);
    }

    // Call it once on component mount
    useState(generateData);

    const handleLogin = (username: string, password: string, navigate: NavigateFunction): boolean => {

        const index = getTadpole(tadpoles, username);
        if (index < 0 || index >= tadpoles.length) return false;
        const t = tadpoles[index];

        if (t.password !== password) return false;

        setCurrentTP(t);
        navigate('/home');
        return true;
    };

    const handleRegister = (username: string, email: string, password: string,  navigate: NavigateFunction): boolean => {
        if (hasTadpole(tadpoles, username)) return false;

        const tp = new Tadpole(username, email, password, "", (new Date()).getTime());

        setTadpoles([
            ...tadpoles,
            tp
        ]);

        setCurrentTP(tp);
        navigate('/home');
        return true;
    }
  
    const setTP = (t: Tadpole | null): void => {
        setCurrentTP(t);
    }

    const updateTadpole = (updatedTadpole: Tadpole): void => {
        setTadpoles(prevTadpoles => 
            prevTadpoles.map(tadpole => 
              tadpole.username === updatedTadpole.username ? updatedTadpole : tadpole
            )
        );
    }

    return (
        <TadpoleContext.Provider value={{ tadpoles, currentTP, setTP, handleLogin, handleRegister, updateTadpole }}>
          {children}
        </TadpoleContext.Provider>
    );
};

// Custom hook to use the context
export const useTadpoles = () => {
  const context = useContext(TadpoleContext);
  if (!context) {
    throw new Error('useTadpoles must be used within a TadpoleProvider');
  }
  return context;
};
