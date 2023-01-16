

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'


const DataPelanggan = ({data}) => {
   /*  const [message, setMessage] = useState(false)
    const router = useRouter()
    
    async function hapusMahasiswa(nim) {
        //setDeleting(true)
        try {

            const response = await axios.delete(
                `http://localhost:5000/mahasiswa/${nim}`
              );
             
              if (response.data.message) {
                setMessage(response.data.message);
              }

            alert(`Mahasiswa dengan NIM ${nim} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});
        }

        router.push('/admin/DataPelanggan')
      } */
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <h3>Data Mahasiswa</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>Kode Pelanggan</th>
                        <th>Nama</th>
                        <th>ALamat</th>
                        <th>Nomor Hp</th>
                        
                    </tr>
                </thead>
                <tbody>
                { data.map((pelanggan, idx) => (
                    <tr key ={idx}>
                        
                            <td>
                                {pelanggan.kodepelanggan}
                            </td>
                            <td>
                                 {pelanggan.nama}
                            </td>
                            <td>
                                {pelanggan.alamat}
                            </td>
                            <td>
                                 {pelanggan.nomerhp}
                            </td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    {/* <Link href={`/admin/updatemahasiswa?nim=${pelanggan.nim}
                                        &nama=${pelanggan.nama}&angkatan=${pelanggan.angkatan}
                                        &prodi=${pelanggan.prodi}`}
                                    >
                                        <a>Edit</a>
                                    </Link> */}

                                    <Link href={
                                       { pathname : '/admin/updatemahasiswa', 
                                         query : {nim : pelanggan.nim, nama : pelanggan.nama, angkatan : pelanggan.angkatan, prodi : pelanggan.prodi}
                                       }
                                        }
                                    >
                                        <a>Edit 2</a>
                                    </Link>
                                    
                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {pelanggan.nim}
                                        onClick={(e)=>hapusMahasiswa(e.target.value)}
                                    >
                                            Hapus
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

export default DataPelanggan;