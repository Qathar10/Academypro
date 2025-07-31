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

  const attendanceData = [
    { month: 'Aug', rate: 85 },
    { month: 'Sep', rate: 92 },
    { month: 'Oct', rate: 88 },
    { month: 'Nov', rate: 94 },
    { month: 'Dec', rate: 90 },
  ];

  const revenueData = [
    { month: 'Aug', revenue: 25000, expenses: 18000 },
    { month: 'Sep', revenue: 28000, expenses: 19000 },
    { month: 'Oct', revenue: 24000, expenses: 17000 },
    { month: 'Nov', revenue: 30000, expenses: 22000 },
    { month: 'Dec', revenue: 27000, expenses: 20000 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Message */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back! Here's what's happening at Fazam Football Academy.
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
        {/* Attendance Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Monthly Attendance Rate
          </h3>
          <div className="space-y-4">
            {attendanceData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="w-8 text-sm text-gray-600 dark:text-gray-400">
                  {data.month}
                </span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${data.rate}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {data.rate}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Revenue vs Expenses (KSh)
          </h3>
          <div className="space-y-4">
            {revenueData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{data.month}</span>
                  <div className="space-x-4">
                    <span className="text-green-600">KSh {data.revenue.toLocaleString()}</span>
                    <span className="text-red-500">KSh {data.expenses.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-2">
                    <div
                      className="bg-green-500 h-2 rounded"
                      style={{ width: `${(data.revenue / 35000) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-2">
                    <div
                      className="bg-red-500 h-2 rounded"
                      style={{ width: `${(data.expenses / 35000) * 100}%` }}
                    ></div>
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