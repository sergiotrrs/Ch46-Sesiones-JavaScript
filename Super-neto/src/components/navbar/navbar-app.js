import { pages } from "./pages";
import { getCurrentHtmlPage } from "./getCurrentHtmlPage";
import { createListItems } from "./createListItems";

const navbarApp = (  ) => {
  
  const currentHTML = getCurrentHtmlPage();
  const menuOptions = createListItems( pages, currentHTML );

  return `
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Super Neto</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            ${menuOptions}
          </ul>
        </div>
      </div>
    </nav>
`;
};

export { navbarApp };
