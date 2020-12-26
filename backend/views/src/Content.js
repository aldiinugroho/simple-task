import React from "react"

// class Content extends Component {
    
//     test() {
//         const [name, setname] = useState('')
//     }

//     render() {
//         return (
//             <div>
//                 <form className="content_form_conf" action="testdata" method="GET">
//                     <div>Your name : </div>
//                     <div></div>
//                     <div className="content_form_set">
//                         <input type="text" placeholder="Name"/>
//                     </div>
//                     <div className="content_submit_conf">
//                         <button>Submit</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }


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
    
    return (
        <div>
            <form className="content_form_conf" action="/testdata" method="POST">
                <div className="content_form_set">
                    <input type="text" placeholder="Name" name="namee"/>
                    <input type="number" placeholder="Age" name="agee"/>
                </div>
                <div className="content_submit_conf">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Content