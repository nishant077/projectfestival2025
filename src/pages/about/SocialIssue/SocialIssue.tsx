import { useNavigate } from "react-router-dom";


const SocialIssue = () => {
    const navigate = useNavigate();

    const topics = [
        {
          image: "https://www.bigissue.com/wp-content/uploads/2022/05/50-years-of-LGBTQ-pride.png?w=1920",
          title: "LGBTQ",
          path: "/lgbtq"
        },
        {
          image: "https://blog.geohoney.com/storage/photos/1/Climate%20Change%20%E2%80%93%20Reasons%20Which%20Show%20Humans%20Cause%20It.png",
          title: "Climate Change",
          path: "/climate-change"
        },
        {
          image: "https://i.ytimg.com/vi/0q0rzIyGZbI/maxresdefault.jpg",
          title: "Child Marriage",
          path: "/child-marriage"
        },
        {
          image: "https://www.unesco.org/sites/default/files/2022-06/education%20and%20gender%20equality-CatherineLProdShutterstock.jpg",
          title: "Gender Equality",
          path: "/gender-equality"
        }
      ];
    
      const handleNavigation = (path) => {
        navigate(path);
      };

  return (
    <>
     <div className='border-t-[1px] border-gray-300'></div>
     <h3 className="font-[anton] text-3xl">Theme of change</h3>
    <div>
        <p className='font-medium text-3xl'>At the heart of Stories for Change 2025 are ten powerful Themes of Change — each one shining a light on a pressing issue that shapes our societies. These themes are not abstract ideas; they are lived realities told through stories of resilience, art, and activism. From confronting child marriage to fighting for climate justice, from amplifying indigenous voices to celebrating the role of art in activism, each theme invites you to step closer, listen deeply, and join the movement for change.</p>
    </div>
        {/* <div className="flex items-center gap-4 w-full cursor-pointer ">
            <div className="flex flex-col gap-2">
                <div className="h-60">
            <img src="https://www.bigissue.com/wp-content/uploads/2022/05/50-years-of-LGBTQ-pride.png?w=1920" className="h-full object-cover rounded-md"/>
            </div>
            <span className='text-xl font-medium'>LGBTQ </span>
            </div>

            <div className="flex flex-col gap-2">
            <div className="h-60">
            <img src="https://blog.geohoney.com/storage/photos/1/Climate%20Change%20%E2%80%93%20Reasons%20Which%20Show%20Humans%20Cause%20It.png" className="h-full object-cover rounded-md"/>
            </div>
            <span className='text-xl font-medium'>Climate Change</span>
            </div>

            <div className="flex flex-col gap-2">
            <div className="h-60">
            <img src="https://i.ytimg.com/vi/0q0rzIyGZbI/maxresdefault.jpg" className="h-full object-cover rounded-md"/>
            </div>
            <span className='text-xl font-medium'>Child Marriage</span>
            </div>

            <div className="flex flex-col gap-2">
            <div className="h-60">
            <img src="https://www.unesco.org/sites/default/files/2022-06/education%20and%20gender%20equality-CatherineLProdShutterstock.jpg" className="h-full object-cover rounded-md"/>
            </div>
            <span className='text-xl font-medium'>Gender Equality</span>
            </div>
           
        </div> */}
       <div className="flex items-center gap-4 w-full cursor-pointer">
      {topics.map((topic, index) => (
        <div 
          key={index}
          className="flex flex-col gap-3 group relative flex-1"
          onClick={() => handleNavigation(topic.path)}
        >
          {/* Image Container with Overlay */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
            {/* Image */}
            <div className="h-60">
              <img 
                src={topic.image} 
                alt={topic.title}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-xl drop-shadow-lg">
                  {topic.title}
                </span>
                <div className="bg-[#C2F84F] rounded-full p-2 transform translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
         </svg>
           </div>
              </div>
            </div>

            {/* Top Right Corner Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Title with Hover Effect */}
        <span className='text-xl font-medium text-gray-800 group-hover:text-[#C2F84F] transition-colors duration-300 flex items-center gap-2'>
  {topic.title}
  {/* Diagonal arrow icon (top-right direction) */}
  <svg 
    className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-all duration-300" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
  </svg>
</span>
        </div>
      ))}
    </div>
    </>
  )
}

export default SocialIssue