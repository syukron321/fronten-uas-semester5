import React from 'react';
import DataPelanggan from '../../../components/admin/mahasiswa-gql/DataPelanggan';
import AdminLayout from '../../../components/admin/AdminLayout';
import ByKodePelanggan from '../../../components/admin/mahasiswa-gql/MahasiswaByNim';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

function datapelanggan({pelanggans}){
    return(
        <div>
            <AdminLayout>
                <div className="container">
                    <ByKodePelanggan/>
                    <DataPelanggan data={pelanggans.data} />
                </div>
            </AdminLayout>
        </div>
    )
}

export async function getServerSideProps({query}){
    let kodepelanggan = query.kodepelanggan
    {typeof kodepelanggan === 'string' ? kodepelanggan = kodepelanggan:kodepelanggan = "1"}
    const client = new ApolloClient({
        uri:'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })
    const{data} = await client.query({
        query:gql`
        query getAllPelanggan{
            pelanggans{
                data{
                  id
                  attributes{
                    kodepelanggan
                    nama
                    nomerhp
                    alamat
                  }
                }
              }
        }
        `
    })
    return {props:{ pelanggans : data.pelanggans}}
}

export default datapelanggan;