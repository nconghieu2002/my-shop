import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const [count, setCount] = useState(0);
    const [listData, setListData] = useState([]);
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((res) => res.json())
            .then((res) => {
                setListData(res);
            });
    }, []);

    const handleCart = function () {
        setArray([...array, id]);
        localStorage.setItem('array', array);
        console.log(id);
        console.log(array);
    };

    const handleBuy = () => {
        setCount(count + 1);
    };

    return (
        <Context.Provider
            value={{
                count,
                listData,
                handleBuy,
                handleCart,
                id,
            }}
        >
            {children}
        </Context.Provider>
    );
};
