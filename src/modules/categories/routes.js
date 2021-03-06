import Categories from './Categories.vue'
import EditCategory from './EditCategory.vue'
import CreateCategory from './CreateCategory'
import EmptyRoute from '../core/components/layout/EmptyRoute.vue'

const categoriesRoutes = {
  path: 'categories',
  redirect: { name: 'categories' },
  component: EmptyRoute,
  children: [
    {
      path: '',
      name: 'categories',
      component: Categories
    },
    {
      path: 'new',
      name: 'createCategory',
      component: CreateCategory
    },
    {
      path: ':categoryPath',
      name: 'editCategory',
      component: EditCategory
    }
  ]
}

export default categoriesRoutes
