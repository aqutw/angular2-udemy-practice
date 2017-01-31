import { Ng2clitestPage } from './app.po';

describe('ng2clitest App', function() {
  let page: Ng2clitestPage;

  beforeEach(() => {
    page = new Ng2clitestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
