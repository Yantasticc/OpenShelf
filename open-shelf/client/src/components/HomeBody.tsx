import Sidebar from './Sidebar'; // Import the Sidebar component
import Pagination from './Pagination';
import ItemCard from './ItemCard';
import Featured from './Featured';

const HomeBody = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 p-4 overflow-hidden">
      <div className="hidden md:block w-1/4 h-full">
        <Sidebar />
      </div>
      <div className="w-full md:w-2/4 flex flex-col">
        <div className="flex justify-center mb-4">
          <Pagination />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3  gap-4 p-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/4">
        <Featured />
      </div>
    </div>
  );
};

export default HomeBody;
