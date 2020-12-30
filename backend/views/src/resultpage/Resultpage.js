import React, { useEffect, useState } from "react"

const Resultpage = () => {

    // production server
    const URL = process.env.REACT_APP_GETRESULT

    // local server
    // const URL = 'http://www.json-generator.com/api/json/get/ceZlscbNxK?indent=2'

    const GetResult = () => {
        const [result, setResult] = useState("")

        useEffect(() => {
            try {
                async function fetchData() {
                    const callResult = await fetch(URL)
                    const resultJSN = await callResult.json()
                    setResult(resultJSN)
                }
                fetchData()
            } catch (error) {
                
            }
        },[])

        if (result !== "") {
            return (
                <div className="result_dtl_conf">
                    <div>{result.name}</div>
                    <div>{result.age}</div>
                    <div>{result.kendaraan}</div>
                </div>
            )
        } else {
            return(
                <div className="result_dtl_conf">
                    You have no result
                </div>
            )
        }
     
    }

    return (
        <div>
            <a className="resconf" href="/new">- back</a>
            {GetResult()}
        </div>
    )
}

export default Resultpage