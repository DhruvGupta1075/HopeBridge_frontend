import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Users,
  TrendingUp,
  Settings,
  Bell,
  LogOut,
  Heart,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  XCircle,
  FileText,
  Download,
  Search,
  Filter,
} from "lucide-react";

// Layout Component
const Layout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    {children}
  </div>
);

// Card Component
const Card = ({ children, className = "", hover = false }) => (
  <div
    className={`bg-gray-800 rounded-xl shadow-lg ${
      hover ? "hover:shadow-2xl transition-shadow duration-300" : ""
    } ${className}`}
  >
    {children}
  </div>
);

// Button Component
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    outline: "border-2 border-gray-600 text-gray-200 hover:bg-gray-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge Component
const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-gray-700 text-gray-200",
    success: "bg-green-600/20 text-green-400",
    warning: "bg-yellow-600/20 text-yellow-400",
    danger: "bg-red-600/20 text-red-400",
    info: "bg-blue-600/20 text-blue-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

// Main Dashboard Component
export default function NGODashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [ngoInfo, setNgoInfo] = useState(null);
  const [donations, setDonations] = useState([]);
  const [donors, setDonors] = useState([]);
  const [needyList, setNeedyList] = useState([]);

  // Mock data
  const ngoData = {
    name: "Hope Foundation",
    email: "contact@hopefoundation.org",
    phone: "+91 98765 43210",
    address: "123 Main Street, Mumbai, Maharashtra",
    registrationNumber: "NGO/2020/12345",
  };

  const stats = [
    {
      label: "Total Donations Received",
      value: "2,847",
      icon: Package,
      color: "text-blue-500",
      change: "+12%",
    },
    {
      label: "Active Recipients",
      value: "1,234",
      icon: Users,
      color: "text-green-500",
      change: "+8%",
    },
    {
      label: "Medicines Distributed",
      value: "5,678",
      icon: Heart,
      color: "text-red-500",
      change: "+15%",
    },
    {
      label: "Monthly Impact",
      value: "₹2.5L",
      icon: TrendingUp,
      color: "text-purple-500",
      change: "+23%",
    },
  ];

  const recentDonations = [
    {
      id: 1,
      donor: "Rajesh Kumar",
      medicine: "Paracetamol",
      quantity: "100 tablets",
      date: "2024-11-12",
      status: "received",
    },
    {
      id: 2,
      donor: "Priya Sharma",
      medicine: "Amoxicillin",
      quantity: "50 capsules",
      date: "2024-11-11",
      status: "pending",
    },
    {
      id: 3,
      donor: "Amit Patel",
      medicine: "Ibuprofen",
      quantity: "200 tablets",
      date: "2024-11-10",
      status: "received",
    },
    {
      id: 4,
      donor: "Sneha Reddy",
      medicine: "Cetrizine",
      quantity: "30 tablets",
      date: "2024-11-09",
      status: "distributed",
    },
    {
      id: 5,
      donor: "Vikram Singh",
      medicine: "Aspirin",
      quantity: "150 tablets",
      date: "2024-11-08",
      status: "received",
    },
  ];

  const recipients = [
    {
      id: 1,
      name: "Ravi Kumar",
      aadhaar: "****-****-1234",
      location: "Mumbai",
      medicines: 5,
      lastReceived: "2024-11-10",
    },
    {
      id: 2,
      name: "Sunita Devi",
      aadhaar: "****-****-5678",
      location: "Delhi",
      medicines: 3,
      lastReceived: "2024-11-09",
    },
    {
      id: 3,
      name: "Mohammed Ali",
      aadhaar: "****-****-9012",
      location: "Bangalore",
      medicines: 7,
      lastReceived: "2024-11-08",
    },
    {
      id: 4,
      name: "Lakshmi Rao",
      aadhaar: "****-****-3456",
      location: "Chennai",
      medicines: 4,
      lastReceived: "2024-11-07",
    },
  ];

  // Load persisted data from localStorage to show real entries when available
  React.useEffect(() => {
    try {
      const storedNgo = localStorage.getItem('ngo');
      if (storedNgo) setNgoInfo(JSON.parse(storedNgo));
    } catch (e) {
      console.warn('failed to parse ngo from localStorage', e);
    }

    try {
      const storedDonations = localStorage.getItem('donations');
      if (storedDonations) setDonations(JSON.parse(storedDonations));
    } catch (e) {}

    try {
      const storedDonors = localStorage.getItem('donors');
      if (storedDonors) setDonors(JSON.parse(storedDonors));
    } catch (e) {}

    try {
      const storedNeedy = localStorage.getItem('needyList');
      if (storedNeedy) setNeedyList(JSON.parse(storedNeedy));
    } catch (e) {}
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "received":
        return "success";
      case "pending":
        return "warning";
      case "distributed":
        return "info";
      default:
        return "default";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "received":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "distributed":
        return <Package className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* Top Navigation */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{ngoData.name}</h1>
                <p className="text-xs text-gray-400">NGO Dashboard</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors">
                <LogOut className="w-5 h-5" />
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Card className="p-4">
              <nav className="space-y-2">
                {[
                  { id: "overview", label: "Overview", icon: LayoutDashboard },
                  { id: "donations", label: "Donations", icon: Package },
                  { id: "recipients", label: "Recipients", icon: Users },
                  { id: "settings", label: "Settings", icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "text-gray-400 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <Card key={index} hover className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-gray-400 text-sm mb-2">
                            {stat.label}
                          </p>
                          <h3 className="text-3xl font-bold text-white mb-1">
                            {stat.value}
                          </h3>
                          <p className="text-green-400 text-sm font-semibold">
                            {stat.change}
                          </p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Donations */}
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-white">
                        Recent Donations
                      </h2>
                      <Button size="sm" variant="outline">
                        View All
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {recentDonations.slice(0, 4).map((donation) => (
                        <div
                          key={donation.id}
                          className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg"
                        >
                          <div className="flex-1">
                            <p className="text-white font-medium">
                              {donation.donor}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {donation.medicine} - {donation.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge variant={getStatusColor(donation.status)}>
                              <div className="flex items-center gap-1">
                                {getStatusIcon(donation.status)}
                                {donation.status}
                              </div>
                            </Badge>
                            <p className="text-gray-500 text-xs mt-1">
                              {donation.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="p-6">
                    <h2 className="text-xl font-bold text-white mb-4">
                      Quick Actions
                    </h2>
                    <div className="space-y-3">
                      <Button
                        variant="primary"
                        className="w-full justify-start"
                        size="lg"
                      >
                        <Package className="w-5 h-5" />
                        Record New Donation
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-full justify-start"
                        size="lg"
                      >
                        <Users className="w-5 h-5" />
                        Add Recipient
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-full justify-start"
                        size="lg"
                      >
                        <FileText className="w-5 h-5" />
                        View Inventory
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "donations" && (
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-white">
                      All Donations
                    </h2>
                    <div className="flex gap-2">
                      <div className="relative flex-1 md:flex-initial">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Search donations..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full md:w-64 bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <Button variant="outline" size="md">
                        <Filter className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left text-gray-400 font-semibold py-3 px-4">
                            Donor
                          </th>
                          <th className="text-left text-gray-400 font-semibold py-3 px-4">
                            Medicine
                          </th>
                          <th className="text-left text-gray-400 font-semibold py-3 px-4">
                            Quantity
                          </th>
                          <th className="text-left text-gray-400 font-semibold py-3 px-4">
                            Date
                          </th>
                          <th className="text-left text-gray-400 font-semibold py-3 px-4">
                            Status
                          </th>
                          <th className="text-left text-gray-400 font-semibold py-3 px-4">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentDonations.map((donation) => (
                          <tr
                            key={donation.id}
                            className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors"
                          >
                            <td className="py-4 px-4">
                              <p className="text-white font-medium">
                                {donation.donor}
                              </p>
                            </td>
                            <td className="py-4 px-4">
                              <p className="text-gray-300">
                                {donation.medicine}
                              </p>
                            </td>
                            <td className="py-4 px-4">
                              <p className="text-gray-300">
                                {donation.quantity}
                              </p>
                            </td>
                            <td className="py-4 px-4">
                              <p className="text-gray-400 text-sm">
                                {donation.date}
                              </p>
                            </td>
                            <td className="py-4 px-4">
                              <Badge variant={getStatusColor(donation.status)}>
                                <div className="flex items-center gap-1">
                                  {getStatusIcon(donation.status)}
                                  {donation.status}
                                </div>
                              </Badge>
                            </td>
                            <td className="py-4 px-4">
                              <Button size="sm" variant="outline">
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "recipients" && (
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-white">
                      Recipients
                    </h2>
                    <div className="flex gap-2">
                      <div className="relative flex-1 md:flex-initial">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Search recipients..."
                          className="w-full md:w-64 bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <Button variant="primary" size="md">
                        <Users className="w-5 h-5" />
                        Add New
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recipients.map((recipient) => (
                      <Card key={recipient.id} hover className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {recipient.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">
                                {recipient.name}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                {recipient.aadhaar}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            {recipient.location}
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Package className="w-4 h-4 text-gray-500" />
                            {recipient.medicines} medicines received
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            Last: {recipient.lastReceived}
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700 flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            variant="primary"
                            className="flex-1"
                          >
                            Distribute
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* {activeTab === "reports" && (
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Reports & Analytics
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Monthly Report",
                        desc: "Donations and distributions",
                        icon: FileText,
                      },
                      {
                        title: "Inventory Report",
                        desc: "Current medicine stock",
                        icon: Package,
                      },
                      {
                        title: "Impact Report",
                        desc: "Recipients and reach",
                        icon: TrendingUp,
                      },
                      {
                        title: "Donor Report",
                        desc: "Top contributors",
                        icon: Heart,
                      },
                      {
                        title: "Financial Report",
                        desc: "Value of donations",
                        icon: Download,
                      },
                      {
                        title: "Compliance Report",
                        desc: "Regulatory documents",
                        icon: CheckCircle,
                      },
                    ].map((report, index) => (
                      <Card key={index} hover className="p-4 cursor-pointer">
                        <report.icon className="w-8 h-8 text-blue-500 mb-3" />
                        <h3 className="text-white font-semibold mb-1">
                          {report.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          {report.desc}
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          <Download className="w-4 h-4" />
                          Generate
                        </Button>
                      </Card>
                    ))}
                  </div>
                </Card>
              </div>
            )} */}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    NGO Profile Settings
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        NGO Name
                      </label>
                      <input
                        type="text"
                        value={ngoData.name}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Registration Number
                      </label>
                      <input
                        type="text"
                        value={ngoData.registrationNumber}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={ngoData.email}
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={ngoData.phone}
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Address
                      </label>
                      <textarea
                        value={ngoData.address}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        rows="3"
                      />
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button variant="primary" size="lg">
                        Save Changes
                      </Button>
                      <Button variant="outline" size="lg">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Notification Preferences
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        label: "Email notifications for new donations",
                        checked: true,
                      },
                      {
                        label: "SMS alerts for urgent requests",
                        checked: true,
                      },
                      { label: "Weekly summary reports", checked: false },
                      { label: "Monthly impact newsletters", checked: true },
                    ].map((pref, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={pref.checked}
                          className="w-5 h-5 rounded border-gray-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-white">{pref.label}</span>
                      </label>
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
