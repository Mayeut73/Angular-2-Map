import { WebstormAg2Page } from './app.po';

describe('webstorm-ag2 App', function() {
  let page: WebstormAg2Page;

  beforeEach(() => {
    page = new WebstormAg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
