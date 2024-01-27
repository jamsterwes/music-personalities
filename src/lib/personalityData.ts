export interface PersonalityType {
  name: string,
  description: string,
  color?: string
}

export const typeData: {[type: string]: PersonalityType} = {
  "SPLW": {
    "name": "Synthetic Positive Lethargic Words",
    "description": "Individuals who resonate with this personality enjoy music that combines electronic elements with upbeat lyrics, yet with a laid-back, mellow vibe. They appreciate the blend of digital sounds and optimistic themes, preferring tunes that are soothing and comforting, with clear lyrical content.",
    "color": "#f44336"
  },
  "SPLS": {
    "name": "Synthetic Positive Lethargic Sounds",
    "description": "These listeners are drawn to chill electronic beats and ambient soundscapes that evoke a sense of calm and positivity, without the need for words. Their ideal music is relaxing and uplifting, providing a backdrop for reflection or gentle activity.",
    "color": "#e91e63"
  },
  "SPEW": {
    "name": "Synthetic Positive Energetic Words",
    "description": "People with this personality type love energetic electronic music fused with positive, motivational lyrics. They're the ones who find joy in dance tracks and synth-pop tunes that inspire movement and optimism, where the vocals play a crucial role in the experience.",
    "color": "#9c27b0"
  },
  "SPES": {
    "name": "Synthetic Positive Energetic Sounds",
    "description": "This group prefers high-energy electronic instrumentals that radiate positivity. They're likely to enjoy upbeat EDM or house tracks that get their adrenaline pumping, perfect for workouts or lively social gatherings.",
    "color": "#673ab7"
  },
  "SNLW": {
    "name": "Synthetic Negative Lethargic Words",
    "description": "Individuals in this category appreciate electronic music with a darker or more introspective edge, combined with lyrics that may explore deeper or more melancholic themes, all while maintaining a slower tempo that invites introspection.",
    "color": "#3f51b5"
  },
  "SNLS": {
    "name": "Synthetic Negative Lethargic Sounds",
    "description": "These listeners are attracted to ambient electronic music that might convey a sense of melancholy or introspection without the use of words. Their preferred tracks are those that allow for deep thought or meditation, often with a darker tone.",
    "color": "#2196f3"
  },
  "SNEW": {
    "name": "Synthetic Negative Energetic Words",
    "description": "People who fit this personality type enjoy electronic music with a bite, where the tempo is high but the themes may explore challenges, heartbreak, or introspection, often through meaningful lyrics.",
    "color": "#03a9f4"
  },
  "SNES": {
    "name": "Synthetic Negative Energetic Sounds",
    "description": "This personality type is drawn to intense, fast-paced electronic music that might have a darker or more aggressive edge, suitable for expressing more intense emotions or for use in high-energy, cathartic activities.",
    "color": "#00bcd4"
  },
  "APLW": {
    "name": "Acoustic Positive Lethargic Words",
    "description": "These individuals love acoustic and soft-spoken music with positive, uplifting lyrics. They gravitate towards songs that are gentle and comforting, often with themes of love, hope, and joy, where the natural sound of instruments and clarity of voice are key.",
    "color": "#009688"
  },
  "APLS": {
    "name": "Acoustic Positive Lethargic Sounds",
    "description": "Listeners with this personality prefer the soothing sounds of acoustic instruments, creating a peaceful and positive ambiance without the need for lyrics. Their ideal music might include gentle guitar strumming, soft piano melodies, or the subtle warmth of a string quartet.",
    "color": "#4caf50"
  },
  "APEW": {
    "name": "Acoustic Positive Energetic Words",
    "description": "This group enjoys lively acoustic music filled with optimistic lyrics. Think of feel-good folk tunes or upbeat singer-songwriter tracks that combine infectious melodies with heartfelt messages, encouraging sing-alongs and toe-tapping.",
    "color": "#8bc34a"
  },
  "APES": {
    "name": "Acoustic Positive Energetic Sounds",
    "description": "Individuals in this category are fans of vibrant, instrumental acoustic music that feels uplifting and invigorating. They might enjoy everything from fast-paced bluegrass fiddle tunes to lively acoustic guitar solos that brighten the mood without the need for words.",
    "color": "#cddc39"
  },
  "ANLW": {
    "name": "Acoustic Negative Lethargic Words",
    "description": "People who resonate with this personality type find beauty in acoustic ballads and soft music that speak to life's more somber or reflective moments. They appreciate the rawness of simple arrangements combined with poignant, thoughtful lyrics.",
    "color": "#ffeb3b"
  },
  "ANLS": {
    "name": "Acoustic Negative Lethargic Sounds",
    "description": "These listeners prefer the melancholic side of acoustic music, where the instrumental arrangements can convey deep emotions or a sense of solitude without the need for lyrics, such as a solo piano piece or a slow, introspective guitar melody.",
    "color": "#ffc107"
  },
  "ANEW": {
    "name": "Acoustic Negative Energetic Words",
    "description": "This personality type is drawn to acoustic music with a raw edge, where the tempo might be upbeat but the themes explore the complexities of human emotion or life's trials, often through powerful and expressive lyrics.",
    "color": "#ff9800"
  },
  "ANES": {
    "name": "Acoustic Negative Energetic Sounds",
    "description": "Individuals in this category enjoy the intensity of acoustic music that's both energetic and tinged with darker or more introspective elements. They might find resonance in fast-paced, instrumental folk music that carries an air of rebellion or introspection.",
    "color": "#ff5722"
  }
}