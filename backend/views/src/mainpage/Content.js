import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Content = () => { 

    // production server
    const URL = 'http://localhost:3080/getKendaraan'

    // local server
    // const URL = 'http://www.json-generator.com/api/json/get/bOZzcAMXeG?indent=2'

    
    const GetName = () => {
        const [data, setData] = useState([])   

        useEffect(() => {
            async function fetchData() {
                const callApi = await fetch(URL)
                const user = await callApi.json()
                setData(user)
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
            <div>
                <Link className="resconf" to="/result">
                    - to result -
                </Link>
            </div>
        </div>
    )
}

export default Content