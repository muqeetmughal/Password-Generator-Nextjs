import React from 'react'
import Footer from '../components/Footer';
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
            <Footer />
        </>
    )
}

export default MainLayout