function playSongs(songs,isShuffle,isRepeat)
{
    for(var i=songs.length-1;i>0;i--)
    {
      var j=Math.floor(Math.random()*(i+1));
      isShuffle=songs[i];
      songs[i]=songs[j];
      songs[j]=isShuffle;
      isShuffle.play();
    }
}
