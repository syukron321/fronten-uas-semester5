import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import AdminLayout from '../../../components/admin/AdminLayout';
import Produk from '../../../components/admin/mahasiswa-gql/Produks'

function dataproduk({ produks }) {

    return (
        <AdminLayout>
            <div>
                <div className="container">
                    <Produk data={produks.data} />
                </div>
            </div>
        </AdminLayout>
    );
}

export async function getServerSideProps({ query }) {
    const kodepelanggan = query.kodepelanggan

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })
    const { data } = await client.query({
        query: gql`
        query{
            produks{
                data{
                    id
                    attributes{
                      kodeproduk
                      nama
                      deskripsi
                      harga
                    }
                  }
            }
        }
        `,
        variables: { kodepelanggan }
    })
    return { props: { produks: data.produks } }
}



export default dataproduk;