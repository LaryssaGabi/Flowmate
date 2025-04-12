import { MdCheckCircle, MdOutlineNotifications } from "react-icons/md";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType;
  color: string;
}

const StatCard = ({ title, value, icon: Icon, color }: StatCardProps) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between border-b-4" 
      style={{ borderColor: color }}
    >
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
      </div>
      <div className="text-4xl" style={{ color }}>
        <Icon />
      </div>
    </div>
  );
};

export { StatCard, MdCheckCircle, MdOutlineNotifications };