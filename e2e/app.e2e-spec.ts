import { AngularTubeStatusAppPage } from './app.po';

describe('angular-tube-status-app App', () => {
  let page: AngularTubeStatusAppPage;

  beforeEach(() => {
    page = new AngularTubeStatusAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
