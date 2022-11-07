import Head from "next/head"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { oldPasswordsAtom } from "../atoms/passwordsAtom"
import Content from "../components/Content"
import LastCopiedPasswords from "../components/LastCopiedPasswords"
import PasswordGenerator from "../components/PasswordGenerator"
import i18n from '../i18'

const Home = () => {

  const [_, setOldPasswords] = useRecoilState(oldPasswordsAtom)
  const [showHistory, setShowHistory] = useState<boolean>(false)


  useEffect(() => {
    const passwords_in_local: string | null = localStorage.getItem("oldPasswords")

    const passwords = localStorage.getItem("oldPasswords") ? JSON.parse(passwords_in_local || "[]") : []

    setOldPasswords(passwords)

  }, [])


  return (
    <>

      <Head>

        <title>
          Free Password Generator Tool Online
        </title>


      </Head>

      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto">

        <PasswordGenerator />



        <LastCopiedPasswords />



        <Content />
      </div>






    </>
  )
}

export default Home