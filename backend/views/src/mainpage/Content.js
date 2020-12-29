import React, { useEffect, useState } from "react"

const Content = () => { 

    const URL = 'http://www.json-generator.com/api/json/get/bOZzcAMXeG?indent=2'
    
    const GetName = () => {
        const [data, setData] = useState([])   

        useEffect(() => {
            async function fetchData() {
                const callApi = await fetch(URL)
                const user = await callApi.json()
                // const toJSOn = await JSON.parse(user)
                console.log(user)
                // fix this loop please :)
                // setName(user.name)
                setData(user)
                // setName(user[2].name)
            }
            fetchData()
        },[])

        return (
            <select name="kendaraan">
                <option selected disabled>Select item</option>
                {data.map(itm => (
                    <option value={itm.name}>{itm.name}</option>
                ))}
            </select>
        )
    }
    
    return (
        <div>
            <form className="content_form_conf" action="/testdata" method="POST">
                <div className="content_form_set">
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="number" placeholder="Age" name="age"/>
                    {GetName()}
                </div>
                <div className="content_submit_conf">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Content