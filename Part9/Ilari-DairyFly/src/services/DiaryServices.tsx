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

export default { getDiaries}