import { List, Datagrid, TextField } from 'react-admin';
export const ListProducts = (props) => {
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>;
};
