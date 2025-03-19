import React, { Fragment, useContext, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ExpenseContext } from '../context/ContextAPI';
import { FaUtensils, FaReceipt, FaFilm, FaCar, FaQuestion, FaTools, FaEdit, FaTrash } from 'react-icons/fa';

const TopExpData = () => {
    const { expenses, deleteExpense, handleOpenExpenseModal, setEditingExpense } = useContext(ExpenseContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const data = expenses.reduce((acc, expense) => {
        const existingCategory = acc.find(item => item.name === expense.category);
        if (existingCategory) {
            existingCategory.amount += expense.amount;
        } else {
            acc.push({ name: expense.category, amount: expense.amount });
        }
        return acc;
    }, []);

    const COLORS = {
        food: '#ff7390',
        bills: '#5dc7c7',
        entertainment: '#ffd368',
        transport: '#4aaced',
        others: '#a276ff'
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].payload.name} : ₹${payload[0].payload.amount}`}</p>
                </div>
            );
        }
        return null;
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(expenses.length / itemsPerPage);
    const currentExpenses = expenses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'food':
                return <FaUtensils color='#ff7390' />;
            case 'bills':
                return <FaReceipt color='#5dc7c7' />;
            case 'entertainment':
                return <FaFilm color='#ffd368' />;
            case 'transport':
                return <FaCar color='#4aaced' />;
            case 'others':
                return <FaTools color='#a276ff' />;
            default:
                return <FaQuestion color='#000' />;
        }
    };

    const handleEdit = (expense) => {
        setEditingExpense(expense);
        handleOpenExpenseModal();
    };

    const handleDelete = (expenseId) => {
        deleteExpense(expenseId);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <Fragment>
            <section className='recent-expenses'>
                <h2 style={{textAlign:"left"}}>Recent Transactions</h2>
                {currentExpenses.length > 0 ? (
                    <main id='expense-list'>
                        {currentExpenses.map((expense, index) => (
                            <div key={index} className='expense-card'>
                                <aside className='CTD'>
                                    <div className='category-icon'>
                                        {getCategoryIcon(expense.category)}
                                    </div>
                                    <div className='expense-details'>
                                        <article>{expense.title}</article>
                                        <p style={{fontSize:"0.8rem",color:"gray"}}>{formatDate(expense.date)}</p>
                                    </div>
                                </aside>
                                <aside className='ExpEditDel'>
                                    <b>₹{expense.amount}</b>
                                    <button style={{background:"rgb(248, 93, 15)"}} onClick={() => handleEdit(expense)}><FaEdit /></button>
                                    <button onClick={() => handleDelete(expense.id)}><FaTrash /></button>
                                </aside>
                            </div>
                        ))}
                    </main>
                ) : (
                    <div style={{ backgroundColor: 'white', color: 'black', padding: '3rem 1rem', textAlign: 'center', borderRadius: '0.6rem' }}>
                        No expense to show
                    </div>
                )}
                {expenses.length > itemsPerPage && (
                    <div className="pagination">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                                {index + 1}
                            </button>
                        ))}
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                )}
            </section>
            <section className='top-expense-graph'>
            <h2>Top Expenses</h2>
            {data.length > 0 ? (
                <div className="bar-chart-container">
                    <ResponsiveContainer width="90%" height={250}>
                        <BarChart data={data} layout="vertical" margin={{ top: 20, right:0, left: 60, bottom: 5 }}>
                            <CartesianGrid stroke="none" />
                            <XAxis type="number" dataKey="amount" stroke="black" />
                            <YAxis type="category" dataKey="name" stroke="black" />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="amount" fill="#8884d8" barSize={20}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <div style={{ backgroundColor: 'white', color: 'black', padding: ' 2rem 1rem', textAlign: 'center', borderRadius: '0.6rem' }}>
                    No expense data available
                </div>
            )}
            </section>
        </Fragment>
    );
};

export default TopExpData;
