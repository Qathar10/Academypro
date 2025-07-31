import React, { useState } from 'react';
import { Plus, Users, UserCheck, Edit, Trash2, Search, Filter, X, Upload, User } from 'lucide-react';

const Groups: React.FC = () => {
  const [activeTab, setActiveTab] = useState('groups');
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [showCreateCoachModal, setShowCreateCoachModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [groups, setGroups] = useState([
    {
      id: 1,
      name: 'U-14 Eagles',
      ageGroup: 'Under 14',
      coach: 'John Kamau',
      players: 12,
      maxPlayers: 15,
      trainingDays: ['Monday', 'Wednesday', 'Friday'],
      trainingTime: '4:00 PM - 6:00 PM',
      status: 'Active',
      image: null
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
      status: 'Active',
      image: null
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
      status: 'Recruiting',
      image: null
    }
  ]);

  const [coaches, setCoaches] = useState([
    {
      id: 1,
      name: 'John Kamau',
      email: 'john.kamau@academy.com',
      phone: '+254 712 345 678',
      specialization: 'Youth Development',
      experience: '8 years',
      groups: ['U-14 Eagles'],
      certifications: ['CAF License C', 'Youth Coaching'],
      status: 'Active',
      image: null
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
      status: 'Active',
      image: null
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
      status: 'Active',
      image: null
    }
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddGroup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const trainingDays = [];
    if (formData.get('monday')) trainingDays.push('Monday');
    if (formData.get('tuesday')) trainingDays.push('Tuesday');
    if (formData.get('wednesday')) trainingDays.push('Wednesday');
    if (formData.get('thursday')) trainingDays.push('Thursday');
    if (formData.get('friday')) trainingDays.push('Friday');
    if (formData.get('saturday')) trainingDays.push('Saturday');
    if (formData.get('sunday')) trainingDays.push('Sunday');

    const newGroup = {
      id: groups.length + 1,
      name: formData.get('groupName') as string,
      ageGroup: formData.get('ageGroup') as string,
      coach: formData.get('coach') as string,
      players: 0,
      maxPlayers: parseInt(formData.get('maxPlayers') as string),
      trainingDays,
      trainingTime: formData.get('trainingTime') as string,
      status: 'Active',
      image: selectedImage
    };

    setGroups([...groups, newGroup]);
    setShowCreateGroupModal(false);
    setSelectedImage(null);
    alert('Group created successfully!');
  };

  const handleAddCoach = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const certifications = (formData.get('certifications') as string).split(',').map(cert => cert.trim());

    const newCoach = {
      id: coaches.length + 1,
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      specialization: formData.get('specialization') as string,
      experience: formData.get('experience') as string,
      groups: [],
      certifications,
      status: 'Active',
      image: selectedImage
    };

    setCoaches([...coaches, newCoach]);
    setShowCreateCoachModal(false);
    setSelectedImage(null);
    alert('Coach added successfully!');
  };

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
          onClick={() => activeTab === 'groups' ? setShowCreateGroupModal(true) : setShowCreateCoachModal(true)}
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
                  {group.image ? (
                    <img 
                      src={group.image} 
                      alt={group.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                  )}
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
                        {coach.image ? (
                          <img 
                            src={coach.image} 
                            alt={coach.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <UserCheck className="w-5 h-5 text-white" />
                          </div>
                        )}
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

      {/* Add Group Modal */}
      {showCreateGroupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create New Group
              </h2>
              <button 
                onClick={() => {
                  setShowCreateGroupModal(false);
                  setSelectedImage(null);
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleAddGroup} className="space-y-6">
              {/* Group Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Group Image
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                    {selectedImage ? (
                      <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <label className="cursor-pointer bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center space-x-2">
                      <Upload className="w-4 h-4" />
                      <span>Upload Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Upload an image for the group (optional)
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Group Name *
                  </label>
                  <input
                    type="text"
                    name="groupName"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Age Group *
                  </label>
                  <select
                    name="ageGroup"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  >
                    <option value="">Select Age Group</option>
                    <option value="Under 10">Under 10</option>
                    <option value="Under 12">Under 12</option>
                    <option value="Under 14">Under 14</option>
                    <option value="Under 16">Under 16</option>
                    <option value="Under 18">Under 18</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Coach *
                  </label>
                  <select
                    name="coach"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  >
                    <option value="">Select Coach</option>
                    {coaches.map((coach) => (
                      <option key={coach.id} value={coach.name}>
                        {coach.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Max Players *
                  </label>
                  <input
                    type="number"
                    name="maxPlayers"
                    required
                    min="1"
                    max="25"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Training Time *
                </label>
                <input
                  type="text"
                  name="trainingTime"
                  required
                  placeholder="e.g., 4:00 PM - 6:00 PM"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Training Days *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <label key={day} className="flex items-center">
                      <input
                        type="checkbox"
                        name={day.toLowerCase()}
                        className="rounded text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateGroupModal(false);
                    setSelectedImage(null);
                  }}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Create Group
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Coach Modal */}
      {showCreateCoachModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Coach
              </h2>
              <button 
                onClick={() => {
                  setShowCreateCoachModal(false);
                  setSelectedImage(null);
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleAddCoach} className="space-y-6">
              {/* Coach Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Coach Photo
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                    {selectedImage ? (
                      <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <label className="cursor-pointer bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center space-x-2">
                      <Upload className="w-4 h-4" />
                      <span>Upload Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Upload a photo for the coach (optional)
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Specialization *
                  </label>
                  <select
                    name="specialization"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  >
                    <option value="">Select Specialization</option>
                    <option value="Youth Development">Youth Development</option>
                    <option value="Technical Skills">Technical Skills</option>
                    <option value="Goalkeeping">Goalkeeping</option>
                    <option value="Physical Training">Physical Training</option>
                    <option value="Tactical Training">Tactical Training</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Experience *
                  </label>
                  <input
                    type="text"
                    name="experience"
                    required
                    placeholder="e.g., 5 years"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Certifications
                </label>
                <input
                  type="text"
                  name="certifications"
                  placeholder="e.g., CAF License C, Youth Coaching (separate with commas)"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateCoachModal(false);
                    setSelectedImage(null);
                  }}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Add Coach
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Groups;