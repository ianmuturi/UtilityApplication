import { UtilityApplicationPage } from './app.po';

describe('utility-application App', function() {
  let page: UtilityApplicationPage;

  beforeEach(() => {
    page = new UtilityApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
