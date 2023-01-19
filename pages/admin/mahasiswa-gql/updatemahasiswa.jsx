
import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import UpdateMahasiswa from '../../../components/admin/mahasiswa-gql/UpdateMahasiswa'

const updatemahasiswa = () => {
    return (
        <AdminLayout>
            <UpdateMahasiswa/>
        </AdminLayout>
    );
};

export default updatemahasiswa;