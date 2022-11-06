import React from 'react'
import TopNav from '../components/TopNav'
import ContentLayout from './ContentLayout';

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = (props) => {
    return (
        <>
            <TopNav />
            <ContentLayout>

                {props.children}
            </ContentLayout>
        </>
    )
}

export default MainLayout