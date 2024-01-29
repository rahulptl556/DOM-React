function createChild(title,description){
    // const container = document.getElementById('container');
    
    // Create div elements
    const todoDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descDiv = document.createElement('div');
    const button = document.createElement('button');
 
    // Set the text content
    titleDiv.textContent = title;
    descDiv.textContent = description;
    button.textContent = 'Mark as done';

    // Append the elements to the todoDiv
    todoDiv.appendChild(titleDiv);
    todoDiv.appendChild(descDiv);
    todoDiv.appendChild(button);

    return todoDiv;

    // // Append the todoDiv to the container
    
    // container.appendChild(todoDiv);

    // //Removing on Mark as done
    // button.addEventListener('click',()=>{
    //     button.innerText = 'Done!'
    // })
}

//Using state -> Backend will return you the todos and you will have to render them accordingly
//State here is always an array

const todos = [
    {
        title: 'Complete homework',
        description: 'Finish math and science assignments.'
    },
    {
        title: 'Exercise',
        description: 'Go for a 30-minute jog in the park.'
    },
    {
        title: 'Read a book',
        description: 'Read the first chapter of "The Great Gatsby".'
    }
];

function updateDomAccToState(state){
    const container = document.getElementById('container');
    container.innerHTML = "";
    for(const element of state){
        const todoDiv = createChild(element.title,element.description)
        container.appendChild(todoDiv);
    }
}

//Everytime this function is called, the live data is rendered on the screen 

updateDomAccToState(todos);

//In the real world how do we do it?
//We fetch the state from the server , lets code it
//Here after every 5 sec the network call will go and bring back the updated todos and render them accordingly

// window.setInterval(async function(){
//     const response = await fetch('Serverlink.com');
//     const json = await response.json();
//     updateDomAccToState(json);
// },5000)


//Add todo, bad approach using DOM

// function addTodo(){
//     const title = document.getElementById('title').value;
//     const desciption = document.getElementById('description').value;

//     console.log(title);
//     console.log(desciption);
//     createChild(title,desciption);
// }

