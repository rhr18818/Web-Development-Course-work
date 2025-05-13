let input = document.querySelector('.username')
let search = document.querySelector('.search')
let card = document.querySelector('.card')


function getUserData(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw)=>{
        if(!raw.ok) throw new Error("User not Found !!..")
        return raw.json()
    })
}
function getRepo(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw)=>{
        if(!raw.ok) throw new Error("Repos not Found.!!..")
        return raw.json()
    })
}

function decorate(details){
    console.log(details);
    let data = `
                <img src="${details.avatar_url}"alt="User Avatar"class="avatar w-24 h-24 border-1 border-blue-500 rounded-full animate-pulse object-cover" />
                 <div class="flex-1 space-y-2">
                    <h2 class="text-xl font-semibold h-6  rounded animate-bounce">${details.name}</h2>
                    <p class= h-4 w-2/3 rounded ">${details.bio ? details.bio : "Sorry No bio...."}</p>
                    <div class="flex gap-4 mt-4 flex-wrap">
                        <div >
                            <span class="font-semibold text-white">Public Repos:</span> ${details.public_repos}
                        </div>
                        <div >
                            <span class="font-semibold text-white">Following:</span> ${details.following}
                        </div>
                        <div >
                             <span class="font-semibold text-white">Company:</span> ${details.company ? details.company : "N/A"}
                        </div>
                        <div>
                            <span class="font-semibold text-white">Blog:</span>
                            <a href="#" class="text-blue-400 hover:underline"
                                target="_blank">${details.blog}</a>
                        </div>
                    </div>
                    
                 </div>
    
    `
    card.innerHTML =data
    
}

search.addEventListener('click',function(){
    let useinput = input.value.trim()
    console.log(useinput);
    if(useinput.length>0){
        getUserData(useinput).then((data)=>{
            decorate(data)
        })
    }
    else{
        alert("Invalid User ID...")
    }
    
})