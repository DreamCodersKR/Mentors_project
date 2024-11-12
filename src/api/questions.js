import apiClient from "./index";

export function fetchQuestions(categoryId, userType) {
  return apiClient
    .get(`/questions/category/${categoryId}?mentorYn=${userType}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching questions:", error);
      throw error;
    });
}
