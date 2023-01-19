//create card component mahasiswa
import React from 'react';

const CardMahasiswa = ({dataMhs}) => {
    return (
        <div>
            <div className="card card-hover bg-secondary text-white">
                <div className="card-body">
                    <h5 className="card-title">
                        {dataMhs.nama}
                    </h5>
                    <div className="d-block">
                        <div className="d-inline-block">NIM</div>:
                        <div className="d-inline-block ms-2">
                            {dataMhs.nim}
                        </div>
                    </div>
                    <div className="d-block">
                        <div className="d-inline-block">Angkatan</div>:
                        <div className="d-inline-block ms-2">
                            {dataMhs.angkatan}
                        </div>
                    </div>
                    <div className="d-block">
                        <div className="d-inline-block">Prodi</div>:
                        <div className="d-inline-block ms-2">
                            {dataMhs.prodi}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardMahasiswa;
