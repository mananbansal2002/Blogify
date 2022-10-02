import React from 'react'
import Header from '../../components/Home/Header'
import Searchbar from '../../components/Home/Searchbar'
import Bloglist from '../../components/Home/Bloglist'
import { blogList } from '../../config/data'
const Home = () => {
  return (
    <div>
        <Header></Header>
        <Searchbar></Searchbar>
        <Bloglist blogs={blogList}></Bloglist>
        {/* <EmptyList></EmptyList> */}
    </div>
  )
}

export default Home