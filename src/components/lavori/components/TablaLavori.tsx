import React, { useMemo } from 'react';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import { Box, Typography } from '@mui/material';

type Person = {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    country: string;
};
export const data = [
    {
        id: '1',
        firstName: 'Dylan',
        middleName: 'Sprouse',
        lastName: 'Murray',
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
        country: 'United States',
    },]
const TablaLavori = () => {

    const columns = useMemo(
        () =>
            [
                {
                    accessorKey: 'id',
                    header: 'ID',
                    size: 50,
                },
                {
                    accessorKey: 'firstName',
                    header: 'First Name',
                },
                {
                    accessorKey: 'middleName',
                    header: 'Middle Name',
                },
                {
                    accessorKey: 'lastName',
                    header: 'Last Name',
                },
            ] as MRT_ColumnDef<Person>[],
        [],
    );

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            enableFilters={false}
            renderDetailPanel={({ row }) => (
                <Box
                    sx={{
                        display: 'grid',
                        margin: 'auto',
                        gridTemplateColumns: '1fr 1fr',
                        width: '100%',
                    }}
                >
                    <Typography>Address: {row.original.address}</Typography>
                    <Typography>City: {row.original.city}</Typography>
                    <Typography>State: {row.original.state}</Typography>
                    <Typography>Country: {row.original.country}</Typography>
                </Box>
            )}
        />
    )
}

export default TablaLavori