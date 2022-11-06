import React, { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { useRecoilState } from 'recoil'
import { oldPasswordsAtom } from '../atoms/passwordsAtom'

const LastCopiedPasswords = () => {


    const [oldPasswords, setOldPasswords] = useRecoilState(oldPasswordsAtom)


    // console.log("State in Last Copied Passwords:", state)


    const handleCopy = (password: string) => {
        navigator.clipboard.writeText(password)


        toast.success(`${password} Copied to Clipboard`)

    }
    const handleDelete = (password_to_delete: string) => {

        setOldPasswords((_prev) => {

            const [password_to_delete, ...restOfPasswords] = _prev;
            // console.log("Prev State is : ", [..._prev], "Current Password is : ", password)

            localStorage.setItem("oldPasswords", JSON.stringify(restOfPasswords))
            return [...restOfPasswords]

        })


        toast.success(`Password Deleted`)

    }

    return (
        <>

            {oldPasswords.length > 0

                ?
                <div className="flex items-center justify-center">

                    <label htmlFor="passwordHIstoryModal" className="btn">Recent Passwords</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="passwordHIstoryModal" className="modal-toggle" />
                    <label htmlFor="passwordHIstoryModal" className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Recent Passwords</h2>

                                    <ul>
                                        {oldPasswords.map((password, index) => {
                                            return (
                                                <div key={index} className="form-control my-1">
                                                    <div className="input-group">
                                                        <input disabled type="text" value={password} placeholder="Password" className="input input-bordered w-full" />
                                                        <button className="btn btn-error gap-2" onClick={() => handleDelete(password)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>


                                                        </button>
                                                        <button className="btn btn-success gap-2" onClick={() => handleCopy(password)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                                            </svg>

                                                        </button>
                                                    </div>
                                                </div>
                                            )

                                        })}
                                    </ul>







                                </div>
                            </div>

                        </label>
                    </label>
                </div>

                :
                ""
            }






        </>
    )
}

export default LastCopiedPasswords