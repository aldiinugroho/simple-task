import React, { Component } from "react"

class Content extends Component {
    render() {
        return (
            <div>
                <form className="content_form_conf" action="" method="GET">
                    <div className="content_form_set">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Comment"/>
                        <input type="number" placeholder="rate"/>
                    </div>
                    <div className="content_submit_conf">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Content