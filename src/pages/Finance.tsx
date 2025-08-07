import React, { useState } from 'react';
import { Plus, DollarSign, TrendingUp, TrendingDown, Calendar, Search, Filter, Download, Users, AlertTriangle } from 'lucide-react';

const Finance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const overviewStats = {
    totalRevenue: 135000,
    pendingPayments: 15000,
    overduePayments: 7500,
    netIncome: -113000,
    totalInvoices: 1,
    overdueInvoices: 1
  };

  const groupFees = [
    {
      id: 1,
      group: 'U-14 Eagles',
      monthlyFee: 4000,
      students: 12,
      totalCollected: 40000,
      pending: 8000,
      overdue: 0,
      collectionRate: 83.3
    },
    {
      id: 2,
      group: 'U-16 Lions',
      monthlyFee: 5000,
      students: 8,
      totalCollected: 35000,
      pending: 5000,
      overdue: 0,
      collectionRate: 87.5
    },
    {
      id: 3,
      group: 'U-14 Panthers',
      monthlyFee: 3500,
      students: 6,
      totalCollected: 17500,
      pending: 3500,
      overdue: 3500,
      collectionRate: 71.4
    }
  ];

  const playerFees = [
    {
      id: 1,
      name: 'Michael Ochieng',
      group: 'U-14 Eagles',
      monthlyFee: 4000,
      lastPayment: '2024-12-01',
      status: 'Paid',
      balance: 0,
      guardian: 'Jane Smith'
    },
    {
      id: 2,
      name: 'David Wanjiku',
      group: 'U-16 Lions',
      monthlyFee: 5000,
      lastPayment: '2024-11-15',
      status: 'Overdue',
      balance: 5000,
      guardian: 'Peter Wanjiku'
    },
    {
      id: 3,
      name: 'Grace Akinyi',
      group: 'U-14 Panthers',
      monthlyFee: 3500,
      lastPayment: '2024-12-10',
      status: 'Paid',
      balance: 0,
      guardian: 'Mary Akinyi'
    }
  ];

  const expenses = [
    {
      id: 1,
      category: 'Salaries',
      description: 'Coach Salaries - December',
      amount: 75000,
      date: '2024-12-01',
      status: 'Paid',
      vendor: 'Staff Payroll'
    },
    {
      id: 2,
      category: 'Equipment',
      description: 'Training Equipment Purchase',
      amount: 25000,
      date: '2024-12-05',
      status: 'Paid',
      vendor: 'Sports World Kenya'
    },
    {
      id: 3,
      category: 'Facilities',
      description: 'Field Maintenance',
      amount: 15000,
      date: '2024-12-10',
      status: 'Pending',
      vendor: 'Green Fields Ltd'
    },
    {
      id: 4,
      category: 'Utilities',
      description: 'Electricity Bill',
      amount: 8000,
      date: '2024-12-15',
      status: 'Paid',
      vendor: 'Kenya Power'
    }
  ];

  const revenueExpenseData = [
    { month: 'Aug', revenue: 125000, expenses: 85000 },
    { month: 'Sep', revenue: 135000, expenses: 92000 },
    { month: 'Oct', revenue: 115000, expenses: 88000 },
    { month: 'Nov', revenue: 140000, expenses: 95000 },
    { month: 'Dec', revenue: 135000, expenses: 90000 },
  ];

  const expenseCategories = [
    { category: 'Salaries', amount: 75000, color: '#10B981', percentage: 60 },
    { category: 'Equipment', amount: 25000, color: '#EF4444', percentage: 20 },
    { category: 'Facilities', amount: 15000, color: '#3B82F6', percentage: 12 },
    { category: 'Utilities', amount: 8000, color: '#F59E0B', percentage: 6 },
    { category: 'Other', amount: 2000, color: '#8B5CF6', percentage: 2 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Overdue':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const maxValue = Math.max(...revenueExpenseData.map(d => Math.max(d.revenue, d.expenses)));

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Finance Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage payments, fees, and expenses
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Transaction</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'group-fees', label: 'Group Fees' },
            { id: 'student-fees', label: 'Student Fees' },
            { id: 'expenses', label: 'Expenses' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-600 dark:text-green-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  KSh {overviewStats.totalRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">+12%</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Payments</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  KSh {overviewStats.pendingPayments.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{overviewStats.totalInvoices} invoices</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Overdue Payments</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  KSh {overviewStats.overduePayments.toLocaleString()}
                </p>
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">{overviewStats.overdueInvoices} invoices</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Net Income</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  KSh {overviewStats.netIncome.toLocaleString()}
                </p>
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">-3%</p>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue vs Expenses Bar Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Revenue vs Expenses
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Monthly financial performance (KSh)
              </p>
              
              <div className="relative h-64">
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{(maxValue / 1000).toFixed(0)}K</span>
                  <span>{(maxValue * 0.75 / 1000).toFixed(0)}K</span>
                  <span>{(maxValue * 0.5 / 1000).toFixed(0)}K</span>
                  <span>{(maxValue * 0.25 / 1000).toFixed(0)}K</span>
                  <span>0</span>
                </div>
                
                <div className="ml-8 h-full flex items-end justify-between space-x-2">
                  {revenueExpenseData.map((data, index) => (
                    <div key={index} className="flex-1 flex items-end space-x-1">
                      <div className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-green-500 rounded-t"
                          style={{ height: `${(data.revenue / maxValue) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-red-500 rounded-t"
                          style={{ height: `${(data.expenses / maxValue) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="ml-8 mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  {revenueExpenseData.map((data, index) => (
                    <span key={index} className="flex-1 text-center">{data.month}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Expenses</span>
                </div>
              </div>
            </div>

            {/* Expense Categories Donut Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Expense Categories
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Breakdown of monthly expenses
              </p>
              
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                    {expenseCategories.map((category, index) => {
                      const startAngle = expenseCategories.slice(0, index).reduce((sum, cat) => sum + (cat.percentage * 3.6), 0);
                      const endAngle = startAngle + (category.percentage * 3.6);
                      const largeArcFlag = category.percentage > 50 ? 1 : 0;
                      
                      const x1 = 50 + 35 * Math.cos((startAngle * Math.PI) / 180);
                      const y1 = 50 + 35 * Math.sin((startAngle * Math.PI) / 180);
                      const x2 = 50 + 35 * Math.cos((endAngle * Math.PI) / 180);
                      const y2 = 50 + 35 * Math.sin((endAngle * Math.PI) / 180);
                      
                      return (
                        <path
                          key={index}
                          d={`M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={category.color}
                          className="hover:opacity-80 transition-opacity"
                        />
                      );
                    })}
                    <circle cx="50" cy="50" r="20" fill="white" className="dark:fill-gray-800" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                {expenseCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{category.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        KSh {category.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {category.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'group-fees' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Group
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Monthly Fee
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Students
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Collected
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Pending
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Collection Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {groupFees.map((group) => (
                    <tr key={group.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {group.group}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        KSh {group.monthlyFee.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {group.students}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">
                        KSh {group.totalCollected.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 dark:text-yellow-400">
                        KSh {group.pending.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${group.collectionRate}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-900 dark:text-white">
                            {group.collectionRate}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'student-fees' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Monthly Fee
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Last Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Balance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Guardian
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {playerFees.map((player) => (
                    <tr key={player.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {player.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {player.group}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        KSh {player.monthlyFee.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {new Date(player.lastPayment).toLocaleDateString('en-GB')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(player.status)}`}>
                          {player.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        KSh {player.balance.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {player.guardian}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'expenses' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Expense
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Vendor
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {expenses.map((expense) => (
                    <tr key={expense.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {expense.description}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {expense.category}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 dark:text-red-400">
                        -KSh {expense.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {new Date(expense.date).toLocaleDateString('en-GB')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(expense.status)}`}>
                          {expense.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {expense.vendor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Finance;