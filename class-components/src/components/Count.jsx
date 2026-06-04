import { Component } from "react";
import { prerenderToNodeStream } from "react-dom/static";

class Count extends Component {
    constructor(props) {
        super(props)

    }

    render() {
       return (
        <>
        <h2>{this.props.todos.length}</h2>
        </>
       )
    }
}

export default Count;