import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import {images} from "../../constants"
import {Link} from 'react-router-dom'
import SuggestedPost from './container/SuggestedPost'
const breadCrumbsData = [
    {name : "Home", link: "/"},
    {name : "Blog", link: "/blog"},
    {name : "Article title ", link: "/blog/1"},
];

const postData = [
    {
        _id: "1",
        image: images.Post1Image,
        title: "Help children gets better education",
        createdAt: "2023-01-28T15:35:53.607+0000"

    },
    {
        _id: "2",
        image: images.Post1Image,
        title: "Help children gets better education",
        createdAt: "2023-01-28T15:35:53.607+0000"

    },
    {
        _id: "3",
        image: images.Post1Image,
        title: "Help children gets better education",
        createdAt: "2023-01-28T15:35:53.607+0000"

    },
    {
        _id: "4",
        image: images.Post1Image,
        title: "Help children gets better education",
        createdAt: "2023-01-28T15:35:53.607+0000"

    },
]

const articleDetailPage = () => {
  return (
    <MainLayout>
      <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5'>
        <article className='flex-1'>
        <BreadCrumbs data={breadCrumbsData} />
        <img className='rounded-xl w-full' src={images.Post1Image} alt="Laptop" />
        <Link to="/blog?category=selectedCategory" className='text-primary text-sm font-roboto inline-block mt-4 '> EDUCATION</Link>
        <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard '>Help children gets better Education</h1>
        <div className='mt-4 text-dark-soft '>
        </div>
        </article>
        <SuggestedPost header="Latest Article" posts={postData}/>
      </section>
    </MainLayout>
  )
}

export default articleDetailPage
