class Foo {
    bar() {
    }
}

const bar = new Foo();

console.log(bar instanceof Foo); // true

// ========================

class Song {
    constructor(public title: string, public duration: number) {
    }
}

class Playlist {
    constructor(public name: string, public songs: Song[]) {
    }
}

function getItemName(item: Song | Playlist) {
    if (item instanceof Song) {
        return item.title
    } else {
        return item.name
    }
}
