import React from 'react'
import Layout from '../Components/UI/Layout'
import UpdateItem from '../Components/Updates/UpdateItem'

function UpdatesPage() {
  return (
    <Layout title="Updates">
      <ol className='flex-list'>
        <UpdateItem title='React router' description='Added react router and user routing' link='https://github.com/Huthaifa-Dev/Task-Management/tree/d9d31a460245e3f10a28fc20a432d3d73b62c00d' />

        <UpdateItem title='React Redux' description='Added redux toolkit to the project insted of context for state management' link='https://github.com/Huthaifa-Dev/Task-Management/tree/20a3845e72cc3fc107243cbda3dfc45d7f39b6e6' />
      </ol>
    </Layout>
  )
}

export default UpdatesPage