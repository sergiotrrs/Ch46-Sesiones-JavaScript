import { getHtmlPageName } from "./getHtmlPageName";

const createListItems = ( pages, currentHtml ) => {
    const userSesion = {
      isAdmin : false,
      expiration: 0
    }

    const loadUserSesion = JSON.parse( localStorage.getItem("userSesion") );
    console.log(loadUserSesion)
    if( loadUserSesion !== null ){      
        userSesion.isAdmin = loadUserSesion.isAdmin;
        userSesion.expiration = loadUserSesion.expiration;
        if ( userSesion.isAdmin ){
          userSesion.isAdmin = true;
          console.log("User is admin")
        }
    }


    pages.forEach( page => {
        const htmlName = getHtmlPageName( page.url );
        
        if( htmlName === currentHtml ){
          page.active = true
        } 

        if( userSesion.isAdmin ){
          page.visible = true;          
        }

    });    

    const listItemsArray = pages.map( (page)=> `
        <li
          class="nav-item"          
          style="display: ${page.visible? 'list-item': 'none'}"
        > 
          <a 
            class="nav-link ${page.active? 'active': '' }" 
            href="${page.url}"
            > 
            ${page.icon} ${page.name} 
            </a>            
        </li>
    `);

    return listItemsArray.join("");
}

export { createListItems }; 