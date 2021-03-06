



//Promise to get github repos
// const getRepoNames = async () =>
// {
//     const response = await fetch(`https://api.github.com/users/camscoderepo/repos`);
//     if(!response.status){
//         throw new Error('Network response was not good');
//     }
//     const data = await response.json()

//     const names = await data.map(name => {
//         return name.name;
//     }) 
//     return names;    
// } 

const getRepoNames = () => {
    const response = fetch(`https://api.github.com/users/camscoderepo/repo`);
    if(!response.status){
        throw new Error('Network response was not good');
    }
    const data = response.json()

    const names = data.map(name => {
        return name.name
    })
    const repos = document.querySelector('.repos');
    repos.innerHTML += names;
}



// //render recipe data

// const renderRepo = (repos) => {
//     const html = `
//     <li onclick="" class="">
//       <div class="imageOverlay"></div>
//     </div>
//    </li>
//     `;
//     repos.innerHTML += html
// };

// document.addEventListener()