import React from 'react'

export default function ProdukPelanggan({ dataPelanggan }) {
    return (
        <>
            <div className="container">
                <div >
                    <div >
                        Info Produk Pelanggan
                    </div>
                <div className="container">
                <div className="col md-12 mb-0 px-5 py-5 text-start mt-1">
                <h5 className="fw-bolder fs-1">Kode Pelanggan :{dataPelanggan.kodepelanggan}</h5>
                <h5 className="fw-bolder fs-1">Nama Pelanggan :{dataPelanggan.nama}</h5>
                <p className="fw-display" style={{ fontSize: "1.2rem" }}> Alamat :{dataPelanggan.alamat}</p>
                <button className="btn btn-danger"><a href="/admin/das">Back</a></button>
                </div>
            </div>
                </div>
            </div>
        </>
    )
}