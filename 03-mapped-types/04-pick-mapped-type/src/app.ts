let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: 'js02j129',
    next: 'ff009fj',
};

// Numbers are coerced to String by JavaScript
dictionary[0] = item;
