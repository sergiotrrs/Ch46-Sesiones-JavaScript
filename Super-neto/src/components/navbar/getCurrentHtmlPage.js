import { getHtmlPageName } from "./getHtmlPageName";

const getCurrentHtmlPage = () =>{
    const filePath = window.location.pathname;
    const htmlPage = getHtmlPageName( filePath );
    return htmlPage;
}

export { getCurrentHtmlPage };