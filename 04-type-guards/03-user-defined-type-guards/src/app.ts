class Song {
    constructor(public title: string, public duration: number) {
    }
}

function isSong(item: any): item is Song {
    return item instanceof Song;
}

class Playlist {
    constructor(public name: string, public songs: Song[]) {
    }
}

function getItemName(item: Song | Playlist) {
    if (isSong(item)) {
        return item.title
    } else {
        return item.name
    }
}
