import React from "react";
import { useRouter } from "next/router";
import {ApolloClient, InMemoryCache, gql} from '@apollo/client'
import AdminLayout from "../../../components/admin/AdminLayout";
import CardMahasiswa from "../../../components/CardMahasiswa";
import Nilai from "../../../components/Nilai";
import Ipk from "../../../components/Ipk";

const transkip=({nilais})=>{
    const router = useRouter();
    return(
        <AdminLayout>
            <div className="container mt-4">
                <div className="text-center">
                    <h3>Transkip Mahasiswa</h3>
                </div>
                <CardMahasiswa dataMhs={router.query}/>
                <Nilai data={nilais.data}/>
                <div className="row">
                    <div className="col col-xl-8 col-lg-8 col-sm-8"></div>
                    <div className="col col-xl-4 col-lg-4 col-sm-4">
                        <Ipk data={nilais.data}/>
                    </div>
                </div>

            </div>
        </AdminLayout>
    )

}
export async function getServerSideProps({query}){
    const nim = query.nim
    const client= new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data }= await client.query({
        query:gql`
        query getNilaiByNim{
            nilais(filters:{mahasiswas:{nim:{eq:"${nim}"}}}){
              data{
                id
                attributes{
                  semester
                  dosen
                  nilai
                  matakuliahs{
                    data{
                      attributes{
                        kdMk
                        matakuliah
                        sks
                      }
                    }
                  }
                }
              }
            }
          }
        `
    })
    return {props:{nilais:data.nilais}}
}
export default transkip;