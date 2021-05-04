import React from 'react';
import '../css/App.css';
import { TagCloud } from 'react-tagcloud'


const data = [
    { value: 'Russ', count: 38 },
    { value: 'BTS', count: 30 },
    { value: 'Linkin Park', count: 28 },
    { value: 'Greenday', count: 25 },
    { value: 'Seedhe Maut', count: 33 },
    { value: 'RATM', count: 18 },
    { value: 'Idiocracy', count: 20 },
    { value: 'Divine', count: 25 },
    { value: 'Ahmer', count: 14 },
    { value: 'Dr Dre', count: 40 },
    { value: 'Emiway Bantai', count: 34 },

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