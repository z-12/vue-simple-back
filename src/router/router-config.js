import activePublic from '@/pages/activePublic/index'
import step1 from '@/pages/activePublic/step1'
import step2 from '@/pages/activePublic/step2'
import step3 from '@/pages/activePublic/step3'
import step4 from '@/pages/activePublic/step4'

import activeManage from '@/pages/activeManage/index'

const routes = [{
  path: '/activePublic',
  name: 'activePublic',
  component: activePublic,
  children: [
    {
      path: '',
      component: step1
    },
    {
      path: 'step1',
      component: step1
    },
    {
      path: 'step2',
      component: step2
    },
    {
      path: 'step3',
      component: step3
    }, {
      path: 'step4',
      component: step4
    }
  ]
}, {
  path: '/activeManage',
  name: 'activeManage',
  component: activeManage
}]
export default routes;
