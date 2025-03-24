import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div style={{ margin: '1rem', textAlign: 'center' }}>
            {/* <label htmlFor="language-select" style={{ marginRight: '0.5rem', fontWeight: 'bold', color: 'royalblue' }}>
                Select Language:
            </label> */}
            <select
                id="language-select"
                onChange={handleLanguageChange}
                style={{
                    padding: '0.5rem',
                    border: '2px solid royalblue',
                    borderRadius: '5px',
                    color: 'royalblue',
                    fontWeight: 'bold',
                }}
            >
                <option value="en">English</option>
                <option value="ta">Tamil</option>
                {/* Add more languages here */}
            </select>
        </div>
    );
};

export default LanguageSelector;
