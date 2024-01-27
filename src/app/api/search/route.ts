import { SpotifyTrack } from "@/lib/spotifyData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';

  // Get a spotify token
  const tokenRes = await fetch('https://accounts.spotify.com/api/token?grant_type=client_credentials', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  const tokenData = await tokenRes.json();
  const token = tokenData.access_token;

  // Perform search
  const reqParams = new URLSearchParams();
  reqParams.set('query', query);
  reqParams.set('type', 'track');
  reqParams.set('locale', 'en-US,en;q=0.9');
  reqParams.set('offset', '0');
  reqParams.set('limit', '4');
  
  const searchReq = await fetch(`https://api.spotify.com/v1/search?${reqParams.toString()}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const searchData = await searchReq.json() as {
    tracks: {
      items: SpotifyTrack[]
    }
  }

  return Response.json({
    tracks: searchData.tracks.items
  })
}