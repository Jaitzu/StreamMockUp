import React from 'react';
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom';
import "./StreamPlayer.scss"

 class StreamPlayer extends React.Component {

   onPlayerReady = () => {
     const hlsInstance = this.player.getInternalPlayer('hls')
     // Note that we can assume we have the `Hls` global here
     // as the player should be ready at this point
     hlsInstance.on(window.Hls.Events.FRAG_LOADED, data => {
       console.log('FRAG_LOADED', data)
     })
   }
   ref = player => {
     this.player = player
   }

render() {
  return (
      <div className="singleContainer">
        <ReactPlayer
            ref={this.ref}
            onReady={this.onPlayerReady}
            playing
            controls
            url="http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2Fbarrowbrooks%2Fplaylist.m3u8"

           config={{
             file:{
               forceHLS:true,
               attributes: {
                 license: 'PLAY1-ejrM8-zjEKd-6A4J7-9JJnM-7kju6',
               }
               }
           }}

        />
        <Link to={"/"}><button>back to landing page</button></Link>
      </div>
  );
}
}
export default StreamPlayer;