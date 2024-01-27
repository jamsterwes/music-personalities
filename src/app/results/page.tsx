import { SpotifyAudioFeatures, SpotifyTrack } from "@/lib/spotifyData";
import { redirect } from "next/navigation";

interface PersonalityType {
  name: string,
  description: string,
  color?: string
}

const typeData: {[type: string]: PersonalityType} = {
  "SPLW": {
    "name": "Synthetic Positive Lethargic Words",
    "description": "Individuals who resonate with this personality enjoy music that combines electronic elements with upbeat lyrics, yet with a laid-back, mellow vibe. They appreciate the blend of digital sounds and optimistic themes, preferring tunes that are soothing and comforting, with clear lyrical content."
  },
  "SPLS": {
    "name": "Synthetic Positive Lethargic Sounds",
    "description": "These listeners are drawn to chill electronic beats and ambient soundscapes that evoke a sense of calm and positivity, without the need for words. Their ideal music is relaxing and uplifting, providing a backdrop for reflection or gentle activity."
  },
  "SPEW": {
    "name": "Synthetic Positive Energetic Words",
    "description": "People with this personality type love energetic electronic music fused with positive, motivational lyrics. They're the ones who find joy in dance tracks and synth-pop tunes that inspire movement and optimism, where the vocals play a crucial role in the experience."
  },
  "SPES": {
    "name": "Synthetic Positive Energetic Sounds",
    "description": "This group prefers high-energy electronic instrumentals that radiate positivity. They're likely to enjoy upbeat EDM or house tracks that get their adrenaline pumping, perfect for workouts or lively social gatherings."
  },
  "SNLW": {
    "name": "Synthetic Negative Lethargic Words",
    "description": "Individuals in this category appreciate electronic music with a darker or more introspective edge, combined with lyrics that may explore deeper or more melancholic themes, all while maintaining a slower tempo that invites introspection."
  },
  "SNLS": {
    "name": "Synthetic Negative Lethargic Sounds",
    "description": "These listeners are attracted to ambient electronic music that might convey a sense of melancholy or introspection without the use of words. Their preferred tracks are those that allow for deep thought or meditation, often with a darker tone."
  },
  "SNEW": {
    "name": "Synthetic Negative Energetic Words",
    "description": "People who fit this personality type enjoy electronic music with a bite, where the tempo is high but the themes may explore challenges, heartbreak, or introspection, often through meaningful lyrics."
  },
  "SNES": {
    "name": "Synthetic Negative Energetic Sounds",
    "description": "This personality type is drawn to intense, fast-paced electronic music that might have a darker or more aggressive edge, suitable for expressing more intense emotions or for use in high-energy, cathartic activities."
  },
  "APLW": {
    "name": "Acoustic Positive Lethargic Words",
    "description": "These individuals love acoustic and soft-spoken music with positive, uplifting lyrics. They gravitate towards songs that are gentle and comforting, often with themes of love, hope, and joy, where the natural sound of instruments and clarity of voice are key."
  },
  "APLS": {
    "name": "Acoustic Positive Lethargic Sounds",
    "description": "Listeners with this personality prefer the soothing sounds of acoustic instruments, creating a peaceful and positive ambiance without the need for lyrics. Their ideal music might include gentle guitar strumming, soft piano melodies, or the subtle warmth of a string quartet."
  },
  "APEW": {
    "name": "Acoustic Positive Energetic Words",
    "description": "This group enjoys lively acoustic music filled with optimistic lyrics. Think of feel-good folk tunes or upbeat singer-songwriter tracks that combine infectious melodies with heartfelt messages, encouraging sing-alongs and toe-tapping."
  },
  "APES": {
    "name": "Acoustic Positive Energetic Sounds",
    "description": "Individuals in this category are fans of vibrant, instrumental acoustic music that feels uplifting and invigorating. They might enjoy everything from fast-paced bluegrass fiddle tunes to lively acoustic guitar solos that brighten the mood without the need for words."
  },
  "ANLW": {
    "name": "Acoustic Negative Lethargic Words",
    "description": "People who resonate with this personality type find beauty in acoustic ballads and soft music that speak to life's more somber or reflective moments. They appreciate the rawness of simple arrangements combined with poignant, thoughtful lyrics."
  },
  "ANLS": {
    "name": "Acoustic Negative Lethargic Sounds",
    "description": "These listeners prefer the melancholic side of acoustic music, where the instrumental arrangements can convey deep emotions or a sense of solitude without the need for lyrics, such as a solo piano piece or a slow, introspective guitar melody."
  },
  "ANEW": {
    "name": "Acoustic Negative Energetic Words",
    "description": "This personality type is drawn to acoustic music with a raw edge, where the tempo might be upbeat but the themes explore the complexities of human emotion or life's trials, often through powerful and expressive lyrics."
  },
  "ANES": {
    "name": "Acoustic Negative Energetic Sounds",
    "description": "Individuals in this category enjoy the intensity of acoustic music that's both energetic and tinged with darker or more introspective elements. They might find resonance in fast-paced, instrumental folk music that carries an air of rebellion or introspection."
  }
}

async function getFeatures(trackIDs: string[], token: string) {

  // Request features
  const url = `https://api.spotify.com/v1/audio-features/?ids=${encodeURIComponent(trackIDs.join(','))}`;
  console.log(url);
  const featuresReq = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  // Get JSON, type-cast, return
  const data = await featuresReq.json() as { audio_features: SpotifyAudioFeatures[] };
  console.log(data);
  return data.audio_features;
}

// api/results?tracks=id1,id2,id3,...
async function getPersonalityType(trackIDs_string: string) {

  // Limit 4 tracks
  const trackIDs = (decodeURIComponent(trackIDs_string) || '').split(',').slice(0, 4);
  console.log(trackIDs);

  // Get a spotify token
  const tokenRes = await fetch('https://accounts.spotify.com/api/token?grant_type=client_credentials', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    next: { revalidate: 3600 }
  });
  const tokenData = await tokenRes.json();
  const token = tokenData.access_token;
  
  // Get features
  const features = await getFeatures(trackIDs, token);
  console.log(features);

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

export default async function ResultsPage({ searchParams }: {
  searchParams: {
    trackIDs: string
  }
}) {

  // Step 1: Get the user's personality
  const trackIDs = searchParams.trackIDs;
  const personalityType = await getPersonalityType(trackIDs);

  // Step 32 Redirect to the correct personality page
  redirect('/the-types/' + personalityType);
}