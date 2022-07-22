import React from 'react'
import { Header } from 'src/components/Header'
import { Users as UsersComponent } from 'src/components/Users'
import { SWRConfig } from 'swr';

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  // ユーザー一覧の取得
  const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
  const users = await fetch(USERS_API_URL)
  const usersData = await users.json();
  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      }
    },
  }
};


const Users = (props) => {
  const { fallback } = props
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Header/>
        <UsersComponent/>
      </SWRConfig>
    </div>
  )
}

export default Users