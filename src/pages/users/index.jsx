import React from 'react'
import { Header } from 'src/components/Header'
import { Users as UsersComponent } from 'src/components/Users'
import { API_URL } from 'src/utils/const';
import { SWRConfig } from 'swr';

export const getServerSideProps = async () => {
  // const { id } = ctx.query;
  // ユーザー一覧の取得
  const USERS_API_URL = `${API_URL}/users`;
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