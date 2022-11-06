import Head from "next/head"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { oldPasswordsAtom } from "../atoms/passwordsAtom"
import LastCopiedPasswords from "../components/LastCopiedPasswords"
import PasswordGenerator from "../components/PasswordGenerator"

const Home = () => {

  const [oldPasswords, setOldPasswords] = useRecoilState(oldPasswordsAtom)
 

  useEffect(()=>{
    const passwords_in_local : string | null = localStorage.getItem("oldPasswords")

    const passwords = localStorage.getItem("oldPasswords") ? JSON.parse(passwords_in_local || "[]") : []

    setOldPasswords(passwords)

    console.log(oldPasswords)
  },[])
  return (
    <>

      <Head>

        <title>
          Free Password Generator Tool Online
        </title>


      </Head>



      <PasswordGenerator />

      <LastCopiedPasswords />



    </>
  )
}

export default Home