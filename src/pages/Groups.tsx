import React, { useState } from 'react';
import { Plus, Users, UserCheck, Edit, Trash2, Search, Filter } from 'lucide-react';

const Groups: React.FC = () => {
  const [activeTab, setActiveTab] = useState('groups');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const groups = [
    {
      id: 1,
      name: 'U-14 Eagles',
      ageGroup: 'Under 14',
      coach: 'John Kamau',
      players: 12,
      maxPlayers: 15,
      trainingDays: ['Monday', 'Wednesday', 'Friday'],
      trainingTime: '4:00 PM - 6:00 PM',
      status: 'Active'
    },
    {
      id: 2,
      name: 'U-16 Lions',
      ageGroup: 'Under 16',
      coach: 'Sarah Wanjiku',
      players: 8,
      maxPlayers: 15,
      trainingDays: ['Tuesday', 'Thursday', 'Saturday'],
      trainingTime: '3:00 PM - 5:00 PM',
      status: 'Active'
    },
    {
      id: 3,
      name: 'U-14 Panthers',
      ageGroup: 'Under 14',
      coach: 'Michael Ochieng',
      players: 6,
      maxPlayers: 12,
      trainingDays: ['Monday', 'Wednesday'],
      trainingTime: '5:00 PM - 7:00 PM',
      status: 'Recruiting'
    }
  ];

  const coaches = [
    {
      id: 1,
      name: 'John Kamau',
      email: 'john.kamau@academy.com',
      phone: '+254 712 345 678',
      specialization: 'Youth Development',
      experience: '8 years',
      groups: ['U-14 Eagles'],
      certifications: ['CAF License C', 'Youth Coaching'],
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Wanjiku',
      email: 'sarah.wanjiku@academy.com',
      phone: '+254 723 456 789',
      specialization: 'Technical Skills',
      experience: '5 years',
      groups: ['U-16 Lions'],
      certifications: ['CAF License D', 'First Aid'],
      status: 'Active'
    },
    {
      id: 3,
      name: 'Michael Ochieng',
      email: 'michael.ochieng@academy.com',
      phone: '+254 734 567 890',
      specialization: 'Goalkeeping',
      experience: '12 years',
      groups: ['U-14 Panthers'],
      certifications: ['CAF License B', 'Goalkeeper Specialist'],
      status: 'Active'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {activeTab === 'groups' ? 'Groups' : 'Coaches'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage academy {activeTab} and assignments
          </p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add {activeTab === 'groups' ? 'Group' : 'Coach'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('groups')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'groups'
                ? 'border-green-500 text-green-600 dark:text-green-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Groups ({groups.length})
          </button>
          <button
            onClick={() => setActiveTab('coaches')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'coaches'
                ? 'border-green-500 text-green-600 dark:text-green-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Coaches ({coaches.length})
          </button>
        </nav>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
            />
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700 dark:text-gray-300">Filter</span>
        </button>
      </div>

      {/* Content */}
      {activeTab === 'groups' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div key={group.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {group.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {group.ageGroup}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Coach:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {group.coach}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Players:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {group.players}/{group.maxPlayers}
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(group.players / group.maxPlayers) * 100}%` }}
                  ></div>
                </div>

                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Training Days:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {group.trainingDays.map((day) => (
                      <span key={day} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs rounded">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Time:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {group.trainingTime}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Status:</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    group.status === 'Active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {group.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Coach
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Specialization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Groups
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {coaches.map((coach) => (
                  <tr key={coach.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <UserCheck className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {coach.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {coach.experience} experience
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {coach.phone}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {coach.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {coach.specialization}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {coach.certifications.map((cert) => (
                          <span key={cert} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-xs rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {coach.groups.map((group) => (
                          <span key={group} className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs rounded">
                            {group}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        {coach.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Groups;