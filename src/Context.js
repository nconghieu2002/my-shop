import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [listData, setListData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/data`)
            .then((res) => res.json())
            .then((res) => {
                setListData(res);
            });
    }, []);

    const handleBuy = () => {
        setCount(count + 1);
    };

    const values = {
        count,
        listData,
        handleBuy,
    };

    return (
        <Context.Provider
            value={{
                count,
                listData,
                handleBuy,
            }}
        >
            {children}
        </Context.Provider>
    );
};
