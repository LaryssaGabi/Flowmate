import { MdCheckCircle, MdOutlineNotifications, MdWork } from "react-icons/md";
import {StatCard} from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard title="Tarefas Concluídas" value={12} icon={MdCheckCircle} color="#4f1e7c" />
      <StatCard title="Projetos Ativos" value={4} icon={MdWork} color="#4f1e7c" />
      <StatCard title="Notificações" value={7} icon={MdOutlineNotifications} color="#4f1e7c" />
    </div>
  );
};

export default Dashboard;
