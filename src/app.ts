import { ActivityIndicator, ui, Button, TextView, NavigationView, Page } from 'tabris';
import { cmis } from './lib/cmis';
import RepositoriesPage from './repositoriesPage';
import FolderPage from './folderPage';

let contentNavigationView = new NavigationView({
  left: 0, top: 0, right: 0, bottom: 0,
  id: 'contentNavigationView'
}).appendTo(ui.contentView);

// squirrel bg: '#f3f4e4'
// squirrel itself (dark brown):  '#3b283e'
// squirrel shadow: '#d2cab5'
let repositoriesPage = new RepositoriesPage(contentNavigationView, {
  title: 'CMIS Squirrel',
  background: '#f3f4e4',
  id: 'repositoriesPage'
}).appendTo(contentNavigationView);
