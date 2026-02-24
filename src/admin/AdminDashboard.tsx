import { useState } from 'react';
import AdminSidebar from './components/AdminSidebar';
import AdminOverview from './components/AdminOverview';
import AdminUsers from './components/AdminUsers';

type Tab = 'overview' | 'users';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<Tab>('overview');

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
            <main className="flex-1 overflow-y-auto">
                {activeTab === 'overview' && <AdminOverview />}
                {activeTab === 'users' && <AdminUsers />}
            </main>
        </div>
    );
}
