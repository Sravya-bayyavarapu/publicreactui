import React from "react";
import { Header, CONDENSED_HEADER, enrichNavigationNodesWithIds } from '@mds/mds-reactjs-library';

function MckHeader() {
    const [path, setPath] = React.useState('Digital Learning Platforms & Solutions (DLPS) Operations');
    let navConfig = [
        {
            label: 'Digital Learning Platforms & Solutions (DLPS) Operations',
            locator: () => path === 'Digital Learning Platforms & Solutions (DLPS) Operations',
            onClick: () => setPath('Digital Learning Platforms & Solutions (DLPS) Operations'),
            
        },
        {
            label: 'Home',
            locator: () => path === 'Home',
            onClick: () => setPath('Home'),
        },
        {
            label: 'My Requests',
            locator: () => path === 'My Requests',
            onClick: () => setPath('My Requests'),
        },
        {
            label: 'Guides and Resources',
            locator: () => path === 'Guides and Resources',
            onClick: () => setPath('Guides and Resources'),
        },
        {
            label: 'Reporting',
            locator: () => path === 'Reporting',
            onClick: () => setPath('Reporting'),
        },
        {
            label: 'Meet the Team',
            locator: () => path === 'Meet the Team',
            onClick: () => setPath('Meet the Team'),
        },
    ];
    navConfig = enrichNavigationNodesWithIds(navConfig);
    return (
        <>
            <Header type={CONDENSED_HEADER} navConfig={navConfig}/>
            <div
                style={{
                    fontFamily: '"McKinsey Sans","Helvetica Neue",Calibri,Corbel,Helvetica,Roboto,Droid,sans-serif',
                    fontSize: '25px',
                    width: '100%',
                    height: '100%',
                    minHeight: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
            </div>
        </>
    );
}
export default MckHeader;