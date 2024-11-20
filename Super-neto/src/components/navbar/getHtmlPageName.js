

const getHtmlPageName = ( filePath ) => {
    return filePath.split("/").pop();
}

export { getHtmlPageName };