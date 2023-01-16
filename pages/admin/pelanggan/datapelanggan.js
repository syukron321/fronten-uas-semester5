import React from "react";
import DataPelanggan from "../../../components/admin/Pelanggans/DataPelanggan";
import AdminLayout from "../../../components/admin/AdminLayout";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import PelangganBykode from "../../../components/admin/Pelanggans/PelangganByKode";

function datapelanggan({ pelanggans }) {
  // let hasil
  // { Array.isArray(data) ? hasil = data : hasil = [data] }

  //console.log(hasil)
  return (
    <div>
      <AdminLayout>
        <div className="container">
          <PelangganBykode />
          <DataPelanggan data={pelanggans.data} />
        </div>
      </AdminLayout>
    </div>
  );
}

//digunakan untuk mengakses server api graphql
export async function getServerSideProps({ query }) {
  let kodepelanggan = query.kodepelanggan;

  {
    typeof kodepelanggan == "string"
      ? (kodepelanggan = kodepelanggan)
      : (kodepelanggan = "1");
  }
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
    query GetAllPelanggan {
      pelanggans(filters:{kodepelanggan:{contains:"${kodepelanggan}"}}){
        data{
          id
          attributes{
            kodepelanggan
            nama
            alamat
            
          }
        }
      }
    }
        `,
  });
  return { props: { pelanggans: data.pelanggans } };
}

export default datapelanggan;
