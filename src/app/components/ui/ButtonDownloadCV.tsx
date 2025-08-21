const DownloadButton = () => {
    return (
      <a
        href="/img/cv.pdf" // Ganti sama link CV lu
        download
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded shadow transition-all duration-300 transform hover:scale-200 hover:translate-y-[-2px] hover:shadow-lg"
      >
        Download CV
      </a>
    );
  };
  
  export default DownloadButton;