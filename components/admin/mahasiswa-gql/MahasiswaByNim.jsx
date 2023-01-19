import { useState } from 'react' 
import { useRouter } from 'next/router'

export default function ByKodePelanggan(props) {
    const [kodepelanggan, setKodepelanggan] = useState("");
    const router = useRouter();

    function submitHandler(e){
        e.preventDefault();
        router.push({
            pathname: '/admin/mahasiswa-gql/datamahasiswa',
            query: {'kodepelanggan':kodepelanggan}
        })
    }

  return (
    <div>
        <div className="container">
            <form action="" onSubmit={submitHandler}>
                <div className="row"><div className="col col-lg-8"></div>
                <div className="col col-lg-4 d-flex flex-reverse">
                    <input type="text"
                    className='form-control mw-50' placeholder='cari kodepelanggan'
                    value={kodepelanggan} onChange={(e)=> setKodepelanggan(kodepelanggan => e.target.value)}  />
                    <input type="submit" className="btn btn-primary ms-2 fs-6" value="Cari" style={{width: '75px'}}/>
                    </div></div>
            </form>
        </div>
    </div>
  )
}
