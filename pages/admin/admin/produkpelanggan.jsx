import React from 'react'
import { useRouter } from 'next/router';
import ProdukPelanggan from '../../../components/admin/mahasiswa-gql/ProdukPelanggan'
import Produk from '../../../components/admin/mahasiswa-gql/DataProduk'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import Link from 'next/link';

export default function productagen({ produks }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    return (
        <>
            <div className="container px-4 px-lg-1 my-5">
            {/* <Link href="/admin/datapelanggann">
                <i className="text-dark bx bx-chevrons-left me-1 my-3 fs-1"/>
            </Link> */}
            </div>
            <ProdukPelanggan dataPelanggan={router.query} />
            <Produk data={produks.data} />
        </>
    )
}

export async function getServerSideProps({ query }) {
    let kodepelanggan = query.kodepelanggan
    // {typeof nama === 'string' ? nama = nama : nama = ""}
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql`
            query getProdukBykodepelanggan{
                produks(filters:{pelanggans:{kodepelanggan:{contains:"${kodepelanggan}"}}}){
                data {
                    id
                    attributes {
                        kodeproduk
                        nama
                        deskripsi
                        harga
                        pelanggans{
                            data{
                                attributes{
                                    kodepelanggan
                                    nama
                                    alamat
                                }
                            }
                        }
                    }
                }
            }
        }`
    })
    return { props: { produks: data.produks } }
}
