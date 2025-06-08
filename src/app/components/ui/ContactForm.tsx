const ContactForm = () => {
    return (
      <form className="flex flex-col gap-6 w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <input 
          type="text" 
          placeholder="Name" 
          className="border-b-2 border-gray-300 p-3 focus:outline-none focus:border-yellow-400 transition-colors rounded-t-lg bg-gray-50 hover:bg-gray-100" 
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="border-b-2 border-gray-300 p-3 focus:outline-none focus:border-yellow-400 transition-colors rounded-t-lg bg-gray-50 hover:bg-gray-100" 
        />
        <input 
          type="text" 
          placeholder="Subject" 
          className="border-b-2 border-gray-300 p-3 focus:outline-none focus:border-yellow-400 transition-colors rounded-t-lg bg-gray-50 hover:bg-gray-100" 
        />
        <textarea 
          placeholder="Message" 
          className="border-2 border-gray-300 p-3 h-32 resize-none focus:outline-none focus:border-yellow-400 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100"
        ></textarea>
        <button 
          type="submit" 
          className="bg-yellow-400 text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-yellow-500 transform transition-all duration-300 hover:scale-105 shadow-md"
        >
          Submit
        </button>
      </form>
    )
  }
  
  export default ContactForm