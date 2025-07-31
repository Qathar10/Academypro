import React, { useState } from 'react';
import { Plus, Search, Filter, Clock, Target, Users, BookOpen, Play } from 'lucide-react';

const DrillsLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Difficulties');

  const drills = [
    {
      id: 1,
      name: 'Cone Dribbling',
      category: 'Technical',
      difficulty: 'Beginner',
      description: 'Dribbling through a series of cones to improve ball control',
      duration: '15 min',
      skillsCount: 2,
      equipment: ['Cones', 'Footballs'],
      skillsDeveloped: ['Ball Control', 'Speed'],
      instructions: [
        'Set up 6 cones in a straight line, 2 meters apart',
        'Players dribble through the cones using both feet',
        'Focus on close control and keeping the ball close',
        'Repeat 5 times, increasing speed each time'
      ]
    },
    {
      id: 2,
      name: 'Passing Square',
      category: 'Passing',
      difficulty: 'Intermediate',
      description: 'Short passing drill in a square formation',
      duration: '20 min',
      skillsCount: 2,
      equipment: ['Cones', 'Footballs'],
      skillsDeveloped: ['Passing Accuracy', 'First Touch'],
      instructions: [
        'Create a 10x10 meter square with cones',
        'Players at each corner',
        'Pass clockwise, then counter-clockwise',
        'Focus on accuracy and first touch'
      ]
    },
    {
      id: 3,
      name: 'Shooting Practice',
      category: 'Shooting',
      difficulty: 'Intermediate',
      description: 'Goal shooting from various angles and distances',
      duration: '25 min',
      skillsCount: 3,
      equipment: ['Goals', 'Footballs', 'Cones'],
      skillsDeveloped: ['Shooting Accuracy', 'Power', 'Technique'],
      instructions: [
        'Set up shooting positions at different angles',
        'Players take turns shooting from each position',
        'Focus on accuracy over power initially',
        'Progress to power shots once accuracy improves'
      ]
    },
    {
      id: 4,
      name: '1v1 Defending',
      category: 'Defending',
      difficulty: 'Advanced',
      description: 'One-on-one defensive positioning and tackling',
      duration: '30 min',
      skillsCount: 4,
      equipment: ['Cones', 'Footballs', 'Bibs'],
      skillsDeveloped: ['Defensive Positioning', 'Tackling', 'Anticipation', 'Communication'],
      instructions: [
        'Create a 20x15 meter area with goals at each end',
        'One attacker, one defender',
        'Attacker tries to score, defender prevents',
        'Switch roles every 2 minutes'
      ]
    },
    {
      id: 5,
      name: 'Agility Ladder',
      category: 'Physical',
      difficulty: 'Beginner',
      description: 'Footwork and agility training using ladder drills',
      duration: '10 min',
      skillsCount: 2,
      equipment: ['Agility Ladder', 'Cones'],
      skillsDeveloped: ['Agility', 'Coordination'],
      instructions: [
        'Set up agility ladder on flat surface',
        'Perform various footwork patterns',
        'Start slow, increase speed gradually',
        'Focus on precision over speed initially'
      ]
    },
    {
      id: 6,
      name: 'Small-Sided Game',
      category: 'Tactical',
      difficulty: 'Advanced',
      description: '4v4 game focusing on possession and movement',
      duration: '35 min',
      skillsCount: 5,
      equipment: ['Small Goals', 'Footballs', 'Bibs', 'Cones'],
      skillsDeveloped: ['Teamwork', 'Decision Making', 'Positioning', 'Communication', 'Endurance'],
      instructions: [
        'Create a 30x20 meter pitch with small goals',
        'Two teams of 4 players each',
        'Focus on keeping possession',
        'Encourage quick passing and movement'
      ]
    }
  ];

  const categories = ['All Categories', 'Technical', 'Passing', 'Shooting', 'Defending', 'Physical', 'Tactical'];
  const difficulties = ['All Difficulties', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredDrills = drills.filter(drill => {
    const categoryMatch = selectedCategory === 'All Categories' || drill.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All Difficulties' || drill.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Technical': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Passing': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'Shooting': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      'Defending': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      'Physical': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      'Tactical': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Drills Library</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage training drills and exercises
          </p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Drill</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search drills..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
            />
          </div>
        </div>
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
        >
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </div>

      {/* Drills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDrills.map((drill) => (
          <div key={drill.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(drill.category)}`}>
                  {drill.category}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(drill.difficulty)}`}>
                  {drill.difficulty}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {drill.name}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {drill.description}
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{drill.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4" />
                  <span>{drill.skillsCount} skills</span>
                </div>
              </div>
            </div>

            {/* Equipment */}
            <div className="px-6 pb-4">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                Equipment Needed
              </h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {drill.equipment.map((item) => (
                  <span key={item} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                    {item}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                Skills Developed
              </h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {drill.skillsDeveloped.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Instructions Preview */}
            <div className="px-6 pb-4">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                Instructions
              </h4>
              <div className="space-y-2">
                {drill.instructions.slice(0, 2).map((instruction, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {instruction}
                    </span>
                  </div>
                ))}
                {drill.instructions.length > 2 && (
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    +{drill.instructions.length - 2} more steps...
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
              <div className="flex space-x-2">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1">
                  <Play className="w-4 h-4" />
                  <span>Use Drill</span>
                </button>
                <button className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDrills.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No drills found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your filters or create a new drill.
          </p>
        </div>
      )}
    </div>
  );
};

export default DrillsLibrary;