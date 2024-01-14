        accesskey='rBc7qMoaZ21ZcHOe5mPGAcaoAh7jkVlA0Tl54ZTen9Q';
        let page=1;
        let searchbox=document.querySelector('.textcon');
        let contentvalue=document.querySelector('.content');
        let formseacrh=document.querySelector('.searchform');
        let smb=document.querySelector('#showmore');

        async function searchImages() {
           
            keyword=searchbox.value;
            const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

            let response=await fetch(url);
            let data=await response.json();

            if(page===1){
                contentvalue.innerHTML="";
            }//imp
            
            const results=data.results;

            results.map((result) => {
                const image = document.createElement('img');
                image.src = result.urls.small;
                const imagelink = document.createElement('a');
                imagelink.href = result.links.html;
                imagelink.target = "_blank";
                
                
                imagelink.appendChild(image);

                // Append the anchor to the content container
                contentvalue.appendChild(imagelink);
            });
        }

        formseacrh.addEventListener('submit',(e)=>{
            e.preventDefault();
            page=1;
            searchImages();
        })

        smb.addEventListener('click',()=>{
            page++;
            searchImages();

        })
