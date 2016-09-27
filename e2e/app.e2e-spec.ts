import { CvDigitalPage } from './app.po';

describe('cv-digital App', function() {
  let page: CvDigitalPage;

  beforeEach(() => {
    page = new CvDigitalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
