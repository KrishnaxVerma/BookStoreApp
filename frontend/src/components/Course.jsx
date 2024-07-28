import React from 'react'
import Card from "../components/Card"
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='pt-28 text-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'>
                    We are delighted to have you 
                    <span className='text-pink-500'> Here! :)</span>
                </h1>
                <p className='mt-12'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, obcaecati? Repudiandae et, nostrum quidem corporis laboriosam animi sapiente quisquam. Alias fugiat quisquam quibusdam amet veniam voluptate adipisci iste optio illum expedita voluptatem, aut similique ea molestias perferendis sapiente neque harum eius nisi distinctio, facere possimus eveniet hic! Laboriosam, culpa debitis?
                </p>
                <Link to="/">
                    <button className="btn btn-secondary text-white mt-6">Back</button>
                </Link>
                <div>
                    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                        {
                        list.map((item)=>{
                                return <Card item={item} key={item.id} />
                        })
                        }
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Course