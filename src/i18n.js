import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            walletBalance: "Wallet Balance",
            expense: "Expense",
            addIncome: "Add Income",
            addExpense: "Add Expense",
            selectCategory: "Select Category",
            food: "Food",
            bills: "Bills",
            entertainment: "Entertainment",
            transport: "Transport",
            healthcare: "Healthcare",
            education: "Education",
            others: "Others",
            recentTransactions: "Recent Transactions",
            topExpenses: "Top Expenses",
            noExpenseToShow: "No expense to show",
            noExpenseDataAvailable: "No expense data available",
            previous: "Previous",
            next: "Next",
            enterPageNumber: "Enter page number",
            go: "Go",
            invalidPageNumber: "Invalid page number",
            search: "Search",
            errorMessage: "An error occurred",
        },
    },
    ta: {
        translation: {
            walletBalance: "பணப்பை இருப்பு",
            expense: "செலவு",
            addIncome: "வருமானத்தைச் சேர்க்கவும்",
            addExpense: "செலவுகளைச் சேர்க்கவும்",
            selectCategory: "வகையைத் தேர்ந்தெடுக்கவும்",
            food: "உணவு",
            bills: "பில்கள்",
            entertainment: "மகிழ்ச்சி",
            transport: "போக்குவரத்து",
            healthcare: "மருத்துவம்",
            education: "கல்வி",
            others: "மற்றவை",
            recentTransactions: "சமீபத்திய பரிவர்த்தனைகள்",
            topExpenses: "முக்கிய செலவுகள்",
            noExpenseToShow: "காண்பிக்க செலவுகள் இல்லை",
            noExpenseDataAvailable: "செலவுத் தரவுகள் இல்லை",
            previous: "முந்தையது",
            next: "அடுத்தது",
            enterPageNumber: "பக்க எண்ணை உள்ளிடவும்",
            go: "செல்",
            invalidPageNumber: "தவறான பக்க எண்",
            search: "தேடல்",
            errorMessage: "ஒரு பிழை ஏற்பட்டது",
        },
    },
    // Add more languages here...
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;