import { partners } from "./partnersData"

const PartnersList = () => {
  return (

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
          {partners.map((item, index) => (
            <div 
              key={index}
              className="group bg-[#FAFDEE] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-b-4 hover:border-[#C2F84F] transform hover:-translate-y-1"
            >
              <div className="text-center">
               
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-gray-50 p-2 border-2 border-gray-100 group-hover:border-[#C2F84F]/30 transition-colors duration-300">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                
               
                <h3 className="font-[anton] text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

  )
}

export default PartnersList