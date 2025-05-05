import { Visibility } from "../types/VisibilityType"; 
import DairyService  from '../services/DiaryServices';
import { DairyEntry } from "../types/DairyEntryType";
import  { SyntheticEvent, useState } from "react";
import { Weather } from "../types/WeatherType";

 interface AsideProps {
  alldiaries: DairyEntry[]
  modDiaries: React.Dispatch<React.SetStateAction<DairyEntry[]>>
} 

const Aside = ({alldiaries, modDiaries}: AsideProps) => {
  const [date,setDate] = useState<string>('')
  const [visibility,setVisibility] = useState<Visibility | ''>('')    
  const [weather, setWeather] = useState<Weather | ''>('')
  const [comment, setComment] = useState<string>('')
  const [notification, setNoitification] = useState("")

  const dairyCreation = async (e : SyntheticEvent) => {
    try {
      e.preventDefault()
      if( !date || !visibility || !weather ){
        return
      }

      const data = {
        date,
        visibility,
        weather,
        comment
      }
      
      const newData = await DairyService.addDairy(data)
      modDiaries(alldiaries.concat(newData)) 
    
      setComment('')
      setWeather('')
      setVisibility('')
      setDate('')
    } catch (error) {
      if (error instanceof Error) {
        setNoitification(`Error: ${error.message}`)
        setTimeout(() => {
          setNoitification('')
        }, 2000);
      }
    }
    
  }

  return (
    <>
      <div className="w-full md:w-2/5 h-full p-4 md:sticky md:top-0">
        <h2 className="font-bold text-3xl font-sans text-center">Add New Entry</h2>

        {notification === "" ? null :
          (
            <div className="bg-red-300  mt-5 text-red-500 text-xl font-semibold py-2 px-4  border-l-8 ">
            {notification}
          </div>
          )
        }

        <form onSubmit={dairyCreation} className="mt-3 w-full">
          <div className="mb-3">
            <label htmlFor="data" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input type="date" onChange={(e)=>{setDate(e.target.value)}} id="data" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2004-01-11" required />
          </div>

          <div className="mb-3">
            <p  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white ">Visibility:</p>
            <fieldset className="flex gap-4">
              <legend className="sr-only">Visibility</legend>

              <div className="flex items-center mb-4">
                <input id="visibility1" onChange={(e)=>{setVisibility(e.target.value as Visibility)}} required type="radio" name="visibility"  value="great" checked={visibility=== 'great'} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="visibility1" className="block ms-2  text-sm font-medium text-gray-300"> Great </label>
              </div> 

              <div className="flex items-center mb-4">
                <input id="visibility2" onChange={(e)=>{setVisibility(e.target.value as Visibility)}} type="radio" name="visibility" value="good" checked={visibility=== 'good'} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="visibility2" className="block ms-2  text-sm font-medium text-gray-300"> Good </label>
              </div>

              <div className="flex items-center mb-4">
                <input id="visibility3" onChange={(e)=>{setVisibility(e.target.value as Visibility)}} type="radio" name="visibility" value="ok" checked={visibility === 'ok'} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="visibility3" className="block ms-2  text-sm font-medium text-gray-300"> Ok </label>
              </div> 

              <div className="flex items-center mb-4">
                <input id="visibility4" onChange={(e)=>{setVisibility(e.target.value as Visibility)}} type="radio" name="visibility" value="poor" checked={visibility=== 'poor'} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="visibility4" className="block ms-2  text-sm font-medium text-gray-300"> Poor </label>
              </div>
              
            </fieldset>
          </div>

          <div className="mb-3">
            <label htmlFor="weather" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weather</label>
            <select name="weather" id="weather" onChange={(e)=>{setWeather(e.target.value as Weather)}} value={weather} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
              <option value="" disabled></option>
              <option value="sunny">Sunny</option>
              <option value="rainy">Rainy</option>
              <option value="cloudy">Cloudy</option>
              <option value="windy">Windy</option>
              <option value="stormy">Stormy</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" onChange={(e)=>{setComment(e.target.value)}} rows={2} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
          </div>
          
          <button type="submit" className="text-white mt-5 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </div>
    </>
  )
}

export default Aside