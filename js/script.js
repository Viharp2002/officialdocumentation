        // Input tag ni id
            const searchInput = document.getElementById("searchInput");
    
            // darek boc no same class 'search'
            const namesFromdom = document.getElementsByClassName("search");


            searchInput.addEventListener("input",(e)=>{
            
                // Je value tya type thai hase e
                const {value} = e.target;
                
                // Compare karava lowercase ma fervyu
                const searchQuery = value.toLowerCase();
                
                const ifnotfound = document.getElementById("found");

                var count = 0;
                
                // darek boxt mate check karse
                for(const nameElement of namesFromdom)
                {
                    // for loop ma je particular class ek-ek karine avse eni andar na textContent(aa textcontent ma eni andar na badha sub-div avi gaya) ne lowercase ma fervse
                    let name = nameElement.textContent.toLocaleLowerCase();
                    
                    // banne value ne check karse
                    
                    if(name.includes(searchQuery) || searchQuery==="")
                    {
                        count=1;                    
                        nameElement.style.display = "flex";
                        ifnotfound.style.visibility = "hidden";    
                    }
                    else{
                        nameElement.style.display = "none";
                    }
                }

                if(count==0)
                {
                    ifnotfound.style.visibility = "visible";
                }
            })