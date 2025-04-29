import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Bell, ArrowUpRight, Filter, Info } from 'lucide-react';

// Data for the dashboard
const categories = [
  { name: 'Healthcare', count: 245, color: '#60a5fa', percentage: 24 },
  { name: 'Education', count: 189, color: '#5eead4', percentage: 19 },
  { name: 'Environment', count: 156, color: '#fcd34d', percentage: 16 },
  { name: 'Social Justice', count: 134, color: '#f87171', percentage: 13 },
  { name: 'Economic Policy', count: 123, color: '#a78bfa', percentage: 12 },
  { name: 'Technology', count: 98, color: '#6ee7b7', percentage: 10 },
  { name: 'Public Safety', count: 67, color: '#fbbf24', percentage: 6 },
  { name: 'Infrastructure', count: 45, color: '#d8b4fe', percentage: 5 }
];

const monthlyData = [
  { month: 'Jan', introduced: 45, passed: 12 },
  { month: 'Feb', introduced: 38, passed: 15 },
  { month: 'Mar', introduced: 52, passed: 18 },
  { month: 'Apr', introduced: 41, passed: 14 },
  { month: 'May', introduced: 47, passed: 16 },
  { month: 'Jun', introduced: 43, passed: 13 }
];

const recentBills = [
  { 
    id: 'HR-2354', 
    title: 'Healthcare Access Improvement Act', 
    category: 'Healthcare', 
    status: 'In Committee',
    summary: 'Proposed legislation to expand healthcare coverage for underserved communities and reduce costs for prescription medications. The bill includes provisions for telehealth services and rural healthcare facilities.'
  },
  { 
    id: 'S-891', 
    title: 'Clean Energy Initiative', 
    category: 'Environment', 
    status: 'Introduced',
    summary: 'Comprehensive bill addressing climate change through investment in renewable energy infrastructure, including solar, wind, and hydroelectric power sources. Includes tax incentives for green energy adoption.'
  },
  { 
    id: 'HR-1256', 
    title: 'Education Reform Act', 
    category: 'Education', 
    status: 'Passed House',
    summary: 'Legislation focused on updating national education standards, increasing teacher compensation, and providing resources for STEM education programs in underperforming schools.'
  }
];

const categoryDetails = {
  'Healthcare': 'Access to healthcare services, affordability, and policy improvements',
  'Education': 'Funding, curriculum standards, and educational equity',
  'Environment': 'Climate change, renewable energy, and conservation efforts',
  'Social Justice': 'Addressing racial equity, anti-discrimination, and civil rights',
  'Economic Policy': 'Taxation, labor laws, and economic reforms',
  'Technology': 'AI, cybersecurity, and emerging technologies',
  'Public Safety': 'Crime prevention and law enforcement reforms',
  'Infrastructure': 'Public transit, urban planning, and infrastructure development'
};

// Components
const Card = ({  }) => (

);

const CardHeader = ({ children, className }) => (
  <div className={`px-3 py-2 border-b border-gray-700 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`font-medium text-gray-200 text-sm ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className }) => (
  <div className={`p-3 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className, style }) => (
  <span 
    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}
    style={style}
  >
    {children}
  </span>
);

// Tooltip component for bill summaries
const BillTooltip = ({ bill, isVisible, position }) => {
  if (!isVisible) return null;
  
  return (
    <div 
      className="absolute z-10 bg-gray-900 p-3 rounded-md shadow-xl border border-gray-600 text-gray-200 text-xs max-w-xs"
      style={{ 
        top: position.y, 
        left: position.x,
        transform: 'translateY(-100%)'
      }}
    >
      <h4 className="font-bold mb-1">{bill.title}</h4>
      <p>{bill.summary}</p>
    </div>
  );
};

const CompactDashboard = () => {
  const [tooltipState, setTooltipState] = useState({
    visible: false,
    bill: null,
    position: { x: 0, y: 0 }
  });

  const showTooltip = (bill, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipState({
      visible: true,
      bill,
      position: { 
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY 
      }
    });
  };

  const hideTooltip = () => {
    setTooltipState({ ...tooltipState, visible: false });
  };

  return (
    <div className="p-3 bg-gray-900 flex flex-col max-h-screen">
      {/* Header */}
      <div className="mb-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-100">Legislative Data Dashboard</h1>
        <div className="flex gap-2">
          <button className="p-1.5 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors">
            <Bell className="h-4 w-4 text-gray-300" />
          </button>
          <button className="p-1.5 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors">
            <Filter className="h-4 w-4 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-12 gap-3 overflow-hidden">
        {/* Row 1: KPI Cards */}
        <Card className="col-span-4">
          <CardContent>
            <div className="text-sm font-medium text-gray-400 mb-1">Total Active Bills</div>
            <div className="text-2xl font-bold text-gray-100">1,012</div>
            <div className="text-xs text-gray-400 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-400" />
              +8% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-4">
          <CardContent>
            <div className="text-sm font-medium text-gray-400 mb-1">Bills Passed This Month</div>
            <div className="text-2xl font-bold text-gray-100">43</div>
            <div className="text-xs text-gray-400 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-red-400 transform rotate-180" />
              -5% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-4">
          <CardContent>
            <div className="text-sm font-medium text-gray-400 mb-1">Bills in Committee</div>
            <div className="text-2xl font-bold text-gray-100">289</div>
            <div className="text-xs text-gray-400 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-400" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        {/* Row 2: Charts */}
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Distribution by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categories}
                    dataKey="percentage"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={25}
                    paddingAngle={2}
                    label={({name, percentage}) => `${name} (${percentage}%)`}
                    labelLine={{ stroke: '#4b5563' }}
                  >
                    {categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      borderColor: '#374151',
                      color: '#e5e7eb' 
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Monthly Bill Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} barSize={16}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={11} />
                  <YAxis stroke="#9ca3af" fontSize={11} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      borderColor: '#374151',
                      color: '#e5e7eb' 
                    }}
                  />
                  <Bar dataKey="introduced" fill="#60a5fa" name="Introduced" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="passed" fill="#5eead4" name="Passed" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Row 3: Recent Bills & Categories */}
        <div className="col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Recent Bills</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div>
                {recentBills.map((bill) => (
                  <div 
                    key={bill.id} 
                    className="p-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-700 transition-colors relative"
                    onMouseEnter={(e) => showTooltip(bill, e)}
                    onMouseLeave={hideTooltip}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-200">{bill.id}</span>
                      <Badge className="bg-gray-600 text-gray-200">{bill.status}</Badge>
                    </div>
                    <div className="text-sm mb-1 text-gray-300 flex items-center">
                      {bill.title}
                      <Info className="h-3 w-3 ml-1 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge 
                        className="text-gray-900"
                        style={{
                          backgroundColor: categories.find(c => c.name === bill.category)?.color || '#60a5fa'
                        }}
                      >
                        {bill.category}
                      </Badge>
                      <ArrowUpRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-7">
          <Card>
            <CardHeader>
              <CardTitle>Legislative Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center p-2 bg-gray-700 rounded-lg border border-gray-600">
                    <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: category.color }}></div>
                    <div className="flex-1">
                      <div className="font-medium text-xs text-gray-200">{category.name}</div>
                      <div className="text-xs text-gray-400 truncate">{categoryDetails[category.name]}</div>
                    </div>
                    <Badge 
                      className="ml-2 text-xs text-gray-900" 
                      style={{backgroundColor: category.color}}
                    >
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Render the tooltip if a bill is being hovered */}
      {tooltipState.visible && tooltipState.bill && (
        <BillTooltip 
          bill={tooltipState.bill} 
          isVisible={tooltipState.visible} 
          position={tooltipState.position} 
        />
      )}
    </div>
  );
};

export default () => (
  <div className="bg-gray-900 h-screen text-gray-200 overflow-hidden">
    <CompactDashboard />
  </div>
);