import React, { useContext, useEffect, useState } from 'react'
import { generate, generateMultiple } from "generate-password"
import { toast } from 'react-hot-toast';
import { PasswordDetail } from '../interfaces/PasswordDetail';
import { useRecoilState } from 'recoil';
import { oldPasswordsAtom } from '../atoms/passwordsAtom';
import { CONTEXT } from '../constants/variables';


const PasswordGenerator = () => {


    const [length, setLength] = useState<number>(16)
    const [uppercase, setUppercase] = useState<boolean>(true)
    const [lowercase, setLowercase] = useState<boolean>(true)
    const [symbols, setSymbols] = useState<boolean>(true)
    const [numbers, setNumbers] = useState<boolean>(true)

    const [password, setPassword] = useState<string>('')

    const [oldPasswords, setOldPasswords] = useRecoilState(oldPasswordsAtom)




    const generatePassword = () => {

        try {
            var _password = generate({ lowercase: lowercase, uppercase: uppercase, numbers: numbers, symbols: symbols, length: length, strict: true });
            setPassword(_password)

        } catch (err) {
            // console.log("An error occcured", err)
            toast.error('Atleast one type of password must be true')
            setSymbols(true)
        }


    }

    const handleCopy = () => {
        navigator.clipboard.writeText(password)


        setOldPasswords((_prev) => {
            // console.log("Prev State is : ", [..._prev], "Current Password is : ", password)
            if (!_prev.includes(password)) {

                localStorage.setItem("oldPasswords", JSON.stringify([..._prev, password]))
                return [..._prev, password]
            } else {
                return [..._prev]
            }

        })

        toast.success(`Password Copied to Clipboard`)


    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    useEffect(() => {
        generatePassword()
    }, [length, uppercase, lowercase, numbers, symbols])






    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="card-title">{CONTEXT.MAIN_KEYWORD}</h1>


                    <div>


                        <div className="form-control">
                            <div className="input-group">
                                <input onChange={handleInputChange} type="text" value={password} placeholder="Password" className="input input-bordered w-full" />
                                <button className="btn btn-success gap-2" onClick={handleCopy}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                    </svg>
                                    <div className='hidden sm:block'>
                                        Copy
                                    </div>
                                </button>
                                <button className="btn btn-info gap-2" onClick={() => generatePassword()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>

                                    <div className='hidden sm:block'>
                                        Refresh
                                    </div>
                                </button>

                            </div>
                        </div>


                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Password Length ({length}):</span>
                                <input type="range" min="4" max="50" value={length} className="range" onChange={(event) => setLength(Number(event.target.value))} name="length" />

                            </label>
                        </div>

                    </div>



                    <div>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Uppercase</span>

                                <input type="checkbox" checked={uppercase} className="toggle" onChange={(_) => setUppercase(!uppercase)} name="uppercase" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Lowercase</span>

                                <input type="checkbox" checked={lowercase} className="toggle" onChange={(_) => setLowercase(!lowercase)} name="lowercase" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Numbers</span>
                                <input type="checkbox" checked={numbers} className="toggle" onChange={(_) => setNumbers(!numbers)} name="numbers" />

                            </label>
                        </div>

                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Symbols</span>
                                <input type="checkbox" checked={symbols} className="toggle" onChange={(_) => setSymbols(!symbols)} name="symbols" />

                            </label>
                        </div>
                    </div>













                </div>
            </div>





        </>
    )
}

export default PasswordGenerator

