import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const [count, setCount] = useState(0);
    const [listData, setListData] = useState([]);
    const [listProducts, setListProducts] = useState([]);
    const [nameProduct, setNameProduct] = useState([]);
    const [array, setArray] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3000/products?id=` + id)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log('hi');
    // console.log(res[0].images)
    // setListProducts(res[0].images);
    // console.log(res[0]);
    // setNameProduct(res[0]);
    // arr = [...arr, id];
    // console.log(arr);
    // localStorage.setItem('array', arr);
    //         });
    // }, [id]);

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

    // const values = {
    //     count,
    //     listData,
    //     handleBuy,
    //     handleCart,
    //     listProducts,
    //     nameProduct,
    //     id,
    // };

    return (
        <Context.Provider
            value={{
                count,
                listData,
                handleBuy,
                handleCart,
                listProducts,
                nameProduct,
                id,
            }}
        >
            {children}
        </Context.Provider>
    );
};
