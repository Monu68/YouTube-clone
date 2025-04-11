const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 30;

export const YOUTUBE_VIDEOS_API = 
`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=20&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';