import React, { useState } from 'react';
import { Plus, Megaphone, Calendar, Users, Edit, Trash2, Search, Filter, Send, MessageSquare, Phone, X } from 'lucide-react';

const Announcements: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSendMessageModal, setShowSendMessageModal] = useState(false);

  const announcements = [
    {
      id: 1,
      title: 'Training Schedule Update',
      content: 'Due to field maintenance, all U-14 training sessions will be moved to the indoor facility this week. Please bring appropriate indoor shoes.',
      author: 'John Doe',
      date: '2024-12-16',
      priority: 'High',
      targetAudience: 'U-14 Eagles',
      status: 'Published',
      views: 24,
      type: 'Schedule Change'
    },
    {
      id: 2,
      title: 'New Equipment Arrival',
      content: 'We have received new training equipment including agility ladders, cones, and practice goals. These will be available for all training sessions starting next week.',
      author: 'John Doe',
      date: '2024-12-15',
      priority: 'Medium',
      targetAudience: 'All Groups',
      status: 'Published',
      views: 45,
      type: 'Equipment'
    },
    {
      id: 3,
      title: 'Monthly Parent Meeting',
      content: 'Join us for our monthly parent meeting on December 22nd at 6:00 PM. We will discuss player progress, upcoming tournaments, and academy updates.',
      author: 'John Doe',
      date: '2024-12-14',
      priority: 'High',
      targetAudience: 'Parents & Guardians',
      status: 'Published',
      views: 67,
      type: 'Meeting'
    },
    {
      id: 4,
      title: 'Holiday Training Schedule',
      content: 'Special holiday training sessions will be available during the December break. Sessions will run from 9:00 AM to 11:00 AM, Monday through Friday.',
      author: 'John Doe',
      date: '2024-12-13',
      priority: 'Medium',
      targetAudience: 'All Groups',
      status: 'Draft',
      views: 0,
      type: 'Schedule'
    },
    {
      id: 5,
      title: 'Tournament Registration Open',
      content: 'Registration is now open for the Inter-Academy Championship. Deadline for registration is January 15th. Contact the office for more details.',
      author: 'John Doe',
      date: '2024-12-12',
      priority: 'High',
      targetAudience: 'U-16 Lions',
      status: 'Published',
      views: 89,
      type: 'Tournament'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Draft':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Schedule Change': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      'Equipment': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Meeting': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'Schedule': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
      'Tournament': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Announcements</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Communicate with students, parents, and coaches
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create Announcement</span>
          </button>
          <button 
            onClick={() => setShowSendMessageModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search announcements..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
            />
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700 dark:text-gray-300">Filter</span>
        </button>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {announcement.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(announcement.type)}`}>
                    {announcement.type}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(announcement.priority)}`}>
                    {announcement.priority}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(announcement.status)}`}>
                    {announcement.status}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {announcement.content}
                </p>

                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(announcement.date).toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{announcement.targetAudience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{announcement.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>By {announcement.author}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                {announcement.status === 'Draft' && (
                  <button className="p-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" title="Publish">
                    <Send className="w-4 h-4" />
                  </button>
                )}
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" title="Edit">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-400 hover:text-red-600" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Announcement Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create New Announcement
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
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  placeholder="Enter announcement title..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Priority
                  </label>
                  <select className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Type
                  </label>
                  <select className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
                    <option value="General">General</option>
                    <option value="Schedule">Schedule</option>
                    <option value="Equipment">Equipment</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Tournament">Tournament</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Target Audience
                  </label>
                  <select className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white">
                    <option value="All Groups">All Groups</option>
                    <option value="U-14 Eagles">U-14 Eagles</option>
                    <option value="U-16 Lions">U-16 Lions</option>
                    <option value="U-14 Panthers">U-14 Panthers</option>
                    <option value="Parents & Guardians">Parents & Guardians</option>
                    <option value="Coaches">Coaches</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Content
                </label>
                <textarea
                  rows={6}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  placeholder="Write your announcement content here..."
                />
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
                  type="button"
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Publish Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Send Message Modal */}
      {showSendMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Send Message
              </h2>
              <button 
                onClick={() => setShowSendMessageModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Recipients *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">All Guardians</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">All Parents</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">All Coaches</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">U-14 Eagles Parents</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">U-16 Lions Parents</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">U-14 Panthers Parents</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message Type *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                    <input type="radio" name="messageType" value="whatsapp" className="text-green-600 focus:ring-green-500" />
                    <div className="ml-3 flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">WhatsApp</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Send via WhatsApp</div>
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                    <input type="radio" name="messageType" value="sms" className="text-blue-600 focus:ring-blue-500" />
                    <div className="ml-3 flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">SMS</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Send via SMS</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  placeholder="Enter message subject..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  required
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  placeholder="Type your message here..."
                />
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Character count: 0/160 (SMS limit)
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      Message Preview
                    </h3>
                    <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                      <p>Recipients: 0 selected</p>
                      <p>Estimated cost: KSh 0 (SMS) / Free (WhatsApp)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSendMessageModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcements;