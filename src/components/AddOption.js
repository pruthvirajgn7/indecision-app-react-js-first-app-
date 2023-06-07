import React from "react";

export default class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleOnSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}))

        if(!error){
            e.target.elements.option.value = '';   // to empty the form input value
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <input type="text" name="option" />
                    <button>AddOption</button>
                </form>
            </div>
        );
    }
}
