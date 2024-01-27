import { SpotifyAudioFeatures, SpotifyTrack } from "@/lib/spotifyData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const trackID = searchParams.get('trackID') || '';

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
  
  const featuresReq = await fetch(`https://api.spotify.com/v1/audio-features/${trackID}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const featuresData = await featuresReq.json() as SpotifyAudioFeatures;

  return Response.json(featuresData);
}