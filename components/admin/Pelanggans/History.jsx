import React,{ useState} from "react"
//import ReactMarkdown from "ReactMarkdown"

export default function History({ mahasiswa }) {
    const history = mahasiswa.attributes.histories.data

    return (
        <div className="container">
            <h3>History Mahasiswa</h3><hr />

            <div className="row">
                <div className="col-1">NIM</div>
                <div className="col-11">{mahasiswa.attributes.nim}</div>
            </div>
            <div className="row">
                <div className="col-1">NAMA</div>
                <div className="col-11">{mahasiswa.attributes.nama}</div>
            </div>
            <div className="row">
                <div className="col-1">ANGKATAN</div>
                <div className="col-11">{mahasiswa.attributes.angkatan}</div>
            </div>
            <div className="row">
                <div className="col-1">PRODI</div>
                <div className="col-11">{mahasiswa.attributes.prodi}</div>
            </div>
            {/* <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Semester</th>
                            <th>History</th>
                        </tr>
                    </thead>
                    <tbody>
                        { history.map((hist, idx)=>(
                            <tr key ={idx}>
                                <td>
                                    {idx +1}
                                </td>
                                <td>
                                    {hist.attributes.tanggal}
                                </td>
                                <td>
                                    {hist.attributes.semester}
                                </td>
                                <td>
                                    <ReactMarkdown>
                                        {hist.attributes.history}
                                    </ReactMarkdown>
                                    <p dangerouslySetInnerHTML={{__htmml:hist.attributes.history}}></p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </div>
    )


}