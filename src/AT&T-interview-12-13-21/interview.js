//解释这道题问题出在哪。。
class MyComponent extends React.Component {
    constructor(props) {
    // set the default internal state
    this.state = {
        clicks: 0
    };
    }

    componentDidMount() {
    this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
    }

    componentWillUnmount() {
    this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
    }

    clickHandler() {
    this.setState({
        clicks: this.clicks + 1
    });
    }

    render() {
        //render should not have return inside of it.
        let children = this.props.children;
        <div>
            <h2>My Component ({this.state.clicks} clicks)</h2>
            <h3>{this.props.headerText}</h3>
            {children}
        </div>
    }
}
