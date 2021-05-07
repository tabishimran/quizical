import React from 'react';
import '../css/App.css';
import { TagCloud } from 'react-tagcloud'


// const data = [
//     { value: 'Russ', count: 38 },
//     { value: 'BTS', count: 30 },
//     { value: 'Linkin Park', count: 28 },
//     { value: 'Greenday', count: 25 },
//     { value: 'Seedhe Maut', count: 33 },
//     { value: 'RATM', count: 18 },
//     { value: 'Idiocracy', count: 20 },
//     { value: 'Divine', count: 25 },
//     { value: 'Ahmer', count: 14 },
//     { value: 'Dr Dre', count: 40 },
//     { value: 'Emiway Bantai', count: 34 },

//   ]

const data = [
    { value: 'Young Stunners', count: 53 },
    { value: 'Ahmer', count: 26 },
    { value: 'Red Hot Chili Peppers', count: 86 },
    { value: 'Full Power', count: 19 },
    { value: 'Nine Inch Nails', count: 70 },
    { value: 'Avenged Sevenfold', count: 78 },
    { value: 'Sum 41', count: 75 },
    { value: 'Pantera', count: 72 },
    { value: 'Mc Kode', count: 22 },
    { value: 'Busta Rhymes', count: 77 },
    { value: '2Pac', count: 84 },
    { value: 'Ankur Tewari', count: 49 },
    { value: 'A.R. Rahman', count: 77 },
    { value: 'Lil Dicky', count: 70 },
    { value: 'Sex Pistols', count: 61 },
    { value: 'Russ', count: 82 },
    { value: 'Post Malone', count: 93 },
    { value: 'Nucleya', count: 59 },
    { value: 'Diljit Dosanjh', count: 68 },
    { value: 'Rage Against The Machine', count: 76 },
    { value: 'Seedhe Maut', count: 54 },
    { value: 'Naezy', count: 46 },
    { value: 'Wu-Tang Clan', count: 72 },
    { value: 'Ice Cube', count: 78 },
    { value: 'Rakim', count: 61 },
    { value: 'The Clash', count: 75 },
    { value: 'The Beatles', count: 89 },
    { value: 'Travis', count: 65 },
    { value: '50 Cent', count: 86 },
    { value: 'DIVINE', count: 70 },
    { value: 'Sidhu Moose Wala', count: 70 },
    { value: 'NOFX', count: 67 },
    { value: 'Tyler, The Creator', count: 86 },
    { value: 'Arijit Singh', count: 84 },
    { value: 'Dhruv Sthetick', count: 38 },
    { value: 'Coldplay', count: 90 },
    { value: 'Logic', count: 83 },
    { value: 'U2', count: 82 },
    { value: 'Nusrat Fateh Ali Khan', count: 68 },
    { value: 'Tame Impala', count: 83 },
    { value: 'Kanye West', count: 93 },
    { value: 'Raftaar', count: 61 },
    { value: 'Shamoon Ismail', count: 49 },
    { value: 'Dub Sharma', count: 51 },
    { value: 'Dr. Dre', count: 83 },
    { value: 'blink-182', count: 81 },
    { value: 'STEVIE', count: 21 },
    { value: 'Tienas', count: 23 },
    { value: 'Switchfoot', count: 64 },
    { value: 'Linkin Park', count: 87 }
]

function WordCloud(){
    return(
        <div className="tagCloud">
            <TagCloud
                minSize={12}
                maxSize={51}
                tags={data}
                onClick={(tag: { value: string; }) => alert(`'${tag.value}' was selected!`)}
            />
        </div>
    );
}

export default WordCloud;