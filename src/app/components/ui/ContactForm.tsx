import { User, Mail, Tag, MessageSquare } from "lucide-react"; // pastiin udah install lucide-react

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6 w-full max-w-3xl bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Get in Touch ✨
      </h2>
      <p className="text-gray-500 text-center text-sm mb-6">
        Fill the form below and I’ll get back to you soon 🚀
      </p>

      {/* Name */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
          <User size={16} /> Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition bg-gray-50 placeholder-gray-400 text-black"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
          <Mail size={16} /> Email
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition bg-gray-50 placeholder-gray-400 text-black"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
          <Tag size={16} /> Subject
        </label>
        <input
          type="text"
          placeholder="e.g. Collaboration request"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition bg-gray-50 placeholder-gray-400 text-black"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
          <MessageSquare size={16} /> Message
        </label>
        <textarea
          placeholder="Write your message here..."
          className="border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition bg-gray-50 placeholder-gray-400 text-black"
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold py-3 px-6 rounded-xl w-full shadow-md hover:shadow-lg hover:brightness-105 transition"
      >
        Send Message 🚀
      </button>
    </form>
  );
};

export default ContactForm;
