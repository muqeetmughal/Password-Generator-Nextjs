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
          Free Password Generator | Online Random Password Generator Website
        </title>

        <link rel="canonical" href="https://freepasswordgenerator.app/" />
        <meta name="title" content="Free Password Generator | Online Random Password Generator Website" />
        <meta name="description" content="Free Password Generator is an online tool to generate random passwords of your choice in numbers, uppercase, lowercase, and symbol combinations." />
        <meta name="keywords" content="free password generator, password generator, strong password generator, secure password generator, password generator online, pwd generator, " />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Muqeet Mughal"></meta>





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