import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredimage}) {

  return (
    <Link to={`/post/${$id}`} className="block w-full h-full">
      <div className="w-full h-full bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <div className="w-full mb-4 overflow-hidden rounded-xl">
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt={title}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 break-words">{title}</h2>
      </div>
    </Link>

  )
}

export default PostCard