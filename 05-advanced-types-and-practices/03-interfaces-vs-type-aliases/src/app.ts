interface Item {
    name: string
}

interface Artist extends Item {
    songs: string[];
}

interface Artist {
    getSong(): number
}

type Artist2 = {
    name: string
} & Item;


const newArtist: Artist = {
  name: 'tom',
  songs: ['cool', 'okay okay'],
  getSong(): number {
      return this.songs.length
  }
};
