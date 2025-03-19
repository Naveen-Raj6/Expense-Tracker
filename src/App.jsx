import React from 'react';
import './App.css';
import AddAmt from './components/AddAmt';
import TopExpData from './components/TopExpData';

const App = () => {
    return (
        <div>
            <header>
                <h2>Expense Tracker</h2>
            </header>
            <section className='expense-data'>
                <AddAmt />
            </section>
            <section className='top-expense-data'>
                <TopExpData />
            </section>
        </div>
    );
};

export default App;