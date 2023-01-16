import { useRouter } from 'next/router';
import { useState } from 'react';

function PelangganBykode(props) {
    const [kode, setKode] = useState('')
    const router = useRouter()

    function test(e) {
        e.preventDefault();
        router.push({
            pathname: '/admin/pelanggan/pelanggan',
            query: { 'kode': kode }
        })
    }
    return (
        <div className="container">
            <form onSubmit={test}>
                <div className="row">
                    <div className="col col-lg-8"></div>
                    <div className="col col-lg-4 d-flex flex-reverse">
                        <input type="text"
                            className="form-control mw-50"
                            placeholder="cari dengan kode"
                            value={kode}
                            onChange={(e) => setKode(kode => e.target.value)}
                        />
                        <input type="submit" value=" Cari " className="btn btn-primary ms-2 fs-6" style={{width : '75px'}} />
                    </div>
                </div>
            </form>
        </div>
    );
}
export default PelangganBykode;