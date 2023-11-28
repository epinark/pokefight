const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-gray-600 to-gray-300">
      <div className="border-t-4 border-red-900 rounded-full animate-spin h-16 w-16"></div>
      <span className="mt-3 text-red-900 text-lg">Loading...</span>
    </div>
  );
};

export default Loading;
