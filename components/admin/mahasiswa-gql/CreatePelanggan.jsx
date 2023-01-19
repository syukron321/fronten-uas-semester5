import axios from "axios";
import React from "react";
import { useState } from "react";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useRouter } from "next/router";

const CreatePelanggan = () => {
  const router = useRouter();

  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  const [kodepelanggan, setKodepelanggan] = useState("");
  const [nama, setNama] = useState("");
  const [nomerhp, setNomerhp] = useState("");
  const [alamat, setAlamat] = useState("");

  const clearInput = () => {
    setKodepelanggan("");
    setNama("");
    setNomerhp("");
    setAlamat("");
  };

  async function submitHandler(e) {
    e.preventDefault();
    try {
      await client.mutate({
        mutation: gql`
            mutation{
                createPelanggan(data:{
                  kodepelanggan:"${kodepelanggan}",
                  nama:"${nama}",
                  nomerhp:${nomerhp},
                  alamat:"${alamat}"
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
              }`,
      });
      alert("Penambahan data sukses");
      router.push("/admin/admin/datapelanggan");
      clearInput();
    } catch (error) {
        alert("gagal")
        console.log({ message: error.message });
    }
  }
  return (
    <div>
      <div className="card p-3">
        <div className="produk-form mt-5">
          <form onSubmit={submitHandler}>
            <h2>Add Pelanggan</h2>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    id="kodepelanggan"
                    className="form-control"
                    placeholder="Kode Agen"
                    required="required"
                    value={kodepelanggan}
                    onChange={(e) => setKodepelanggan(e.target.value)}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="nama"
                    className="form-control"
                    placeholder="Nama"
                    required="required"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="row">
                <div className="col">
                  <input
                    type="number"
                    id="nomerhp"
                    className="form-control"
                    placeholder="nomerhp"
                    required="required"
                    value={nomerhp}
                    onChange={(e) => setNomerhp(e.target.value)}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="alamat"
                    className="form-control"
                    placeholder="alamat"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-group text-center">
              <button
                type="submit"
                className="btn btn-lg btn-block rounded-0"
                id="demo"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePelanggan;
