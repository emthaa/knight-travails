
function Node(pos,path){
    if(pos[0] > 7 || pos[0] < 0|| pos[1] > 7||pos[1]<0){
        // checks if node is off board
        return null;
    }
    return{pos,path};
}


function knightTravails([startX,startY],[endX,endY]){
    
    // BFS algorithim

    let queue = [Node([startX,startY],[[startX,startY]])];
    let currentNode = queue.shift();

    while(currentNode.pos[0] != endX || currentNode.pos[1] != endY){

        let moves = [
            [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
        ];

        moves.forEach((move) =>{
            let node = Node(move,currentNode.path.concat([move]))
            if(node){
                queue.push(node)
            }
        })
        currentNode = queue.shift()
    }   
    console.log(`You made it in ${currentNode.path.length} moves, here's your path: `)   
    return currentNode.path
     

}


console.log(knightTravails([0,0],[7,7]))