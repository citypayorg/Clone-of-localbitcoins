/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Register from './Register';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const title = 'New User Registration';

function action() {
  return {
    chunks: ['register'],
    title,
    component: (
      <MuiThemeProvider>
      <Layout>
        <Register title={title} />
      </Layout>
      </MuiThemeProvider>
    ),
  };
}

export default action;