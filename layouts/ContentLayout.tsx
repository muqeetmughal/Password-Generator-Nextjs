import React from 'react'

interface Props {
    children: React.ReactNode;
}

const ContentLayout: React.FC<Props> = (props) => {
    return (
        <>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {props.children}
            </div>

        </>
    )
}
export default ContentLayout