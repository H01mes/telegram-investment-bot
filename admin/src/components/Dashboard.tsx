import React, { Component } from 'react'
import { PageHeader, Skeleton, Tabs } from 'antd'
import Stats from './Stats'
import UsersTable from './UsersTable'

const { TabPane } = Tabs

export default class Dashboard extends Component{
    render() {
        return (
            <div className="Dashboard">
                <PageHeader className="SidebarTitle" title="Admin" subTitle={new Date().toLocaleDateString()} />

                <Tabs className="Tabs" defaultActiveKey="1" tabPosition={'left'} tabBarStyle={{ width: 150 }}>
                    <TabPane className="TabPane" key="1" tab="Статистика">
                        <Stats />
                    </TabPane>
                    <TabPane className="TabPane" key="2" tab="Инвестиции">
                        <UsersTable />
                    </TabPane>
                    <TabPane className="TabPane" key="3" tab="Настройки">
                        <h2>Настройки...</h2>
                        <Skeleton active={true} paragraph={{ rows: 5 }} loading={true}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}