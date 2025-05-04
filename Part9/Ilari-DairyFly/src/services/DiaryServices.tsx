import { DairyEntry } from "../types/DairyEntryType"
import { NewDiaryEntry} from '../types/DairyEntryType'

const baseURL = "http://localhost:3001/api/diaries/"

const getDiaries = async (): Promise<DairyEntry[]> => {
  const response = await fetch(baseURL)
  if (!response.ok) {
    throw new Error("Failed to fetch diaries")
  }
  const data = await response.json()
  return data
}

/* : Promise<DairyEntry> */
const addDairy = async (data : NewDiaryEntry): Promise<DairyEntry> => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.message || 'Error al agregar diario');
  }

  const newEntry = await response.json();
  return newEntry;

}

export default { getDiaries, addDairy}