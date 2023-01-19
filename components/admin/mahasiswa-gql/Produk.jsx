import { useRouter } from 'next/router'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import Link from 'next/link';

const DataProduk = ({ data }) => {
    const router = useRouter()

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })
    async function hapusProduct(id, kdRst) {
        // e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                    deleteProduk(id:${id}){
                      data{
                        id
                      }
                    }
                  }`
            })

            alert(`${produks.attributes.nama} berhasil dihapus!`)
        } catch (error) {
            console.log({ message: error.message });
        }
        router.push('/admin/card_produck')
    }
    return (
        <>
            
            <div>
                <div className="container">
                    <div className="row flex-lg-nowrap">
                        <div className="col">
                            <div className="row flex-lg-nowrap">
                                <div className="col mb-3">
                                    <div className="e-panel card">
                                        <div className="card-body">
                                            <div className="d-flex bd-highlight">
                                                <div className="p-2 flex-grow-1 bd-highlight">Admin</div>
                                                <div className="p-2 bd-highlight">
                                                    <Link href="/admin/mahasiswa-gql/createmahasiswa">
                                                        <button className='btn btn-primary'>Tambah Data</button>
                                                    </Link>
                                                </div>
                                            </div>


                                            <div className="e-table">
                                                <div className="table-responsive table-lg mt-3">
                                                    <table className="table table-bordered text-center">
                                                        <thead>
                                                            <tr className=''>
                                                                <th className="max-width">Kode Produk</th>
                                                                <th className="sortable">Nama</th>
                                                                <th className="sortable">Harga</th>
                                                                <th className="sortable">Deskripsi</th>
                                                                <th className="sortable">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.map((produks, idx) => (
                                                                <tr key={idx}>
                                                                    <td className="text-nowrap align-middle">{produks.attributes.kodeproduk}</td>
                                                                    <td className="text-nowrap align-middle">{produks.attributes.nama}</td>
                                                                    <td className="text-nowrap align-middle">{produks.attributes.harga}</td>
                                                                    <td className="text-nowrap align-middle">{produks.attributes.deskripsi}</td>
                                                                    <td className="text-center align-middle">
                                                                        <div className="align-top">
                                                                            <Link legacyBehavior
                                                                                href={`/admin/updateproduct/?id=${produks.id}&kodeproduk=${produks.attributes.kodeproduk}&nama=${produks.attributes.nama}&harga=${produks.attributes.harga}&deskripsi=${produks.attributes.deskripsi}`}
                                                                            ><button className='btn btn-primary mr-2'>Edit</button></Link>

                                                                            <button className='btn btn-danger' value={produks.attributes.kodeproduk} onClick={(e) => hapusProduct(produks.id, produks.attributes.kodeproduk)} >Hapus</button>

                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataProduk;