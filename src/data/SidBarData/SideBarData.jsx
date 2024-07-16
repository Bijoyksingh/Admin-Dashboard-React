import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import CableIcon from '@mui/icons-material/Cable';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpIcon from '@mui/icons-material/Help';


export const SideBarData=[
    {
        title: 'Dashboard',
        path:"/ems/home",
        icon:<DashboardIcon/>
    },
    {
        title: 'Analysis',
        path:"ems/analysis",
        icon:<TimelineIcon/>
    },
    {
        title: 'M&V',
        path:"ems/m&v",
        icon:<CableIcon/>
    },
    {
        title: 'Alerms Setup',
        path:"ems/alerms",
        icon:<AddAlertIcon/>
    },
    {
        title: 'Report Generation',
        path:"ems/report",
        icon:<PendingActionsIcon/>
    },
    {
        title: 'Kpi',
        path:"ems/kpi",
        icon:<VpnKeyIcon/>
    },
    {
        title: 'GHG',
        path:"ems/ghg",
        icon:<CalendarMonthIcon/>
    },
    {
        title: 'Support',
        path:"ems/support",
        icon:<HelpIcon/>
    },
]