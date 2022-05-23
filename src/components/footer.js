import React from 'react';
import EmailOutline16 from '@mds/mds-icons/icons/svg/outline-16-email.svg';
import { Footer, CONDENSED_FOOTER, TYPE_OUTLINE, Icon } from '@mds/mds-reactjs-library';

function MckFooter() {
    return (
        <Footer
            type={CONDENSED_FOOTER}
            linksConfig={[
                {
                    label: 'Contact Us',
                    href: '#',
                    icon: props => <Icon src={EmailOutline16} type={TYPE_OUTLINE} {...props} />,
                },
            ]}
            
        />
    );
  }
  export default MckFooter;

