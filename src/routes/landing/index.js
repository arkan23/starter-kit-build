/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Landing from './Landing';
import SaveUser from './mongo.graphql';
import Layout from '../../components/Layout';

async function action({ client }) {
    const data = await client.query({
        query: SaveUser,
    });

    return {
        title: 'React Landing Kit',
        component: (
            <Layout>
                <Landing users={data} />
            </Layout>
        ),
    };
}

export default action;
