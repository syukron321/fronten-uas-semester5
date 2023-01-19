// @ts-nocheck

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const DataMahasiswa = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusPelanggan(kodepelanggan) {
        //setDeleting(true)
        try {

            const response = await axios.delete(
                `http://localhost:1337/api/agens/${kodepelanggan}`
              );
             
              if (response.data.message) {
                setMessage(response.data.message);
              }

            alert(`Mahasiswa dengan kodepelanggan ${kodepelanggan} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});
        }

        router.push('/admin/mahasiswa/datamahasiswa')
      }
    
    async function hapusPelangganGql(id,kodepelanggan){
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                    deleteAgen(id:${id}){
                        data{
                            id
                        }
                    }
                }
                `
            })
            alert(`Pelanggan dengan kodepelanggan ${kodepelanggan} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});

        }
        router.push('admin/mahasiswa-gql/datamahasiswa')
    }
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <h3>Data Pelanggan</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>Kode Pelanggan</th>
                        <th>Nama</th>
                        <th>Nomer Hp</th>
                        <th>Alamat</th>
                        {/* <th>Transkrip</th> */}
                        <th>History</th>
                        <th>Action</th>

                        
                    </tr>
                </thead>
                <tbody>
                { data.map((plg, idx) => (
                    <tr key ={idx}>
                        
                            <td>
                                {plg.attributes.kodepelanggan}
                            </td>
                            <td>
                                 {plg.attributes.nama}
                            </td>
                            <td>
                                {plg.attributes.nomerhp}
                            </td>
                            <td>
                                 {plg.attributes.alamat}
                            </td>
                            {/* <td>
                                <Link href={{
                                    pathname: `/admin/mahasiswa-gql/transkrip`,
                                    query: {
                                        kodepelanggan:plg.attributes.kodepelanggan,
                                        nama:plg.attributes.nama,
                                        nomerhp:plg.attributes.nomerhp,
                                        alamat:plg.attributes.alamat
                                    }
                                }}>
                                    <a>Transkrip</a>
                                </Link>
                            </td> */}
                            <td>
                                 <Link href={
                                    {pathname:'/admin/mahasiswa-gql/produkpelanggan',
                                        query: {kodepelanggan: plg.attributes.kodepelanggan}
                                    }
                                 }
                                 >
                                    <a>Produk</a>
                                 </Link>
                            </td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <Link href={`/admin/mahasiswa-gql/updatemahasiswa?id=${plg.id}&kodepelanggan=${plg.attributes.kodepelanggan}&nama=${plg.attributes.nama}&nomerhp=${plg.attributes.nomerhp}&alamat=${plg.attributes.alamat}`}
                                    >
                                        <a>Edit gql</a>
                                    </Link>
                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {plg.kodepelanggan}
                                        onClick={(e)=>hapusPelangganGql(plg.id, plg.attributes.kodepelanggan)}
                                    >
                                            Hapus-gql
                                    </button>
                                </div>
                            </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
     );
}

export default DataMahasiswa;