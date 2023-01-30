import React from 'react'
import Employers from '../components/ui/cards/Employers'
import Leads from '../components/ui/cards/Leads'
import Reports from '../components/ui/cards/Reports'
import Services from '../components/ui/cards/Services'
import Users from '../components/ui/cards/Users'
import Layout from '../components/ui/Layout'

const Admin = () => {
    return (
        <Layout>
            <h3 className="text-xl font-bold text-center col-span-12">
                Dashboard
            </h3>
            <Users />
            <Services />
            <Leads />
            <Employers />
            <Reports />
        </Layout>
    );
}

export default Admin
