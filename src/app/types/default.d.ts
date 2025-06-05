import { z } from "zod"
import { LoginSchema, RegisterSchema } from "@/schema/auth"
import { LucideIcon } from "lucide-react"
import { Employee, User } from "@/types/models"

export type ApiResponse<T> = {
  data: T
  message: string
  status: number
}

export type ApiError<T> = {
  message: string
  status: number
  data: T
}

export type TLanguage = "ar" | "en"
export type TAccountType = "admin" | "user" | "company"
export type TSearchParams = Record<string, string | string[] | undefined>
export type ApiErrorData = { data: { message: string } }

export type Timestamps = {
  created_at: Date
  updated_at: Date
}

export type LoginData = z.infer<typeof LoginSchema>
export type RegisterData = z.infer<typeof RegisterSchema>

export type PaginatedData<T> = {
  page: number
  nextPage: number | null
  lastPage: number | null
  itemCount: number
  totalPages: number
  totalItems: number
  data: T[]
}

export type LoginResponse = {
  user: User
  employeeData: Employee
}
