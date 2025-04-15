import {
  mockNetflixOriginals,
  mockTrending,
  mockTopRated,
  mockActionMovies,
  mockComedyMovies,
  mockHorrorMovies,
  mockRomanceMovies,
  mockDocumentaries
} from './mockData';

// This is a mock implementation that returns mock data instead of making API calls
const requests = {
  fetchNetflixOriginals: mockNetflixOriginals,
  fetchTrending: mockTrending,
  fetchTopRated: mockTopRated,
  fetchActionMovies: mockActionMovies,
  fetchComedyMovies: mockComedyMovies,
  fetchHorrorMovies: mockHorrorMovies,
  fetchRomanceMovies: mockRomanceMovies,
  fetchDocumentaries: mockDocumentaries
};

export default requests;