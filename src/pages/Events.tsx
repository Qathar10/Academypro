import React, { useState } from 'react';
import { Plus, Calendar, MapPin, Users, Clock, Trophy, Edit, Trash2, Search, Filter } from 'lucide-react';

const Events: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState('All Events');

  const events = [
    {
      id: 1,
      title: 'Inter-Academy Championship',
      type: 'Tournament',
      date: '2024-12-25',
      time: '09:00 - 17:00',
      location: 'Nairobi Sports Complex',
      description: 'Annual championship tournament featuring top academies from across Kenya.',
      participants: 8,
      maxParticipants: 12,
      status: 'Upcoming',
      organizer: 'Kenya Football Association',
      registrationDeadline: '2024-12-20',
      entryFee: 5000,
      prizes: ['Trophy', 'Medals', 'KSh 50,000']
    },
    {
      id: 2,
      title: 'U-14 Eagles vs Lions FC',
      type: 'Match',
      date: '2024-12-22',
      time: '15:00 - 17:00',
      location: 'Academy Main Field',
      description: 'Friendly match between our U-14 Eagles and Lions FC academy team.',
      participants: 12,
      maxParticipants: 12,
      status: 'Confirmed',
      organizer: 'Gunners Football Academy',
      registrationDeadline: null,
      entryFee: 0,
      prizes: []
    },
    {
      id: 3,
      title: 'Skills Development Workshop',
      type: 'Training',
      date: '2024-12-28',
      time: '10:00 - 14:00',
      location: 'Indoor Training Hall',
      description: 'Intensive skills workshop focusing on ball control and passing techniques.',
      participants: 15,
      maxParticipants: 20,
      status: 'Open',
      organizer: 'Coach Sarah Wanjiku',
      registrationDeadline: '2024-12-26',
      entryFee: 1500,
      prizes: []
    },
    {
      id: 4,
      title: 'Parent-Child Fun Day',
      type: 'Social',
      date: '2024-12-30',
      time: '11:00 - 16:00',
      location: 'Academy Grounds',
      description: 'Fun-filled day with games, activities, and bonding time for families.',
      participants: 25,
      maxParticipants: 50,
      status: 'Open',
      organizer: 'Academy Management',
      registrationDeadline: '2024-12-28',
      entryFee: 500,
      prizes: ['Participation Certificates', 'Small Gifts']
    },
    {
      id: 5,
      title: 'Regional Youth Cup',
      type: 'Tournament',
      date: '2024-12-18',
      time: '08:00 - 18:00',
      location: 'Mombasa Sports Stadium',
      description: 'Regional tournament completed successfully with great performances.',
      participants: 10,
      maxParticipants: 10,
      status: 'Completed',
      organizer: 'Coast Football Association',
      registrationDeadline: null,
      entryFee: 3000,
      prizes: ['2nd Place Trophy', 'Silver Medals']
    }
  ];

  const eventTypes = ['All Events', 'Tournament', 'Match', 'Training', 'Social'];

  const filteredEvents = selectedEventType === 'All Events' 
    ? events 
    : events.filter(event => event.type === selectedEventType);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Open':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
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
      case 'Tournament':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'Match':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Training':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Social':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Tournament':
        return Trophy;
      case 'Match':
        return Users;
      case 'Training':
        return Calendar;
      case 'Social':
        return Users;
      default:
        return Calendar;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Events</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage tournaments, matches, and academy events
          </p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Event</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
            />
          </div>
        </div>
        
        <select
          value={selectedEventType}
          onChange={(e) => setSelectedEventType(e.target.value)}
          className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
        >
          {eventTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <button className="flex items-center space-x-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700 dark:text-gray-300">More Filters</span>
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEvents.map((event) => {
          const TypeIcon = getTypeIcon(event.type);
          return (
            <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    event.type === 'Tournament' ? 'bg-purple-100 dark:bg-purple-900/20' :
                    event.type === 'Match' ? 'bg-green-100 dark:bg-green-900/20' :
                    event.type === 'Training' ? 'bg-blue-100 dark:bg-blue-900/20' :
                    'bg-pink-100 dark:bg-pink-900/20'
                  }`}>
                    <TypeIcon className={`w-6 h-6 ${
                      event.type === 'Tournament' ? 'text-purple-600 dark:text-purple-400' :
                      event.type === 'Match' ? 'text-green-600 dark:text-green-400' :
                      event.type === 'Training' ? 'text-blue-600 dark:text-blue-400' :
                      'text-pink-600 dark:text-pink-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {event.organizer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {event.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(event.date).toLocaleDateString('en-GB', {
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
                    {event.time}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {event.location}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {event.participants}/{event.maxParticipants} participants
                  </span>
                </div>

                {event.entryFee > 0 && (
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Entry Fee: KSh {event.entryFee.toLocaleString()}
                    </span>
                  </div>
                )}

                {event.registrationDeadline && (
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Registration Deadline: {new Date(event.registrationDeadline).toLocaleDateString('en-GB')}
                    </span>
                  </div>
                )}
              </div>

              {event.prizes.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Prizes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {event.prizes.map((prize, index) => (
                      <span key={index} className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-xs rounded">
                        {prize}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-4">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                  ></div>
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
            </div>
          );
        })}
      </div>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create New Event
              </h2>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  placeholder="Enter event title..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Event Type
                  </label>
                  <select className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
                    <option value="Tournament">Tournament</option>
                    <option value="Match">Match</option>
                    <option value="Training">Training</option>
                    <option value="Social">Social</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
                    <option value="Open">Open</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Confirmed">Confirmed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Time
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                    placeholder="e.g., 09:00 - 17:00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  placeholder="Enter event location..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  placeholder="Describe the event..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Max Participants
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Entry Fee (KSh)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;