import React from 'react';
import { TrendingUp, TrendingDown, Users, UserCheck, DollarSign, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '8',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
    },
    {
      title: 'Active Coaches',
      value: '2',
      change: '+2',
      changeType: 'positive',
      icon: UserCheck,
    },
    {
      title: 'This Month Revenue',
      value: 'KSh 27,000',
      change: '+8%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      title: 'Upcoming Sessions',
      value: '0',
      change: 'Next 3 days',
      changeType: 'neutral',
      icon: Calendar,
    },
  ];

  const revenueExpenseData = [
    { month: 'Aug', revenue: 125000, expenses: 85000 },
    { month: 'Sep', revenue: 135000, expenses: 92000 },
    { month: 'Oct', revenue: 115000, expenses: 88000 },
    { month: 'Nov', revenue: 140000, expenses: 95000 },
    { month: 'Dec', revenue: 135000, expenses: 90000 },
  ];

  const expenseCategories = [
    { category: 'Salaries', amount: 45000, color: '#10B981', percentage: 50 },
    { category: 'Equipment', amount: 18000, color: '#EF4444', percentage: 20 },
    { category: 'Facilities', amount: 13500, color: '#3B82F6', percentage: 15 },
    { category: 'Marketing', amount: 9000, color: '#F59E0B', percentage: 10 },
    { category: 'Other', amount: 4500, color: '#8B5CF6', percentage: 5 },
  ];

  const maxValue = Math.max(...revenueExpenseData.map(d => Math.max(d.revenue, d.expenses)));

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Message */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back! Here's what's happening at Gunners Football Academy.
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Monday, December 16, 2024
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === 'positive' && (
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    )}
                    {stat.changeType === 'negative' && (
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm ${
                      stat.changeType === 'positive' ? 'text-green-500' :
                      stat.changeType === 'negative' ? 'text-red-500' :
                      'text-gray-500 dark:text-gray-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>
          );
        })}
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
                  {/* Revenue Bar */}
                  <div className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-green-500 rounded-t"
                      style={{ height: `${(data.revenue / maxValue) * 100}%` }}
                    ></div>
                  </div>
                  {/* Expense Bar */}
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
  );
};

export default Dashboard;