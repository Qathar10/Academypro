import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Plus, Edit, Trash2, Search, Filter } from 'lucide-react';

const Sessions: React.FC = () => {
  const [viewMode, setViewMode] = useState('upcoming');

  const sessions = [
    {
      id: 1,
      title: 'U-14 Eagles Training',
      group: 'U-14 Eagles',
      coach: 'John Kamau',
      date: '2024-12-17',
      time: '16:00 - 18:00',
      location: 'Main Field',
      attendees: 10,
      maxAttendees: 12,
      status: 'Scheduled',
      type: 'Training'
    },
    {
      id: 2,
      title: 'U-16 Lions Match Preparation',
      group: 'U-16 Lions',
      coach: 'Sarah Wanjiku',
      date: '2024-12-18',
      time: '15:00 - 17:00',
      location: 'Training Ground A',
      attendees: 8,
      maxAttendees: 8,
      status: 'Scheduled',
      type: 'Match Prep'
    },
    {
      id: 3,
      title: 'Technical Skills Workshop',
      group: 'All Groups',
      coach: 'Michael Ochieng',
      date: '2024-12-19',
      time: '14:00 - 16:00',
      location: 'Indoor Hall',
      attendees: 0,
      maxAttendees: 25,
      status: 'Open',
      type: 'Workshop'
    },
    {
      id: 4,
      title: 'U-14 Panthers Training',
      group: 'U-14 Panthers',
      coach: 'Michael Ochieng',
      date: '2024-12-15',
      time: '17:00 - 19:00',
      location: 'Main Field',
      attendees: 6,
      maxAttendees: 6,
      status: 'Completed',
      type: 'Training'
    }
  ];

  const upcomingSessions = sessions.filter(session => 
    new Date(session.date) >= new Date() && session.status !== 'Completed'
  );
  
  const pastSessions = sessions.filter(session => 
    new Date(session.date) < new Date() || session.status === 'Completed'
  );

  const currentSessions = viewMode === 'upcoming' ? upcomingSessions : pastSessions;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Open':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Training':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'Match Prep':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'Workshop':
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sessions</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage training sessions and activities
          </p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Schedule Session</span>
        </button>
      </div>

      {/* View Toggle */}
      <div className="flex items-center space-x-4">
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setViewMode('upcoming')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'upcoming'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Upcoming ({upcomingSessions.length})
          </button>
          <button
            onClick={() => setViewMode('past')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'past'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Past ({pastSessions.length})
          </button>
        </div>

        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search sessions..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
            />
          </div>
        </div>

        <button className="flex items-center space-x-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700 dark:text-gray-300">Filter</span>
        </button>
      </div>

      {/* Sessions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSessions.map((session) => (
          <div key={session.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(session.type)}`}>
                  {session.type}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(session.status)}`}>
                  {session.status}
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1 text-red-400 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {session.title}
            </h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {session.group} • Coach: {session.coach}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(session.date).toLocaleDateString('en-GB', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {session.time}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {session.location}
                </span>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Attendance:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {session.attendees}/{session.maxAttendees}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(session.attendees / session.maxAttendees) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentSessions.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No {viewMode} sessions
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {viewMode === 'upcoming' 
              ? 'Schedule your first session to get started.'
              : 'No past sessions to display.'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Sessions;