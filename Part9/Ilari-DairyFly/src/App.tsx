import { DairyEntry } from "./types/DairyEntryType"
import { useEffect, useState } from "react"
import DiaryService from './services/DiaryServices'
import Aside from "./components/Aside"
import Diary from "./components/Diary"

function App() {
  const [diaries, setDiaries] = useState<DairyEntry[]>([])

  useEffect( () => {
    const fetchDiaries = async () => {
      try {
        const response = await DiaryService.getDiaries()
/*         console.log(response);
 */        
        setDiaries(response)
      } catch (error) {
        console.error("Error fetching diaries:", error)
      }
    }
    fetchDiaries()
  },[])
  // 
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto  pt-10 ">
      <Aside/>
      
      <Diary allDiary={diaries}/>
    </div>
  )
}

export default App