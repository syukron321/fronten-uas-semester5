
import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import CreatePelanggan from '../../../components/admin/mahasiswa-gql/CreatePelanggan';

const createpelanggan = () => {
    return (
        <AdminLayout>
            <CreatePelanggan/>
        </AdminLayout>
    );
};

export default createpelanggan;