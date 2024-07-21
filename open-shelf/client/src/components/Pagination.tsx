const Pagination = () => {

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex space-x-5 p-4 backdrop-blur-lg bg-white/20 rounded-lg shadow-lg">
      <button className="lg:justify-start px-3 py-1 text-white bg-gray-600 hover:bg-gray-700 rounded-lg focus:outline-none">
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`px-3 py-1 text-gray-700 bg-gray-300 hover:bg-gray-400 rounded-lg focus:outline-none`}
        >
          {number}
        </button>
      ))}
      <button className="px-3 py-1 text-white bg-gray-600 hover:bg-gray-700 rounded-lg focus:outline-none">
        Next
      </button>
    </div>
  )
}

export default Pagination
