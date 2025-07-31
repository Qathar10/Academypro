import React, { useState } from 'react';
import { Plus, BarChart3, Target, Clock, Users, Edit, Trash2, Search, Filter } from 'lucide-react';

const Assessments: React.FC = () => {
  const [activeTab, setActiveTab] = useState('assessments');

  const assessments = [
    {
      id: 1,
      title: 'Monthly Skills Assessment',
      group: 'U-14 Eagles',
      date: '2024-12-20',
      status: 'Scheduled',
      participants: 12,
      parameters: ['Ball Control', 'Passing Accuracy', 'Speed', 'Stamina'],
      averageScore: null,
      completedBy: 0
    },
    {
      id: 2,
      title: 'Technical Evaluation',
      group: 'U-16 Lions',
      date: '2024-12-10',
      status: 'Completed',
      participants: 8,
      parameters: ['Ball Control', 'Passing Accuracy', 'Shooting'],
      averageScore: 7.8,
      completedBy: 8
    },
    {
      id: 3,
      title: 'Physical Assessment',
      group: 'U-14 Panthers',
      date: '2024-12-05',
      status: 'Completed',
      participants: 6,
      parameters: ['Speed', 'Stamina', 'Agility'],
      averageScore: 6.5,
      completedBy: 6
    }
  ];

  const parameters = [
    {
      id: 1,
      name: 'Ball Control',
      description: 'Ability to control and manipulate the ball',
      category: 'Technical',
      maxScore: 10,
      criteria: ['First touch', 'Close control', 'Ball manipulation'],
      isActive: true
    },
    {
      id: 2,
      name: 'Passing Accuracy',
      description: 'Precision and effectiveness of passes',
      category: 'Technical',
      maxScore: 10,
      criteria: ['Short passes', 'Long passes', 'Through balls'],
      isActive: true
    },
    {
      id: 3,
      name: 'Speed',
      description: 'Running speed and acceleration',
      category: 'Physical',
      maxScore: 10,
      criteria: ['Sprint speed', 'Acceleration', 'Change of pace'],
      isActive: true
    },
    {
      id: 4,
      name: 'Stamina',
      description: 'Endurance and fitness level',
      category: 'Physical',
      maxScore: 10,
      criteria: ['Cardiovascular endurance', 'Recovery time', 'Match fitness'],
      isActive: true
    },
    {
      id: 5,
      name: 'Shooting',
      description: 'Goal scoring ability and technique',
      category: 'Technical',
      maxScore: 10,
      criteria: ['Accuracy', 'Power', 'Technique'],
      isActive: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technical':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'Physical':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'Mental':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {activeTab === 'assessments' ? 'Group Assessments' : 'Assessment Parameters'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {activeTab === 'assessments' 
              ? 'Track group performance and progress'
              : 'Manage the criteria used for group evaluations'
            }
          </p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>
            {activeTab === 'assessments' ? 'Schedule Assessment' : 'Add Parameter'}
          </span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('assessments')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'assessments'
                ? 'border-green-500 text-green-600 dark:text-green-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Assessments ({assessments.length})
          </button>
          <button
            onClick={() => setActiveTab('parameters')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'parameters'
                ? 'border-green-500 text-green-600 dark:text-green-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Parameters ({parameters.filter(p => p.isActive).length})
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
      {activeTab === 'assessments' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {assessments.map((assessment) => (
            <div key={assessment.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {assessment.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {assessment.group}
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
                  <span className="text-sm text-gray-600 dark:text-gray-400">Status:</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(assessment.status)}`}>
                    {assessment.status}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Date:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {new Date(assessment.date).toLocaleDateString('en-GB')}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Participants:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {assessment.completedBy}/{assessment.participants}
                  </span>
                </div>

                {assessment.averageScore && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Average Score:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {assessment.averageScore}/10
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Parameters:</span>
                  <div className="flex flex-wrap gap-1">
                    {assessment.parameters.map((param) => (
                      <span key={param} className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs rounded">
                        {param}
                      </span>
                    ))}
                  </div>
                </div>

                {assessment.status === 'Completed' && (
                  <div className="pt-2">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(assessment.completedBy / assessment.participants) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Manage Parameters
          </div>
          {parameters.map((parameter) => (
            <div key={parameter.id} className={`bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 ${!parameter.isActive ? 'opacity-60' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {parameter.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(parameter.category)}`}>
                      {parameter.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Max: {parameter.maxScore}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {parameter.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {parameter.criteria.map((criterion) => (
                      <span key={criterion} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {criterion}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={parameter.isActive}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      readOnly
                    />
                    <label className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      Active
                    </label>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Assessments;