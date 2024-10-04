import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import CableIcon from '@mui/icons-material/Cable';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpIcon from '@mui/icons-material/Help';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import DevicesIcon from '@mui/icons-material/Devices';


export const AdminSideBarData = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        path: '/admin/home'
    },
    {
        title: 'Devices',
        icon: <DevicesIcon />,
        path: '/admin/devices'
    },
    {
        title: 'Manage Users',
        icon: <SupervisedUserCircleIcon />,
        path: '/admin/users'
    },
    {
        title: 'Profile',
        icon: <AccountBoxIcon />,
        path: '/admin/profile'
    },
    {
        title: 'My Account',
        icon: <SwitchAccountIcon />,
        path: '/admin/account'
    },
]

export const UserSideBarData = [
    {
        title: 'Dashboard',
        path:"/user/home",
        icon:<DashboardIcon/>
    },
    {
        title: 'Devices',
        path:"/user/devices",
        icon:<DevicesIcon/>
    },
    {
        title: 'Profile',
        path:"/user/profile",
        icon:<AccountBoxIcon/>
    },
]

export const EmsSideBarData=[
    {
        title: 'Dashboard',
        path:"/ems/home",
        icon:<DashboardIcon/>
    },
    {
        title: 'Analysis',
        path:"/ems/analysis",
        icon:<TimelineIcon/>
    },
    {
        title: 'M&V',
        path:"/ems/m&v",
        icon:<CableIcon/>
    },
    {
        title: 'Alerms Setup',
        path:"/ems/alarms",
        icon:<AddAlertIcon/>
    },
    {
        title: 'Report Generation',
        path:"/ems/report",
        icon:<PendingActionsIcon/>
    },
    {
        title: 'Kpi',
        path:"/ems/kpi",
        icon:<VpnKeyIcon/>
    },
    {
        title: 'GHG',
        path:"/ems/ghg",
        icon:<CalendarMonthIcon/>
    },
    {
        title: 'Support',
        path:"/ems/support",
        icon:<HelpIcon/>
    },
]

export const UPSSideBarData=[
    {
        title: 'Dashboard',
        path:"/ups/home",
        icon:<DashboardIcon/>
    },
    {
        title: 'Analysis',
        path:"/ups/analysis",
        icon:<TimelineIcon/>
    },
    {
        title: 'Alerms Setup',
        path:"/ups/alarms",
        icon:<AddAlertIcon/>
    },
    {
        title: 'Support',
        path:"/ups/support",
        icon:<HelpIcon/>
    }]

    export const WaterSideBarData=[
        {
            title: 'Dashboard',
            path:"/water/home",
            icon:<DashboardIcon/>
        },
        {
            title: 'Analysis',
            path:"/water/analysis",
            icon:<TimelineIcon/>
        },
        {
            title: 'Alarms Setup',
            path:"/water/alarms",
            icon:<AddAlertIcon/>
        },
        {
            title: 'Support',
            path:"/water/support",
            icon:<HelpIcon/>
        }
    ]

    export const DGSideBarData=[
        {
            title: 'Dashboard',
            path:"/dg/home",
            icon:<DashboardIcon/>
        },
        {
            title: 'Analysis',
            path:"/dg/analysis",
            icon:<TimelineIcon/>
        },
        {
            title: 'Alarms Setup',
            path:"/dg/alarms",
            icon:<AddAlertIcon/>
        },
        {
            title: 'Support',
            path:"/dg/support",
            icon:<HelpIcon/>
        }
    ]

    export const TempSideBarData=[
        {
            title: 'Dashboard',
            path:"/temp/home",
            icon:<DashboardIcon/>
        },
        {
            title: 'Analysis',
            path:"/temp/analysis",
            icon:<TimelineIcon/>
        },
        {
            title: 'Alarms Setup',
            path:"/temp/alarms",
            icon:<AddAlertIcon/>
        },
        {
            title: 'Hooter Setup',
            path:"/temp/hooter",
            icon:<MarkunreadMailboxOutlinedIcon/>
        },
        {
            title: 'Report Generation',
            path:"/temp/report",
            icon:<PendingActionsIcon/>
        },
        {
            title: 'Support',
            path:"/temp/support",
            icon:<HelpIcon/>
        }
    ]

    export const HVACSideBarData=[
        {
            title: 'Dashboard',
            path:"/hvac/home",
            icon:<DashboardIcon/>
        },
        {
            title: 'Analysis',
            path:"/hvac/analysis",
            icon:<TimelineIcon/>
        },
        {
            title: 'Support',
            path:"/hvac/support",
            icon:<HelpIcon/>
        }
    ]

    export const FireSideBarData=[
        {
            title: 'Dashboard',
            path:"/fire/home",
            icon:<DashboardIcon/>
        },
        {
            title: 'Support',
            path:"/fire/support",
            icon:<HelpIcon/>
        }
    ]
    export const NBSafeSideBarData=[
        {
            title: 'Dashboard',
            path:"/nbsafe/home",
            icon:<DashboardIcon/>
        },
        {
            title: 'Support',
            path:"/nbsafe/support",
            icon:<HelpIcon/>
        }
    ]

    export const TransSideBarData=[
        {
            title: 'Dashboard',
            path:"/trans/home",
            icon:<DashboardIcon/>
        },
        {
            title: 'Support',
            path:"/trans/support",
            icon:<HelpIcon/>
        }
    ]