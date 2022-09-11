let songIndex=0;
let audioElement=new Audio("Music/1.mp3");
let progressBar=document.getElementById("myProgressBar");
let mainPlay=document.getElementById("masterPlay");
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("masterSongName");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songItemPlay=Array.from(document.getElementsByClassName("songItemPlay"));



let songs=[
    {songName:"random song",filePath:"Music/1.mp3",coverPath:"./Images/covers/1.jpg"},
    {songName:"anything",filePath:"Music/2.mp3",coverPath:"./Images/covers/2.jpg"},
    {songName:"you r beautiful",filePath:"Music/3.mp3",coverPath:"./Images/covers/3.jpg"},
    {songName:"NO I cant",filePath:"Music/4.mp3",coverPath:"./Images/covers/4.jpg"},
    {songName:"random you",filePath:"Music/5.mp3",coverPath:"./Images/covers/5.jpg"},
    {songName:"why are you",filePath:"Music/6.mp3",coverPath:"./Images/covers/6.jpg"},
    {songName:"Shape of rainbow",filePath:"Music/7.mp3",coverPath:"./Images/covers/7.jpg"},
    {songName:"light of fire",filePath:"Music/8.mp3",coverPath:"./Images/covers/8.jpg"},
    {songName:"u are my hero",filePath:"Music/9.mp3",coverPath:"./Images/covers/9.jpg"},
    {songName:"nouning",filePath:"Music/10.mp3",coverPath:"./Images/covers/10.jpg"},
]

songItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

mainPlay.addEventListener("click",()=>{
    let songIndexId=songIndex.toString();
    if(audioElement.paused){
        audioElement.play();
        mainPlay.classList.remove('fa-circle-play');
        mainPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        
        document.getElementById(`${songIndexId}`).classList.remove('fa-circle-play');
        document.getElementById(`${songIndexId}`).classList.add('fa-circle-pause');

    }else{
        audioElement.pause();
        mainPlay.classList.add('fa-circle-play');
        mainPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
        document.getElementById(`${songIndexId}`).classList.add('fa-circle-play');
        document.getElementById(`${songIndexId}`).classList.remove('fa-circle-pause');
    }
}) 
audioElement.addEventListener("timeupdate",()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
  
    progressBar.value=progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100;
}

)
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
       
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
    
    
}
songItemPlay.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        songIndex=parseInt(e.target.id);
        if(audioElement.paused){
            makeAllPlays();
           
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`Music/${songIndex+1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName
            audioElement.currentTime=0; 
            audioElement.play();
            gif.style.opacity=1;
             mainPlay.classList.remove('fa-circle-play');
             mainPlay.classList.add('fa-circle-pause');
        }else{
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
            mainPlay.classList.add('fa-circle-play');
            mainPlay.classList.remove('fa-circle-pause');
            gif.style.opacity=0;
            audioElement.pause();
        }
       

    })

})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=`Music/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0; 
    audioElement.play();
    gif.style.opacity=1;
     mainPlay.classList.remove('fa-circle-play');
     mainPlay.classList.add('fa-circle-pause');

})
document.getElementById("prev").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=9;
    }else{
        songIndex+=1;
    }
    audioElement.src=`Music/${songIndex-1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0; 
    audioElement.play();
    gif.style.opacity=1;
     mainPlay.classList.remove('fa-circle-play');
     mainPlay.classList.add('fa-circle-pause');

})
