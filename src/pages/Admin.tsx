import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/UI-kit/Card'
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
            <Card>
                <h3>Услуги</h3>
            </Card>
            <Card>
                <h3>Сотрудники</h3>
            </Card>
            <Link to="/">Go back</Link>
        </Layout>
    );
}

export default Admin
