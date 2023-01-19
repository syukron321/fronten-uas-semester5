
import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import CreateProduks from '../../../components/admin/mahasiswa-gql/CreateProduk';

const createproduk = () => {
    return (
        <AdminLayout>
            <CreateProduks/>
        </AdminLayout>
    );
};

export default createproduk;