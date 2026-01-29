import { useEffect, useState } from "react"

const Create = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("userInfo")) || {}
    })
    const handleLogin = () => {
        setUser({
            name: name,
            surname: surname
        })
    }

    useEffect(() => {
        localStorage.setItem("userInfo", JSON.stringify(user))
        console.log(name, surname);
    }, [user])
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <button onClick={() => handleLogin()}>
                Save
            </button>
            <h2>
                {user.name}
            </h2>
            <h2>
                {user.surname}
            </h2>
        </div>
    )
}
export default Create