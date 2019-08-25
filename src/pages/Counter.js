import React, {Component} from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    // Unused when using Redux
    // state = {
    //     count: 0
    // }

    // increment = ()=>{
    //     // Use Redux
    //     this.props.dispatch({
    //         type: 'increment'
    //     });

    //     // Without Redux
    //     // this.setState({
    //     //     count: this.state.count + 1
    //     // })
    // }
    
    // decrement = ()=>{
    //     // Use Redux
    //     this.props.dispatch({
    //         type: 'decrement'
    //     });
        
    //     // Without Redux
    //     // this.setState({
    //     //     count: this.state.count - 1
    //     // })
    // }
    
    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
                <button onClick = {() => this.props.do('incr')}>Tambah</button>
                <button onClick = {() => this.props.do('decr')}>Kurang</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        do: (type) => {
          dispatch({type})
        }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)