import React from 'react';

import Bloglist from './Bloglist';
import BlogListFilter from './BlogListFilter';

export const DashboardPage = (props) => (
    <div>
      <BlogListFilter />
      <Bloglist />
    </div>
  )

export default DashboardPage;