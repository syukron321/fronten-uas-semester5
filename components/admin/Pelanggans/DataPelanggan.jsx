//@ts-check

import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});
const DataPelanggan = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  // async function hapusMahasiswa(kodepelanggan) {
  //     //setDeleting(true)
  //     try {
  //         const response = await axios.delete(
  //             `http://localhost:1337/api/pelanggans`
  //           );

  //           if (response.data.message) {
  //             setMessage(response.data.message);
  //           }

  //         alert(`Mahasiswa dengan kodepelanggan ${nim} telah terhapus`)
  //     } catch (error) {
  //         console.log({message : error.message});
  //     }
  //     router.push('/admin/mahasiswa/DataPelanggan')
  //   }
  async function hapusPelanggan(id, kodepelanggan) {
    try {
      await client.mutate({
        mutation: gql`
                mutation{
                    deletePelanggan(id:${id})
                    {
                        data{
                            id
                        }
                    }
                }
                `,
      });
      alert(`mahasiswa dengan kodepelanggan ${kodepelanggan} telah terhapus`);
    } catch (error) {
      console.log({ message: error.message });
    }
    router.push("/admin");
  }

  return (
    <div style={{ marginLeft: "50px" }}>
      <h3>Data Pelanggan</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Kode Pelanggan</th>
            <th>Nama</th>
            <th>ALamat</th>
            <th>Nomor Hp</th>
            <th>Detail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((plg, idx) => (
            <tr key={idx}>
              <td>{plg.attributes.kodepelanggan}</td>
              <td>{plg.attributes.nama}</td>
              <td>{plg.attributes.alamat}</td>
              {/* <td>
                                 {pelanggan.attributes.nomerhp}
                            </td> */}
              <td>
                {/* <Link
                  href={{
                    pathname: `/admin/mahasiswa-gql/transkip`,
                    query: {
                      kodepelanggan: pelanggan.attributes.kodepelanggan,
                      nama: pelanggan.attributes.nama,
                      angkatan: pelanggan.attributes.angkatan,
                      prodi: pelanggan.attributes.prodi,
                    },
                  }}
                >
                  <a>Transkip</a>
                </Link> */}
              </td>
              {/* <td>
                                 <Link href={
                                    {pathname:'/admin/mahasiswa/history',
                                        query: {kodepelanggan: pelanggan.attributes.kodepelanggan}
                                    }
                                 }
                                 >
                                    <a>History</a>
                                 </Link>
                            </td> */}
              <td>
                <div className="d-flex justify-content-between">
                  {/* <Link
                    href={`/admin/mahasiswa-gql/updatemahasiswa?id=${pelanggan.id}&kodepelanggan=${pelanggan.attributes.kodepelanggan}
                                        &nama=${pelanggan.attributes.nama}&angkatan=${pelanggan.attributes.angkatan}
                                        &prodi=${pelanggan.attributes.prodi}`}
                  >
                    <a>Edit-gql</a>
                  </Link> */}

                  {/* <Link
                    href={`/admin/mahasiswa/updatemahasiswa?kodepelanggan=${pelanggan.attributes.kodepelanggan}
                                                &nama=${pelanggan.attributes.nama}&angkatan=${pelanggan.attributes.angkatan}&prodi=${pelanggan.attributes.prodi}`}
                  >
                    <a>Edit rest-api</a>
                  </Link> */}

                  {/* <button
                    className="btn btn-danger btn-sm"
                    value={pelanggan.kodepelanggan}
                    // @ts-ignore
                    onClick={(e) =>
                      hapusPelanggan(
                        pelanggan.id,
                        pelanggan.attributes.kodepelanggan
                      )
                    }
                  >
                    Hapus gql
                  </button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPelanggan;
