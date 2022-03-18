import userEvent from '@testing-library/user-event';
import React, {Component} from 'react';
import './app.css';
import Firstposts from './firstposts.jsx';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            //set post
            posts: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        }
        // set input
        handleChange(event) {
            this.setState({input: event.target.value});
        }

        // set state
        handleClick() {
            this.setState({
                posts: [
                    ...this.state.posts,
                    this.state.input
                ],
                // clear input
                input: ''
            })
        }
        render() {
            // add timestamp
            let timestamp = new Date();
            return (
                <div className='container'>
                    <div className='panel'>
                    <img height="100 px" src="https://marketing.twitter.com/content/dam/marketing-twitter/brand/logo.png" alt=""></img>
                    <h1>Chirper</h1>    
                    </div>
                    <div className='body'>
                        <input
                        value={this.state.input}
                        placeholder='type your message here'
                        //changes/types input, run handleChange method
                        onChange={this.handleChange}
                        />
                        <button
                        // when clicked, run handleClick method
                        onClick={this.handleClick}
                        >Post</button>
                        <h2>Log</h2>

                        <div className='posts' /* render headings from firstposts component */>
                            {<Firstposts/>}
                            {this.state.posts.map(post =>(
                                <div>
                                    <h2>{' '}</h2>
                                    <h3>{timestamp.toString()}</h3>
                                    <h4>{post}</h4>
                                    </div> // map over each item in posts array, render timestamp and input
                            ))}
                            
                        </div>
                    </div>
                </div>
                
                );
                                            
            } 
        }
export default App;