import { FC } from 'react'
import AdminLayout from '@modules/presentation/layouts/Admin'
import PageWithLayoutType from '@modules/presentation/layouts/types/page-with-layout-type'

const Home:FC = () => (
  <div />
);

(Home as PageWithLayoutType).layout = AdminLayout

export default Home
