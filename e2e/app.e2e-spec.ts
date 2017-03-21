import { SihfePage } from './app.po';

describe('sihfe App', () => {
  let page: SihfePage;

  beforeEach(() => {
    page = new SihfePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
