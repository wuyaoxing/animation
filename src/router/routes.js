import workspace from '@/views/workspace'
import project from '@/views/project'
import member from '@/views/member'

export const navRoutes = [
    {
        name: 'workspace',
        path: '/workspace',
        component: workspace,
        meta: {
            transition: '__transition__bubble__'
        }
    },
    {
        name: 'project',
        path: '/project',
        component: project,
        meta: {
            transition: '__transition__bubble__'
        }
    },
    {
        name: 'member',
        path: '/member',
        component: member,
        meta: {
            transition: '__transition__bubble__'
        }
    }
]

const routes = [
    ...navRoutes
]

export default routes
