import PartnersList from "./PartnersList"
import SocialIssue from "./SocialIssue/SocialIssue"



const Partners = () => {
  return (
    <div>
        <div className='h-auto w-full relative z-10'>
            <div className='flex flex-col gap-10'>
             <span className='text-3xl max-w-lg font-medium'>We’ve built long-lasting partnerships with the most ambitious organization across the globe:</span>
               <PartnersList/>
               <SocialIssue/>
             </div>
        </div>
    </div>
  )
}

export default Partners

