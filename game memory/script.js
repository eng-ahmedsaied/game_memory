// document.querySelector(".control-buttons").onclick=function(){
//     let yourName=prompt("whats ur name");
//     if(yourName==null || yourName==""){
//         document.querySelector(".name span").innerHTML='unknown';
//     }else{
//         document.querySelector(".name span").innerHTML=yourName;

//     }
//     document.querySelector(".control-buttons").remove();
// }

let duration =1000;

let blocksContainer=document.querySelector(".memory-game-blocks");

let blocks =Array.from (blocksContainer.children);

//keys عشان اخد حجم الاراي
let orderRange=[...Array(blocks.length).keys()];

shuffle(orderRange) ;

// let orderRange =Array.from (blocks.length).keys();
blocks.forEach((block,index)=>{

    block.style.order=orderRange[index];

    block.addEventListener('click',function(){
        flipBlock(block);
    })

});

function flipBlock(selectedBlock){

    selectedBlock.classList.add('is-flipped');

    let allFlippedBlocks =blocks.filter(flippedBlock =>flippedBlock.classList.contains('is-flipped'));

    if (allFlippedBlocks.length === 2){

        stopClicking();
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}

function stopClicking(){

    blocksContainer.classList.add('no-clicking');
    
    setTimeout(()=>{

        blocksContainer.classList.remove('no-clicking');

    },duration);
}

function checkMatchedBlocks(firstBlock, secondBlock){

    let triesElement = document.querySelector('.tries span');

    if(firstBlock.dataset.technology===secondBlock.dataset.technology){

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
    
        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
    }else{

        triesElement.innerHTML=parseInt(triesElement.innerHTML)+1;
        setTimeout(()=>{

     firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');  
        },duration);
 
    }
}

function shuffle(array) {

    // Settings Vars
    let current = array.length,
        temp,
        random;
  
    while (current > 0) {
  
      // Get Random Number
      random = Math.floor(Math.random() * current);

        current--;
  
      // [1] Save Current Element in temp
      temp = array[current];
  
      // [2] Current Element = Random Element
      array[current] = array[random];
  
      // [3] Random Element = Get Element From Stash
      array[random] = temp;
  
    }
    return array;
  }
  

