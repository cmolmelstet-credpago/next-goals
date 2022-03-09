import { FC } from 'react';
import AdminLayout from '@modules/presentation/layouts/Admin'
import PageWithLayoutType from '@modules/presentation/layouts/types/page-with-layout-type'
import { default as GoalsPresentation } from '@modules/presentation/pages/goals'

const Goals: FC = () => (<GoalsPresentation />);
(Goals as PageWithLayoutType).layout = AdminLayout
export default Goals
