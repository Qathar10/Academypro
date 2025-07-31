import React, { useState } from 'react';
import { Search, Filter, Plus, Trash2, X, Upload, User, ArrowLeft, Download, Edit, Calendar, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  age: number;
  group: string;
  guardian: string;
  status: string;
  jerseySize: string;
  kitSize: string;
  shoeSize: string;
  weightBefore: string;
  weightAfter: string;
  avatar: string;
  photo: string | null;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  enrollmentDate: string;
  assessments: {
    overallScore: number;
    ballControl: number;
    speed: number;
    teamwork: number;
    passing: number;
    shooting: number;
    notes: string;
  };
  medical: {
    allergies: string[];
    conditions: string[];
    injuryHistory: string[];
  };
  attendance: {
    totalSessions: number;
    attended: number;
    missed: number;
    percentage: number;
    sessions: Array<{
      date: string;
      session: string;
      status: 'Present' | 'Absent' | 'Late';
    }>;
  };
}

const Players: React.FC = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showAddGuardianModal, setShowAddGuardianModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: 'Michael Ochieng',
      age: 14,
      group: 'U-14 Eagles',
      guardian: 'Jane Smith – Mother',
      status: 'Active',
      jerseySize: 'M',
      kitSize: 'M',
      shoeSize: '8',
      weightBefore: '45kg',
      weightAfter: '48kg',
      avatar: 'MO',
      photo: null,
      dateOfBirth: '2010-03-15',
      email: 'michael.ochieng@email.com',
      phone: '+254 712 345 678',
      address: '123 Nairobi Street, Nairobi, Kenya',
      enrollmentDate: '2023-01-15',
      assessments: {
        overallScore: 8.4,
        ballControl: 8.5,
        speed: 9.0,
        teamwork: 8.2,
        passing: 7.8,
        shooting: 8.1,
        notes: 'Excellent ball control and speed. Needs improvement in passing accuracy.'
      },
      medical: {
        allergies: ['Peanuts'],
        conditions: ['Asthma (mild)'],
        injuryHistory: ['Sprained ankle - Oct 2023']
      },
      attendance: {
        totalSessions: 48,
        attended: 42,
        missed: 6,
        percentage: 87.5,
        sessions: [
          { date: '2024-12-15', session: 'U-14 Eagles Training', status: 'Present' },
          { date: '2024-12-13', session: 'Skills Workshop', status: 'Present' },
          { date: '2024-12-11', session: 'U-14 Eagles Training', status: 'Absent' },
          { date: '2024-12-09', session: 'Fitness Training', status: 'Late' },
          { date: '2024-12-07', session: 'U-14 Eagles Training', status: 'Present' }
        ]
      }
    },
    {
      id: 2,
      name: 'David Wanjiku',
      age: 16,
      group: 'U-16 Lions',
      guardian: 'Peter Wanjiku – Father',
      status: 'Active',
      jerseySize: 'L',
      kitSize: 'L',
      shoeSize: '9',
      weightBefore: '52kg',
      weightAfter: '55kg',
      avatar: 'DW',
      photo: null,
      dateOfBirth: '2008-07-22',
      email: 'david.wanjiku@email.com',
      phone: '+254 723 456 789',
      address: '456 Mombasa Road, Nairobi, Kenya',
      enrollmentDate: '2022-09-10',
      assessments: {
        overallScore: 8.9,
        ballControl: 9.2,
        speed: 8.5,
        teamwork: 9.1,
        passing: 8.9,
        shooting: 8.7,
        notes: 'Outstanding technical skills and leadership qualities. Team captain material.'
      },
      medical: {
        allergies: [],
        conditions: [],
        injuryHistory: ['Minor knee strain - Aug 2023']
      },
      attendance: {
        totalSessions: 52,
        attended: 48,
        missed: 4,
        percentage: 92.3,
        sessions: [
          { date: '2024-12-14', session: 'U-16 Lions Training', status: 'Present' },
          { date: '2024-12-12', session: 'Match Preparation', status: 'Present' },
          { date: '2024-12-10', session: 'U-16 Lions Training', status: 'Present' },
          { date: '2024-12-08', session: 'Tactical Session', status: 'Present' },
          { date: '2024-12-06', session: 'U-16 Lions Training', status: 'Absent' }
        ]
      }
    },
    {
      id: 3,
      name: 'Grace Akinyi',
      age: 13,
      group: 'U-14 Panthers',
      guardian: 'Mary Akinyi – Mother',
      status: 'Inactive',
      jerseySize: 'S',
      kitSize: 'S',
      shoeSize: '6',
      weightBefore: '38kg',
      weightAfter: '40kg',
      avatar: 'GA',
      photo: null,
      dateOfBirth: '2011-11-08',
      email: 'grace.akinyi@email.com',
      phone: '+254 734 567 890',
      address: '789 Kisumu Avenue, Nairobi, Kenya',
      enrollmentDate: '2023-03-20',
      assessments: {
        overallScore: 7.8,
        ballControl: 7.5,
        speed: 7.8,
        teamwork: 8.2,
        passing: 8.0,
        shooting: 7.3,
        notes: 'Good team player with strong work ethic. Improving steadily in all areas.'
      },
      medical: {
        allergies: ['Shellfish'],
        conditions: [],
        injuryHistory: []
      },
      attendance: {
        totalSessions: 32,
        attended: 28,
        missed: 4,
        percentage: 87.5,
        sessions: [
          { date: '2024-12-13', session: 'U-14 Panthers Training', status: 'Present' },
          { date: '2024-12-11', session: 'Skills Development', status: 'Present' },
          { date: '2024-12-09', session: 'U-14 Panthers Training', status: 'Late' },
          { date: '2024-12-07', session: 'Fitness Training', status: 'Present' },
          { date: '2024-12-05', session: 'U-14 Panthers Training', status: 'Present' }
        ]
      }
    }
  ]);

  const [guardians, setGuardians] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      relationship: 'Mother',
      phone: '+254 712 345 678',
      email: 'jane.smith@email.com',
      student: 'Michael Ochieng'
    },
    {
      id: 2,
      name: 'Peter Wanjiku',
      relationship: 'Father',
      phone: '+254 723 456 789',
      email: 'peter.wanjiku@email.com',
      student: 'David Wanjiku'
    },
    {
      id: 3,
      name: 'Mary Akinyi',
      relationship: 'Mother',
      phone: '+254 734 567 890',
      email: 'mary.akinyi@email.com',
      student: 'Grace Akinyi'
    }
  ]);

  const groups = ['U-14 Eagles', 'U-16 Lions', 'U-14 Panthers'];

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddStudent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const newStudent: Student = {
      id: students.length + 1,
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      age: new Date().getFullYear() - new Date(formData.get('dateOfBirth') as string).getFullYear(),
      group: formData.get('group') as string,
      guardian: formData.get('guardian') as string,
      status: 'Active',
      jerseySize: 'M',
      kitSize: 'M',
      shoeSize: '8',
      weightBefore: '0kg',
      weightAfter: '0kg',
      avatar: `${formData.get('firstName')?.toString().charAt(0)}${formData.get('lastName')?.toString().charAt(0)}`,
      photo: selectedPhoto,
      dateOfBirth: formData.get('dateOfBirth') as string,
      email: formData.get('email') as string || '',
      phone: formData.get('phone') as string || '',
      address: formData.get('address') as string || '',
      enrollmentDate: new Date().toISOString().split('T')[0],
      assessments: {
        overallScore: 0,
        ballControl: 0,
        speed: 0,
        teamwork: 0,
        passing: 0,
        shooting: 0,
        notes: ''
      },
      medical: {
        allergies: [],
        conditions: [],
        injuryHistory: []
      },
      attendance: {
        totalSessions: 0,
        attended: 0,
        missed: 0,
        percentage: 0,
        sessions: []
      }
    };

    setStudents([...students, newStudent]);
    setShowAddStudentModal(false);
    setSelectedPhoto(null);
    alert('Student added successfully!');
  };

  const handleAddGuardian = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const newGuardian = {
      id: guardians.length + 1,
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      relationship: formData.get('relationship') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      student: formData.get('student') as string
    };

    setGuardians([...guardians, newGuardian]);
    setShowAddGuardianModal(false);
    alert('Guardian added successfully!');
  };

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleBackToList = () => {
    setSelectedStudent(null);
  };

  const getAttendanceStatusColor = (status: string) => {
    switch (status) {
      case 'Present':
        return 'text-green-600 dark:text-green-400';
      case 'Absent':
        return 'text-red-600 dark:text-red-400';
      case 'Late':
        return 'text-yellow-600 dark:text-yellow-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getAttendanceStatusIcon = (status: string) => {
    switch (status) {
      case 'Present':
        return CheckCircle;
      case 'Absent':
        return XCircle;
      case 'Late':
        return AlertTriangle;
      default:
        return CheckCircle;
    }
  };

  // Student Profile View
  if (selectedStudent) {
    return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToList}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedStudent.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedStudent.group} • Age {selectedStudent.age} • {selectedStudent.status}
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download ID Card</span>
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Edit className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Trash2 className="w-4 h-4" />
              <span>Delete Student</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Date of Birth</label>
                  <p className="text-gray-900 dark:text-white">{new Date(selectedStudent.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                  <p className="text-gray-900 dark:text-white">{selectedStudent.email || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</label>
                  <p className="text-gray-900 dark:text-white">{selectedStudent.phone || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Enrollment Date</label>
                  <p className="text-gray-900 dark:text-white">{new Date(selectedStudent.enrollmentDate).toLocaleDateString()}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Address</label>
                  <p className="text-gray-900 dark:text-white">{selectedStudent.address || 'Not provided'}</p>
                </div>
              </div>
            </div>

            {/* Assessment Data */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Latest Assessment</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Score</span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{selectedStudent.assessments.overallScore}/10</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${(selectedStudent.assessments.overallScore / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {[
                  { label: 'Ball Control', value: selectedStudent.assessments.ballControl },
                  { label: 'Speed', value: selectedStudent.assessments.speed },
                  { label: 'Teamwork', value: selectedStudent.assessments.teamwork },
                  { label: 'Passing', value: selectedStudent.assessments.passing },
                  { label: 'Shooting', value: selectedStudent.assessments.shooting }
                ].map((skill) => (
                  <div key={skill.label} className="text-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{skill.label}</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{skill.value}/10</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(skill.value / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedStudent.assessments.notes && (
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes</label>
                  <p className="text-gray-900 dark:text-white mt-1">{selectedStudent.assessments.notes}</p>
                </div>
              )}
            </div>

            {/* Medical Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Medical Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Allergies</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedStudent.medical.allergies.length > 0 ? (
                      selectedStudent.medical.allergies.map((allergy, index) => (
                        <span key={index} className="px-2 py-1 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 text-sm rounded">
                          {allergy}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400">None reported</span>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Medical Conditions</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedStudent.medical.conditions.length > 0 ? (
                      selectedStudent.medical.conditions.map((condition, index) => (
                        <span key={index} className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-sm rounded">
                          {condition}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400">None reported</span>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Injury History</label>
                  <div className="mt-1">
                    {selectedStudent.medical.injuryHistory.length > 0 ? (
                      <ul className="space-y-1">
                        {selectedStudent.medical.injuryHistory.map((injury, index) => (
                          <li key={index} className="text-gray-900 dark:text-white text-sm">• {injury}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400">No injuries reported</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Student Photo */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                {selectedStudent.photo ? (
                  <img 
                    src={selectedStudent.photo} 
                    alt={selectedStudent.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                  />
                ) : (
                  <div className="w-32 h-32 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-white text-3xl font-bold">
                      {selectedStudent.avatar}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedStudent.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedStudent.group}</p>
              </div>
            </div>

            {/* Attendance Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Attendance Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Sessions</span>
                  <span className="font-medium text-gray-900 dark:text-white">{selectedStudent.attendance.totalSessions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Attended</span>
                  <span className="font-medium text-green-600 dark:text-green-400">{selectedStudent.attendance.attended}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Missed</span>
                  <span className="font-medium text-red-600 dark:text-red-400">{selectedStudent.attendance.missed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Percentage</span>
                  <span className="font-medium text-gray-900 dark:text-white">{selectedStudent.attendance.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${selectedStudent.attendance.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Recent Attendance */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Sessions</h3>
              <div className="space-y-3">
                {selectedStudent.attendance.sessions.map((session, index) => {
                  const StatusIcon = getAttendanceStatusIcon(session.status);
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{session.session}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(session.date).toLocaleDateString()}</div>
                      </div>
                      <div className={`flex items-center space-x-1 ${getAttendanceStatusColor(session.status)}`}>
                        <StatusIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{session.status}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {activeTab === 'students' ? 'Students' : 'Guardians'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage academy {activeTab}
          </p>
        </div>
        <button 
          onClick={() => activeTab === 'students' ? setShowAddStudentModal(true) : setShowAddGuardianModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add {activeTab === 'students' ? 'Student' : 'Guardian'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('students')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'students'
                ? 'border-green-500 text-green-600 dark:text-green-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Students ({students.length})
          </button>
          <button
            onClick={() => setActiveTab('guardians')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'guardians'
                ? 'border-green-500 text-green-600 dark:text-green-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Guardians ({guardians.length})
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
          <span className="text-gray-700 dark:text-gray-300">Filter by status</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {activeTab === 'students' ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Player
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Group
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Guardian
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Kit Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Weight Progress
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
                {students.map((student) => (
                  <tr 
                    key={student.id} 
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleStudentClick(student)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {student.photo ? (
                          <img 
                            src={student.photo} 
                            alt={student.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {student.avatar}
                            </span>
                          </div>
                        )}
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {student.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Age {student.age}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                        {student.group}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {student.guardian}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        Jersey: {student.jerseySize} | Kit: {student.kitSize} | Shoes: {student.shoeSize}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {student.weightBefore} → {student.weightAfter}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        student.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle delete
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Guardian
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Relationship
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {guardians.map((guardian) => (
                  <tr key={guardian.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {guardian.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {guardian.relationship}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {guardian.phone}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {guardian.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {guardian.student}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Student Modal */}
      {showAddStudentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Student
              </h2>
              <button 
                onClick={() => {
                  setShowAddStudentModal(false);
                  setSelectedPhoto(null);
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-6">
              {/* Student Photo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Student Photo
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                    {selectedPhoto ? (
                      <img src={selectedPhoto} alt="Preview" className="w-full h-full object-cover" />
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
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Upload a photo for the student (optional). Recommended size: 400x400px
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

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Guardian
                  </label>
                  <select
                    name="guardian"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  >
                    <option value="">Select Guardian</option>
                    {guardians.map((guardian) => (
                      <option key={guardian.id} value={`${guardian.name} – ${guardian.relationship}`}>
                        {guardian.name} – {guardian.relationship}
                      </option>
                    ))}
                    <option value="New">New</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Group
                  </label>
                  <select
                    name="group"
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                  >
                    <option value="">Select Group</option>
                    {groups.map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  rows={3}
                  placeholder="Enter student's address (optional)"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddStudentModal(false);
                    setSelectedPhoto(null);
                  }}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Guardian Modal */}
      {showAddGuardianModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Guardian
              </h2>
              <button 
                onClick={() => setShowAddGuardianModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleAddGuardian} className="space-y-6">
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

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Relationship *
                </label>
                <select
                  name="relationship"
                  required
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                >
                  <option value="">Select Relationship</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Uncle">Uncle</option>
                  <option value="Aunt">Aunt</option>
                  <option value="Grandparent">Grandparent</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Student
                </label>
                <select
                  name="student"
                  required
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
                >
                  <option value="">Select Student</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.name}>
                      {student.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddGuardianModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Add Guardian
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Players;