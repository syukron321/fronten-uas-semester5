import React from 'react';
import DataPelanggan from '../../../components/admin/mahasiswa/DataPelanggan';
import AdminLayout from '../../../components/admin/AdminLayout';
import MahasiswaByNim from '../../../components/admin/mahasiswa/MahasiswaByNim';
import {getSession,useSession} from 'next-auth/react'

function datamahasiswa({ mahasiswas }) {

    // let hasil
    // { Array.isArray(data) ? hasil = data : hasil = [data] }

    //console.log(hasil)
    return (
        <div>
            <AdminLayout>
                <div className="container">
                    <MahasiswaByNim />
                    <DataPelanggan data={mahasiswas.data} />
                </div>
            </AdminLayout>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session=await getSession(context);
    console.log(session);

    // cek if session exists or not,if not,redirect
    if(session== null){
        return{
            redirect:{
                destination: '/auth/not-authenticated',
                permanent: true,
            }
        }
    }
    // Fetch data from external API
    const nim = context.nim
    //const url = `http://localhost:5000/mahasiswa/${nim}`
    let url = `http://localhost:1337/api/pelanggans`

    if (typeof nim === 'string') {
        url = `http://localhost:1337/api/pelanggans?filters[kodepelanggan][$eq]=${kodepelanggan}`
    }
    //{ nim === undefined ? res = await fetch(url2) : res = await fetch(url) }

    const res = await fetch(url)
    const mahasiswas = await res.json()

    // Pass data to the page via props
    return { props: { mahasiswas } }
}


export default datamahasiswa;