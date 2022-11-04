

import { Link } from 'react-router-dom';


export const Nav = () => {

    const menu_list = [
        {
            label: 'home',
            path: '/',
        },
        {
            label: 'page2',
            path: '/page2',
        },
    ]

    return (
        <div style={{ display: 'flex' }}>
        {
            menu_list.map((menu, key) => {
                return (
                    <div key={key} style={{ flex: '1 1 0', textAlign: 'center' }}>
                        <Link to={menu.path}>{menu.label}</Link>
                    </div>
                )
            })
        }
      </div>
    )
}


