import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [listData, setListData] = useState([]);
    const [listProducts, setListProducts] = useState([]);
    const [nameProduct, setNameProduct] = useState([]);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    useEffect(() => {
        fetch(`http://localhost:3000/products?id=` + id)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res[0].images);
                setListProducts(res[0].images);
                // console.log(res[0]);
                setNameProduct(res[0]);
            });
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
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
        listProducts,
        nameProduct,
        id,
    };

    return (
        <Context.Provider
            value={{
                count,
                listData,
                handleBuy,
                listProducts,
                nameProduct,
                id,
            }}
        >
            {children}
        </Context.Provider>
    );
};
