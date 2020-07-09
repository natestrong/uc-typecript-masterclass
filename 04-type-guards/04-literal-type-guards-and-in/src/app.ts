// console.log('localStorage' in window);

class Song {
    kind: string;
    constructor(public title: string, public duration: number) {
        this.kind = 'song';
    }
}

function isSong(item: any): item is Song {
    return 'title' in item;
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
