import { FC } from 'react';
import AdminLayout from '@modules/presentation/layouts/Admin'
import PageWithLayoutType from '@modules/presentation/layouts/types/page-with-layout-type'
import { default as CreateGoalsPresentation } from '@modules/presentation/pages/create-goals'

const CreateGoals: FC = () => (<CreateGoalsPresentation />);
(CreateGoals as PageWithLayoutType).layout = AdminLayout
export default CreateGoals
