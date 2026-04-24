import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, UserPlus, Users, Sparkles } from "lucide-react";

function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/add", label: "Add Member", icon: UserPlus },
    { path: "/members", label: "All Members", icon: Users },
  ];

  return (
    <motion.div 
      className="sidebar"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="sidebar-content">
        <div className="logo-section">
          <motion.div
            className="logo-icon"
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Sparkles size={28} strokeWidth={2.5} />
          </motion.div>
          <h1 className="logo-text">TeamHub</h1>
          <div className="logo-subtitle">Member Management</div>
        </div>

        <nav className="nav-menu">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                <motion.div
                  className="nav-item-content"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 8 }}
                >
                  <Icon className="nav-icon" size={20} />
                  <span className="nav-label">{item.label}</span>
                  {isActive && (
                    <motion.div 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span>System Active</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;