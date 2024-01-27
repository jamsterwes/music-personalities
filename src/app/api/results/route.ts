import { SpotifyAudioFeatures, SpotifyTrack } from "@/lib/spotifyData";

async function getFeatures(trackIDs: string[], token: string) {

  // Request features
  const featuresReq = await fetch(`https://api.spotify.com/v1/audio-features/${trackIDs.join(',')}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  // Get JSON, type-cast, return
  const data = await featuresReq.json() as { audio_features: SpotifyAudioFeatures[] };
  return data.audio_features;
}

// api/results?tracks=id1,id2,id3,...
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Limit 4 tracks
  const trackIDs = (searchParams.get('trackID') || '').split(',').slice(0, 4);

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
  
  // Get features
  const features = await getFeatures(trackIDs, token);

  // Aggregate features
  let finalFeatures: SpotifyAudioFeatures = {
    acousticness: 0,
    energy: 0,
    instrumentalness: 0,
    valence: 0
  };

  features.forEach(({acousticness, energy, instrumentalness, valence}: SpotifyAudioFeatures) => {
    let N = trackIDs.length;
    finalFeatures.acousticness += acousticness / N;
    finalFeatures.energy += energy / N;
    finalFeatures.instrumentalness += instrumentalness / N;
    finalFeatures.valence += valence / N;
  });

  console.log({finalFeatures});

  // Take aggregate features and calculate personality
  let featureID = Math.round(finalFeatures.instrumentalness)
    + 2 * Math.round(finalFeatures.energy)
    + 4 * Math.round(finalFeatures.valence)
    + 8 * Math.round(finalFeatures.acousticness);

  const personalityMap = [
    "SPLW", // 0000
    "SPLS", // 0001
    "SPEW", // 0010
    "SPES", // 0011
    "SNLW", // 0100
    "SNLS", // 0101
    "SNEW", // 0110
    "SNES", // 0111
    "APLW", // 1000
    "APLS", // 1001
    "APEW", // 1010
    "APES", // 1011
    "ANLW", // 1100
    "ANLS", // 1101
    "ANEW", // 1110
    "ANES", // 1111
  ];

  return personalityMap[featureID];
}