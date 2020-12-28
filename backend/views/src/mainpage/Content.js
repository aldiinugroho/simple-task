import React, { useEffect, useState } from "react"

const Content = () => { 
    // const [name, setName] = useState('')
    // const onApply = (e) => {
    //     setName(e.currentTarget.value);
    // };
        
    // const sbmt = (e) => {
    //     e.preventDefault()
    //     var name = document.getElementById('name').value
    //     var age = document.getElementById('age').value
    //     const data = {
    //         'name' : name,
    //         'age' : age
    //     }
    //     console.log(data)
    // }

    const URL = 'http://www.json-generator.com/api/json/get/bOZzcAMXeG?indent=2'
      
    // const getData = Object.entries(URL).map(([datas]) => {
    //     return (
    //         <option>{datas}</option>
    //     )
    // })
    
    const GetName = () => {
        const [name, setName] = useState('')

        const fetchData = async () => {
            const callApi = await fetch(URL)
            const user = await callApi.json()
            // fix this loop please :)
            setName(user[2].name)
        }
        useEffect(() => {
            fetchData()
        })

        console.log(name)

        return (
            <select name="kendaraan">
                <option selected disabled>Select item</option>
                <option value={name}>{name}</option>
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