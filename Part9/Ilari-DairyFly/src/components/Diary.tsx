import { DairyEntry } from "../types/DairyEntryType"

const Diary = ({allDiary}: {allDiary : DairyEntry[]}) => {
  return (
    <>
      <div className="w-full md:w-3/5 h-full p-4">
        <h2 className="font-bold text-3xl font-sans text-center">Diary Entries</h2>

        <div className="flex flex-col gap-4 mt-5">
          {
            allDiary.map((diary,index) => (
              <div key={index} className="relative overflow-hidden group bg-gradient-to-br from-blue-900 to-sky-600 rounded-lg p-3 w-full hover:contrast-125 hover:scale-[1.03] transition-transform duration-300">
                <h3 className="w-full text-center font-bold text-2xl bg-gradient-to-r from-transparent via-sky-600 to-transparent">{diary.date}</h3>
                <div className="flex justify-around mt-3"> 
                  <p className="text-xl"><b>Visibility:</b>  {diary.visibility}</p> 
                  <p className="text-xl"><b>Weather:</b> {diary.weather}</p>
                </div>
                <div className="mt-5">
                  <span className="text-xl font-bold">Comments:</span>
                  <p>{diary.comment}</p>
                </div>

                <svg  xmlns="http://www.w3.org/2000/svg"  
                  width="24"  
                  height="24"  
                  viewBox="0 0 24 24"  
                  fill="none"  
                  stroke="currentColor"  
                  stroke-width="2"  
                  stroke-linecap="round"  
                  stroke-linejoin="round"
                  className="absolute size-24 group-hover:rotate-18 -bottom-4 group-hover:bottom-2 -right-4 group-hover:right-2 transition-all duration-400" 
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
                    <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
                </svg>
              </div>
            ))
          }
          {/* <div className="relative overflow-hidden group bg-gradient-to-br from-blue-900 to-sky-600 rounded-lg p-3 w-full hover:contrast-125 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="w-full text-center font-bold text-2xl bg-gradient-to-r from-transparent via-sky-600 to-transparent">2017-01-01</h3>
            <div className="flex justify-around mt-3"> 
              <p className="text-xl"><b>Visibility:</b>  Poor</p> 
              <p className="text-xl"><b>Weather:</b> Rainy</p>
            </div>
            <div className="mt-5">
              <span className="text-xl font-bold">Comments:</span>
              <p>Pretty scary flight, I'm glad I'm alive</p>
            </div>

            <svg  xmlns="http://www.w3.org/2000/svg"  
              width="24"  
              height="24"  
              viewBox="0 0 24 24"  
              fill="none"  
              stroke="currentColor"  
              stroke-width="2"  
              stroke-linecap="round"  
              stroke-linejoin="round"
              className="absolute size-24 group-hover:rotate-18 -bottom-4 group-hover:bottom-2 -right-4 group-hover:right-2 transition-all duration-400" 
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
                <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
            </svg>
          </div> */}

        </div>

      </div>
    </>
  )
}

export default Diary