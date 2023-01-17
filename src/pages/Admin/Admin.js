import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import { ListProducts} from 'components/Products'

const dataProvider = restProvider('http://localhost:3000');

function Admin() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="products" list={ListProducts} />
        </Admin>
    );
}

export default Admin;
