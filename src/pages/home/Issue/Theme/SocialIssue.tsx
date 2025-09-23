import SocialIssueList from "./SocialIssueList"


const SocialIssue = () => {
  return (
    <div>
          <div className='h-auto w-full px-10 py-20 mt-14'>
          <div className='flex flex-col gap-10'>
          <h3 className='text-5xl font-[anton]'>Themes of Change</h3>
          <p className="font-medium text-3xl">Here you’ll find the heart of Stories for Change 2025 — a collection of powerful voices, bold ideas, and unforgettable journeys. Each theme shines a light on a pressing issue facing our communities, told through documentaries, photos, art, and lived experiences.</p>
          <SocialIssueList/>
          </div>
          </div>
    </div>
  )
}

export default SocialIssue







