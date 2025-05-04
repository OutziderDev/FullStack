import { DairyEntry } from "../types/DairyEntryType"

const Diary = ({allDiary}: {allDiary : DairyEntry[]}) => {
  return (
    <>
      <div className="w-full md:w-3/5 h-full p-4">
        <h2 className="font-bold text-3xl font-sans text-center">Diary Entries</h2>

        <div className="flex flex-col gap-4 mt-5">
          {
            allDiary.map((diary,index) => {
              let bgTheme = ""
              let titleBgTheme = ""
              switch (diary.weather) {
                case "rainy":
                  bgTheme = "from-blue-900 to-sky-600";
                  titleBgTheme = "via-sky-600";
                  break;

                case "sunny":
                  bgTheme = "from-yellow-900 to-orange-600";
                  titleBgTheme = "via-orange-600";
                  break;

                case "cloudy":
                  bgTheme = "from-gray-900 to-gray-600";
                  titleBgTheme = "via-gray-600";
                  break;
                
                case "windy":
                  bgTheme = "from-green-900 to-green-600";
                  titleBgTheme = "via-green-600";
                  break;

                default:
                  break;
              }
              return(
                <div key={index} className={`relative overflow-hidden group bg-gradient-to-br ${bgTheme} rounded-lg p-3 w-full hover:contrast-125 hover:scale-[1.03] transition-all duration-300`}>
                  <h3 className={`w-full text-center font-bold text-2xl bg-gradient-to-r from-transparent ${titleBgTheme} to-transparent`}>{diary.date}</h3>
                  <div className="flex justify-around mt-3"> 
                    <p className="text-xl"><b>Visibility:</b>  {diary.visibility}</p> 
                    <p className="text-xl"><b>Weather:</b> {diary.weather}</p>
                  </div>
                  <div className="mt-5">
                    <span className="text-xl font-bold">Comments:</span>
                    <p>{diary.comment}</p>
                  </div>

                  <svg className="absolute size-24 group-hover:rotate-18 -bottom-4 group-hover:bottom-2 -right-4 group-hover:right-2 transition-all duration-400" >
                    <use href={`/sprite.svg#${diary.weather}`} />
                  </svg>
                </div>
              )
            })
          }

        </div>

      </div>
    </>
  )
}

export default Diary