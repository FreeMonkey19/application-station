import React, { Component } from 'react';
// import { render } from '@testing-library/react';
// import SearchForm from './SearchForm';
// import Sidebar from './Sidebar';
import Registration from './auth/Registration';

export default class Home extends Component {
    render() {
        return (
            
            <div>
                <h1>Home Component</h1>
                <h1>Registration Component</h1>
                <Registration />


            </div>

    
           
        )
    }
}