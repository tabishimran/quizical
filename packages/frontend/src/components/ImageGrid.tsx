import React from 'react';
import '../css/App.css';
import { TagCloud } from 'react-tagcloud'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';


// const tileData: Array<tile> = [
//     {
//         img: "https://i.scdn.co/image/2dcb8667c83c43b7c6bf260d8a8418d6e82e2dd9",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/ab676161000051741c37bb3c0c15f1841e0f8c46",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/ab676161000051743bcd1c4d6f324498d3de6f8d",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/dc51a45aca9c2d35f4034d2ea51adfa2b73c8ba1",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 2
//     },
//     {
//         img: "https://i.scdn.co/image/323ff0fb6b0f065b0943e39983878c839e7dfd18",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/dfb0beda0862f018a62cc6416c90450d963b9121",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/ab676161000051741c37bb3c0c15f1841e0f8c46",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/ab676161000051743bcd1c4d6f324498d3de6f8d",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/dc51a45aca9c2d35f4034d2ea51adfa2b73c8ba1",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/323ff0fb6b0f065b0943e39983878c839e7dfd18",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/dfb0beda0862f018a62cc6416c90450d963b9121",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/ab676161000051741c37bb3c0c15f1841e0f8c46",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/ab676161000051743bcd1c4d6f324498d3de6f8d",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/dc51a45aca9c2d35f4034d2ea51adfa2b73c8ba1",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/323ff0fb6b0f065b0943e39983878c839e7dfd18",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/dfb0beda0862f018a62cc6416c90450d963b9121",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/ab676161000051741c37bb3c0c15f1841e0f8c46",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/ab676161000051743bcd1c4d6f324498d3de6f8d",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/dc51a45aca9c2d35f4034d2ea51adfa2b73c8ba1",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/323ff0fb6b0f065b0943e39983878c839e7dfd18",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
//     {
//         img: "https://i.scdn.co/image/dfb0beda0862f018a62cc6416c90450d963b9121",
//         title: 'Image',
//         author: 'author',
//         cols: 1,
//         rows: 1
//     },
// ]

const tileData:Array<tile> =[{"title":"Young Stunners","popularity":53,"img":"https://i.scdn.co/image/51bd90f684e3737056f2c8d96b4c6f5a8881ad05","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:01PyusFVbXgoD5Kl1mR8CC"},{"title":"Ahmer","popularity":25,"img":"https://i.scdn.co/image/01c058f9f8fdfbf3ad67d6e593dd9c72395d77e1","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:0EAfS9gQe5SCtQp1R6hJqG"},{"title":"Red Hot Chili Peppers","popularity":86,"img":"https://i.scdn.co/image/89bc3c14aa2b4f250033ffcf5f322b2a553d9331","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:0L8ExT028jH3ddEcZwqJJ5"},{"title":"Full Power","popularity":19,"img":"https://i.scdn.co/image/5619f50143e630a5fd319f501daf9e72f9806cc9","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:0WM7rHRZePUmtvnz475kWg"},{"title":"Nine Inch Nails","popularity":70,"img":"https://i.scdn.co/image/959969ce11b5b44c45e0061473cf0f19215fdf53","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:0X380XXQSNBYuleKzav5UO"},{"title":"Avenged Sevenfold","popularity":78,"img":"https://i.scdn.co/image/e8469ef3c4e45f9574dc963a69043ac3f3e58d41","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:0nmQIMXWTXfhgOBdNzhGOs"},{"title":"Sum 41","popularity":75,"img":"https://i.scdn.co/image/3ad9fb703dffe649bec3ec92abccbb280276316b","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:0qT79UgT5tY4yudH9VfsdT"},{"title":"Pantera","popularity":72,"img":"https://i.scdn.co/image/ab21b012c14655da99190faeada6d5ed95273c98","imgHeight":677,"imgWidth":1000,"uri":"spotify:artist:14pVkFUHDL207LzLHtSA18"},{"title":"Mc Kode","popularity":22,"img":"https://i.scdn.co/image/8650c0589648a40a5119111a060b83a3c5bc7036","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:1F0MxWTo0mMWfaCvXWTHh8"},{"title":"Busta Rhymes","popularity":77,"img":"https://i.scdn.co/image/13bc02915362fad8a5eee4ec32cc29a6da2dc16b","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:1YfEcTuGvBQ8xSD1f53UnK"},{"title":"2Pac","popularity":84,"img":"https://i.scdn.co/image/fdb2382075f400ca2f2fbddaebb93add82ca8f32","imgHeight":1000,"imgWidth":1000,"uri":"spotify:artist:1ZwdS5xdxEREPySFridCfh"},{"title":"Ankur Tewari","popularity":49,"img":"https://i.scdn.co/image/ab6761610000e5ebe0e96316c11017918d99f3a0","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:1ciT67XXpG2HOVsLQjKdv6"},{"title":"A.R. Rahman","popularity":77,"img":"https://i.scdn.co/image/4df9740f3f6bfcc28e9c8c57ecf4c7eda4a2e42b","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:1mYsTxnqsietFxj1OgoGbG"},{"title":"Lil Dicky","popularity":70,"img":"https://i.scdn.co/image/33c1ec97b187cedcea9bec3ea55c707fab2a29ef","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:1tqhsYv8yBBdwANFNzHtcr"},{"title":"Sex Pistols","popularity":61,"img":"https://i.scdn.co/image/1af9b54429264c7b02e6c60e06dbe8e412a2e391","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:1u7kkVrr14iBvrpYnZILJR"},{"title":"Russ","popularity":82,"img":"https://i.scdn.co/image/ab6761610000e5eb64f675f73b5ae1b42b422d61","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:1z7b1Pr1rSlvWRzsW3HOrS"},{"title":"Post Malone","popularity":94,"img":"https://i.scdn.co/image/93fec27f9aac86526b9010e882037afbda4e3d5f","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:246dkjvS1zLTtiykXe5h60"},{"title":"Nucleya","popularity":59,"img":"https://i.scdn.co/image/ff03bef762b4128d5da114bf018df3c17bd892f4","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:2CkrXQPoBz8jTQ3u0ZeLPh"},{"title":"Diljit Dosanjh","popularity":68,"img":"https://i.scdn.co/image/80321b3de551024d02dbfd91769721c588d0e887","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:2FKWNmZWDBZR4dE5KX4plR"},{"title":"Rage Against The Machine","popularity":76,"img":"https://i.scdn.co/image/ddb4a2ad4585d914d9e6993f6ddf50d33e48089e","imgHeight":673,"imgWidth":1000,"uri":"spotify:artist:2d0hyoQ5ynDBnkvAbJKORj"},{"title":"Seedhe Maut","popularity":54,"img":"https://i.scdn.co/image/ab6761610000e5eb1c37bb3c0c15f1841e0f8c46","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:2oBG74gAocPMFv6Ij9ykdo"},{"title":"Naezy","popularity":46,"img":"https://i.scdn.co/image/fa893cd35b8d92ef8ee25cd7a74a8c53384190bb","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:2oeTqp8DgAmtnP2WGc1OS2"},{"title":"Wu-Tang Clan","popularity":72,"img":"https://i.scdn.co/image/c4014e4323f08d1a32d63c69f15230ad69a8099d","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:34EP7KEpOjXcM2TCat1ISk"},{"title":"Ice Cube","popularity":78,"img":"https://i.scdn.co/image/8ed73361f9c205b88c4d092b2f628576e2c719c8","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:3Mcii5XWf6E0lrY3Uky4cA"},{"title":"Rakim","popularity":61,"img":"https://i.scdn.co/image/8d38481927c46840efeda04eaf5cd617dc78f53c","imgHeight":571,"imgWidth":706,"uri":"spotify:artist:3PyWEKLWI0vHPmoNrIX0QE"},{"title":"The Clash","popularity":75,"img":"https://i.scdn.co/image/ab470b275daa38351810a1eb91d107ebdb821302","imgHeight":676,"imgWidth":1000,"uri":"spotify:artist:3RGLhK1IP9jnYFH4BRFJBS"},{"title":"The Beatles","popularity":89,"img":"https://i.scdn.co/image/6b2a709752ef9c7aaf0d270344157f6cd2e0f1a7","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"},{"title":"Travis","popularity":65,"img":"https://i.scdn.co/image/c58721b7a4dbb34668d0a635bf7b71da63a4e59a","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:3bUwxJgNakzYKkqAVgZLlh"},{"title":"50 Cent","popularity":86,"img":"https://i.scdn.co/image/dd031b9c5d1b6eba4a691cd89c954255aae787f2","imgHeight":977,"imgWidth":781,"uri":"spotify:artist:3q7HBObVc0L8jNeTe5Gofh"},{"title":"DIVINE","popularity":70,"img":"https://i.scdn.co/image/5420512416c7fdc1a442839894b6e596f4c5b110","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:4Ai0pGz6GhQavjzaRhPTvz"},{"title":"Sidhu Moose Wala","popularity":70,"img":"https://i.scdn.co/image/ab6761610000e5eb65d54c88ab4c1abf204b360f","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:4PULA4EFzYTrxYvOVlwpiQ"},{"title":"NOFX","popularity":67,"img":"https://i.scdn.co/image/ab6772690000c46cddcf65625878991cf30658be","imgHeight":1000,"imgWidth":1000,"uri":"spotify:artist:4S2yOnmsWW97dT87yVoaSZ"},{"title":"Tyler, The Creator","popularity":86,"img":"https://i.scdn.co/image/fe839f5bd121774e64f377b5eead237c69a01711","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"},{"title":"Arijit Singh","popularity":84,"img":"https://i.scdn.co/image/2ef89fc8ae47fcfd1c4efbdb4135ad6ba9b93fb1","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:4YRxDV8wJFPHPTeXepOstw"},{"title":"Dhruv Sthetick","popularity":38,"img":"https://i.scdn.co/image/ab6761610000e5ebfe71d255931f7b8ecab32ba7","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:4g8Z4if0DrwN5H83ZGpZ44"},{"title":"Coldplay","popularity":90,"img":"https://i.scdn.co/image/ab6761610000e5eb3bcd1c4d6f324498d3de6f8d","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"},{"title":"Logic","popularity":83,"img":"https://i.scdn.co/image/efa0b73c2cdaf40b1767b4b1e1254b1cfc5b51db","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:4xRYI6VqpkE3UwrDrAZL8L"},{"title":"U2","popularity":83,"img":"https://i.scdn.co/image/e22d5c0c8139b8439440a69854ed66efae91112d","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:51Blml2LZPmy7TTiAg47vQ"},{"title":"Nusrat Fateh Ali Khan","popularity":68,"img":"https://i.scdn.co/image/8fc8c7df7b9552b93e048fbc261559c19b148b51","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:5HcunTidTUrOaf8V0iJcvl"},{"title":"Tame Impala","popularity":83,"img":"https://i.scdn.co/image/f8b1f2a47a920deb20fd3daf9031b2098b956e92","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:5INjqkS1o8h1imAzPqGZBb"},{"title":"Kanye West","popularity":93,"img":"https://i.scdn.co/image/bd1c6fdf3705cf9b7d0c8ac8e7bbed98e31a1559","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"},{"title":"Raftaar","popularity":61,"img":"https://i.scdn.co/image/3dcf2c202b1ec6b496c612c11596b98f4836ad6a","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:5UdFr0GeO7jKIaNIJgwB36"},{"title":"Shamoon Ismail","popularity":49,"img":"https://i.scdn.co/image/f55c26ec714046d3375dafc2901807533f41f366","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:5bxVbtf4t5k1QPmy0XDvgv"},{"title":"Dub Sharma","popularity":51,"img":"https://i.scdn.co/image/997579fbd75f194e5ca965c5eba48ef9fe3a01ae","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:5pJnHE4GkcnLYMvnMOmGZr"},{"title":"Dr. Dre","popularity":83,"img":"https://i.scdn.co/image/83d2489cade1dadcdc533ddbcd74993d0ca6d4cb","imgHeight":1005,"imgWidth":1000,"uri":"spotify:artist:6DPYiyq5kWVQS4RGwxzPC7"},{"title":"blink-182","popularity":82,"img":"https://i.scdn.co/image/345f0de2b6bdadd50e7b5236324e9d2d1253a7d1","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:6FBDaR13swtiWwGhX1WQsP"},{"title":"STEVIE","popularity":21,"img":"https://i.scdn.co/image/74cb9f2c44afdc657c9743a208bf5e093ae811e3","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:6GHxnMgyleS4PM4YpVZkTa"},{"title":"Tienas","popularity":24,"img":"https://i.scdn.co/image/fa843377b12d8edb97ff199ed5399fea024c2e50","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:6JvFJaw7uRQFBUzSlv28Gw"},{"title":"Switchfoot","popularity":65,"img":"https://i.scdn.co/image/ab6761610000e5eb765499f0c60700602e33b58d","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:6S58b0fr8TkWrEHOH4tRVu"},{"title":"Linkin Park","popularity":88,"img":"https://i.scdn.co/image/1685533969d5b68cbc630f991e873bd6467f1814","imgHeight":640,"imgWidth":640,"uri":"spotify:artist:6XyY86QOPPrYVGvF9ch6wz"}]

interface widthProp {
    width:Breakpoint
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: "black",
    },
    gridList: {
        width: '100%',
        height: '100%'
    },
}));

function ImageGrid(props:widthProp) {
    const classes = useStyles();
    const getGridListCols = () => {
        if (isWidthUp('xl', props.width)) {
          return 8;
        }
    
        if (isWidthUp('lg', props.width)) {
          return 6;
        }
    
        if (isWidthUp('md', props.width)) {
          return 4;
        }
    
        return 3;
    }
    
    return (

        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={getGridListCols()}>
                {tileData.map((tile) => (
                    // <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows}>
                    <GridListTile key={tile.img} cols={1} onClick={()=>{
                        console.log(tile.title);
                    }}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default withWidth()(ImageGrid);