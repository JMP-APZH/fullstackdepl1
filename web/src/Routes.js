// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import GeneralLayout from './layouts/GeneralLayout/GeneralLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={GeneralLayout}>
        <Route path="/charts" page={ChartsPage} name="charts" />
        <Route path="/admins" page={AdminsPage} name="admins" />
        <Set wrap={ScaffoldLayout} title="AdminUsers" titleTo="adminUsers" buttonLabel="New AdminUser" buttonTo="newAdminUser">
          <Route path="/admin-users/new" page={AdminUserNewAdminUserPage} name="newAdminUser" />
          <Route path="/admin-users/{id:Int}/edit" page={AdminUserEditAdminUserPage} name="editAdminUser" />
          <Route path="/admin-users/{id:Int}" page={AdminUserAdminUserPage} name="adminUser" />
          <Route path="/admin-users" page={AdminUserAdminUsersPage} name="adminUsers" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </Set>

    </Router>
  )
}

export default Routes
