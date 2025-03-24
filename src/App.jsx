import React from 'react';
import './App.css';
import AddAmt from './components/AddAmt';
import TopExpData from './components/TopExpData';
import LanguageSelector from './components/LanguageSelector';
import './i18n'; // Import i18n configuration

const App = () => {
    return (
        <div>
            <header>
                <h1>Expense Tracker</h1>
            </header>
            {/* <LanguageSelector /> */}
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