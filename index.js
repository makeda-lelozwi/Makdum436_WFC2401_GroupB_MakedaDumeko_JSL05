const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
  { title: "Redbone", artist: "Donald Glover", genre: "R&B" },
  { title: "American Boy", artist: "Estelle", genre: "R&B" },
  { title: "Confessions Part II", artist: "Usher", genre: "R&B" },
  { title: "Dangerously in Love", artist: "Beyonce", genre: "R&B" },
  { title: "Single Ladies", artist: "Beyonce", genre: "Pop" }
];

const guardians = {
  "Star-Lord": "Rock",
  "Gamora": "Pop",
  "Drax": "Pop",
  "Rocket": "Rock", // Corrected key for "Rocket"
  "Groot": "R&B",
};

function generatePlaylist(array, preferences) {
  return Object.keys(preferences).reduce((acc, guardian) => {
      const preferredGenre = preferences[guardian].toLowerCase();
      const playlist = array.filter(song => song.genre.toLowerCase() === preferredGenre);
      acc[guardian] = playlist;
      return acc;
  }, {});
}

/*
This code block defines a function called generatePlaylist 
that takes two parameters: an array of songs (array) and an 
object representing the preferences of different 
guardians (preferences). The function returns an object where
each key 
corresponds to a guardian's name, and the value is an 
array of songs filtered based on that guardian's 
preferred genre.
*/

/*How reduce() works:

arr.reduce(callback[, initialValue])

The callback method takes: 

acc: the value is remembered throughout each iteration of 
    the method and ultimately becomes the final returned value

AND 

currentValue: the current element being processed in the array

if we want to convert the following array: 
const letters = ['a', 'b', 'c'] into an object we say:

const obj = letters.reduce(accumulator, currentValue) => {
  accumulator[currentValue] = currentValue;
  return accumulator;
}, {});

console.log(obj);
*/

const playlists = generatePlaylist(songs, guardians);
const card = document.getElementById("playlists");

Object.keys(playlists).map(guardian => {
  const playlist = playlists[guardian];
  const guardianElement = document.createElement("div");
  guardianElement.className = "playlist";
  guardianElement.innerHTML = `<h2>${guardian}'s Playlist:</h2>`;

  // Create a new div for each Guardian's playlist with custom class for styling
  const listDiv = document.createElement("div");
  listDiv.classList.add("playlist-div");

  const listElement = document.createElement("ul");

  // Apply styling to the ul element
  listElement.style.listStyleType = 'none';
  listElement.style.padding = '0';
  listElement.style.margin = '0';

  playlist.forEach(song => {
      const listItem = document.createElement("li");
      listItem.classList.add("song");
      const songTitle = document.createElement("span");
      songTitle.classList.add("song-title");
      songTitle.textContent = `${song.title}`;
      listItem.appendChild(songTitle);

      const songArtist = document.createElement("span");
      songArtist.classList.add("song-artist");
      songArtist.textContent = ` by ${song.artist}`;
      listItem.appendChild(songArtist);

      listElement.appendChild(listItem);
  });

  listDiv.appendChild(listElement);
  guardianElement.appendChild(listDiv);
  card.appendChild(guardianElement);
});
