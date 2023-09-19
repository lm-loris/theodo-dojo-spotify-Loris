import { SavedTrack, Track } from 'spotify-types';

const apiToken: string =
  'BQBl73IYKx_msOfPLQas4HtrsNx1P3U8f7PBFHrExonvsYChLPrTqm9Hn1g2uP7Ij-awJZPAaGQH8V10j0HeXmXvcnVJpZS_vEB7eBpdmECLfFcEtCtsyykmWkzAURcR7_Igf4b782VwXpy3BHaWdiHFbJhiKRjdV5i6BObdth4Nhi9EQcDHkmDs2m8N3XBqOx0aj6cPc4ro4R6raQmFjdYDZg';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
