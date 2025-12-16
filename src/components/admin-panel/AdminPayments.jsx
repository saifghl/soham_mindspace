import React, { useState, useEffect } from 'react';
import { Search, Download, Calendar, ArrowRight, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import './AdminPayments.css';

const AdminPayments = () => {
    const [transactions, setTransactions] = useState([]);

    // Load shared data
    useEffect(() => {
        const stored = localStorage.getItem('mock_transactions');
        if (stored) {
            setTransactions(JSON.parse(stored));
        }
    }, []);

    // Calculate generic stats
    const totalRevenue = transactions.reduce((acc, curr) => acc + curr.amount, 45230); // 45k base
    const pendingAmount = 150.00; // Mock

    return (
        <div className="admin-payment-container">
            <header className="admin-header">
                <div>
                    <h1>Financials & Payments</h1>
                    <p className="subtitle">Track patient payments, outstanding balances, and transaction history.</p>
                </div>
                <button className="export-btn">
                    <Download size={16} /> Export Report
                </button>
            </header>

            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-label">Total Revenue (Month)</div>
                    <div className="stat-value-row">
                        <span className="stat-value">${totalRevenue.toLocaleString()}</span>
                        <span className="stat-badge positive"><TrendingUp size={12} /> 12%</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Total Outstanding</div>
                    <div className="stat-value-row">
                        <span className="stat-value">$12,450.00</span>
                        <span className="stat-badge positive"><TrendingUp size={12} /> 5%</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Pending Payments</div>
                    <div className="stat-value-row">
                        <span className="stat-value">8</span>
                        <span className="stat-badge warning"><AlertCircle size={12} /> 2%</span>
                    </div>
                </div>
            </div>

            {/* Filters Row */}
            <div className="filters-row">
                <div className="search-box">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search Patient Name or MRN..." />
                </div>
                <select className="filter-select">
                    <option>All Statuses</option>
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Overdue</option>
                </select>
                <div className="flex-grow"></div>
                <button className="record-btn">+ Record Payment</button>
            </div>

            {/* Transactions Table */}
            <div className="table-container">
                <table className="payments-table">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Status</th>
                            <th>Amount Due</th>
                            <th>Amount Paid</th>
                            <th>Last Payment</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Demo static row */}
                        <tr>
                            <td>
                                <div className="user-cell">
                                    <img src="https://ui-avatars.com/api/?name=John+Doe" alt="JD" />
                                    <div>
                                        <div className="u-name">John Doe</div>
                                        <div className="u-id">MRN-3021</div>
                                    </div>
                                </div>
                            </td>
                            <td><span className="status-pill overdue">Overdue</span></td>
                            <td>$150.00</td>
                            <td>$50.00</td>
                            <td>Oct 12, 2023</td>
                            <td><button className="icon-action"><Download size={16} /></button></td>
                        </tr>

                        {/* Recent dynamic transactions from localStorage */}
                        {transactions.map((tx) => (
                            <tr key={tx.id}>
                                <td>
                                    <div className="user-cell">
                                        <img src="https://ui-avatars.com/api/?name=Current+User" alt="CU" />
                                        <div>
                                            <div className="u-name">Current User</div>
                                            <div className="u-id">MRN-9999</div>
                                        </div>
                                    </div>
                                </td>
                                <td><span className="status-pill paid">Paid</span></td>
                                <td>$0.00</td>
                                <td>${tx.amount.toFixed(2)}</td>
                                <td>{tx.date}</td>
                                <td><button className="icon-action"><Download size={16} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="pagination">
                <span>Showing 1 to {transactions.length + 1} of {transactions.length + 24} results</span>
                <div className="page-actions">
                    <button className="page-btn">Previous</button>
                    <button className="page-btn active">1</button>
                    <button className="page-btn">Next</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPayments;
