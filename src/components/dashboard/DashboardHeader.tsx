import { useEffect, useState } from "react";
import { Bell, Moon, Sun, Plus, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import type { UserProfile } from "@/types/user";

const DashboardHeader = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      setUserProfile(JSON.parse(stored));
    }

    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-16 bg-card border-b border-border px-6 flex items-center justify-between">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {/* <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm">←</span>
          </div> */}
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
        </div>
        

      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
          <Plus size={16} />
          <span>Deposit</span>
        </button>

        {/* User profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-foreground">👤</span>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">
              {userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : "User"}
            </p>
            <p className="text-xs text-primary">
              {userProfile?.status === "ACTIVE" ? "Active" : "Super Admin"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;