import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ApolloClient, gql, InMemoryCache,  } from '@apollo/client';

const UpdateMahasiswa = () => {
    const [_kodepelanggan, setKodepelanggan] = useState('');
    const [_nama, setNama] = useState('');
    const [_nomerhp, setNomerhp] = useState('');
    const [_alamat, setAlamat] = useState('');

    const router = useRouter();
    const { id, kodepelanggan, nama, nomerhp, alamat} = router.query;

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    useEffect(() => {
        if (typeof kodepelanggan == 'string') {
            setKodepelanggan(kodepelanggan);
        }
        if (typeof nama == 'string') {
            setNama(nama)
        }
        if (typeof nomerhp == 'string') {
            setNomerhp(nomerhp);
        }
        if (typeof alamat == 'string') {
            setAlamat(alamat)
        }
        
    }, [kodepelanggan, nama, nomerhp, alamat])

    const clearInput = () => {
        setKodepelanggan('')
        setNama('')
        setNomerhp('')
        setAlamat('')
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            await client.mutate({
                mutation:gql `
                mutation{
                    updatePelanggan(id:${id},data:{
                      kodepelanggan:"${_kodepelanggan}",
                      nama: "${_nama}",
                      nomerhp:${_nomerhp},
                      alamat:"${_alamat}"
                    })
                    {
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
                  }`
            })
            alert("Update data sukses")
            router.push('/admin/mahasiswa-gql/datamahasiswa')
            clearInput()
        } catch (e) {
            // throw Error(e.message)
            console.log({message: e.message})
        }
        
    }
    return (
        <div>
            <div className="card">
                <h1 className="">Cek Data Agen</h1>
                <h2>Nama Agen :{nama}</h2>
            <h2>Kode Agen:{_kodepelanggan}</h2>
            </div>
            <div className="produk-form mt-5">
                <form onSubmit={submitHandler}>
                    <h2>Update Agens</h2>
                    <div className="form-group mb-3">
                        <div className="row">
                            <div className="col">
                                <input 
                                type="text" 
                                id="kodepelanggan" 
                                className="form-control" 
                                placeholder="Kode Agen bisa" 
                                value={_kodepelanggan} 
                                onChange={(e) => setKodepelanggan(e.target.value)} />
                            </div>
                            <div className="col">
                                <input 
                                type="text" 
                                id="nama" 
                                className="form-control" 
                                placeholder="Nama" 
                                value={_nama} 
                                onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className="col">
                                <input 
                                type="number" 
                                id="nomerhp" 
                                className="form-control" 
                                placeholder="Nomor HP" 
                               
                                value={_nomerhp} 
                                onChange={(e) => setNomerhp(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea 
                        type="text" 
                        id="alamat" 
                        className="form-control" 
                        placeholder="Alamat" 
                        value={_alamat} 
                        onChange={(e) => setAlamat(e.target.value)} />
                    </div>
                    
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary mt-2 btn-block rounded-4" id='demo'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateMahasiswa;