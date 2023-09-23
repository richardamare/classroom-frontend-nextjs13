import {CourseListDTO} from "@/lib/types";

export class Api {

	public async listCourses(): Promise<CourseListDTO[]> {
		return await this.get<CourseListDTO[]>("/api/v1/courses")
	}

	private getToken(): string {
		return localStorage.getItem("token") ?? ""
	}

	private async get<T>(path: string): Promise<T> {
		const response = await fetch(path, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${this.getToken()}`
			}
		})
		return await response.json()
	}

	private async post<T>(path: string, body: any): Promise<T> {
		const response = await fetch(path, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${this.getToken()}`
			},
		})
		return await response.json()
	}

	private async put<T>(path: string, body: any): Promise<T> {
		const response = await fetch(path, {
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${this.getToken()}`,
			},
		})
		return await response.json()
	}

	private async delete<T>(path: string): Promise<T> {
		const response = await fetch(path, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${this.getToken()}`,
			}
		})
		return await response.json()
	}
}