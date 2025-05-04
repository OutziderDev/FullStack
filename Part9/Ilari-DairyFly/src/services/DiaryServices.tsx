import { DairyEntry } from "../types/DairyEntryType"

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
const addDairy = async (data : unknown) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(`Error adding diary: ${errorMessage}`)
  }

  const newEntry = await response.json()
  return newEntry
}

export default { getDiaries, addDairy}