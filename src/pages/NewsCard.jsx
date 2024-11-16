import { FaStar, FaEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ news }) => {
  const {
    title,
    author,

    rating,
    total_view,
    thumbnail_url,
    details,
  } = news;

  return (
    // <div className="card  bg-white shadow-md rounded-lg overflow-hidden p-8 mr-8">
    //   <div className="p-4 flex items-center">
    //     <img
    //       src={author.img}
    //       alt={author.name}
    //       className="w-10 h-10 rounded-full mr-4"
    //     />
    //     <div>
    //       <h2 className="text-sm font-semibold">{author.name}</h2>
    //       <p className="text-xs text-gray-500">{published_date}</p>
    //     </div>
    //     <div className="ml-auto text-gray-400">
    //       <button>
    //         <FaShareAlt />
    //       </button>
    //     </div>
    //   </div>

    //   <img
    //     src={thumbnail_url}
    //     alt="Thumbnail"
    //     className="w-full h-48 object-cover justify-center"
    //   />

    //   <div className="p-4">
    //     <h3 className="text-lg font-semibold">{title}</h3>
    //     <p className="text-xs text-gray-500 my-2">
    //       {details.slice(0, 100)}...{" "}
    //       <span className="text-blue-500">Read More</span>
    //     </p>
    //     <div className="flex items-center justify-between mt-4">
    //       <div className="flex items-center">
    //         <FaStar className="text-yellow-500 mr-1" />
    //         <span className="text-sm font-semibold">{rating.number}</span>
    //       </div>
    //       <div className="flex items-center text-gray-500">
    //         <FaEye className="mr-1" />
    //         <span>{total_view}</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" mx-auto  rounded-lg shadow-lg overflow-hidden border border-gray-200 mr-8 my-4">
      {/* Header Section */}
      <div className="flex items-center p-4 bg-[#F3F3F3]">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-1">
          <h2 className="text-sm font-semibold text-gray-800">{author.name}</h2>
          <p className="text-xs text-gray-500">Date : 22/08/2024</p>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <FaRegBookmark className="mr-3 text-xl" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <FaShareAlt className="text-xl" />
        </button>
      </div>
      <div className="mt-2 p-4 mb-2">
        {" "}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      </div>
      {/* Thumbnail Image */}
      <img
        src={thumbnail_url}
        alt="Thumbnail"
        className="w-full h-80  object-fill p-4 rounded-none"
      />

      {/* Content Section */}
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">
          {details.slice(0, 100)}...{" "}
          <Link
            to={`/news/${news._id}`}
            className="text-blue-500 font-medium cursor-pointer"
          >
            Read More
          </Link>
        </p>

        {/* Footer Section */}
        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-sm font-semibold">{rating.number}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
