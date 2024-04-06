function Loader() {
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-100 flex items-center justify-center">
      <span className="absolute flex items-center loading loading-spinner loading-lg z-10"></span>
    </div>
  );
}

export default Loader;